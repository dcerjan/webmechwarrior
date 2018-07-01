import * as React from 'react'
import { Field } from 'redux-form'

import { IFormComponentProps, IFormFieldProps } from '../common'
import * as styles from './Input.css'

const InternalStringInputComponent: React.SFC<IFormComponentProps<string>> = ({ input, meta, valueChanged, ...props }) => {

  const message = meta.warning || meta.error || null
  const level = (meta.warning && 'Warning') || (meta.error && 'Error') || null

  return (
    <div className={styles.Input}>
      { level
        ? <div className={level}>{message}</div>
        : null }
      <input
        {...props}
        {...input}
        onChange={event => {
          input.onChange(event.target.value)
          if (valueChanged && event.target.value !== input.value) {
            valueChanged(event.target.value, input.value)
          }
        }}
        onBlur={event => input.onBlur(event.target.value)}
        onFocus={event => input.onFocus(event.target.value)}
        onDragStart={event => input.onDragStart(event.currentTarget.value)}
        onDrop={event => input.onDrop(event.currentTarget.value)}
      />
    </div>
  )
}

interface IStringInputFieldProps<F> extends Pick<IFormFieldProps<string, F>, 'name' | 'validate'> {
  placeholder?: string,
  autocomplete?: boolean,
  valueChanged?: (newVal: string, oldVal: string) => void,
}

export class StringInput<F> extends React.PureComponent<IStringInputFieldProps<F>> {

  public render() {
    const { name, validate, placeholder, autocomplete, valueChanged } = this.props

    return (
      <Field
        name={name}
        component={InternalStringInputComponent as any}
        validate={validate}
        placeholder={placeholder}
        autoComplete={autocomplete ? 'on' : 'off'}
        valueChanged={valueChanged}
      />
    )
  }
}
