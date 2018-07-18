import { Tech } from '../../common/Tech'
import { EquipmentName, GearClass } from '../GearName'


export enum EquipmentType {
  // Builtin
  Cockpit            = 'Cockpit',
  Sensors            = 'Sensors',
  Life_Support       = 'Life Support',
  Engine             = 'Engine',
  Gyro               = 'Gyro',
  Shoulder_Actuator  = 'Shoulder Actuator',
  Upper_Arm_Actuator = 'Upper Arm Actuator',
  Lower_Arm_Actuator = 'Upper Arm Actuator',
  Hand_Actuator      = 'Hand Actuator',
  Hip_Actuator       = 'Hip Actuator',
  Upper_Leg_Actuator = 'Upper Leg Actuator',
  Lower_Leg_Actuator = 'Upper Leg Actuator',
  Foot_Actuator      = 'Foot Actuator',

  // Equipable
  Heatsink           = 'Heatsink',
  Jump_Jet           = 'Jump Jet',
  Improved_Jump_Jet  = 'Improved Jump Jet',
  Internal_Structure = 'Internal Structure',
  Armor              = 'Armor',
  Active_Probe       = 'Active Probe',
  CASE               = 'CASE',
  MASC               = 'MASC',
  TSM                = 'TSM',
  C3_Computer        = 'C3 Computer',
  ECM                = 'ECM',
  Targeting_Computer = 'Targeting Computer',
  TAG                = 'TAG'
}

export interface IEquipment {
  name: EquipmentName,
  gearClass: GearClass.Equipment,
  type: EquipmentType,
  tech: Tech,
  tonnage: number,
  criticals: number,
  description: string,
}

export const Equipment = (
  name: EquipmentName,
  type: EquipmentType,
  tech: Tech,
  tonnage: number,
  criticals: number,
  description: string,
): IEquipment => ({
  name,
  gearClass: GearClass.Equipment,
  type,
  tech,
  tonnage,
  criticals,
  description,
})
