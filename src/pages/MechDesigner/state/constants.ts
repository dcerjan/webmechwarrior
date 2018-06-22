import { ArmorType } from '../../../models/Armor'
import { CockpitType } from '../../../models/Cockpit'
import { Arm, CenterTorso, Component, Head, Leg, SideTorso } from '../../../models/common/Component'
import { MechClass } from '../../../models/common/MechClass'
import { MechType } from '../../../models/common/MechType'
import { Tech } from '../../../models/common/Tech'
import { EngineType } from '../../../models/Engine'
import { GyroType } from '../../../models/Gryo'
import { HeatsinkType } from '../../../models/Heatsink'
import { InternalStructureType } from '../../../models/InternalStructure'
import { IBipedalLoadout, IQuadrupedalLoadout, ITripodLoadout } from '../../../models/Mech'


export const DEFAULT_NAME = ''
export const DEFAULT_TECH = Tech.IS
export const DEAFULT_MECH_TYPE = MechType.Bipedal
export const DEFAULT_MECH_CLASS = MechClass.Medium
export const DEFAULT_TONNAGE = 50

export const DEFAULT_LIGHT_TONNAGE = 20
export const DEFAULT_MEDIUM_TONNAGE = 40
export const DEFAULT_HEAVY_TONNAGE = 60
export const DEFAULT_ASSAULT_TONNAGE = 80
export const DEFAULT_SUPER_HEAVY_TONNAGE = 105

export const DEFAULT_ENGINE_RATING = 300
export const DEFAULT_ENGINE_TYPE = EngineType.Standard
export const DEFAULT_HEATSINK_TYPE = HeatsinkType.Single
export const DEFAULT_GYRO_TYPE = GyroType.Standard
export const DEFAULT_COCKPIT = CockpitType.Standard
export const DEFAULT_INTERNAL_STRUCTURE = InternalStructureType.Standard
export const DEFAULT_ARMOR = ArmorType.Standard

export const DEAFULT_BIPEDAL_LOADOUT: IBipedalLoadout = {
  [Component.Head]: Head(0, { Ballistic: 0, Energy: 0, Missile: 0 }, []),
  [Component.CenterTorso]: CenterTorso(0, 0, { Ballistic: 0, Energy: 0, Missile: 0 }, []),
  [Component.LeftTorso]: SideTorso(Component.LeftTorso, 0, 0, { Ballistic: 0, Energy: 0, Missile: 0 }, []),
  [Component.RightTorso]: SideTorso(Component.RightTorso, 0, 0, { Ballistic: 0, Energy: 0, Missile: 0 }, []),
  [Component.LeftArm]: Arm(Component.LeftArm, 0, { Ballistic: 0, Energy: 0, Missile: 0 }, []),
  [Component.RightArm]: Arm(Component.RightArm, 0, { Ballistic: 0, Energy: 0, Missile: 0 }, []),
  [Component.LeftLeg]: Leg(Component.LeftLeg, 0, { Ballistic: 0, Energy: 0, Missile: 0 }, []),
  [Component.RightLeg]: Leg(Component.RightLeg, 0, { Ballistic: 0, Energy: 0, Missile: 0 }, []),
}

export const DEAFULT_TRIPOD_LOADOUT: ITripodLoadout = {
  [Component.Head]: Head(0, { Ballistic: 0, Energy: 0, Missile: 0 }, []),
  [Component.CenterTorso]: CenterTorso(0, 0, { Ballistic: 0, Energy: 0, Missile: 0 }, []),
  [Component.LeftTorso]: SideTorso(Component.LeftTorso, 0, 0, { Ballistic: 0, Energy: 0, Missile: 0 }, []),
  [Component.RightTorso]: SideTorso(Component.RightTorso, 0, 0, { Ballistic: 0, Energy: 0, Missile: 0 }, []),
  [Component.LeftArm]: Arm(Component.LeftArm, 0, { Ballistic: 0, Energy: 0, Missile: 0 }, []),
  [Component.RightArm]: Arm(Component.RightArm, 0, { Ballistic: 0, Energy: 0, Missile: 0 }, []),
  [Component.FrontLeftLeg]: Leg(Component.FrontLeftLeg, 0, { Ballistic: 0, Energy: 0, Missile: 0 }, []),
  [Component.FrontRightLeg]: Leg(Component.FrontRightLeg, 0, { Ballistic: 0, Energy: 0, Missile: 0 }, []),
  [Component.RearLeg]: Leg(Component.RearLeg, 0, { Ballistic: 0, Energy: 0, Missile: 0 }, []),
}

export const DEAFULT_QUADRUPEDAL_LOADOUT: IQuadrupedalLoadout = {
  [Component.Head]: Head(0, { Ballistic: 0, Energy: 0, Missile: 0 }, []),
  [Component.CenterTorso]: CenterTorso(0, 0, { Ballistic: 0, Energy: 0, Missile: 0 }, []),
  [Component.LeftTorso]: SideTorso(Component.LeftTorso, 0, 0, { Ballistic: 0, Energy: 0, Missile: 0 }, []),
  [Component.RightTorso]: SideTorso(Component.RightTorso, 0, 0, { Ballistic: 0, Energy: 0, Missile: 0 }, []),
  [Component.FrontLeftLeg]: Leg(Component.FrontLeftLeg, 0, { Ballistic: 0, Energy: 0, Missile: 0 }, []),
  [Component.FrontRightLeg]: Leg(Component.FrontRightLeg, 0, { Ballistic: 0, Energy: 0, Missile: 0 }, []),
  [Component.RearLeftLeg]: Leg(Component.RearLeftLeg, 0, { Ballistic: 0, Energy: 0, Missile: 0 }, []),
  [Component.RearRightLeg]: Leg(Component.RearRightLeg, 0, { Ballistic: 0, Energy: 0, Missile: 0 }, []),
}
