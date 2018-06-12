import { Armor } from '../../../models/Armor'
import { Arm, CenterTorso, Component, Head, Leg, SideTorso } from '../../../models/common/Component'
import { Hardpoint } from '../../../models/common/Hardpoint'
import { MechType } from '../../../models/common/MechType'
import { Tech } from '../../../models/common/Tech'
import { Engine, EngineType, getEngineHitPoints, getEngintInternalHeatsinks } from '../../../models/Engine'
import { getGyroHitPoints, Gyro, GyroType } from '../../../models/Gryo'
import { InternalStructure } from '../../../models/InternalStructure'
import { BipedalMech } from '../../../models/Mech'
import { MechEquipmentName } from '../../../models/MechEquipment/MechEquipmentName'

export const MadCatMkII = BipedalMech({
  name: 'Mad Cat Mk II',
  type: MechType.Bipedal,
  tech: Tech.Clan,
  tonnage: 90,
  engine: Engine({
    rating: 360,
    type: EngineType.ExtraLightClan,
    hitPoints: getEngineHitPoints(360),
    internalHeatSinks: Math.min(getEngintInternalHeatsinks(360), 10),
  }),
  gyro: Gyro({
    type: GyroType.Standard,
    hitPoints: getGyroHitPoints(GyroType.Standard),
  }),
  internalStructure: InternalStructure.EndoSteelClan,
  armor: Armor.FerroFibrousClan,
  loadout: {
    [Component.Head]: Head(9, 3,
      [], [
        MechEquipmentName.Life_Support,
        MechEquipmentName.Sensors,
        MechEquipmentName.Cockpit,
        MechEquipmentName.Armor,
        MechEquipmentName.Sensors,
        MechEquipmentName.Life_Support,
      ]
    ),
    [Component.CenterTorso]: CenterTorso(38, 12, 29,
      [ Hardpoint.Energy ],
      [
        MechEquipmentName.Engine,
        MechEquipmentName.Gyro,
        MechEquipmentName.Jump_Jet,
        MechEquipmentName.Internal_Structure,
      ]
    ),
    [Component.LeftTorso]: SideTorso(Component.LeftTorso, 26, 8, 19,
      [ Hardpoint.Energy, Hardpoint.Energy, Hardpoint.Missile ],
      [
        MechEquipmentName.Engine,
        MechEquipmentName.Jump_Jet,
        MechEquipmentName.C_ER_Medium_Laser,
        MechEquipmentName.C_ER_Medium_Laser,
        MechEquipmentName.C_LRM_10,
        MechEquipmentName.LRM_Ammo,
        MechEquipmentName.Gauss_Ammo,
        MechEquipmentName.Gauss_Ammo,
        MechEquipmentName.Internal_Structure,
        MechEquipmentName.Armor,
        MechEquipmentName.Armor,
      ],
    ),
    [Component.RightTorso]: SideTorso(Component.RightTorso, 26, 8, 19,
      [ Hardpoint.Energy, Hardpoint.Energy, Hardpoint.Missile ],
      [
        MechEquipmentName.Engine,
        MechEquipmentName.Jump_Jet,
        MechEquipmentName.C_ER_Medium_Laser,
        MechEquipmentName.C_ER_Medium_Laser,
        MechEquipmentName.C_LRM_10,
        MechEquipmentName.LRM_Ammo,
        MechEquipmentName.Gauss_Ammo,
        MechEquipmentName.Gauss_Ammo,
        MechEquipmentName.Internal_Structure,
        MechEquipmentName.Armor,
        MechEquipmentName.Armor,
      ],
    ),
    [Component.LeftArm]: Arm(Component.LeftArm, 27, 15,
      [ Hardpoint.Ballistic, Hardpoint.Energy ],
      [
        MechEquipmentName.Shoulder_Actuator,
        MechEquipmentName.Upper_Arm_Actuator,
        MechEquipmentName.C_Gauss_Rifle,
        MechEquipmentName.Armor,
      ],
    ),
    [Component.RightArm]: Arm(Component.RightArm, 27, 15,
      [ Hardpoint.Ballistic, Hardpoint.Energy ],
      [
        MechEquipmentName.Shoulder_Actuator,
        MechEquipmentName.Upper_Arm_Actuator,
        MechEquipmentName.C_Gauss_Rifle,
        MechEquipmentName.Armor,
      ],
    ),
    [Component.LeftLeg]: Leg(Component.LeftLeg, 34, 19,
      [],
      [
        MechEquipmentName.Hip_Actuator,
        MechEquipmentName.Upper_Leg_Actuator,
        MechEquipmentName.Lower_Leg_Actuator,
        MechEquipmentName.Foot_Actuator,
        MechEquipmentName.Internal_Structure,
        MechEquipmentName.Internal_Structure,
      ],
    ),
    [Component.RightLeg]: Leg(Component.RightLeg, 34, 19,
      [],
      [
        MechEquipmentName.Hip_Actuator,
        MechEquipmentName.Upper_Leg_Actuator,
        MechEquipmentName.Lower_Leg_Actuator,
        MechEquipmentName.Foot_Actuator,
        MechEquipmentName.Internal_Structure,
        MechEquipmentName.Internal_Structure,
      ],
    ),
  }
})
