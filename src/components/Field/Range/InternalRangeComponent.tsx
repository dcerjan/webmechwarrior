import * as classNames from 'classnames'
import * as React from 'react'

import { IFormComponentProps } from '../common'
import * as styles from './Range.css'

interface IInternalRangeComponentProps {
  alignment?: 'Left' | 'Center' | 'Right',
  min: number,
  max: number,
  step: number,
  formater?: (val: number) => JSX.Element | string,
}

interface IInternalRangeComponentState {
  focused: boolean,
}

export class InternalRangeComponent<T> extends React.PureComponent<IFormComponentProps<number> & IInternalRangeComponentProps, IInternalRangeComponentState> {
  public state: IInternalRangeComponentState = {
    focused: false,
  }

  public render() {
    const { input, meta, alignment, formater } = this.props
    const { focused } = this.state
    const message = meta.warning || meta.error || null
    const level = (meta.warning && 'Warning') || (meta.error && 'Error') || null

    const alignmentClass = alignment === 'Center'
      ? styles.Center
      : alignment === 'Right'
        ? styles.Right
        : styles.Left

    return (
      <div className={classNames(styles.Range, focused ? styles.Focused : null)}>
        { level
          ? <div className={level}>{ message }</div>
          : null }
        <div
          tabIndex={0}
          className={styles.Wrapper}
          onBlur={this.blur}
          onFocus={this.focus}
          onKeyDown={this.onKeyDown}
        >
          <div className={classNames(styles.Value, alignmentClass)} >
            { formater
              ? formater(input.value)
              : input.value }
          </div>
          <div className={styles.Adjusters}>
            <div
              className={classNames(styles.Icon, styles.Increment)}
              onClick={this.onIncrement}
            />
            <div
              className={classNames(styles.Icon, styles.Decrement)}
              onClick={this.onDecrement}
            />
          </div>
        </div>
      </div>
    )
  }

  private onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowUp') {
      this.onIncrement()
    } else if (event.key === 'ArrowDown') {
      this.onDecrement()
    }
  }

  private focus = () => {
    this.setState({ focused: true })
    this.props.input.onFocus(this.props.input.value)
  }

  private blur = () => {
    this.setState({ focused: false })
    this.props.input.onFocus(this.props.input.value)
  }

  private onIncrement = () => {
    const { input, max, step } = this.props

    if (input.value + step <= max) {
      input.onChange(input.value + step)
    }
  }

  private onDecrement = () => {
    const { input, min, step } = this.props

    if (input.value - step >= min) {
      input.onChange(input.value - step)
    }
  }
}
