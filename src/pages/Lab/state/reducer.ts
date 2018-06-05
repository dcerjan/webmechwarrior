import { lens } from 'lens.ts'
import { Reducer } from 'redux'

import { IHeavyWeaponRecord } from '../../../models/Tables/WeaponTable/HeavyWeaponRecord'

import { ArmorType } from '../../../models/Armor'
import { InternalStructureType } from '../../../models/InternalStructure'
import { IComponent } from '../../../models/Mech'
import { LabAction, LabActionType } from './actions'

export interface IComponentExplorerState {
  tab: string,
}

export enum HoverContextType {
  None = 'None',
  HeavyWeapon = 'Heavy Weapon',
  HeavyWeaponAmmo = 'Heavy Weapon Ammo',
  Component = 'Component',
  InternalStructure = 'Internal Structure',
  Armor = 'Armor',
  Engine = 'Engine',
  Gyro = 'Gyro',
}

type ValidHoverContext =
  | IHeavyWeaponRecord
  | IComponent
  | InternalStructureType
  | ArmorType
  | null
export interface IHoverContextState {
  type: HoverContextType,
  context: ValidHoverContext,
}

export interface ILabState {
  draggedComponent: IComponent | null,
  hoverContext: IHoverContextState,
  componentExplorer: IComponentExplorerState,
}
const LabStateL = lens<ILabState>()


const initial: ILabState = {
  draggedComponent: null,
  hoverContext: {
    type: HoverContextType.None,
    context: null
  },
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
