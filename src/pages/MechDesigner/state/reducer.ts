import { lens } from 'lens.ts'
import { Reducer } from 'redux'

import { ArmorType } from '../../../models/Armor'
import { MechType } from '../../../models/common/MechType'
import { Tech } from '../../../models/common/Tech'
import { getEngintInternalHeatsinks, IEngine } from '../../../models/Engine'
import { IGyro } from '../../../models/Gryo'
import { InternalStructureType } from '../../../models/InternalStructure'
import { IBipedalLoadout, IQuadrupedalLoadout, ITripodLoadout, MechTonnage } from '../../../models/Mech'

import { CockpitType } from '../../../models/Cockpit'
import { MechClass } from '../../../models/common/MechClass'
import { MechDesignerAction, MechDesignerActionType } from './action'
import {
  DEAFULT_BIPEDAL_LOADOUT,
  DEAFULT_MECH_TYPE,
  DEFAULT_ARMOR,
  DEFAULT_COCKPIT,
  DEFAULT_ENGINE_RATING,
  DEFAULT_ENGINE_TYPE,
  DEFAULT_GYRO_TYPE,
  DEFAULT_HEATSINK_TYPE,
  DEFAULT_INTERNAL_STRUCTURE,
  DEFAULT_MECH_CLASS,
  DEFAULT_NAME,
  DEFAULT_TECH,
  DEFAULT_TONNAGE,
} from './constants'

export interface IMechDesignerState {
  name: string,
  tech: Tech,
  type: MechType,
  class: MechClass,
  tonnage: MechTonnage,
  engine: Pick<IEngine, 'rating' | 'type' | 'heatsinkType' | 'internalHeatSinks'>,
  gyro: Pick<IGyro, 'type'>,
  cockpit: CockpitType,
  internalStructure: InternalStructureType,
  armor: ArmorType,
  loadout: IBipedalLoadout | ITripodLoadout | IQuadrupedalLoadout
}

const MechDesignerStateL = lens<IMechDesignerState>()


const initialState: IMechDesignerState = {
  name: DEFAULT_NAME,
  tech: DEFAULT_TECH,
  type: DEAFULT_MECH_TYPE,
  class: DEFAULT_MECH_CLASS,
  tonnage: DEFAULT_TONNAGE,
  engine: {
    rating: DEFAULT_ENGINE_RATING,
    type: DEFAULT_ENGINE_TYPE,
    heatsinkType: DEFAULT_HEATSINK_TYPE,
    internalHeatSinks: Math.min(getEngintInternalHeatsinks(DEFAULT_ENGINE_RATING), 10)
  },
  gyro: {
    type: DEFAULT_GYRO_TYPE,
  },
  cockpit: DEFAULT_COCKPIT,
  internalStructure: DEFAULT_INTERNAL_STRUCTURE,
  armor: DEFAULT_ARMOR,
  loadout: DEAFULT_BIPEDAL_LOADOUT,
}

export const reducer: Reducer<IMechDesignerState, MechDesignerAction> = (state = initialState, action) => {
  switch (action.type) {
  case MechDesignerActionType.SET_CHASSIS_NAME:
    return MechDesignerStateL.name.set(action.name)(state)

  default:
    return state
  }
}
