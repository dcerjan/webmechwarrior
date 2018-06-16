import { IMechDesignerState } from './reducer'

export const selectMechDesignerState = (state: any): IMechDesignerState =>
  state['Lab.MechDesigner'] || null
