import { lens } from 'lens.ts'
import { compose, Reducer } from 'redux'
import { MechTonnage } from '../../../models/Mech'
import { DashAction, DashActionType } from './actions'

export interface IMechMeta {
  id: string,
  name: string,
  tonnage: MechTonnage,
}

export interface IDashState {
  loading: boolean,
  mechs: IMechMeta[],
}
export const DashboardStateL = lens<IDashState>()

export const initial: IDashState = {
  loading: false,
  mechs: [],
}

export const reducer: Reducer<IDashState, DashAction> = (state = initial, action) => {
  switch (action.type) {

  case DashActionType.LIST_MECH_CHASSIS_REQUEST:
    return DashboardStateL.loading.set(true)(state)

  case DashActionType.LIST_MECH_CHASSIS_SUCCESS:
    return compose(
      DashboardStateL.mechs.set(action.mechs),
      DashboardStateL.loading.set(false),
    )(state)

  case DashActionType.LIST_MECH_CHASSIS_FAILURE:
    return DashboardStateL.loading.set(false)(state)

  default:
    return state
  }
}
