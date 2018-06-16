
import { IComponent } from '../../../models/Mech'
import { IHoverContextState } from './reducer'

export enum LabActionType {
  START_DRAG_COMPONENT = 'LabAction::START_DRAG_COMPONENT',
  END_DRAG_COMPONENT = 'LabAction::END_DRAG_COMPONENT',
  SET_HOVER_CONTEXT = 'LabAction::SET_HOVER_CONTEXT',
  SET_ACTIVE_TAB = 'LabAction::SET_ACTIVE_TAB',
}

type StartDragComponent = (component: IComponent) => { type: LabActionType.START_DRAG_COMPONENT, component: IComponent }
export const startDragComponent: StartDragComponent = (component) => ({ type: LabActionType.START_DRAG_COMPONENT, component })

type EndDragComponent = () => { type: LabActionType.END_DRAG_COMPONENT }
export const endDragComponent: EndDragComponent = () => ({ type: LabActionType.END_DRAG_COMPONENT })

type SetHoverContext = (context: IHoverContextState) => { type: LabActionType.SET_HOVER_CONTEXT, context: IHoverContextState }
export const setHoverContext: SetHoverContext = (context) => ({ type: LabActionType.SET_HOVER_CONTEXT, context })

type SetActiveTab = (tab: string) => { type: LabActionType.SET_ACTIVE_TAB, tab: string }
export const setActiveTab: SetActiveTab = (tab) => ({ type: LabActionType.SET_ACTIVE_TAB, tab })

export type LabAction =
  | ReturnType<StartDragComponent>
  | ReturnType<EndDragComponent>
  | ReturnType<SetHoverContext>
  | ReturnType<SetActiveTab>
