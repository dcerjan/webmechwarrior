import { lens } from 'lens.ts'

import { Availability as Availability } from '../common/Availability'
import { Tech as Tech } from '../common/Tech'
import { AmmoType, MechEquipmentName as Name } from './MechEquipmentName'
import { MechEquipmentTag } from './MechEquipmentTag'
import { MechEquipmentType as Type } from './MechEquipmentType'

export interface IMechEquipmentRecord {
  name: Name,
  type: Type,
  tech: Tech,
  heat: number,
  damage: Damage,
  salvoSize: number,
  range: Range,
  compatibleAmmo: AmmoType[],
  ammoPerTonn: number,
  tonnage: number,
  criticals: number,
  techAvailability: Availability,
  tags: MechEquipmentTag[],
}

type Range = number[]
type Damage = number []

export const MechEquipmentRecord = (
  name: Name,
  type: Type,
  tech: Tech,
  heat: number,
  damage: Damage,
  salvoSize: number,
  range: Range,
  compatibleAmmo: AmmoType[],
  ammoPerTonn: number,
  tonnage: number,
  criticals: number,
  techAvailability: Availability,
  tags: MechEquipmentTag[],
): Readonly<IMechEquipmentRecord> => ({
  name,
  type,
  tech,
  heat,
  damage,
  salvoSize,
  range,
  compatibleAmmo,
  ammoPerTonn,
  tonnage,
  criticals,
  techAvailability,
  tags,
})

export const MechEquipmentL = lens<IMechEquipmentRecord>()

export const VehicleFlamerAmmo = [ Name.Vehicle_Flamer_Ammo ] as AmmoType[]
export const PlasmaRifleAmmo = [ Name.Plasma_Rifle_Ammo ] as AmmoType[]
export const AutocannonAmmo = [
  Name.Autocannon_Ammo,
  Name.Autocannon_Armor_Piercing_Ammo,
  Name.Autocannon_Flechette_Ammo,
  Name.Autocannon_Precision_Ammo,
] as AmmoType[]
export const LBXACAmmo = [
  Name.LB_X_Autocannon_Ammo,
  Name.LB_X_Autocannon_Cluster_Ammo,
] as AmmoType[]
export const LightACAmmo = [
  Name.Light_Autocannon_Ammo,
  Name.Light_Autocannon_Armor_Piercing_Ammo,
  Name.Light_Autocannon_Flechette_Ammo,
  Name.Light_Autocannon_Precision_Ammo,
] as AmmoType[]
export const RotaryACAmmo = [ Name.Rotary_Autocannon_Ammo ] as AmmoType[]
export const UltraACAmmo = [ Name.Ultra_Autocannon_Ammo ] as AmmoType[]
export const LightGaussAmmo = [ Name.Light_Gauss_Ammo ] as AmmoType[]
export const GaussAmmo = [ Name.Gauss_Ammo ] as AmmoType[]
export const HeavyGaussAmmo = [ Name.Heavy_Gauss_Ammo ] as AmmoType[]
export const LightMachingeunAmmo = [ Name.Light_Machine_Gun_Ammo ] as AmmoType[]
export const MachingeunAmmo = [ Name.Machine_Gun_Ammo ] as AmmoType[]
export const HeavyMachingeunAmmo = [ Name.Heavy_Machine_Gun_Ammo ] as AmmoType[]
export const LRMAmmo = [ Name.LRM_Ammo ] as AmmoType[]
export const MMLAmmo = [ Name.LRM_Ammo, Name.SRM_Ammo ] as AmmoType[]
export const SRMAmmo = [ Name.SRM_Ammo ] as AmmoType[]
export const StreakSRMAmmo = [ Name.Streak_SRM_Ammo ] as AmmoType[]
export const MRMAmmo = [ Name.MRM_Ammo ] as AmmoType[]

export const MechEquipmentTable = {
// Inner Sphere Lasers
  [Name.Small_Laser]:         MechEquipmentRecord(Name.Small_Laser,         Type.Laser,           Tech.IS,  1, [         3],  1, [ 0,  1,  2,  3],                   [],   0,  0.5,  1, Availability.C, []),
  [Name.Medium_Laser]:        MechEquipmentRecord(Name.Medium_Laser,        Type.Laser,           Tech.IS,  3, [         5],  1, [ 0,  3,  6,  9],                   [],   0,  1.0,  1, Availability.C, []),
  [Name.Large_Laser]:         MechEquipmentRecord(Name.Large_Laser,         Type.Laser,           Tech.IS,  8, [         8],  1, [ 0,  5, 10, 15],                   [],   0,  5.0,  2, Availability.C, []),
  [Name.Small_Pulse_Laser]:   MechEquipmentRecord(Name.Small_Pulse_Laser,   Type.Laser,           Tech.IS,  2, [         3],  1, [ 0,  1,  2,  3],                   [],   0,  1.0,  1, Availability.E, []),
  [Name.Medium_Pulse_Laser]:  MechEquipmentRecord(Name.Medium_Pulse_Laser,  Type.Laser,           Tech.IS,  4, [         6],  1, [ 0,  2,  4,  6],                   [],   0,  2.0,  1, Availability.E, []),
  [Name.Large_Pulse_Laser]:   MechEquipmentRecord(Name.Large_Pulse_Laser,   Type.Laser,           Tech.IS, 10, [         9],  1, [ 0,  3,  7, 10],                   [],   0,  7.0,  2, Availability.E, []),
  [Name.ER_Small_Laser]:      MechEquipmentRecord(Name.ER_Small_Laser,      Type.Laser,           Tech.IS,  2, [         3],  1, [ 0,  2,  4,  5],                   [],   0,  0.5,  1, Availability.E, []),
  [Name.ER_Medium_Laser]:     MechEquipmentRecord(Name.ER_Medium_Laser,     Type.Laser,           Tech.IS,  5, [         5],  1, [ 0,  4,  8, 12],                   [],   0,  1.0,  1, Availability.E, []),
  [Name.ER_Large_Laser]:      MechEquipmentRecord(Name.ER_Large_Laser,      Type.Laser,           Tech.IS, 12, [         8],  1, [ 0,  7, 14, 19],                   [],   0,  5.0,  2, Availability.E, []),

// Inner Sphere Flamers
  [Name.Flamer]:              MechEquipmentRecord(Name.Flamer,              Type.Flamer,          Tech.IS,  3, [         3],  1, [ 0,  1,  2,  3],                   [],   0,  1.0,  1, Availability.C, []),
  [Name.Vehicle_Flamer]:      MechEquipmentRecord(Name.Vehicle_Flamer,      Type.Flamer,          Tech.IS,  3, [         3],  1, [ 0,  1,  2,  3],    VehicleFlamerAmmo,  20,  0.5,  1, Availability.B, []),

// Inner Sphere Plasma Weapons
  [Name.Plasma_Rifle]:        MechEquipmentRecord(Name.Plasma_Rifle,        Type.Plasma,          Tech.IS, 10, [        10],  1, [ 0,  5, 10, 15],      PlasmaRifleAmmo,  10,  6.0,  2, Availability.E, []),

// Inner Sphere PPCs
  [Name.Light_PPC]:           MechEquipmentRecord(Name.Light_PPC,           Type.PPC,             Tech.IS,  5, [         5],  1, [ 3,  6, 12, 18],                   [],   0,  3.0,  2, Availability.E, []),
  [Name.PPC]:                 MechEquipmentRecord(Name.PPC,                 Type.PPC,             Tech.IS, 10, [        10],  1, [ 3,  6, 12, 18],                   [],   0,  7.0,  3, Availability.D, []),
  [Name.Heavy_PPC]:           MechEquipmentRecord(Name.Heavy_PPC,           Type.PPC,             Tech.IS, 15, [        15],  1, [ 3,  6, 12, 18],                   [],   0, 10.0,  4, Availability.E, []),
  [Name.ER_PPC]:              MechEquipmentRecord(Name.ER_PPC,              Type.PPC,             Tech.IS, 15, [        10],  1, [ 0,  7, 14, 23],                   [],   0,  7.0,  3, Availability.E, []),
  [Name.Snub_Nose_PPC]:       MechEquipmentRecord(Name.Snub_Nose_PPC,       Type.PPC,             Tech.IS, 10, [10,  8,  5],  1, [ 0,  9, 13, 15],                   [],   0,  7.0,  3, Availability.E, []),

// Inner Sphere Ballistic * Autocannons
  [Name.Autocannon_2]:        MechEquipmentRecord(Name.Autocannon_2,        Type.Autocannon,      Tech.IS,  1, [         2],  1, [ 4,  8, 16, 24],       AutocannonAmmo,  45,  6.0,  1, Availability.C, []),
  [Name.Autocannon_5]:        MechEquipmentRecord(Name.Autocannon_5,        Type.Autocannon,      Tech.IS,  1, [         5],  1, [ 3,  6, 12, 18],       AutocannonAmmo,  20,  8.0,  4, Availability.C, []),
  [Name.Autocannon_10]:       MechEquipmentRecord(Name.Autocannon_10,       Type.Autocannon,      Tech.IS,  3, [        10],  1, [ 0,  5, 10, 15],       AutocannonAmmo,  10, 12.0,  7, Availability.C, []),
  [Name.Autocannon_20]:       MechEquipmentRecord(Name.Autocannon_20,       Type.Autocannon,      Tech.IS,  7, [        20],  1, [ 0,  3,  6,  9],       AutocannonAmmo,   5, 14.0, 10, Availability.C, []),

  [Name.LB_2X_Autocannon]:    MechEquipmentRecord(Name.LB_2X_Autocannon,    Type.Autocannon,      Tech.IS,  1, [         2],  1, [ 4,  9, 18, 27],            LBXACAmmo,  45,  6.0,  4, Availability.E, []),
  [Name.LB_5X_Autocannon]:    MechEquipmentRecord(Name.LB_5X_Autocannon,    Type.Autocannon,      Tech.IS,  1, [         5],  1, [ 3,  7, 14, 21],            LBXACAmmo,  20,  8.0,  5, Availability.E, []),
  [Name.LB_10X_Autocannon]:   MechEquipmentRecord(Name.LB_10X_Autocannon,   Type.Autocannon,      Tech.IS,  2, [        10],  1, [ 0,  6, 12, 18],            LBXACAmmo,  10, 11.0,  6, Availability.E, []),
  [Name.LB_20X_Autocannon]:   MechEquipmentRecord(Name.LB_20X_Autocannon,   Type.Autocannon,      Tech.IS,  6, [        20],  1, [ 0,  4,  8, 12],            LBXACAmmo,   5, 14.0, 11, Availability.E, []),

  [Name.Light_Autocannon_2]:  MechEquipmentRecord(Name.Light_Autocannon_2,  Type.Autocannon,      Tech.IS,  1, [         2],  1, [ 0,  6, 12, 18],          LightACAmmo,  45,  4.0,  1, Availability.D, []),
  [Name.Light_Autocannon_5]:  MechEquipmentRecord(Name.Light_Autocannon_5,  Type.Autocannon,      Tech.IS,  1, [         5],  1, [ 0,  5, 10, 15],          LightACAmmo,  20,  5.0,  2, Availability.D, []),

  [Name.Rotary_Autocannon_2]: MechEquipmentRecord(Name.Rotary_Autocannon_2, Type.Autocannon,      Tech.IS,  1, [         2],  6, [ 0,  6, 12, 18],         RotaryACAmmo,  45,  8.0,  3, Availability.E, []),
  [Name.Rotary_Autocannon_5]: MechEquipmentRecord(Name.Rotary_Autocannon_5, Type.Autocannon,      Tech.IS,  1, [         5],  6, [ 0,  5, 10, 15],         RotaryACAmmo,  20, 10.0,  6, Availability.E, []),

  [Name.Ultra_Autocannon_2]:  MechEquipmentRecord(Name.Ultra_Autocannon_2,  Type.Autocannon,      Tech.IS,  1, [         2],  2, [ 3,  8, 17, 25],          UltraACAmmo,  45,  7.0,  3, Availability.E, []),
  [Name.Ultra_Autocannon_5]:  MechEquipmentRecord(Name.Ultra_Autocannon_5,  Type.Autocannon,      Tech.IS,  1, [         5],  2, [ 2,  6, 13, 20],          UltraACAmmo,  20,  9.0,  5, Availability.E, []),
  [Name.Ultra_Autocannon_10]: MechEquipmentRecord(Name.Ultra_Autocannon_10, Type.Autocannon,      Tech.IS,  4, [        10],  2, [ 0,  6, 12, 18],          UltraACAmmo,  10, 13.0,  7, Availability.E, []),
  [Name.Ultra_Autocannon_20]: MechEquipmentRecord(Name.Ultra_Autocannon_20, Type.Autocannon,      Tech.IS,  8, [        20],  2, [ 0,  3,  7, 10],          UltraACAmmo,   5, 15.0, 10, Availability.E, []),

  [Name.Light_Gauss_Rifle]:   MechEquipmentRecord(Name.Light_Gauss_Rifle,   Type.Gauss_Rifle,     Tech.IS,  1, [         8],  1, [ 3,  8, 17, 25],       LightGaussAmmo,  16, 12.0,  5, Availability.E, []),
  [Name.Gauss_Rifle]:         MechEquipmentRecord(Name.Gauss_Rifle,         Type.Gauss_Rifle,     Tech.IS,  1, [        15],  1, [ 2,  7, 15, 22],            GaussAmmo,   8, 15.0,  7, Availability.E, []),
  [Name.Heavy_Gauss_Rifle]:   MechEquipmentRecord(Name.Heavy_Gauss_Rifle,   Type.Gauss_Rifle,     Tech.IS,  2, [25, 20, 10],  1, [ 4,  6, 13, 20],       HeavyGaussAmmo,   4, 18.0, 11, Availability.E, []),

  [Name.Light_Machine_Gun]:   MechEquipmentRecord(Name.Light_Machine_Gun,   Type.Machine_Gun,     Tech.IS,  0, [         1],  1, [ 0,  2,  4,  6],  LightMachingeunAmmo, 200,  0.5,  1, Availability.B, []),
  [Name.Machine_Gun]:         MechEquipmentRecord(Name.Machine_Gun,         Type.Machine_Gun,     Tech.IS,  0, [         2],  1, [ 0,  1,  2,  3],       MachingeunAmmo, 200,  0.5,  1, Availability.B, []),
  [Name.Heavy_Machine_Gun]:   MechEquipmentRecord(Name.Heavy_Machine_Gun,   Type.Machine_Gun,     Tech.IS,  0, [         3],  1, [ 0,  1,  2, -1],  HeavyMachingeunAmmo, 100,  1.0,  1, Availability.B, []),

// Inner Sphere Missiles
  [Name.LRM_5]:               MechEquipmentRecord(Name.LRM_5,               Type.LRM,             Tech.IS,  2, [         1],  5, [ 6,  7, 14, 21],              LRMAmmo,  24,  2.0,  1, Availability.C, []),
  [Name.LRM_10]:              MechEquipmentRecord(Name.LRM_10,              Type.LRM,             Tech.IS,  4, [         1], 10, [ 6,  7, 14, 21],              LRMAmmo,  12,  5.0,  2, Availability.C, []),
  [Name.LRM_15]:              MechEquipmentRecord(Name.LRM_15,              Type.LRM,             Tech.IS,  5, [         1], 15, [ 6,  7, 14, 21],              LRMAmmo,   8,  7.0,  3, Availability.C, []),
  [Name.LRM_20]:              MechEquipmentRecord(Name.LRM_20,              Type.LRM,             Tech.IS,  6, [         1], 20, [ 6,  7, 14, 21],              LRMAmmo,   6, 10.0,  5, Availability.C, []),

  [Name.MML_3]:               MechEquipmentRecord(Name.MML_3,               Type.MML,             Tech.IS,  2, [         1],  3, [ 6,  7, 14, 21],              MMLAmmo,  40,  1.5,  2, Availability.E, []),
  [Name.MML_5]:               MechEquipmentRecord(Name.MML_3,               Type.MML,             Tech.IS,  3, [         1],  5, [ 6,  7, 14, 21],              MMLAmmo,  24,  3.0,  3, Availability.E, []),
  [Name.MML_7]:               MechEquipmentRecord(Name.MML_3,               Type.MML,             Tech.IS,  4, [         1],  6, [ 6,  7, 14, 21],              MMLAmmo,  17,  4.5,  4, Availability.E, []),
  [Name.MML_9]:               MechEquipmentRecord(Name.MML_3,               Type.MML,             Tech.IS,  5, [         1],  9, [ 6,  7, 14, 21],              MMLAmmo,  13,  6.0,  5, Availability.E, []),

  [Name.SRM_2]:               MechEquipmentRecord(Name.SRM_2,               Type.SRM,             Tech.IS,  2, [         2],  2, [ 0,  3,  6,  9],              SRMAmmo,  50,  1.0,  1, Availability.C, []),
  [Name.SRM_4]:               MechEquipmentRecord(Name.SRM_4,               Type.SRM,             Tech.IS,  3, [         2],  4, [ 0,  3,  6,  9],              SRMAmmo,  25,  2.0,  1, Availability.C, []),
  [Name.SRM_6]:               MechEquipmentRecord(Name.SRM_6,               Type.SRM,             Tech.IS,  4, [         2],  6, [ 0,  3,  6,  9],              SRMAmmo,  15,  3.0,  2, Availability.C, []),

  [Name.Streak_SRM_2]:        MechEquipmentRecord(Name.Streak_SRM_2,        Type.SRM,             Tech.IS,  2, [         2],  2, [ 0,  3,  6,  9],              SRMAmmo,  50,  1.5,  1, Availability.E, []),
  [Name.Streak_SRM_4]:        MechEquipmentRecord(Name.Streak_SRM_4,        Type.SRM,             Tech.IS,  3, [         2],  4, [ 0,  3,  6,  9],              SRMAmmo,  25,  3.0,  1, Availability.E, []),
  [Name.Streak_SRM_6]:        MechEquipmentRecord(Name.Streak_SRM_6,        Type.SRM,             Tech.IS,  4, [         2],  6, [ 0,  3,  6,  9],              SRMAmmo,  15,  4.5,  2, Availability.E, []),

  [Name.MRM_10]:              MechEquipmentRecord(Name.MRM_10,              Type.MRM,             Tech.IS,  4, [         1], 10, [ 0,  3,  8, 15],              MRMAmmo,  24,  3.0,  2, Availability.C, []),
  [Name.MRM_20]:              MechEquipmentRecord(Name.MRM_20,              Type.MRM,             Tech.IS,  6, [         1], 20, [ 0,  3,  8, 15],              MRMAmmo,  12,  7.0,  3, Availability.C, []),
  [Name.MRM_30]:              MechEquipmentRecord(Name.MRM_30,              Type.MRM,             Tech.IS, 10, [         1], 30, [ 0,  3,  8, 15],              MRMAmmo,   8, 10.0,  5, Availability.C, []),
  [Name.MRM_40]:              MechEquipmentRecord(Name.MRM_40,              Type.MRM,             Tech.IS, 12, [         1], 40, [ 0,  3,  8, 15],              MRMAmmo,   6, 12.0,  7, Availability.C, []),

  [Name.Rocket_Launcher_10]:  MechEquipmentRecord(Name.Rocket_Launcher_10,  Type.Rocket_Launcher, Tech.IS,  3, [         1], 10, [ 0,  5, 11, 18],                   [],   0,  0.5,  1, Availability.B, []),
  [Name.Rocket_Launcher_15]:  MechEquipmentRecord(Name.Rocket_Launcher_15,  Type.Rocket_Launcher, Tech.IS,  4, [         1], 15, [ 0,  5, 11, 18],                   [],   0,  1.0,  2, Availability.B, []),
  [Name.Rocket_Launcher_20]:  MechEquipmentRecord(Name.Rocket_Launcher_20,  Type.Rocket_Launcher, Tech.IS,  5, [         1], 20, [ 0,  5, 11, 18],                   [],   0,  1.5,  3, Availability.B, []),

// Inner Sphere Equipment
/*
  A-Pods 0 (NA) ** ** (NA) OS 0.5 1 NA 1 1 NA NA NA B 204
  B-Pods 0 (NA) ** ** (NA) OS 1 1 NA 1 1 NA NA NA E 204
  Anti-Missile System 1 (1) ** ** (Point Defense) 12 0.5 1 NA 1 1 1 1 1 E 204
  Beagle Active Probe 0 (0) NA 0/0/0/4 (**) NA 1.5 2 NA 1 2 1 1 1 E 204
  CASE 0 (0) NA (NA) NA (NA) NA 0.5 1 NA 1 1 0 NA NA D 210
  C3
  Computer (Master) 0 (NA) NA (NA) NA (NA) NA 5 5* NA 1 1* NA NA NA E 209
  C3
  Computer (Slave) 0 (NA) NA (NA) NA (NA) NA 1 1* NA 1 1* NA NA NA E 209
  Improved C3
  Computer 0 (NA) NA (NA) NA (NA) NA 2.5 2* NA 1 1* NA NA NA E 209
  Guardian ECM Suite 0 (0) NA 0/0/0/6 (**) NA 1.5 2 NA 1 2 1 1 1 E 213
  Machine Gun Array NA ** ** (**) ** +0.5 1 NA 1 1 1 1 1 E 228
  MASC NA NA (NA) NA (NA) NA Var* Var* NA NA NA NA NA NA E 232
  One-Shot (SRM, LRM)† NA NA NA OS +0.5 NA NA NA NA NA NA NA ** 229
  Narc Missile Beacon 0 (**) ** 0/3/6/9 (**) 6 3 2 NA 1 2 1 1 1 E 232
  Imp. Narc Launcher 0 (**) ** 0/4/9/15 (**) 4 5 3 NA 1 3 1 1 1 E 232
  TAG 0 (0) ** 0/5/9/15 (**) NA 1 1 NA 1 1 1 1 1 E 238
  Targeting Computer 0 (0) ** NA (NA) NA Var* Var* NA 1 Var* 0 NA NA E 238
*/
}
