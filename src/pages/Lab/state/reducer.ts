import { lens } from 'lens.ts'
import { Reducer } from 'redux'

import { IComponent } from '../../../models/VehicleBay/Component/Component'

import { LabAction, LabActionType } from './actions'

interface ILabState {
  draggedComponent: IComponent | null
  hoverContext: IComponent | null
}
const LabStateL = lens<ILabState>()

const initial: ILabState = {
  draggedComponent: null,
  hoverContext: null,
}

export const reducer: Reducer<ILabState, LabAction> = (state = initial, action) => {
  switch (action.type) {
  case LabActionType.START_DRAG_COMPONENT:
    return LabStateL.draggedComponent.set(action.component)(state)

  case LabActionType.END_DRAG_COMPONENT:
    return LabStateL.draggedComponent.set(null)(state)

  case LabActionType.SET_HOVER_CONTEXT:
    return LabStateL.hoverContext.set(action.context)(state)

  default:
    return state
  }
}
