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
import { createStructuredSelector } from 'reselect'

import { save } from '../../state/action'

import { loadMechChassisRequest } from '../../state/action'
import { IMechDesignerMech } from '../../state/constants'
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

import { setEquipmentTableTab } from '../../state/action'
import { selectFormInitialValues, selectMechDesignerEquipmentState, selectMechDesignerState } from '../../state/selectors'

interface IMechLabPublicProps {
  id?: string,
}

interface IMechLabMapStateProps {
  state: IMechDesignerState,
  equipment: IEquipmentState,
  mech: IMechDesignerMech,
  setEquipmentTableTab: (tab: string) => void,
  change: (field: string, value: any) => void,
  select: (field: string) => any,
}

interface IMechLabMapDispatchProps {
  loadMechChassisRequest: (id: string) => void,
}

const mapState = createStructuredSelector({
  state: selectMechDesignerState,
  equipment: selectMechDesignerEquipmentState,
  initialValues: selectFormInitialValues,
})

const mapDispatch = (dispatch: Dispatch) => ({
  setEquipmentTableTab: (tab: string) => dispatch(setEquipmentTableTab(tab)),
  change: (field: string, value: any) => dispatch(change('Lab.Mech', field, value)),
  loadMechChassisRequest: (id: string) => dispatch(loadMechChassisRequest(id)),
})

const mapInternalState = (state: any) => ({
  mech: getFormValues('Lab.Mech')(state),
  select: (field: string): any => formValueSelector('Lab.Mech')(state, field),
})

export interface ICommonProps {
  mech: IMechDesignerMech,
  change: (field: string, value: any) => void,
  select: (field: string) => any,
}

class MechLab extends React.PureComponent<
  IMechLabPublicProps &
  IMechLabMapStateProps &
  IMechLabMapDispatchProps &
  InjectedFormProps<any>
> {

  public componentDidMount() {
    console.log(this.props.id)
    if (this.props.id) {
      console.log('loading')
      this.props.loadMechChassisRequest(this.props.id)
    }
  }

  public render() {
    const { mech, change, select, setEquipmentTableTab, equipment, handleSubmit } = this.props

    const submit = handleSubmit(save)

    return (
      <div>
        <form className={styles.MechLab} onSubmit={submit} >
          <div className={styles.Basic}>
            <Basic mech={mech} change={change} select={select} />
            <Engine mech={mech} change={change} select={select} />
            <Gyro mech={mech} change={change} select={select} />
            <Cockpit mech={mech} change={change} select={select} />
            <InternalStructure mech={mech} change={change} select={select} />
            <Armor mech={mech} change={change} select={select} />
            <button
              type='submit'
            >
              Save Mech Chassis
            </button>
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

const MechLabForm: React.SFC<IMechLabPublicProps> = (
  connect(mapState, mapDispatch)(
    reduxForm({ form: 'Lab.Mech', enableReinitialize: true })(
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
