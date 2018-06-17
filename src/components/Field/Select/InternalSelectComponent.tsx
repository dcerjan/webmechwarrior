import * as classNames from 'classnames'
import * as React from 'react'

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
}

export class InternalSelectComponent<T> extends React.PureComponent<IFormComponentProps<T> & IInternalSelectComponentProps<T>, IInternalSelectComponentState> {
  public state: IInternalSelectComponentState = {
    expanded: false,
  }

  private anchor: HTMLElement | null = null
  private scrollbars: Scrollbars | null = null

  public componentDidMount() {
    document.addEventListener('mousedown', this.clickedOutside, false)
  }

  public componentWillUnmount() {
    document.removeEventListener('mousedown', this.clickedOutside)
  }

  public render() {
    const { expanded } = this.state
    const { input, meta, placeholder, alignment } = this.props
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
        className={styles.Select}
      >
        { level
          ? <div className={level}>{ message }</div>
          : null }
        <div
          className={styles.Wrapper}
          onClick={this.toggle}
          onBlur={() => input.onBlur(this.props.input.value)}
          onFocus={() => input.onFocus(this.props.input.value)}
          onDragStart={() => input.onDragStart(this.props.input.value)}
          onDrop={() => input.onDrop(this.props.input.value)}
        >
          <div
            className={classNames(styles.Value, alignmentClass, !input.value && styles.Placeholder)}
          >
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

  private toggle = () => {
    this.setState({ expanded: !this.state.expanded }, () => {
      if (this.state.expanded && this.scrollbars != null) {
        const selectedIndex = this.props.options.findIndex(option => option.value === this.props.input.value)
        this.scrollbars.scrollTop(selectedIndex !== -1 ? (selectedIndex * 19 - 10) : 0)
      }
    })
  }

  private select = (option: ISelectOption<T>) => () => {
    if (!option.disabled) {
      this.props.input.onChange(option.value)
    }
    this.setState({ expanded: false })
  }

  private renderOptions() {
    const { options } = this.props
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
                option.disabled ? styles.Disabled : null
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
