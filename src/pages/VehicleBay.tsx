import * as React from 'react'

import { EngineType } from '../models/Tables/EngineTable';

import { Engine } from '../models/VehicleBay/Equipment/Engine'
import { Equipment } from '../models/VehicleBay/Equipment/Equipment'
import { Hardpoint } from '../models/VehicleBay/Equipment/Hardpoint'
import { Mech } from '../models/VehicleBay/Mech/Mech'
import { Section } from '../models/VehicleBay/Mech/Section'
import { Tech } from '../models/VehicleBay/Tech';

import { GyroType } from '../models/Tables/GyroTable';
import { Gyro } from '../models/VehicleBay/Equipment/Gyro';
import { MechView } from './MechView'
import './VehicleBay.css'

const madCatMk2 = Mech({
  name: 'Mad Cat Mk2',
  tech: Tech.Clan,
  tonnage: 90,
  engineHitPoints: 3,
  gyroHitPoints: 2,
  sensorsHitPoints: 2,
  lifeSupportHitPoints: 1,
  engine: Engine({
    name: 'XL Fusion Engine',
    manufacturer: 'Clan Wolf',
    rating: 360,
    type: EngineType.XL,
    criticalSlots: 6,
    sideTorsoSlots: 2,
  }),
  gyro: Gyro({
    name: 'Standard Gyro',
    manufacturer: 'Clan Wolf',
    type: GyroType.Standard,
  }),
  quirks: [],
  loadout: {
    Head: Section({
      name: 'Head',
      armor: 9,
      structure: 3,
      criticals: 6,
      traits: [],
      hardpoints: [],
      equipment: [
        Equipment({ name: 'Life Support', criticals: 1, type: Hardpoint.LifeSupport, tech: Tech.Clan }),
        Equipment({ name: 'Sensors', criticals: 1, type: Hardpoint.Sensors, tech: Tech.Clan }),
        Equipment({ name: 'Cockpit', criticals: 1, type: Hardpoint.Cockpit, tech: Tech.Clan }),
        Equipment({ name: 'Ferro Fibrous', criticals: 1, type: Hardpoint.FerroFibrous, tech: Tech.Clan }),
        Equipment({ name: 'Sensors', criticals: 1, type: Hardpoint.Sensors, tech: Tech.Clan }),
        Equipment({ name: 'Life Support', criticals: 1, type: Hardpoint.LifeSupport, tech: Tech.Clan }),
      ],
    }),
    CenterTorso: Section({
      name: 'Center Torso',
      armor: 38,
      rearArmor: 12,
      structure: 29,
      criticals: 6,
      traits: [],
      hardpoints: [Hardpoint.Energy],
      equipment: [
        Equipment({ name: 'XL Fusion engine', criticals: 6, type: Hardpoint.Engine, tech: Tech.Clan }),
        Equipment({ name: 'Gyro', criticals: 4, type: Hardpoint.Gyro, tech: Tech.Clan }),
        Equipment({ name: 'Jump Jet (H)', criticals: 1, type: Hardpoint.JumpJet, tonnage: 2.0, tech: Tech.Clan }),
        Equipment({ name: 'Endo Steel', criticals: 1, type: Hardpoint.EndoSteel, tech: Tech.Clan }),
      ]
    }),
    LeftTorso: Section({
      name: 'Left Torso',
      armor: 26,
      rearArmor: 8,
      structure: 19,
      criticals: 12,
      traits: [],
      hardpoints: [Hardpoint.Energy, Hardpoint.Energy, Hardpoint.Missile],
      equipment: [
        Equipment({ name: 'XL Fusion engine', criticals: 2, type: Hardpoint.Engine, tech: Tech.Clan }),
        Equipment({ name: 'Jump Jet (H)', criticals: 1, type: Hardpoint.JumpJet, tonnage: 2.0, tech: Tech.Clan }),
        Equipment({ name: 'ER Medium Laser', criticals: 1, type: Hardpoint.Energy, tonnage: 1.0, tech: Tech.Clan }),
        Equipment({ name: 'ER Medium Laser', criticals: 1, type: Hardpoint.Energy, tonnage: 1.0, tech: Tech.Clan }),
        Equipment({ name: 'LRM 10 ', criticals: 1, type: Hardpoint.Missile, tonnage: 4.0, tech: Tech.Clan }),
        Equipment({ name: 'LRM Ammo', criticals: 1, type: Hardpoint.MissileAmmo, tonnage: 1.0, ammoPerTonn: 120, tech: Tech.Clan }),
        Equipment({ name: 'Gauss Ammo ', criticals: 1, type: Hardpoint.BallisticAmmo, tonnage: 1.0, ammoPerTonn: 8, tech: Tech.Clan }),
        Equipment({ name: 'Gauss Ammo ', criticals: 1, type: Hardpoint.BallisticAmmo, tonnage: 1.0, ammoPerTonn: 8, tech: Tech.Clan }),
        Equipment({ name: 'Endo Steel', criticals: 1, type: Hardpoint.EndoSteel, tech: Tech.Clan }),
        Equipment({ name: 'Ferro Fibrous', criticals: 1, type: Hardpoint.FerroFibrous, tech: Tech.Clan }),
        Equipment({ name: 'Ferro Fibrous', criticals: 1, type: Hardpoint.FerroFibrous, tech: Tech.Clan }),
      ],
    }),
    RightTorso: Section({
      name: 'Right Torso',
      armor: 26,
      rearArmor: 8,
      structure: 19,
      criticals: 12,
      traits: [],
      hardpoints: [Hardpoint.Energy, Hardpoint.Energy, Hardpoint.Missile],
      equipment: [
        Equipment({ name: 'XL Fusion engine', criticals: 2, type: Hardpoint.Engine, tech: Tech.Clan }),
        Equipment({ name: 'Jump Jet (H)', criticals: 1, type: Hardpoint.JumpJet, tonnage: 2.0, tech: Tech.Clan }),
        Equipment({ name: 'ER Medium Laser', criticals: 1, type: Hardpoint.Energy, tonnage: 1.0, tech: Tech.Clan }),
        Equipment({ name: 'ER Medium Laser', criticals: 1, type: Hardpoint.Energy, tonnage: 1.0, tech: Tech.Clan }),
        Equipment({ name: 'LRM 10 ', criticals: 1, type: Hardpoint.Missile, tonnage: 4.0, tech: Tech.Clan }),
        Equipment({ name: 'LRM Ammo', criticals: 1, type: Hardpoint.MissileAmmo, tonnage: 1.0, ammoPerTonn: 120, tech: Tech.Clan }),
        Equipment({ name: 'Gauss Ammo ', criticals: 1, type: Hardpoint.BallisticAmmo, tonnage: 1.0, ammoPerTonn: 8, tech: Tech.Clan }),
        Equipment({ name: 'Gauss Ammo ', criticals: 1, type: Hardpoint.BallisticAmmo, tonnage: 1.0, ammoPerTonn: 8, tech: Tech.Clan }),
        Equipment({ name: 'Endo Steel', criticals: 1, type: Hardpoint.EndoSteel, tech: Tech.Clan }),
        Equipment({ name: 'Ferro Fibrous', criticals: 1, type: Hardpoint.FerroFibrous, tech: Tech.Clan }),
        Equipment({ name: 'Ferro Fibrous', criticals: 1, type: Hardpoint.FerroFibrous, tech: Tech.Clan }),
      ],
    }),
    LeftArm: Section({
      name: 'Left Arm',
      armor: 27,
      structure: 15,
      criticals: 12,
      traits: [],
      hardpoints: [Hardpoint.Ballistic, Hardpoint.Energy],
      equipment: [
        Equipment({ name: 'Shoulder', criticals: 1, type: Hardpoint.Shoulder, tech: Tech.Clan }),
        Equipment({ name: 'Upper Arm Actuator', criticals: 1, type: Hardpoint.UpperArmActuator, tech: Tech.Clan }),
        Equipment({ name: 'Gauss Rifle', criticals: 6, type: Hardpoint.Ballistic, tech: Tech.Clan }),
        Equipment({ name: 'Ferro Fibrous', criticals: 1, type: Hardpoint.FerroFibrous, tech: Tech.Clan }),
      ],
    }),
    RightArm: Section({
      name: 'Right Arm',
      armor: 27,
      structure: 15,
      criticals: 12,
      traits: [],
      hardpoints: [Hardpoint.Ballistic, Hardpoint.Energy],
      equipment: [
        Equipment({ name: 'Shoulder', criticals: 1, type: Hardpoint.Shoulder, tech: Tech.Clan }),
        Equipment({ name: 'Upper Arm Actuator', criticals: 1, type: Hardpoint.UpperArmActuator, tech: Tech.Clan }),
        Equipment({ name: 'Gauss Rifle', criticals: 6, type: Hardpoint.Ballistic, tech: Tech.Clan }),
        Equipment({ name: 'Ferro Fibrous', criticals: 1, type: Hardpoint.FerroFibrous, tech: Tech.Clan }),
      ],
    }),
    LeftLeg: Section({
      name: 'Left Leg',
      armor: 34,
      structure: 19,
      criticals: 6,
      traits: [],
      hardpoints: [],
      equipment: [
        Equipment({ name: 'Hip', criticals: 1, type: Hardpoint.Hip, tech: Tech.Clan }),
        Equipment({ name: 'Upper Leg Actuator', criticals: 1, type: Hardpoint.UpperLegActuator, tech: Tech.Clan }),
        Equipment({ name: 'Lower Leg Actuator', criticals: 1, type: Hardpoint.LowerLegActuator, tech: Tech.Clan }),
        Equipment({ name: 'Foot Actuator', criticals: 1, type: Hardpoint.FootActuator, tech: Tech.Clan }),
        Equipment({ name: 'Endo Steel', criticals: 1, type: Hardpoint.EndoSteel, tech: Tech.Clan }),
        Equipment({ name: 'Endo Steel', criticals: 1, type: Hardpoint.EndoSteel, tech: Tech.Clan }),
      ],
    }),
    RightLeg: Section({
      name: 'Right Leg',
      armor: 34,
      structure: 19,
      criticals: 6,
      traits: [],
      hardpoints: [],
      equipment: [
        Equipment({ name: 'Hip', criticals: 1, type: Hardpoint.Hip, tech: Tech.Clan }),
        Equipment({ name: 'Upper Leg Actuator', criticals: 1, type: Hardpoint.UpperLegActuator, tech: Tech.Clan }),
        Equipment({ name: 'Lower Leg Actuator', criticals: 1, type: Hardpoint.LowerLegActuator, tech: Tech.Clan }),
        Equipment({ name: 'Foot Actuator', criticals: 1, type: Hardpoint.FootActuator, tech: Tech.Clan }),
        Equipment({ name: 'Endo Steel', criticals: 1, type: Hardpoint.EndoSteel, tech: Tech.Clan }),
        Equipment({ name: 'Endo Steel', criticals: 1, type: Hardpoint.EndoSteel, tech: Tech.Clan }),
      ],
    })
  },
})

export const VehicleBay: React.SFC<{}> = () => {
  return (
    <div className='VehicleBay'>
      <MechView mech={madCatMk2} />
    </div>
  )
}
