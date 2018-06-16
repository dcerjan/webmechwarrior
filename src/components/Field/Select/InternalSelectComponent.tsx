import * as classNames from 'classnames'
import * as React from 'react'

import { IFormComponentProps } from '../common'
import * as styles from './Select.css'

interface IInternalSelectComponentProps {
  placeholder?: string,
  options: string[],
  alignment: 'Left' | 'Center' | 'Right',
}

interface IInternalSelectComponentState {
  expanded: boolean,
}

export class InternalSelectComponent extends React.PureComponent<IFormComponentProps<string> & IInternalSelectComponentProps, IInternalSelectComponentState> {
  public state: IInternalSelectComponentState = {
    expanded: false,
  }

  private anchor: HTMLElement | null = null

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
            { input.value || placeholder || '' }
          </div>
          <div className={classNames(styles.Icon, expanded ? styles.Expanded : null)} />
          { expanded
            ? this.renderOptions()
            : null }
        </div>
      </div>
    )
  }

  private toggle = () => {
    this.setState({ expanded: !this.state.expanded })
  }

  private select = (option: string) => () => {
    this.props.input.onChange(option)
    this.setState({ expanded: false })
  }

  private renderOptions() {
    const { options } = this.props
    return (
      <div className={styles.Options}>
        { options.map((option, index) => (
          <div
            key={`${option}:${index}`}
            className={classNames(styles.Option, option === this.props.input.value ? styles.Selected : null)}
            onClick={this.select(option)}
          >
            { option }
          </div>
        ))}
      </div>
    )
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
