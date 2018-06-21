import { lens } from 'lens.ts'
import { Reducer } from 'redux'

import { ArmorType } from '../../../models/Armor'
import { MechType } from '../../../models/common/MechType'
import { Tech } from '../../../models/common/Tech'
import { EngineType, IEngine } from '../../../models/Engine'
import { GyroType, IGyro } from '../../../models/Gryo'
import { InternalStructureType, MechTonnage } from '../../../models/InternalStructure'
import { IBipedalLoadout, IQuadrupedalLoadout } from '../../../models/Mech'

import { replicate } from '../../../lib/functional'
import { CockpitType } from '../../../models/Cockpit'
import { Arm, CenterTorso, Component, Head, Leg, SideTorso } from '../../../models/common/Component'
import { MechEquipmentName } from '../../../models/MechEquipment/MechEquipmentName'
import { MechDesignerAction, MechDesignerActionType } from './action'

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

const DEFAULT_NAME = ''
const DEFAULT_TECH = Tech.IS
const DEAFULT_MECH_TYPE = MechType.Bipedal
const DEFAULT_TONNAGE = 50
const DEFAULT_ENGINE_RATING = 300
const DEFAULT_ENGINE_TYPE = EngineType.Standard
const DEFAULT_GYRO_TYPE = GyroType.Standard
const DEFAULT_COCKPIT = CockpitType.Standard
const DEFAULT_INTERNAL_STRUCTURE = InternalStructureType.Standard
const DEFAULT_ARMOR = ArmorType.Standard
const DEAFULT_LOADOUT: IBipedalLoadout = {
  // 3, 18, 13, 9,  13
  [Component.Head]: Head(0, { Ballistic: 0, Energy: 0, Missile: 0 }, []),
  [Component.CenterTorso]: CenterTorso(0, 0, { Ballistic: 0, Energy: 0, Missile: 0 }, []),
  [Component.LeftTorso]: SideTorso(Component.LeftTorso, 0, 0, { Ballistic: 0, Energy: 0, Missile: 0 }, replicate(MechEquipmentName.None, 12)),
  [Component.RightTorso]: SideTorso(Component.RightTorso, 0, 0, { Ballistic: 0, Energy: 0, Missile: 0 }, replicate(MechEquipmentName.None, 12)),
  [Component.LeftArm]: Arm(Component.LeftArm, 0, { Ballistic: 0, Energy: 0, Missile: 0 }, []),
  [Component.RightArm]: Arm(Component.RightArm, 0, { Ballistic: 0, Energy: 0, Missile: 0 }, []),
  [Component.LeftLeg]: Leg(Component.LeftLeg, 0, { Ballistic: 0, Energy: 0, Missile: 0 }, []),
  [Component.RightLeg]: Leg(Component.RightLeg, 0, { Ballistic: 0, Energy: 0, Missile: 0 }, []),
}


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
  loadout: DEAFULT_LOADOUT,
}

export const reducer: Reducer<IMechDesignerState, MechDesignerAction> = (state = initialState, action) => {
  switch (action.type) {
  case MechDesignerActionType.SET_CHASSIS_NAME:
    return MechDesignerStateL.name.set(action.name)(state)

  default:
    return state
  }
}
