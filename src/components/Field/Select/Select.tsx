import * as React from 'react'
import { Field } from 'redux-form'

import { IFormFieldProps } from '../common'

import { ISelectOption } from './common'
import { InternalSelectComponent } from './InternalSelectComponent'

interface IStringInputFieldProps<T, F> extends Pick<IFormFieldProps<ISelectOption<T>, F>, 'name' | 'validate'> {
  placeholder?: string,
  options: Array<ISelectOption<T>>,
  alignment?: 'Left' | 'Center' | 'Right',
  formater?: (val: string) => JSX.Element | string,
  valueChanged?: (newVal: string, oldVal: string) => void,
}

export class Select<T, F> extends React.PureComponent<IStringInputFieldProps<T, F>> {

  public render() {
    const { name, validate, placeholder, options, alignment, formater, valueChanged } = this.props

    return (
      <Field
        name={name}
        component={InternalSelectComponent as any}
        validate={validate}
        placeholder={placeholder}
        options={options}
        alignment={alignment}
        formater={formater}
        valueChanged={valueChanged}
      />
    )
  }
}
