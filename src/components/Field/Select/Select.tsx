import * as React from 'react'
import { Field } from 'redux-form'

import { IFormFieldProps } from '../common'

import { InternalSelectComponent } from './InternalSelectComponent'

interface IStringInputFieldProps<F> extends Pick<IFormFieldProps<string, F>, 'name' | 'validate'> {
  placeholder?: string,
  options: string[],
  alignment?: 'Left' | 'Center' | 'Right',
}

export class Select<F> extends React.PureComponent<IStringInputFieldProps<F>> {

  public render() {
    const { name, validate, placeholder, options, alignment } = this.props

    return (
      <Field
        name={name}
        component={InternalSelectComponent as any}
        validate={validate}
        placeholder={placeholder}
        options={options}
        alignment={alignment}
      />
    )
  }
}
