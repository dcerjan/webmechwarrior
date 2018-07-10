import { ArmorType } from '../../../models/Armor'
import { CockpitType } from '../../../models/Cockpit'
import { MechClass } from '../../../models/common/MechClass'
import { Arm, CenterTorso, Head, Leg, MechComponent, SideTorso } from '../../../models/common/MechComponent'
import { MechType } from '../../../models/common/MechType'
import { Tech } from '../../../models/common/Tech'
import { EngineType } from '../../../models/Engine'
import { getEngintInternalHeatsinks, IEngine } from '../../../models/Engine'
import { GyroType } from '../../../models/Gryo'
import { IGyro } from '../../../models/Gryo'
import { HeatsinkType } from '../../../models/Heatsink'
import { InternalStructureType } from '../../../models/InternalStructure'
import { JumpJetType } from '../../../models/JumpJets'
import { IBipedalLoadout, IQuadrupedalLoadout, ITripodLoadout, MechTonnage } from '../../../models/Mech'
import { MissileGuidenceType } from '../../../models/MissileGuidenceType'


export const DEFAULT_NAME = ''
export const DEFAULT_TECH = Tech.IS
export const DEAFULT_MECH_TYPE = MechType.Bipedal
export const DEFAULT_MECH_CLASS = MechClass.Medium
export const DEFAULT_JUMP_JET_TYPE = JumpJetType.Standard
export const DEFAULT_TONNAGE = 50
export const DEFAULT_HEATSINK_TYPE = HeatsinkType.Single
export const DEFAULT_MISSILE_GUIDENCE_TYPE = MissileGuidenceType.Standard

export const DEFAULT_LIGHT_TONNAGE = 20
export const DEFAULT_MEDIUM_TONNAGE = 40
export const DEFAULT_HEAVY_TONNAGE = 60
export const DEFAULT_ASSAULT_TONNAGE = 80
export const DEFAULT_SUPER_HEAVY_TONNAGE = 105

export const DEFAULT_ENGINE_RATING = 300
export const DEFAULT_ENGINE_TYPE = EngineType.Standard
export const DEFAULT_GYRO_TYPE = GyroType.Standard
export const DEFAULT_COCKPIT = CockpitType.Standard
export const DEFAULT_INTERNAL_STRUCTURE = InternalStructureType.Standard
export const DEFAULT_ARMOR = ArmorType.Standard

export const DEAFULT_BIPEDAL_LOADOUT: IBipedalLoadout = {
  [MechComponent.Head]: Head(0, { Ballistic: 0, Energy: 0, Missile: 0 }, []),
  [MechComponent.CenterTorso]: CenterTorso(0, 0, { Ballistic: 0, Energy: 0, Missile: 0 }, []),
  [MechComponent.LeftTorso]: SideTorso(MechComponent.LeftTorso, 0, 0, { Ballistic: 0, Energy: 0, Missile: 0 }, []),
  [MechComponent.RightTorso]: SideTorso(MechComponent.RightTorso, 0, 0, { Ballistic: 0, Energy: 0, Missile: 0 }, []),
  [MechComponent.LeftArm]: Arm(MechComponent.LeftArm, 0, { Ballistic: 0, Energy: 0, Missile: 0 }, []),
  [MechComponent.RightArm]: Arm(MechComponent.RightArm, 0, { Ballistic: 0, Energy: 0, Missile: 0 }, []),
  [MechComponent.LeftLeg]: Leg(MechComponent.LeftLeg, 0, { Ballistic: 0, Energy: 0, Missile: 0 }, []),
  [MechComponent.RightLeg]: Leg(MechComponent.RightLeg, 0, { Ballistic: 0, Energy: 0, Missile: 0 }, []),
}

export const DEAFULT_TRIPOD_LOADOUT: ITripodLoadout = {
  [MechComponent.Head]: Head(0, { Ballistic: 0, Energy: 0, Missile: 0 }, []),
  [MechComponent.CenterTorso]: CenterTorso(0, 0, { Ballistic: 0, Energy: 0, Missile: 0 }, []),
  [MechComponent.LeftTorso]: SideTorso(MechComponent.LeftTorso, 0, 0, { Ballistic: 0, Energy: 0, Missile: 0 }, []),
  [MechComponent.RightTorso]: SideTorso(MechComponent.RightTorso, 0, 0, { Ballistic: 0, Energy: 0, Missile: 0 }, []),
  [MechComponent.LeftArm]: Arm(MechComponent.LeftArm, 0, { Ballistic: 0, Energy: 0, Missile: 0 }, []),
  [MechComponent.RightArm]: Arm(MechComponent.RightArm, 0, { Ballistic: 0, Energy: 0, Missile: 0 }, []),
  [MechComponent.FrontLeftLeg]: Leg(MechComponent.FrontLeftLeg, 0, { Ballistic: 0, Energy: 0, Missile: 0 }, []),
  [MechComponent.FrontRightLeg]: Leg(MechComponent.FrontRightLeg, 0, { Ballistic: 0, Energy: 0, Missile: 0 }, []),
  [MechComponent.RearLeg]: Leg(MechComponent.RearLeg, 0, { Ballistic: 0, Energy: 0, Missile: 0 }, []),
}

export const DEAFULT_QUADRUPEDAL_LOADOUT: IQuadrupedalLoadout = {
  [MechComponent.Head]: Head(0, { Ballistic: 0, Energy: 0, Missile: 0 }, []),
  [MechComponent.CenterTorso]: CenterTorso(0, 0, { Ballistic: 0, Energy: 0, Missile: 0 }, []),
  [MechComponent.LeftTorso]: SideTorso(MechComponent.LeftTorso, 0, 0, { Ballistic: 0, Energy: 0, Missile: 0 }, []),
  [MechComponent.RightTorso]: SideTorso(MechComponent.RightTorso, 0, 0, { Ballistic: 0, Energy: 0, Missile: 0 }, []),
  [MechComponent.FrontLeftLeg]: Leg(MechComponent.FrontLeftLeg, 0, { Ballistic: 0, Energy: 0, Missile: 0 }, []),
  [MechComponent.FrontRightLeg]: Leg(MechComponent.FrontRightLeg, 0, { Ballistic: 0, Energy: 0, Missile: 0 }, []),
  [MechComponent.RearLeftLeg]: Leg(MechComponent.RearLeftLeg, 0, { Ballistic: 0, Energy: 0, Missile: 0 }, []),
  [MechComponent.RearRightLeg]: Leg(MechComponent.RearRightLeg, 0, { Ballistic: 0, Energy: 0, Missile: 0 }, []),
}

export interface IMechDesignerMech {
  name: string,
  tech: Tech,
  type: MechType,
  class: MechClass,
  jumpJetType: JumpJetType,
  tonnage: MechTonnage,
  heatsinkType: HeatsinkType,
  missileGuidenceType: MissileGuidenceType,
  engine: Pick<IEngine, 'rating' | 'type'>,
  internalHeatsinks: number,
  gyro: Pick<IGyro, 'type'>,
  cockpit: CockpitType,
  internalStructure: InternalStructureType,
  armor: ArmorType,
  loadout: IBipedalLoadout | ITripodLoadout | IQuadrupedalLoadout
}

export const DEFAULT_MECH: IMechDesignerMech =  {
  name: DEFAULT_NAME,
  tech: DEFAULT_TECH,
  type: DEAFULT_MECH_TYPE,
  class: DEFAULT_MECH_CLASS,
  jumpJetType: DEFAULT_JUMP_JET_TYPE,
  tonnage: DEFAULT_TONNAGE,
  heatsinkType: DEFAULT_HEATSINK_TYPE,
  missileGuidenceType: DEFAULT_MISSILE_GUIDENCE_TYPE,
  engine: {
    rating: DEFAULT_ENGINE_RATING,
    type: DEFAULT_ENGINE_TYPE,
  },
  internalHeatsinks: Math.min(getEngintInternalHeatsinks(DEFAULT_ENGINE_RATING), 10),
  gyro: {
    type: DEFAULT_GYRO_TYPE,
  },
  cockpit: DEFAULT_COCKPIT,
  internalStructure: DEFAULT_INTERNAL_STRUCTURE,
  armor: DEFAULT_ARMOR,
  loadout: DEAFULT_BIPEDAL_LOADOUT,
}
