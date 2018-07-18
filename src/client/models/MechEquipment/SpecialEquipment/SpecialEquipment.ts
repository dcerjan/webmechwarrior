import { GearClass, SpecialEquipmentName } from '../GearName'


export enum SpecialEquipmentType {
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
}

export interface ISpecialEquipment {
  name: SpecialEquipmentName,
  gearClass: GearClass.SpecialEquipment,
  type: SpecialEquipmentType,
  tonnage: number,
  criticals: number,
  description: string,
}

export const SpecialEquipment = (
  name: SpecialEquipmentName,
  type: SpecialEquipmentType,
  tonnage: number,
  criticals: number,
  description: string,
): ISpecialEquipment => ({
  name,
  gearClass: GearClass.SpecialEquipment,
  type,
  tonnage,
  criticals,
  description,
})
