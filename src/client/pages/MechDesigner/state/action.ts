
export enum MechDesignerActionType {
  SET_EQUIPMENT_TABLE_TAB = 'MechDesignerAction::SET_EQUIPMENT_TABLE_TAB',
}

type SetQeuipmentTableTab = (tab: string) => { type: MechDesignerActionType.SET_EQUIPMENT_TABLE_TAB, tab: string }
export const setEquipmentTableTab: SetQeuipmentTableTab = (tab) => ({ type: MechDesignerActionType.SET_EQUIPMENT_TABLE_TAB, tab })

export type MechDesignerAction =
  | ReturnType<SetQeuipmentTableTab>
