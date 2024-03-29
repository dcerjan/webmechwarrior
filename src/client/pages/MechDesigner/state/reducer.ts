import { lens } from 'lens.ts'
import { compose, Reducer } from 'redux'

import { MechDesignerAction, MechDesignerActionType } from './action'
import { IMechDesignerMech } from './constants'

export interface IEquipmentState {
  tab: string,
}

export interface IMechDesignerState {
  equipment: IEquipmentState,
  loading: boolean,
  deleting: boolean,
  mech: IMechDesignerMech | null,
}

const MechDesignerStateL = lens<IMechDesignerState>()

const initialState: IMechDesignerState = {
  equipment: {
    tab: 'Weapons',
  },
  loading: false,
  deleting: false,
  mech: null,
}

export const reducer: Reducer<IMechDesignerState, MechDesignerAction> = (state = initialState, action) => {
  switch (action.type) {
  case MechDesignerActionType.SET_EQUIPMENT_TABLE_TAB:
    return MechDesignerStateL.equipment.tab.set(action.tab)(state)

  case MechDesignerActionType.LOAD_MECH_CHASSIS_REQUEST:
    return MechDesignerStateL.loading.set(true)(state)

  case MechDesignerActionType.LOAD_MECH_CHASSIS_SUCCESS:
    return compose(
      MechDesignerStateL.loading.set(false),
      MechDesignerStateL.mech.set(action.chassis as any),
    )(state)

  case MechDesignerActionType.LOAD_MECH_CHASSIS_FAILURE:
    return MechDesignerStateL.loading.set(false)(state)

  case MechDesignerActionType.DELETE_MECH_CHASSIS_REQUEST:
    return MechDesignerStateL.deleting.set(true)(state)

  case MechDesignerActionType.DELETE_MECH_CHASSIS_SUCCESS:
    return compose(
      MechDesignerStateL.deleting.set(false),
      MechDesignerStateL.mech.set(null),
    )(state)

  case MechDesignerActionType.DELETE_MECH_CHASSIS_FAILURE:
    return MechDesignerStateL.deleting.set(false)(state)

  case MechDesignerActionType.CLEAR_MECH_CHASIS:
    return MechDesignerStateL.mech.set(null)(state)

  default:
    return state
  }
}
