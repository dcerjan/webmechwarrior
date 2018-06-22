import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import {
  change,
  formValueSelector,
  getFormValues,
  InjectedFormProps,
  reduxForm,
} from 'redux-form'

import { IMechDesignerState } from '../../state/reducer'
import { Armor } from './components/Armor'
import { Basic } from './components/Basic'
import { Cockpit } from './components/Cockpit'
import { Engine } from './components/Engine'
import { Gyro } from './components/Gyro'
import { InternalStructure } from './components/InternalStructure'
import { Loadout } from './components/Loadout'
import * as styles from './MechLab.css'

interface ILoadoutProps {
  mech: IMechDesignerState,
}

export interface IInjectedMechLabProps {
  values: IMechDesignerState,
  change: (field: string, value: any) => void,
  select: (field: string) => any,
}

class MechLab extends React.PureComponent<ILoadoutProps & IInjectedMechLabProps & InjectedFormProps<ILoadoutProps>> {

  public render() {
    const { values, change, select } = this.props

    return (
      <div>
        <form className={styles.MechLab}>
          <div className={styles.Basic}>
            <Basic values={values} change={change} select={select} />
            <Engine values={values} change={change} select={select} />
            <Gyro values={values} change={change} select={select} />
            <Cockpit values={values} change={change} select={select} />
            <InternalStructure values={values} change={change} select={select} />
            <Armor values={values} change={change} select={select} />
          </div>
          <div>
            <Loadout values={values} change={change} select={select} />
          </div>
        </form>
      </div>
    )
  }
}

const mapState = (state: any, props: ILoadoutProps) => ({
  initialValues: props.mech,
  select: (field: string): any => formValueSelector('Lab.Loadout')(state, field),
})

const mapDispatch = (dispatch: Dispatch) => ({
  change: (field: string, value: any) => dispatch(change('Lab.Loadout', field, value)),
})

const mapInternalState = (state: any) => ({
  values: getFormValues('Lab.Loadout')(state),
})

const MechLabForm: React.SFC<ILoadoutProps> = (
  connect(mapState, mapDispatch)(
    reduxForm({ form: 'Lab.Loadout' })(
      connect(mapInternalState)
        (MechLab)
    )
  )
) as any

export {
  MechLabForm as MechLab,
}
