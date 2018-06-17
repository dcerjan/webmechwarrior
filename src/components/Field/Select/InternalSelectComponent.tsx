import * as classNames from 'classnames'
import * as React from 'react'
import { Spring, SpringSystem } from 'rebound'

import Scrollbars from 'react-custom-scrollbars'
import { IFormComponentProps } from '../common'
import { ISelectOption } from './common'
import * as styles from './Select.css'

interface IInternalSelectComponentProps<T> {
  placeholder?: string,
  options: Array<ISelectOption<T>>,
  alignment: 'Left' | 'Center' | 'Right',
}

interface IInternalSelectComponentState {
  expanded: boolean,
  keyboardFocusIndex: number,
  focused: boolean,
}

export class InternalSelectComponent<T> extends React.PureComponent<IFormComponentProps<T> & IInternalSelectComponentProps<T>, IInternalSelectComponentState> {
  public state: IInternalSelectComponentState = {
    expanded: false,
    keyboardFocusIndex: -1,
    focused: false,
  }

  private anchor: HTMLElement | null = null
  private scrollbars: Scrollbars | null = null
  private springSystem: SpringSystem = new SpringSystem()
  private spring: Spring = this.springSystem.createSpring()
  private preventToggleOnClickAfterFocus: boolean = false

  public componentDidMount() {
    document.addEventListener('mousedown', this.clickedOutside, true)

    this.spring.addListener({ onSpringUpdate: this.tickSpring })
  }

  public componentWillUnmount() {
    document.removeEventListener('mousedown', this.clickedOutside)

    this.springSystem.deregisterSpring(this.spring)
    this.springSystem.removeAllListeners()
    this.spring.destroy()
  }

  public render() {
    const { input, meta, placeholder, alignment } = this.props
    const { expanded, focused } = this.state
    const message = meta.warning || meta.error || null
    const level = (meta.warning && 'Warning') || (meta.error && 'Error') || null

    const alignmentClass = alignment === 'Center'
      ? styles.Center
      : alignment === 'Right'
        ? styles.Right
        : styles.Left

    return (
      <div
        ref={this.onRef}
        className={classNames(styles.Select, focused ? styles.Focused : null)}
      >
        { level
          ? <div className={level}>{ message }</div>
          : null }
        <div
          tabIndex={0}
          className={styles.Wrapper}
          onClick={this.onMouseDown}
          onBlur={this.blur}
          onFocus={this.focus}
          onDragStart={() => input.onDragStart(this.props.input.value)}
          onDrop={() => input.onDrop(this.props.input.value)}
          onKeyDown={this.onKeyDown}
        >
          <div className={classNames(styles.Value, alignmentClass, !input.value && styles.Placeholder)}>
            { this.getNameOfValue(input.value) || placeholder || '' }
          </div>
          <div className={classNames(styles.Icon, expanded ? styles.Expanded : null)} />
          { expanded
            ? this.renderOptions()
            : null }
        </div>
      </div>
    )
  }

  private getNameOfValue = (value: T): string | null => {
    const { options } = this.props
    const val = options.find(x => x.value === value)
    if (val != null) {
      return val.name
    } else {
      return null
    }
  }

  private getSelectedOptionIndex = () => {
    return this.props.options.findIndex(option => option.value === this.props.input.value)
  }

  private getKeyboardFocusOptionIndex = () => {
    if (this.state.keyboardFocusIndex === -1) {
      return this.getSelectedOptionIndex()
    } else {
      return this.state.keyboardFocusIndex
    }
  }

  private getKeyboardFocusOption = () => {
    return this.props.options[this.getKeyboardFocusOptionIndex()]
  }

  private scrollToSelected() {
    if (this.scrollbars != null) {
      const selectedIndex = this.getSelectedOptionIndex()
      this.scrollbars.scrollTop(selectedIndex !== -1 ? (selectedIndex * 19 - 10) : 0)
    }
  }

  private tickSpring = () => {
    if (this.scrollbars) {
      const val = this.spring.getCurrentValue()
      this.scrollbars.scrollTop(val)
    }
  }

  private scrollToIndex(index: number) {
    if (this.scrollbars != null) {
      const top = index !== -1 ? (index * 19 - 10) : 0
      const scrollTop = this.scrollbars.getScrollTop()
      this.spring.setCurrentValue(scrollTop).setAtRest()
      this.spring.setEndValue(top)
    }
  }

  private onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const index = this.getKeyboardFocusOptionIndex()
    if (event.key === 'ArrowUp') {
      this.setState({ keyboardFocusIndex: Math.max(0, index - 1) }, () => this.scrollToIndex(this.state.keyboardFocusIndex))
    } else if (event.key === 'ArrowDown') {
      this.setState({ keyboardFocusIndex: Math.min(this.props.options.length - 1, index + 1) }, () => this.scrollToIndex(this.state.keyboardFocusIndex))
    } else if (event.key === ' ') {
      this.select(this.getKeyboardFocusOption())()
    }
  }

  private focus = () => {
    // required to prevent onMouseDown toggle
    this.preventToggleOnClickAfterFocus = true
    this.setState({ expanded: true, focused: true }, () => {
      this.scrollToSelected()
      this.props.input.onFocus(this.props.input.value)
    })
  }

  private blur = () => {
    this.setState({ expanded: false, focused: false }, () => {
      const option = this.getKeyboardFocusOption()
      if (option != null) {
        this.props.input.onBlur(option.value)
      } else {
        this.props.input.onBlur(this.props.input.value)
      }
    })
  }

  private onMouseDown = () => {
    if (this.preventToggleOnClickAfterFocus) {
      this.preventToggleOnClickAfterFocus = false
    } else {
      this.setState({ expanded: !this.state.expanded }, () => {
        if (this.state.expanded) {
          this.scrollToSelected()
        }
      })
    }
  }

  private select = (option: ISelectOption<T>) => () => {
    if (option && !option.disabled) {
      this.props.input.onChange(option.value)
    }
    this.setState({ expanded: false })
  }

  private renderOptions() {
    const { options } = this.props
    const { keyboardFocusIndex } = this.state

    return (
      <div className={styles.Options}>
        <Scrollbars
          ref={this.onScrollbars}
          autoHeight
          autoHeightMin={0}
          autoHeightMax={18 * 10}
        >
          { options.map((option, index) => (
            <div
              key={`${option}:${index}`}
              className={classNames(
                styles.Option,
                option.value === this.props.input.value ? styles.Selected : null,
                option.disabled ? styles.Disabled : null,
                keyboardFocusIndex === index ? styles.KeyboardFocus : null,
              )}
              onClick={this.select(option)}
            >
              { option.name }
            </div>
          ))}
        </Scrollbars>
      </div>
    )
  }

  private onScrollbars = (scrollbars: Scrollbars | null) => {
    this.scrollbars = scrollbars
  }

  private onRef = (div: HTMLDivElement | null) => {
    this.anchor = div
  }

  private clickedOutside = (event: Event) => {
    if (event.target) {
      if (this.anchor && !this.anchor.contains(event.target as Node)) {
        this.setState({ expanded: false })
      }
    }
  }
}
