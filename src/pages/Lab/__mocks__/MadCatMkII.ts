import { ArmorType } from '../../../models/Armor'
import { MechComponentType } from '../../../models/common/MechComponentType'
import { TechType } from '../../../models/common/TechType'
import { Engine, EngineType, getEngineHitPoints, getEngintInternalHeatsinks } from '../../../models/Engine'
import { getGyroHitPoints, Gyro, GyroType } from '../../../models/Gryo'
import { InternalStructureType } from '../../../models/InternalStructure'
import { Component, Hardpoint, Mech, Section } from '../../../models/Mech'

export const MadCatMkII = Mech({
  name: 'Mad Cat Mk II',
  tech: TechType.Clan,
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
  internalStructureType: InternalStructureType.EndoSteelClan,
  armorType: ArmorType.FerroFibrousClan,
  loadout: {
    [MechComponentType.Head]: Section({
      name: MechComponentType.Head,
      armor: 9,
      structure: 3,
      criticals: 6,
      hardpoints: [],
      components: [
        Component({ name: 'Life Support', type: Hardpoint.LifeSupport }),
        Component({ name: 'Sensors', type: Hardpoint.Sensors }),
        Component({ name: 'Cockpit', type: Hardpoint.Cockpit }),
        Component({ name: 'Ferro Fibrous', type: Hardpoint.FerroFibrous }),
        Component({ name: 'Sensors', type: Hardpoint.Sensors }),
        Component({ name: 'Life Support', type: Hardpoint.LifeSupport }),
      ],
    }),
    [MechComponentType.CenterTorso]: Section({
      name: MechComponentType.CenterTorso,
      armor: 38,
      rearArmor: 12,
      structure: 29,
      criticals: 6,
      hardpoints: [Hardpoint.Energy],
      components: [
        Component({ name: 'XL Fusion engine', type: Hardpoint.Engine }),
        Component({ name: 'Gyro', type: Hardpoint.Gyro }),
        Component({ name: 'Jump Jet (H)', type: Hardpoint.JumpJet }),
        Component({ name: 'Endo Steel', type: Hardpoint.EndoSteel }),
      ]
    }),
    [MechComponentType.LeftTorso]: Section({
      name: MechComponentType.LeftTorso,
      armor: 26,
      rearArmor: 8,
      structure: 19,
      criticals: 12,
      hardpoints: [Hardpoint.Energy, Hardpoint.Energy, Hardpoint.Missile],
      components: [
        Component({ name: 'XL Fusion engine', type: Hardpoint.Engine }),
        Component({ name: 'Jump Jet (H)', type: Hardpoint.JumpJet }),
        Component({ name: 'ER Medium Laser', type: Hardpoint.Energy }),
        Component({ name: 'ER Medium Laser', type: Hardpoint.Energy }),
        Component({ name: 'LRM 10 ', type: Hardpoint.Missile }),
        Component({ name: 'LRM Ammo', type: Hardpoint.MissileAmmo }),
        Component({ name: 'Gauss Ammo ', type: Hardpoint.BallisticAmmo }),
        Component({ name: 'Gauss Ammo ', type: Hardpoint.BallisticAmmo }),
        Component({ name: 'Endo Steel', type: Hardpoint.EndoSteel }),
        Component({ name: 'Ferro Fibrous', type: Hardpoint.FerroFibrous }),
        Component({ name: 'Ferro Fibrous', type: Hardpoint.FerroFibrous }),
      ],
    }),
    [MechComponentType.RightTorso]: Section({
      name: MechComponentType.RightTorso,
      armor: 26,
      rearArmor: 8,
      structure: 19,
      criticals: 12,
      hardpoints: [Hardpoint.Energy, Hardpoint.Energy, Hardpoint.Missile],
      components: [
        Component({ name: 'XL Fusion engine', type: Hardpoint.Engine }),
        Component({ name: 'Jump Jet (H)', type: Hardpoint.JumpJet }),
        Component({ name: 'ER Medium Laser', type: Hardpoint.Energy }),
        Component({ name: 'ER Medium Laser', type: Hardpoint.Energy }),
        Component({ name: 'LRM 10 ', type: Hardpoint.Missile }),
        Component({ name: 'LRM Ammo', type: Hardpoint.MissileAmmo }),
        Component({ name: 'Gauss Ammo ', type: Hardpoint.BallisticAmmo }),
        Component({ name: 'Gauss Ammo ', type: Hardpoint.BallisticAmmo }),
        Component({ name: 'Endo Steel', type: Hardpoint.EndoSteel }),
        Component({ name: 'Ferro Fibrous', type: Hardpoint.FerroFibrous }),
        Component({ name: 'Ferro Fibrous', type: Hardpoint.FerroFibrous }),
      ],
    }),
    [MechComponentType.LeftArm]: Section({
      name: MechComponentType.LeftArm,
      armor: 27,
      structure: 15,
      criticals: 12,
      hardpoints: [Hardpoint.Ballistic, Hardpoint.Energy],
      components: [
        Component({ name: 'Shoulder', type: Hardpoint.Shoulder }),
        Component({ name: 'Upper Arm Actuator', type: Hardpoint.UpperArmActuator }),
        Component({ name: 'Gauss Rifle', type: Hardpoint.Ballistic }),
        Component({ name: 'Ferro Fibrous', type: Hardpoint.FerroFibrous }),
      ],
    }),
    [MechComponentType.RightArm]: Section({
      name: MechComponentType.RightArm,
      armor: 27,
      structure: 15,
      criticals: 12,
      hardpoints: [Hardpoint.Ballistic, Hardpoint.Energy],
      components: [
        Component({ name: 'Shoulder', type: Hardpoint.Shoulder }),
        Component({ name: 'Upper Arm Actuator', type: Hardpoint.UpperArmActuator }),
        Component({ name: 'Gauss Rifle', type: Hardpoint.Ballistic }),
        Component({ name: 'Ferro Fibrous', type: Hardpoint.FerroFibrous }),
      ],
    }),
    [MechComponentType.LeftLeg]: Section({
      name: MechComponentType.LeftLeg,
      armor: 34,
      structure: 19,
      criticals: 6,
      hardpoints: [],
      components: [
        Component({ name: 'Hip', type: Hardpoint.Hip }),
        Component({ name: 'Upper Leg Actuator', type: Hardpoint.UpperLegActuator }),
        Component({ name: 'Lower Leg Actuator', type: Hardpoint.LowerLegActuator }),
        Component({ name: 'Foot Actuator', type: Hardpoint.FootActuator }),
        Component({ name: 'Endo Steel', type: Hardpoint.EndoSteel }),
        Component({ name: 'Endo Steel', type: Hardpoint.EndoSteel }),
      ],
    }),
    [MechComponentType.RightLeg]: Section({
      name: MechComponentType.RightLeg,
      armor: 34,
      structure: 19,
      criticals: 6,
      hardpoints: [],
      components: [
        Component({ name: 'Hip', type: Hardpoint.Hip }),
        Component({ name: 'Upper Leg Actuator', type: Hardpoint.UpperLegActuator }),
        Component({ name: 'Lower Leg Actuator', type: Hardpoint.LowerLegActuator }),
        Component({ name: 'Foot Actuator', type: Hardpoint.FootActuator }),
        Component({ name: 'Endo Steel', type: Hardpoint.EndoSteel }),
        Component({ name: 'Endo Steel', type: Hardpoint.EndoSteel }),
      ],
    })
  },
})
