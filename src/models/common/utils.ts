import { ArmorType } from '../Armor'
import { EngineType, getEngineCriticalSlotAllocation, IEngineCriticalSlotAllocation } from '../Engine'
import { getGyroCriticals, GyroType } from '../Gryo'
import { InternalStructureType } from '../InternalStructure'
import { getJumpJetCriticals, JumpJetType } from '../JumpJets'
import { getHeavyWeaponCriticalSlots } from '../Tables/WeaponTable'
import { Hardpoint } from './Hardpoint'

export type SlotableEquipment =
  | EngineType
  | GyroType
  | JumpJetType
  | InternalStructureType
  | ArmorType
  | string

export type CriticalSlotAllocation =
  | IEngineCriticalSlotAllocation
  | number

export const getCriticalSlotsFor = (hardpoint: Hardpoint, equipment: SlotableEquipment): CriticalSlotAllocation => {
  switch (hardpoint) {
  case Hardpoint.Engine: return getEngineCriticalSlotAllocation(equipment as EngineType)
  case Hardpoint.Gyro: return getGyroCriticals(equipment as GyroType)
  case Hardpoint.JumpJet: return getJumpJetCriticals(equipment as JumpJetType)

  case Hardpoint.InternalStructure:
  case Hardpoint.Armor: return 1

  case Hardpoint.Energy:
  case Hardpoint.Ballistic:
  case Hardpoint.Missile: return getHeavyWeaponCriticalSlots(equipment as string)

  case Hardpoint.EnergyAmmo:
  case Hardpoint.BallisticAmmo:
  case Hardpoint.MissileAmmo: return 1

  case Hardpoint.Cockpit:
  case Hardpoint.Sensors:
  case Hardpoint.LifeSupport: return 1

  case Hardpoint.Shoulder:
  case Hardpoint.UpperArmActuator:
  case Hardpoint.LowerArmActuator:
  case Hardpoint.Hand:
  case Hardpoint.Hip:
  case Hardpoint.UpperLegActuator:
  case Hardpoint.LowerLegActuator:
  case Hardpoint.FootActuator: return 1

  default: return 1
  }
}