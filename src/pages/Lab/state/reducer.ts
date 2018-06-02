import { lens } from 'lens.ts'
import { Reducer } from 'redux'

import { IComponent } from '../../../models/VehicleBay/Component/Component'

import { LabAction, LabActionType } from './actions'

export interface IComponentExplorerState {
  tab: string,
}

export interface ILabState {
  draggedComponent: IComponent | null,
  hoverContext: IComponent | null,
  componentExplorer: IComponentExplorerState
}
const LabStateL = lens<ILabState>()


const initial: ILabState = {
  draggedComponent: null,
  hoverContext: null,
  componentExplorer: {
    tab: 'All',
  }
}

export const reducer: Reducer<ILabState, LabAction> = (state = initial, action) => {
  switch (action.type) {
  case LabActionType.START_DRAG_COMPONENT:
    return LabStateL.draggedComponent.set(action.component)(state)

  case LabActionType.END_DRAG_COMPONENT:
    return LabStateL.draggedComponent.set(null)(state)

  case LabActionType.SET_HOVER_CONTEXT:
    return LabStateL.hoverContext.set(action.context)(state)

  case LabActionType.SET_ACTIVE_TAB:
    return LabStateL.componentExplorer.tab.set(action.tab)(state)

  default:
    return state
  }
}
