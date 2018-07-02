import { createSelector } from 'reselect'
import { IEquipmentState, IMechDesignerState } from './reducer'

import { DEFAULT_MECH, IMechDesignerMech } from './constants'

export const selectMechDesignerState = (state: any): IMechDesignerState =>
  state['Lab.MechDesigner']

export const selectMechDesignerEquipmentState = createSelector<any, IMechDesignerState, IEquipmentState>(
  [selectMechDesignerState],
  (state) => state.equipment,
)

export const selectFormInitialValues = createSelector<any, IMechDesignerState, IMechDesignerMech>(
  [selectMechDesignerState],
  (state) => state.mech || DEFAULT_MECH
)
