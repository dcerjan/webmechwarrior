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

import { deleteMechChassisRequest, save } from '../../state/action'

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

import { Omit } from '../../../../lib/type'
import {
  clearMechChassis,
  setEquipmentTableTab,
} from '../../state/action'
import {
  selectFormInitialValues,
  selectMechDesignerEquipmentState,
  selectMechDesignerState,
} from '../../state/selectors'

interface IMechLabPublicProps {
  id?: string,
}

interface IMechLabMapStateProps {
  state: IMechDesignerState,
  equipment: IEquipmentState,
  mech: IMechDesignerMech,
}

interface IMechLabMapDispatchProps {
  setEquipmentTableTab: (tab: string) => void,
  change: (field: string, value: any) => void,
  select: (field: string) => any,
  clear: () => void,
  loadMechChassisRequest: (id: string) => void,
  deleteMechChassis: (id: string) => void,
}

const mapState = createStructuredSelector({
  state: selectMechDesignerState,
  equipment: selectMechDesignerEquipmentState,
  initialValues: selectFormInitialValues,
})

const mapDispatch = (dispatch: Dispatch): Omit<IMechLabMapDispatchProps, 'select'> => ({
  setEquipmentTableTab: (tab: string) => dispatch(setEquipmentTableTab(tab)),
  change: (field: string, value: any) => dispatch(change('Lab.Mech', field, value)),
  loadMechChassisRequest: (id: string) => dispatch(loadMechChassisRequest(id)),
  clear: () => dispatch(clearMechChassis()),
  deleteMechChassis: (id: string) => dispatch(deleteMechChassisRequest(id)),
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

type MechLabProps =
  & IMechLabPublicProps
  & IMechLabMapStateProps
  & IMechLabMapDispatchProps
  & InjectedFormProps<any>

class MechLab extends React.PureComponent<MechLabProps> {

  public componentDidMount() {
    if (this.props.id) {
      this.props.loadMechChassisRequest(this.props.id)
    }
  }

  public componentWillUnmount() {
    this.props.clear()
  }

  public componentWillReceiveProps(newProps: MechLabProps) {
    if ((newProps.id == null) && (newProps.id !== this.props.id)) {
      this.props.clear()
    }
  }

  public render() {
    const { mech, change, select, setEquipmentTableTab, equipment, handleSubmit, deleteMechChassis } = this.props

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
            { this.props.id != null
              ? (
                <button
                  type='button'
                  onClick={() => deleteMechChassis(this.props.id as string)}
                >
                  Delete Mech Chassis
                </button>
              )
              : null }
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
        <DragPreview
          mech={mech}
        />
      </div>
    )
  }
}

const MechLabForm: React.SFC<IMechLabPublicProps> = (
  connect(mapState, mapDispatch)(
    reduxForm({ form: 'Lab.Mech', enableReinitialize: true, destroyOnUnmount: true })(
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
