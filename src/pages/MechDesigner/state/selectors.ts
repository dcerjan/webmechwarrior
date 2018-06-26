import { createSelector } from 'reselect'
import { IEquipmentState, IMechDesignerState } from './reducer'

export const selectMechDesignerState = (state: any): IMechDesignerState =>
  state['Lab.MechDesigner']

export const selectMechDesignerEquipmentState = createSelector<any, IMechDesignerState, IEquipmentState>(
  [selectMechDesignerState],
  (state) => state.equipment,
)
