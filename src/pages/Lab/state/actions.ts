import { IComponent } from '../../../models/VehicleBay/Component/Component'

export enum LabActionType {
  START_DRAG_COMPONENT = 'LabAction::START_DRAG_COMPONENT',
  END_DRAG_COMPONENT = 'LabAction::END_DRAG_COMPONENT',
  SET_HOVER_CONTEXT = 'LabAction::SET_HOVER_CONTEXT',
}

export enum HoverContextType {
  Component = 'Component',
  Section = 'Section',
  Trait = 'Trait',
}

export interface IHoverContext {
  type: HoverContextType,
  context: IComponent | null,
}

type StartDragComponent = (component: IComponent) => { type: LabActionType.START_DRAG_COMPONENT, component: IComponent }
export const startDragComponent: StartDragComponent = (component) => ({ type: LabActionType.START_DRAG_COMPONENT, component })

type EndDragComponent = () => { type: LabActionType.END_DRAG_COMPONENT }
export const endDragComponent: EndDragComponent = () => ({ type: LabActionType.END_DRAG_COMPONENT })

type SetHoverContext = (context: IComponent | null) => { type: LabActionType.SET_HOVER_CONTEXT, context: IComponent | null }
export const setHoverContext: SetHoverContext = (context) => ({ type: LabActionType.SET_HOVER_CONTEXT, context })

export type LabAction =
  | ReturnType<StartDragComponent>
  | ReturnType<EndDragComponent>
  | ReturnType<SetHoverContext>
