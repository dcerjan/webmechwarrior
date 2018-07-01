import * as React from 'react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
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
import { IEquipmentState, IMechDesignerState } from '../../state/reducer'
import { Armor } from './components/Armor'
import { Basic } from './components/Basic'
import { Cockpit } from './components/Cockpit'
import { Engine } from './components/Engine'
import { Equipment } from './components/Equipment'
import { DragPreview } from './components/Equipment/DragPreview'
import { Gyro } from './components/Gyro'
import { InternalStructure } from './components/InternalStructure'
import { Loadout } from './components/Loadout'
import * as styles from './MechLab.css'

interface ILoadoutProps {
  state: IMechDesignerState,
  equipment: IEquipmentState,
  setEquipmentTableTab: (tab: string) => void,
}

export interface IInjectedMechLabProps {
  mech: IMechDesignerMech,
  change: (field: string, value: any) => void,
  select: (field: string) => any,
}

class MechLab extends React.PureComponent<ILoadoutProps & IInjectedMechLabProps & InjectedFormProps<ILoadoutProps>> {

  public render() {
    const { mech, change, select, setEquipmentTableTab, equipment } = this.props

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
            <Equipment
              mech={mech}
              equipment={equipment}
              setEquipmentTableTab={setEquipmentTableTab}
            />
          </div>
        </form>
        <DragPreview />
      </div>
    )
  }
}

const mapState = (state: any, props: ILoadoutProps) => ({
  initialValues: DEFAULT_MECH,
  select: (field: string): any => formValueSelector('Lab.Mech')(state, field),
})

const mapDispatch = (dispatch: Dispatch) => ({
  change: (field: string, value: any) => dispatch(change('Lab.Mech', field, value)),
})

const mapInternalState = (state: any) => ({
  mech: getFormValues('Lab.Mech')(state),
})

const MechLabForm: React.SFC<ILoadoutProps> = (
  connect(mapState, mapDispatch)(
    reduxForm({ form: 'Lab.Mech' })(
      connect(mapInternalState)(
        DragDropContext(HTML5Backend)(
          MechLab
        )
      )
    )
  )
) as any

export {
  MechLabForm as MechLab,
}
