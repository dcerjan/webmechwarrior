import { GearName as Name } from '../GearName'
import {
  SpecialEquipment,
  SpecialEquipmentType as T,
} from './SpecialEquipment'

export const Builtins = {
  [Name.Cockpit]: SpecialEquipment(Name.Cockpit, T.Cockpit, 1.0, 1, 'Cockpit'),
  [Name.Life_Support]: SpecialEquipment(Name.Life_Support, T.Life_Support, 1.0, 2, 'Life Support'),
  [Name.Sensors]: SpecialEquipment(Name.Sensors, T.Sensors, 1.0, 2, 'Sensors'),
  [Name.Engine]: SpecialEquipment(Name.Engine, T.Engine, 0.0, 0, 'Engine'),
  [Name.Gyro]: SpecialEquipment(Name.Gyro, T.Gyro, 0.0, 0, 'Gyro'),
  [Name.Shoulder_Actuator]: SpecialEquipment(Name.Shoulder_Actuator, T.Shoulder_Actuator, 0.0, 1, 'Shoulder Actuator'),
  [Name.Upper_Arm_Actuator]: SpecialEquipment(Name.Upper_Arm_Actuator, T.Upper_Arm_Actuator, 0.0, 1, 'Upper Arm Actuator'),
  [Name.Lower_Arm_Actuator]: SpecialEquipment(Name.Lower_Arm_Actuator, T.Lower_Arm_Actuator, 0.0, 1, 'Lower Arm Actuator'),
  [Name.Hand_Actuator]: SpecialEquipment(Name.Hand_Actuator, T.Hand_Actuator, 0.0, 1, 'Hand Actuator'),
  [Name.Hip_Actuator]: SpecialEquipment(Name.Hip_Actuator, T.Hip_Actuator, 0.0, 1, 'Hip Actuator'),
  [Name.Upper_Leg_Actuator]: SpecialEquipment(Name.Upper_Leg_Actuator, T.Upper_Leg_Actuator, 0.0, 1, 'Upper Leg Actuator'),
  [Name.Lower_Leg_Actuator]: SpecialEquipment(Name.Lower_Leg_Actuator, T.Lower_Leg_Actuator, 0.0, 1, 'Lower Leg Actuator'),
  [Name.Foot_Actuator]: SpecialEquipment(Name.Foot_Actuator, T.Foot_Actuator, 0.0, 1, 'Foot Actuator'),
}
