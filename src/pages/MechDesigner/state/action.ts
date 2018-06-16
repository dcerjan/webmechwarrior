
export enum MechDesignerActionType {
  SET_CHASSIS_NAME = 'MechDesignerAction::SET_CHASSIS_NAME',
}

type SetChassisName = (name: string) => { type: MechDesignerActionType.SET_CHASSIS_NAME, name: string }
export const setChassisName: SetChassisName = (name) => ({ type: MechDesignerActionType.SET_CHASSIS_NAME, name })

export type MechDesignerAction =
  | ReturnType<SetChassisName>
