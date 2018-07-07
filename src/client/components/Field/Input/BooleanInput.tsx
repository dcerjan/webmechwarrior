import * as React from 'react'
import { Field } from 'redux-form'

import { IFormComponentProps, IFormFieldProps } from '../common'
import * as styles from './Input.css'

const InternalBooleanInputComponent: React.SFC<IFormComponentProps<boolean>> = ({ input, meta, valueChanged, ...props }) => {

  const message = meta.warning || meta.error || null
  const level = (meta.warning && 'Warning') || (meta.error && 'Error') || null

  return (
    <div className={styles.Input}>
      { level
        ? <div className={level}>{message}</div>
        : null }
      <input
        type='checkbox'
        {...props as any}
        {...input}
        checked={input.checked != null ? input.checked : Boolean(input.value)}
        onChange={event => {
          input.onChange(event.target.checked)
          if (valueChanged && event.target.checked !== input.checked) {
            valueChanged(event.target.checked, Boolean(input.checked))
          }
        }}
        onBlur={event => input.onBlur(event.target.checked)}
        onFocus={event => input.onFocus(event.target.checked)}
        onDragStart={event => input.onDragStart(event.currentTarget.checked)}
        onDrop={event => input.onDrop(event.currentTarget.checked)}
      />
    </div>
  )
}

interface IBooleanInputFieldProps<F> extends Pick<IFormFieldProps<string, F>, 'name' | 'validate'> {
  valueChanged?: (newVal: boolean, oldVal: boolean) => void,
}

export class BooleanInput<F> extends React.PureComponent<IBooleanInputFieldProps<F>> {

  public render() {
    const { name, validate, valueChanged } = this.props

    return (
      <Field
        name={name}
        component={InternalBooleanInputComponent as any}
        validate={validate}
        valueChanged={valueChanged}
      />
    )
  }
}
