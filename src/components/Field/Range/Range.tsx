import * as React from 'react'
import { Field } from 'redux-form'

import { IFormFieldProps } from '../common'

import { InternalRangeComponent } from './InternalRangeComponent'

interface IStringInputFieldProps<T, F> extends Pick<IFormFieldProps<number, F>, 'name' | 'validate'> {
  alignment?: 'Left' | 'Center' | 'Right',
  min: number,
  max: number,
  step: number,
}

export class Range<T, F> extends React.PureComponent<IStringInputFieldProps<T, F>> {

  public render() {
    const { name, validate, alignment, min, max, step } = this.props

    return (
      <Field
        name={name}
        component={InternalRangeComponent as any}
        validate={validate}
        alignment={alignment}
        min={min}
        max={max}
        step={step}
      />
    )
  }
}
