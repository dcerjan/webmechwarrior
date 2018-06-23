import { lens } from 'lens.ts'
import { Reducer } from 'redux'

import { MechDesignerAction, MechDesignerActionType } from './action'

export interface IMechDesignerState {
  equipment: {
    tab: string,
  }
}

const MechDesignerStateL = lens<IMechDesignerState>()

const initialState: IMechDesignerState = {
  equipment: {
    tab: 'All',
  }
}

export const reducer: Reducer<IMechDesignerState, MechDesignerAction> = (state = initialState, action) => {
  switch (action.type) {
  case MechDesignerActionType.SET_EQUIPMENT_TABLE_TAB:
    return MechDesignerStateL.equipment.tab.set(action.tab)(state)

  default:
    return state
  }
}
