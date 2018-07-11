import { createFormAction } from 'redux-form-saga/lib'

import { MechChassis } from '../../../models/Mech'

export enum MechDesignerActionType {
  SET_EQUIPMENT_TABLE_TAB = 'MechDesignerAction::SET_EQUIPMENT_TABLE_TAB',

  SAVE_MECH_CHASSIS_REQUEST = 'MechDesignerAction::SAVE_MECH_CHASSIS_REQUEST',
  SAVE_MECH_CHASSIS_SUCCESS = 'MechDesignerAction::SAVE_MECH_CHASSIS_SUCCESS',
  SAVE_MECH_CHASSIS_FAILURE = 'MechDesignerAction::SAVE_MECH_CHASSIS_FAILURE',

  LOAD_MECH_CHASSIS_REQUEST = 'MechDesignerAction::LOAD_MECH_CHASSIS_REQUEST',
  LOAD_MECH_CHASSIS_SUCCESS = 'MechDesignerAction::LOAD_MECH_CHASSIS_SUCCESS',
  LOAD_MECH_CHASSIS_FAILURE = 'MechDesignerAction::LOAD_MECH_CHASSIS_FAILURE',

  DELETE_MECH_CHASSIS_REQUEST = 'MechDesignerAction::DELETE_MECH_CHASSIS_REQUEST',
  DELETE_MECH_CHASSIS_SUCCESS = 'MechDesignerAction::DELETE_MECH_CHASSIS_SUCCESS',
  DELETE_MECH_CHASSIS_FAILURE = 'MechDesignerAction::DELETE_MECH_CHASSIS_FAILURE',

  CLEAR_MECH_CHASIS = 'MechDesignerAction::CLEAR_MECH_CHASIS',
}

// Set tab
type SetEquipmentTableTab = (tab: string) => { type: MechDesignerActionType.SET_EQUIPMENT_TABLE_TAB, tab: string }
export const setEquipmentTableTab: SetEquipmentTableTab = (tab) =>
  ({ type: MechDesignerActionType.SET_EQUIPMENT_TABLE_TAB, tab })

// Save
type SaveMechChassisRequest = (chassis: MechChassis) => { type: MechDesignerActionType.SAVE_MECH_CHASSIS_REQUEST, chassis: MechChassis }
export const saveMechChassisRequest: SaveMechChassisRequest = (chassis) =>
  ({ type: MechDesignerActionType.SAVE_MECH_CHASSIS_REQUEST, chassis })

type SaveMechChassisSuccess = (chassis: MechChassis) => { type: MechDesignerActionType.SAVE_MECH_CHASSIS_SUCCESS, chassis: MechChassis }
export const saveMechChassisSuccess: SaveMechChassisSuccess = (chassis) =>
  ({ type: MechDesignerActionType.SAVE_MECH_CHASSIS_SUCCESS, chassis })

type SaveMechChassisFailure = (error: string) => { type: MechDesignerActionType.SAVE_MECH_CHASSIS_FAILURE, error: string }
export const saveMechChassisFailure: SaveMechChassisFailure = (error) =>
  ({ type: MechDesignerActionType.SAVE_MECH_CHASSIS_FAILURE, error })

//  Load
type LoadMechChassisRequest = (id: string) => { type: MechDesignerActionType.LOAD_MECH_CHASSIS_REQUEST, id: string }
export const loadMechChassisRequest: LoadMechChassisRequest = (id) =>
  ({ type: MechDesignerActionType.LOAD_MECH_CHASSIS_REQUEST, id })

type LoadMechChassisSuccess = (chassis: MechChassis) => { type: MechDesignerActionType.LOAD_MECH_CHASSIS_SUCCESS, chassis: MechChassis }
export const loadMechChassisSuccess: LoadMechChassisSuccess = (chassis) =>
  ({ type: MechDesignerActionType.LOAD_MECH_CHASSIS_SUCCESS, chassis })

type LoadMechChassisFailure = (error: string) => { type: MechDesignerActionType.LOAD_MECH_CHASSIS_FAILURE, error: string }
export const loadMechChassisFailure: LoadMechChassisFailure = (error) =>
  ({ type: MechDesignerActionType.LOAD_MECH_CHASSIS_FAILURE, error })

// Delete
type DeleteMechChassisRequest = (id: string) => { type: MechDesignerActionType.DELETE_MECH_CHASSIS_REQUEST, id: string }
export const deleteMechChassisRequest: DeleteMechChassisRequest = (id) =>
  ({ type: MechDesignerActionType.DELETE_MECH_CHASSIS_REQUEST, id })

type DeleteMechChassisSuccess = () => { type: MechDesignerActionType.DELETE_MECH_CHASSIS_SUCCESS }
export const deleteMechChassisSuccess: DeleteMechChassisSuccess = () =>
  ({ type: MechDesignerActionType.DELETE_MECH_CHASSIS_SUCCESS })

type DeleteMechChassisFailure = (error: string) => { type: MechDesignerActionType.DELETE_MECH_CHASSIS_FAILURE, error: string }
export const deleteMechChassisFailure: DeleteMechChassisFailure = (error) =>
  ({ type: MechDesignerActionType.DELETE_MECH_CHASSIS_FAILURE, error })

// Clear local chassis state
type ClearMechChassis = () => { type: MechDesignerActionType.CLEAR_MECH_CHASIS }
export const clearMechChassis: ClearMechChassis = () =>
  ({ type: MechDesignerActionType.CLEAR_MECH_CHASIS })

export type MechDesignerAction =
  | ReturnType<SetEquipmentTableTab>
  | ReturnType<SaveMechChassisRequest>
  | ReturnType<SaveMechChassisSuccess>
  | ReturnType<SaveMechChassisFailure>
  | ReturnType<LoadMechChassisRequest>
  | ReturnType<LoadMechChassisSuccess>
  | ReturnType<LoadMechChassisFailure>
  | ReturnType<DeleteMechChassisRequest>
  | ReturnType<DeleteMechChassisSuccess>
  | ReturnType<DeleteMechChassisFailure>
  | ReturnType<ClearMechChassis>

export const save = createFormAction('MechDesignerAction::SAVE_MECH_CHASSIA')
