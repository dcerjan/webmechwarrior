import { lens } from 'lens.ts'
import { Reducer } from 'redux'

import { ArmorType } from '../../../models/Armor'
import { MechType } from '../../../models/common/MechType'
import { Tech } from '../../../models/common/Tech'
import { IEngine } from '../../../models/Engine'
import { IGyro } from '../../../models/Gryo'
import { InternalStructureType, MechTonnage } from '../../../models/InternalStructure'
import { IBipedalLoadout, IQuadrupedalLoadout } from '../../../models/Mech'

import { CockpitType } from '../../../models/Cockpit'
import { MechDesignerAction, MechDesignerActionType } from './action'
import { DEAFULT_BIPEDAL_LOADOUT, DEAFULT_MECH_TYPE, DEFAULT_ARMOR, DEFAULT_COCKPIT, DEFAULT_ENGINE_RATING, DEFAULT_ENGINE_TYPE, DEFAULT_GYRO_TYPE, DEFAULT_INTERNAL_STRUCTURE, DEFAULT_NAME, DEFAULT_TECH, DEFAULT_TONNAGE } from './constants'

export interface IMechDesignerState {
  name: string,
  tech: Tech,
  type: MechType,
  tonnage: MechTonnage,
  engine: Pick<IEngine, 'rating' | 'type'>,
  gyro: Pick<IGyro, 'type'>,
  cockpit: CockpitType,
  internalStructure: InternalStructureType,
  armor: ArmorType,
  loadout: IBipedalLoadout | IQuadrupedalLoadout
}

const MechDesignerStateL = lens<IMechDesignerState>()


const initialState: IMechDesignerState = {
  name: DEFAULT_NAME,
  tech: DEFAULT_TECH,
  type: DEAFULT_MECH_TYPE,
  tonnage: DEFAULT_TONNAGE,
  engine: {
    rating: DEFAULT_ENGINE_RATING,
    type: DEFAULT_ENGINE_TYPE,
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
