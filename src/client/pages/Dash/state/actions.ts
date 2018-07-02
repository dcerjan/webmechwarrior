import { IMechMeta } from './reducer'

export enum DashActionType {
  LIST_MECH_CHASSIS_REQUEST = 'DashAction::LIST_MECH_CHASSIS_REQUEST',
  LIST_MECH_CHASSIS_SUCCESS = 'DashAction::LIST_MECH_CHASSIS_SUCCESS',
  LIST_MECH_CHASSIS_FAILURE = 'DashAction::LIST_MECH_CHASSIS_FAILURE',
}

type ListMechChassisRequest = (id?: string) => { type: DashActionType.LIST_MECH_CHASSIS_REQUEST, id?: string }
export const listMechChassisRequest: ListMechChassisRequest = (id) =>
  ({ type: DashActionType.LIST_MECH_CHASSIS_REQUEST, id })

type ListMechChassisSuccess = (mechs: IMechMeta[]) => { type: DashActionType.LIST_MECH_CHASSIS_SUCCESS, mechs: IMechMeta[] }
export const listMechChassisSuccess: ListMechChassisSuccess = (mechs) =>
  ({ type: DashActionType.LIST_MECH_CHASSIS_SUCCESS, mechs })

type ListMechChassisFailure = (error: string) => { type: DashActionType.LIST_MECH_CHASSIS_FAILURE, error: string }
export const listMechChassisFailure: ListMechChassisFailure = (error) =>
  ({ type: DashActionType.LIST_MECH_CHASSIS_FAILURE, error })

export type DashAction =
  | ReturnType<ListMechChassisRequest>
  | ReturnType<ListMechChassisSuccess>
  | ReturnType<ListMechChassisFailure>

