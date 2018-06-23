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

import { DEFAULT_MECH, IMechDesignerMech } from '../../state/constants'
import { IMechDesignerState } from '../../state/reducer'
import { Armor } from './components/Armor'
import { Basic } from './components/Basic'
import { Cockpit } from './components/Cockpit'
import { Engine } from './components/Engine'
import { Equipment } from './components/Equipment'
import { Gyro } from './components/Gyro'
import { InternalStructure } from './components/InternalStructure'
import { Loadout } from './components/Loadout'
import * as styles from './MechLab.css'

interface ILoadoutProps {
  state: IMechDesignerState,
}

export interface IInjectedMechLabProps {
  mech: IMechDesignerMech,
  change: (field: string, value: any) => void,
  select: (field: string) => any,
}

class MechLab extends React.PureComponent<ILoadoutProps & IInjectedMechLabProps & InjectedFormProps<ILoadoutProps>> {

  public render() {
    const { mech, change, select } = this.props

    return (
      <div>
        <form className={styles.MechLab}>
          <div className={styles.Basic}>
            <Basic mech={mech} change={change} select={select} />
            <Engine mech={mech} change={change} select={select} />
            <Gyro mech={mech} change={change} select={select} />
            <Cockpit mech={mech} change={change} select={select} />
            <InternalStructure mech={mech} change={change} select={select} />
            <Armor mech={mech} change={change} select={select} />
          </div>
          <div>
            <Loadout mech={mech} change={change} select={select} />
          </div>
          <div>
            <Equipment mech={mech} />
          </div>
        </form>
      </div>
    )
  }
}

const mapState = (state: any, props: ILoadoutProps) => ({
  initialValues: DEFAULT_MECH,
  select: (field: string): any => formValueSelector('Lab.Loadout')(state, field),
})

const mapDispatch = (dispatch: Dispatch) => ({
  change: (field: string, value: any) => dispatch(change('Lab.Loadout', field, value)),
})

const mapInternalState = (state: any) => ({
  mech: getFormValues('Lab.Loadout')(state),
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
