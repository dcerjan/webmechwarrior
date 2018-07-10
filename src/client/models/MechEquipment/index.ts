import { lens } from 'lens.ts'

import { Availability as Availability } from '../common/Availability'
import { Tech as Tech } from '../common/Tech'
import { MechTonnage } from '../Mech'
import { AmmoType, MechEquipmentName, MechEquipmentName as N } from './MechEquipmentName'
import { MechEquipmentTag } from './MechEquipmentTag'
import { MechEquipmentType, MechEquipmentType as T } from './MechEquipmentType'

export interface IMechEquipmentRecord {
  name: N,
  type: T,
  tech: Tech | 'None',
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
type Damage = number[]

export const MechEquipmentRecord = (
  name: N,
  type: T,
  tech: Tech | 'None',
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

// IS Ammo
export const ISAutocannonAmmo = [
  N.Autocannon_Ammo,
  N.Autocannon_Armor_Piercing_Ammo,
  N.Autocannon_Flechette_Ammo,
  N.Autocannon_Precision_Ammo,
] as AmmoType[]
export const ISLBXACAmmo = [
  N.LB_X_Autocannon_Ammo,
  N.LB_X_Autocannon_Cluster_Ammo,
] as AmmoType[]
export const ISLightACAmmo = [
  N.Light_Autocannon_Ammo,
  N.Light_Autocannon_Armor_Piercing_Ammo,
  N.Light_Autocannon_Flechette_Ammo,
  N.Light_Autocannon_Precision_Ammo,
] as AmmoType[]
export const ISRotaryACAmmo = [
  N.Rotary_Autocannon_Ammo,
] as AmmoType[]
export const ISUltraACAmmo = [
  N.Ultra_Autocannon_Ammo,
] as AmmoType[]
export const ISLightGaussAmmo = [
  N.Light_Gauss_Ammo,
] as AmmoType[]
export const ISGaussAmmo = [
  N.Gauss_Ammo,
] as AmmoType[]
export const ISHeavyGaussAmmo = [
  N.Heavy_Gauss_Ammo,
] as AmmoType[]
export const ISLightMachingeunAmmo = [
  N.Light_Machine_Gun_Ammo,
] as AmmoType[]
export const ISMachingeunAmmo = [
  N.Machine_Gun_Ammo,
] as AmmoType[]
export const ISHeavyMachingeunAmmo = [
  N.Heavy_Machine_Gun_Ammo,
] as AmmoType[]
export const ISAMSAmmo = [
  N.AMS_Ammo,
] as AmmoType[]
export const ISVehicleFlamerAmmo = [
  N.Vehicle_Flamer_Ammo,
] as AmmoType[]
export const ISPlasmaRifleAmmo = [
  N.Plasma_Rifle_Ammo,
] as AmmoType[]
export const ISLRMAmmo = [
  N.LRM_Ammo,
  N.LRM_Fragmentation_Ammo,
  N.LRM_Incendiary_Ammo,
  N.LRM_SWARM_Ammo,
  N.LRM_Flare_Ammo,
] as AmmoType[]
export const ISLRMArtemisAmmo = [
  N.LRM_Artemis_Ammo,
] as AmmoType[]
export const ISMRMAmmo = [
  N.MRM_Ammo,
] as AmmoType[]
export const ISSRMAmmo = [
  N.SRM_Ammo,
  N.SRM_Fragmentation_Ammo,
  N.SRM_Harpoon_Ammo,
  N.SRM_Inferno_Ammo,
] as AmmoType[]
export const ISSRMArtemisAmmo = [
  N.SRM_Artemis_Ammo,
] as AmmoType[]
export const ISStreakSRMAmmo = [
  N.Streak_SRM_Ammo,
] as AmmoType[]
export const ISMMLAmmo = [
  N.LRM_Ammo,
  N.LRM_Fragmentation_Ammo,
  N.LRM_Incendiary_Ammo,
  N.LRM_SWARM_Ammo,
  N.LRM_Flare_Ammo,
  N.SRM_Ammo,
  N.SRM_Fragmentation_Ammo,
  N.SRM_Harpoon_Ammo,
  N.SRM_Inferno_Ammo,
] as AmmoType[]
export const ISMMLArtemisAmmo = [
  N.LRM_Artemis_Ammo,
  N.SRM_Artemis_Ammo,
] as AmmoType[]
export const ISNARCAmmo = [
  N.NARC_Ammo,
  N.NARC_ECM_Ammo,
  N.NARC_Explosive_Ammo,
  N.NARC_Haywire_Ammo,
  N.NARC_Nemesis_Ammo,
] as AmmoType[]


// Clan Ammo
export const ClanLBXACAmmo = [
  N.C_LB_X_Autocannon_Ammo,
  N.C_LB_X_Autocannon_Cluster_Ammo,
] as AmmoType[]
export const ClanUltraACAmmo = [
  N.C_Ultra_Autocannon_Ammo,
] as AmmoType[]
export const ClanAPGaussAmmo = [
  N.C_AP_Gauss_Ammo,
] as AmmoType[]
export const ClanGaussAmmo = [
  N.C_Gauss_Ammo,
] as AmmoType[]
export const ClanHAGaussAmmo = [
  N.C_Hyper_Assault_Gauss_Ammo,
] as AmmoType[]
export const ClanLightMachingeunAmmo = [
  N.C_Light_Machine_Gun_Ammo,
] as AmmoType[]
export const ClanMachingeunAmmo = [
  N.C_Machine_Gun_Ammo,
] as AmmoType[]
export const ClanHeavyMachingeunAmmo = [
  N.C_Heavy_Machine_Gun_Ammo,
] as AmmoType[]
export const ClanAMSAmmo = [
  N.C_AMS_Ammo,
] as AmmoType[]
export const ClanVehicleFlamerAmmo = [
  N.C_Vehicle_Flamer_Ammo,
] as AmmoType[]
export const ClanPlasmaCannonAmmo = [
  N.C_Plasma_Cannon_Ammo,
] as AmmoType[]
export const ClanLRMAmmo = [
  N.C_LRM_Ammo,
  N.C_LRM_Fragmentation_Ammo,
  N.C_LRM_SWARM_Ammo,
  N.C_LRM_Flare_Ammo,
] as AmmoType[]
export const ClanLRMArtemisAmmo = [
  N.C_LRM_Artemis_Ammo,
] as AmmoType[]
export const ClanATMAmmo = [
  N.C_ATM_Ammo,
  N.C_ATM_ER_Ammo,
  N.C_ATM_HE_Ammo,
] as AmmoType[]
export const ClanSRMAmmo = [
  N.C_SRM_Ammo,
  N.C_SRM_Fragmentation_Ammo,
  N.C_SRM_Harpoon_Ammo,
  N.C_SRM_Inferno_Ammo,
] as AmmoType[]
export const ClanSRMArtemisAmmo = [
  N.C_SRM_Artemis_Ammo,
] as AmmoType[]
export const ClanStreakSRMAmmo = [
  N.C_Streak_SRM_Ammo,
] as AmmoType[]
export const ClanNARCAmmo = [
  N.C_NARC_Ammo,
] as AmmoType[]

export const MechEquipmentTable = {
  // Common
  [N.Single_Heatsink]:          MechEquipmentRecord(N.Single_Heatsink,          T.Heatsink,            'None',  0, [         0],  0, [ 0,  0,  0,  0],                       [],   0,  1.0,  1, Availability.X, []),
  [N.Double_Heatsink]:          MechEquipmentRecord(N.Double_Heatsink,          T.Heatsink,            'None',  0, [         0],  0, [ 0,  0,  0,  0],                       [],   0,  1.0,  3, Availability.X, []),
  [N.Jump_Jet]:                 MechEquipmentRecord(N.Jump_Jet,                 T.Jump_Jet,            'None',  0, [         0],  0, [ 0,  0,  0,  0],                       [],   0,  0.0,  1, Availability.X, []),
  [N.Improved_Jump_Jet]:        MechEquipmentRecord(N.Improved_Jump_Jet,        T.Jump_Jet,            'None',  0, [         0],  0, [ 0,  0,  0,  0],                       [],   0,  0.0,  2, Availability.X, []),
  [N.Internal_Structure]:       MechEquipmentRecord(N.Internal_Structure,       T.Internal_Structure,  'None',  0, [         0],  0, [ 0,  0,  0,  0],                       [],   0,  0.0,  1, Availability.X, []),
  [N.Armor]:                    MechEquipmentRecord(N.Armor,                    T.Armor,               'None',  0, [         0],  0, [ 0,  0,  0,  0],                       [],   0,  0.0,  1, Availability.X, []),

  // IS tech
  [N.Autocannon_2]:             MechEquipmentRecord(N.Autocannon_2,             T.Autocannon,         Tech.IS,  1, [         2],  1, [ 4,  8, 16, 24],         ISAutocannonAmmo,  45,  6.0,  1, Availability.C, []),
  [N.Autocannon_5]:             MechEquipmentRecord(N.Autocannon_5,             T.Autocannon,         Tech.IS,  1, [         5],  1, [ 3,  6, 12, 18],         ISAutocannonAmmo,  20,  8.0,  4, Availability.C, []),
  [N.Autocannon_10]:            MechEquipmentRecord(N.Autocannon_10,            T.Autocannon,         Tech.IS,  3, [        10],  1, [ 0,  5, 10, 15],         ISAutocannonAmmo,  10, 12.0,  7, Availability.C, []),
  [N.Autocannon_20]:            MechEquipmentRecord(N.Autocannon_20,            T.Autocannon,         Tech.IS,  7, [        20],  1, [ 0,  3,  6,  9],         ISAutocannonAmmo,   5, 14.0, 10, Availability.C, []),
  [N.LB_2X_Autocannon]:         MechEquipmentRecord(N.LB_2X_Autocannon,         T.Autocannon,         Tech.IS,  1, [         2],  1, [ 4,  9, 18, 27],              ISLBXACAmmo,  45,  6.0,  4, Availability.E, []),
  [N.LB_5X_Autocannon]:         MechEquipmentRecord(N.LB_5X_Autocannon,         T.Autocannon,         Tech.IS,  1, [         5],  1, [ 3,  7, 14, 21],              ISLBXACAmmo,  20,  8.0,  5, Availability.E, []),
  [N.LB_10X_Autocannon]:        MechEquipmentRecord(N.LB_10X_Autocannon,        T.Autocannon,         Tech.IS,  2, [        10],  1, [ 0,  6, 12, 18],              ISLBXACAmmo,  10, 11.0,  6, Availability.E, []),
  [N.LB_20X_Autocannon]:        MechEquipmentRecord(N.LB_20X_Autocannon,        T.Autocannon,         Tech.IS,  6, [        20],  1, [ 0,  4,  8, 12],              ISLBXACAmmo,   5, 14.0, 11, Availability.E, []),
  [N.Light_Autocannon_2]:       MechEquipmentRecord(N.Light_Autocannon_2,       T.Autocannon,         Tech.IS,  1, [         2],  1, [ 0,  6, 12, 18],            ISLightACAmmo,  45,  4.0,  1, Availability.D, []),
  [N.Light_Autocannon_5]:       MechEquipmentRecord(N.Light_Autocannon_5,       T.Autocannon,         Tech.IS,  1, [         5],  1, [ 0,  5, 10, 15],            ISLightACAmmo,  20,  5.0,  2, Availability.D, []),
  [N.Rotary_Autocannon_2]:      MechEquipmentRecord(N.Rotary_Autocannon_2,      T.Autocannon,         Tech.IS,  1, [         2],  6, [ 0,  6, 12, 18],           ISRotaryACAmmo,  45,  8.0,  3, Availability.E, []),
  [N.Rotary_Autocannon_5]:      MechEquipmentRecord(N.Rotary_Autocannon_5,      T.Autocannon,         Tech.IS,  1, [         5],  6, [ 0,  5, 10, 15],           ISRotaryACAmmo,  20, 10.0,  6, Availability.E, []),
  [N.Ultra_Autocannon_2]:       MechEquipmentRecord(N.Ultra_Autocannon_2,       T.Autocannon,         Tech.IS,  1, [         2],  2, [ 3,  8, 17, 25],            ISUltraACAmmo,  45,  7.0,  3, Availability.E, []),
  [N.Ultra_Autocannon_5]:       MechEquipmentRecord(N.Ultra_Autocannon_5,       T.Autocannon,         Tech.IS,  1, [         5],  2, [ 2,  6, 13, 20],            ISUltraACAmmo,  20,  9.0,  5, Availability.E, []),
  [N.Ultra_Autocannon_10]:      MechEquipmentRecord(N.Ultra_Autocannon_10,      T.Autocannon,         Tech.IS,  4, [        10],  2, [ 0,  6, 12, 18],            ISUltraACAmmo,  10, 13.0,  7, Availability.E, []),
  [N.Ultra_Autocannon_20]:      MechEquipmentRecord(N.Ultra_Autocannon_20,      T.Autocannon,         Tech.IS,  8, [        20],  2, [ 0,  3,  7, 10],            ISUltraACAmmo,   5, 15.0, 10, Availability.E, []),
  [N.Light_Gauss_Rifle]:        MechEquipmentRecord(N.Light_Gauss_Rifle,        T.Gauss_Rifle,        Tech.IS,  1, [         8],  1, [ 3,  8, 17, 25],         ISLightGaussAmmo,  16, 12.0,  5, Availability.E, []),
  [N.Gauss_Rifle]:              MechEquipmentRecord(N.Gauss_Rifle,              T.Gauss_Rifle,        Tech.IS,  1, [        15],  1, [ 2,  7, 15, 22],              ISGaussAmmo,   8, 15.0,  7, Availability.E, []),
  [N.Heavy_Gauss_Rifle]:        MechEquipmentRecord(N.Heavy_Gauss_Rifle,        T.Gauss_Rifle,        Tech.IS,  2, [25, 20, 10],  1, [ 4,  6, 13, 20],         ISHeavyGaussAmmo,   4, 18.0, 11, Availability.E, []),
  [N.Light_Machine_Gun]:        MechEquipmentRecord(N.Light_Machine_Gun,        T.Machine_Gun,        Tech.IS,  0, [         1],  1, [ 0,  2,  4,  6],    ISLightMachingeunAmmo, 200,  0.5,  1, Availability.B, []),
  [N.Machine_Gun]:              MechEquipmentRecord(N.Machine_Gun,              T.Machine_Gun,        Tech.IS,  0, [         2],  1, [ 0,  1,  2,  3],         ISMachingeunAmmo, 200,  0.5,  1, Availability.B, []),
  [N.Heavy_Machine_Gun]:        MechEquipmentRecord(N.Heavy_Machine_Gun,        T.Machine_Gun,        Tech.IS,  0, [         3],  1, [ 0,  1,  2, -1],    ISHeavyMachingeunAmmo, 100,  1.0,  1, Availability.B, []),
  [N.Flamer]:                   MechEquipmentRecord(N.Flamer,                   T.Flamer,             Tech.IS,  3, [         2],  1, [ 0,  1,  2,  3],                       [],   0,  1.0,  1, Availability.C, []),
  [N.Vehicle_Flamer]:           MechEquipmentRecord(N.Vehicle_Flamer,           T.Flamer,             Tech.IS,  3, [         2],  1, [ 0,  1,  2,  3],      ISVehicleFlamerAmmo,  20,  0.5,  1, Availability.B, []),
  [N.Small_Laser]:              MechEquipmentRecord(N.Small_Laser,              T.Laser,              Tech.IS,  1, [         3],  1, [ 0,  1,  2,  3],                       [],   0,  0.5,  1, Availability.C, []),
  [N.Medium_Laser]:             MechEquipmentRecord(N.Medium_Laser,             T.Laser,              Tech.IS,  3, [         5],  1, [ 0,  3,  6,  9],                       [],   0,  1.0,  1, Availability.C, []),
  [N.Large_Laser]:              MechEquipmentRecord(N.Large_Laser,              T.Laser,              Tech.IS,  8, [         8],  1, [ 0,  5, 10, 15],                       [],   0,  5.0,  2, Availability.C, []),
  [N.Small_Pulse_Laser]:        MechEquipmentRecord(N.Small_Pulse_Laser,        T.Laser,              Tech.IS,  2, [         3],  1, [ 0,  1,  2,  3],                       [],   0,  1.0,  1, Availability.E, []),
  [N.Medium_Pulse_Laser]:       MechEquipmentRecord(N.Medium_Pulse_Laser,       T.Laser,              Tech.IS,  4, [         6],  1, [ 0,  2,  4,  6],                       [],   0,  2.0,  1, Availability.E, []),
  [N.Large_Pulse_Laser]:        MechEquipmentRecord(N.Large_Pulse_Laser,        T.Laser,              Tech.IS, 10, [         9],  1, [ 0,  3,  7, 10],                       [],   0,  7.0,  2, Availability.E, []),
  [N.ER_Small_Laser]:           MechEquipmentRecord(N.ER_Small_Laser,           T.Laser,              Tech.IS,  2, [         3],  1, [ 0,  2,  4,  5],                       [],   0,  0.5,  1, Availability.E, []),
  [N.ER_Medium_Laser]:          MechEquipmentRecord(N.ER_Medium_Laser,          T.Laser,              Tech.IS,  5, [         5],  1, [ 0,  4,  8, 12],                       [],   0,  1.0,  1, Availability.E, []),
  [N.ER_Large_Laser]:           MechEquipmentRecord(N.ER_Large_Laser,           T.Laser,              Tech.IS, 12, [         8],  1, [ 0,  7, 14, 19],                       [],   0,  5.0,  2, Availability.E, []),
  [N.Plasma_Rifle]:             MechEquipmentRecord(N.Plasma_Rifle,             T.Plasma,             Tech.IS, 10, [        10],  1, [ 0,  5, 10, 15],        ISPlasmaRifleAmmo,  10,  6.0,  2, Availability.E, []),
  [N.Light_PPC]:                MechEquipmentRecord(N.Light_PPC,                T.PPC,                Tech.IS,  5, [         5],  1, [ 3,  6, 12, 18],                       [],   0,  3.0,  2, Availability.E, []),
  [N.PPC]:                      MechEquipmentRecord(N.PPC,                      T.PPC,                Tech.IS, 10, [        10],  1, [ 3,  6, 12, 18],                       [],   0,  7.0,  3, Availability.D, []),
  [N.Heavy_PPC]:                MechEquipmentRecord(N.Heavy_PPC,                T.PPC,                Tech.IS, 15, [        15],  1, [ 3,  6, 12, 18],                       [],   0, 10.0,  4, Availability.E, []),
  [N.ER_PPC]:                   MechEquipmentRecord(N.ER_PPC,                   T.PPC,                Tech.IS, 15, [        10],  1, [ 0,  7, 14, 23],                       [],   0,  7.0,  3, Availability.E, []),
  [N.Snub_Nose_PPC]:            MechEquipmentRecord(N.Snub_Nose_PPC,            T.PPC,                Tech.IS, 10, [10,  8,  5],  1, [ 0,  9, 13, 15],                       [],   0,  7.0,  3, Availability.E, []),
  [N.LRM_5]:                    MechEquipmentRecord(N.LRM_5,                    T.LRM,                Tech.IS,  2, [         1],  5, [ 6,  7, 14, 21],                ISLRMAmmo,  24,  2.0,  1, Availability.C, []),
  [N.LRM_10]:                   MechEquipmentRecord(N.LRM_10,                   T.LRM,                Tech.IS,  4, [         1], 10, [ 6,  7, 14, 21],                ISLRMAmmo,  12,  5.0,  2, Availability.C, []),
  [N.LRM_15]:                   MechEquipmentRecord(N.LRM_15,                   T.LRM,                Tech.IS,  5, [         1], 15, [ 6,  7, 14, 21],                ISLRMAmmo,   8,  7.0,  3, Availability.C, []),
  [N.LRM_20]:                   MechEquipmentRecord(N.LRM_20,                   T.LRM,                Tech.IS,  6, [         1], 20, [ 6,  7, 14, 21],                ISLRMAmmo,   6, 10.0,  5, Availability.C, []),
  [N.LRM_5_Artemis_IV]:         MechEquipmentRecord(N.LRM_5_Artemis_IV,         T.LRM,                Tech.IS,  2, [         1],  5, [ 6,  7, 14, 21],         ISLRMArtemisAmmo,  24,  3.0,  2, Availability.E, []),
  [N.LRM_10_Artemis_IV]:        MechEquipmentRecord(N.LRM_10_Artemis_IV,        T.LRM,                Tech.IS,  4, [         1], 10, [ 6,  7, 14, 21],         ISLRMArtemisAmmo,  12,  6.0,  3, Availability.E, []),
  [N.LRM_15_Artemis_IV]:        MechEquipmentRecord(N.LRM_15_Artemis_IV,        T.LRM,                Tech.IS,  5, [         1], 15, [ 6,  7, 14, 21],         ISLRMArtemisAmmo,   8,  8.0,  4, Availability.E, []),
  [N.LRM_20_Artemis_IV]:        MechEquipmentRecord(N.LRM_20_Artemis_IV,        T.LRM,                Tech.IS,  6, [         1], 20, [ 6,  7, 14, 21],         ISLRMArtemisAmmo,   6, 11.0,  6, Availability.E, []),
  [N.MML_3]:                    MechEquipmentRecord(N.MML_3,                    T.MML,                Tech.IS,  2, [         1],  3, [ 6,  7, 14, 21],                ISMMLAmmo,  40,  1.5,  2, Availability.E, []),
  [N.MML_5]:                    MechEquipmentRecord(N.MML_5,                    T.MML,                Tech.IS,  3, [         1],  5, [ 6,  7, 14, 21],                ISMMLAmmo,  24,  3.0,  3, Availability.E, []),
  [N.MML_7]:                    MechEquipmentRecord(N.MML_7,                    T.MML,                Tech.IS,  4, [         1],  6, [ 6,  7, 14, 21],                ISMMLAmmo,  17,  4.5,  4, Availability.E, []),
  [N.MML_9]:                    MechEquipmentRecord(N.MML_9,                    T.MML,                Tech.IS,  5, [         1],  9, [ 6,  7, 14, 21],                ISMMLAmmo,  13,  6.0,  5, Availability.E, []),
  [N.MML_3_Artemis_IV]:         MechEquipmentRecord(N.MML_3_Artemis_IV,         T.MML,                Tech.IS,  2, [         1],  3, [ 6,  7, 14, 21],         ISMMLArtemisAmmo,  40,  2.5,  3, Availability.E, []),
  [N.MML_5_Artemis_IV]:         MechEquipmentRecord(N.MML_5_Artemis_IV,         T.MML,                Tech.IS,  3, [         1],  5, [ 6,  7, 14, 21],         ISMMLArtemisAmmo,  24,  4.0,  4, Availability.E, []),
  [N.MML_7_Artemis_IV]:         MechEquipmentRecord(N.MML_7_Artemis_IV,         T.MML,                Tech.IS,  4, [         1],  6, [ 6,  7, 14, 21],         ISMMLArtemisAmmo,  17,  5.5,  5, Availability.E, []),
  [N.MML_9_Artemis_IV]:         MechEquipmentRecord(N.MML_9_Artemis_IV,         T.MML,                Tech.IS,  5, [         1],  9, [ 6,  7, 14, 21],         ISMMLArtemisAmmo,  13,  7.0,  6, Availability.E, []),
  [N.SRM_2]:                    MechEquipmentRecord(N.SRM_2,                    T.SRM,                Tech.IS,  2, [         2],  2, [ 0,  3,  6,  9],                ISSRMAmmo,  50,  1.0,  1, Availability.C, []),
  [N.SRM_4]:                    MechEquipmentRecord(N.SRM_4,                    T.SRM,                Tech.IS,  3, [         2],  4, [ 0,  3,  6,  9],                ISSRMAmmo,  25,  2.0,  1, Availability.C, []),
  [N.SRM_6]:                    MechEquipmentRecord(N.SRM_6,                    T.SRM,                Tech.IS,  4, [         2],  6, [ 0,  3,  6,  9],                ISSRMAmmo,  15,  3.0,  2, Availability.C, []),
  [N.SRM_2_Artemis_IV]:         MechEquipmentRecord(N.SRM_2_Artemis_IV,         T.SRM,                Tech.IS,  2, [         2],  2, [ 0,  3,  6,  9],         ISSRMArtemisAmmo,  50,  2.0,  2, Availability.E, []),
  [N.SRM_4_Artemis_IV]:         MechEquipmentRecord(N.SRM_4_Artemis_IV,         T.SRM,                Tech.IS,  3, [         2],  4, [ 0,  3,  6,  9],         ISSRMArtemisAmmo,  25,  3.0,  2, Availability.E, []),
  [N.SRM_6_Artemis_IV]:         MechEquipmentRecord(N.SRM_6_Artemis_IV,         T.SRM,                Tech.IS,  4, [         2],  6, [ 0,  3,  6,  9],         ISSRMArtemisAmmo,  15,  4.0,  3, Availability.E, []),
  [N.Streak_SRM_2]:             MechEquipmentRecord(N.Streak_SRM_2,             T.SRM,                Tech.IS,  2, [         2],  2, [ 0,  3,  6,  9],          ISStreakSRMAmmo,  50,  1.5,  1, Availability.E, []),
  [N.Streak_SRM_4]:             MechEquipmentRecord(N.Streak_SRM_4,             T.SRM,                Tech.IS,  3, [         2],  4, [ 0,  3,  6,  9],          ISStreakSRMAmmo,  25,  3.0,  1, Availability.E, []),
  [N.Streak_SRM_6]:             MechEquipmentRecord(N.Streak_SRM_6,             T.SRM,                Tech.IS,  4, [         2],  6, [ 0,  3,  6,  9],          ISStreakSRMAmmo,  15,  4.5,  2, Availability.E, []),
  [N.MRM_10]:                   MechEquipmentRecord(N.MRM_10,                   T.MRM,                Tech.IS,  4, [         1], 10, [ 0,  3,  8, 15],                ISMRMAmmo,  24,  3.0,  2, Availability.C, []),
  [N.MRM_20]:                   MechEquipmentRecord(N.MRM_20,                   T.MRM,                Tech.IS,  6, [         1], 20, [ 0,  3,  8, 15],                ISMRMAmmo,  12,  7.0,  3, Availability.C, []),
  [N.MRM_30]:                   MechEquipmentRecord(N.MRM_30,                   T.MRM,                Tech.IS, 10, [         1], 30, [ 0,  3,  8, 15],                ISMRMAmmo,   8, 10.0,  5, Availability.C, []),
  [N.MRM_40]:                   MechEquipmentRecord(N.MRM_40,                   T.MRM,                Tech.IS, 12, [         1], 40, [ 0,  3,  8, 15],                ISMRMAmmo,   6, 12.0,  7, Availability.C, []),
  [N.Rocket_Launcher_10]:       MechEquipmentRecord(N.Rocket_Launcher_10,       T.Rocket_Launcher,    Tech.IS,  3, [         1], 10, [ 0,  5, 11, 18],                       [],   0,  0.5,  1, Availability.B, []),
  [N.Rocket_Launcher_15]:       MechEquipmentRecord(N.Rocket_Launcher_15,       T.Rocket_Launcher,    Tech.IS,  4, [         1], 15, [ 0,  5, 11, 18],                       [],   0,  1.0,  2, Availability.B, []),
  [N.Rocket_Launcher_20]:       MechEquipmentRecord(N.Rocket_Launcher_20,       T.Rocket_Launcher,    Tech.IS,  5, [         1], 20, [ 0,  5, 11, 18],                       [],   0,  1.5,  3, Availability.B, []),
  [N.AMS]:                      MechEquipmentRecord(N.AMS,                      T.AMS,                Tech.IS,  1, [         1],  1, [ 0,  1, -1, -1],                ISAMSAmmo,  12,  0.5,  1, Availability.E, []),
  [N.LAMS]:                     MechEquipmentRecord(N.LAMS,                     T.Laser_AMS,          Tech.IS,  2, [         1],  1, [ 0,  1, -1, -1],                       [],   0,  1.5,  2, Availability.F, []),
  [N.Beagle_Active_Probe]:      MechEquipmentRecord(N.Beagle_Active_Probe,      T.Active_Probe,       Tech.IS,  0, [         0],  0, [ 0,  0,  0,  4],                       [],   0,  1.5,  2, Availability.E, []),
  [N.CASE]:                     MechEquipmentRecord(N.CASE,                     T.CASE,               Tech.IS,  0, [         0],  0, [ 0,  0,  0,  0],                       [],   0,  0.5,  1, Availability.D, []),
  [N.C3_Computer_Master]:       MechEquipmentRecord(N.C3_Computer_Master,       T.C3_Computer,        Tech.IS,  0, [         0],  0, [ 0,  0,  0,  0],                       [],   0,  5.0,  5, Availability.E, []),
  [N.C3_Computer_Slave]:        MechEquipmentRecord(N.C3_Computer_Slave,        T.C3_Computer,        Tech.IS,  0, [         0],  0, [ 0,  0,  0,  0],                       [],   0,  1.0,  1, Availability.E, []),
  [N.Improved_C3_Computer]:     MechEquipmentRecord(N.Improved_C3_Computer,     T.C3_Computer,        Tech.IS,  0, [         0],  0, [ 0,  0,  0,  0],                       [],   0,  2.5,  2, Availability.E, []),
  [N.Guardian_ECM_Suite]:       MechEquipmentRecord(N.Guardian_ECM_Suite,       T.ECM_Suite,          Tech.IS,  0, [         0],  0, [ 0,  0,  0,  6],                       [],   0,  1.5,  2, Availability.E, []),
  [N.NARC_Launcher]:            MechEquipmentRecord(N.NARC_Launcher,            T.NARC_Launcher,      Tech.IS,  0, [         0],  1, [ 0,  3,  6,  9],               ISNARCAmmo,   6,  3.0,  2, Availability.E, []),
  [N.Improved_NARC_Launcher]:   MechEquipmentRecord(N.Improved_NARC_Launcher,   T.NARC_Launcher,      Tech.IS,  0, [         0],  1, [ 0,  4,  9, 15],               ISNARCAmmo,   4,  5.0,  3, Availability.E, []),
  [N.TAG]:                      MechEquipmentRecord(N.TAG,                      T.TAG,                Tech.IS,  0, [         0],  0, [ 0,  5,  9, 15],                       [],   0,  1.0,  1, Availability.B, []),
  [N.Autocannon_Ammo]:                      MechEquipmentRecord(N.Autocannon_Ammo,                      T.BallisticAmmo, Tech.IS, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.Autocannon_Armor_Piercing_Ammo]:       MechEquipmentRecord(N.Autocannon_Armor_Piercing_Ammo,       T.BallisticAmmo, Tech.IS, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.Autocannon_Flechette_Ammo]:            MechEquipmentRecord(N.Autocannon_Flechette_Ammo,            T.BallisticAmmo, Tech.IS, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.Autocannon_Precision_Ammo]:            MechEquipmentRecord(N.Autocannon_Precision_Ammo,            T.BallisticAmmo, Tech.IS, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.LB_X_Autocannon_Ammo]:                 MechEquipmentRecord(N.LB_X_Autocannon_Ammo,                 T.BallisticAmmo, Tech.IS, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.LB_X_Autocannon_Cluster_Ammo]:         MechEquipmentRecord(N.LB_X_Autocannon_Cluster_Ammo,         T.BallisticAmmo, Tech.IS, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.Light_Autocannon_Ammo]:                MechEquipmentRecord(N.Light_Autocannon_Ammo,                T.BallisticAmmo, Tech.IS, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.Light_Autocannon_Armor_Piercing_Ammo]: MechEquipmentRecord(N.Light_Autocannon_Armor_Piercing_Ammo, T.BallisticAmmo, Tech.IS, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.Light_Autocannon_Flechette_Ammo]:      MechEquipmentRecord(N.Light_Autocannon_Flechette_Ammo,      T.BallisticAmmo, Tech.IS, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.Light_Autocannon_Precision_Ammo]:      MechEquipmentRecord(N.Light_Autocannon_Precision_Ammo,      T.BallisticAmmo, Tech.IS, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.Rotary_Autocannon_Ammo]:               MechEquipmentRecord(N.Rotary_Autocannon_Ammo,               T.BallisticAmmo, Tech.IS, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.Ultra_Autocannon_Ammo]:                MechEquipmentRecord(N.Ultra_Autocannon_Ammo,                T.BallisticAmmo, Tech.IS, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.Light_Gauss_Ammo]:                     MechEquipmentRecord(N.Light_Gauss_Ammo,                     T.BallisticAmmo, Tech.IS, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.Gauss_Ammo]:                           MechEquipmentRecord(N.Gauss_Ammo,                           T.BallisticAmmo, Tech.IS, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.Heavy_Gauss_Ammo]:                     MechEquipmentRecord(N.Heavy_Gauss_Ammo,                     T.BallisticAmmo, Tech.IS, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.Light_Machine_Gun_Ammo]:               MechEquipmentRecord(N.Light_Machine_Gun_Ammo,               T.BallisticAmmo, Tech.IS, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.Machine_Gun_Ammo]:                     MechEquipmentRecord(N.Machine_Gun_Ammo,                     T.BallisticAmmo, Tech.IS, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.Heavy_Machine_Gun_Ammo]:               MechEquipmentRecord(N.Heavy_Machine_Gun_Ammo,               T.BallisticAmmo, Tech.IS, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.AMS_Ammo]:                             MechEquipmentRecord(N.AMS_Ammo,                             T.BallisticAmmo, Tech.IS, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.Vehicle_Flamer_Ammo]:                  MechEquipmentRecord(N.Vehicle_Flamer_Ammo,                     T.EnergyAmmo, Tech.IS, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.Plasma_Rifle_Ammo]:                    MechEquipmentRecord(N.Plasma_Rifle_Ammo,                       T.EnergyAmmo, Tech.IS, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.LRM_Ammo]:                             MechEquipmentRecord(N.LRM_Ammo,                               T.MissileAmmo, Tech.IS, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.LRM_Artemis_Ammo]:                     MechEquipmentRecord(N.LRM_Artemis_Ammo,                       T.MissileAmmo, Tech.IS, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.LRM_Fragmentation_Ammo]:               MechEquipmentRecord(N.LRM_Fragmentation_Ammo,                 T.MissileAmmo, Tech.IS, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.LRM_Incendiary_Ammo]:                  MechEquipmentRecord(N.LRM_Incendiary_Ammo,                    T.MissileAmmo, Tech.IS, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.LRM_SWARM_Ammo]:                       MechEquipmentRecord(N.LRM_SWARM_Ammo,                         T.MissileAmmo, Tech.IS, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.LRM_Flare_Ammo]:                       MechEquipmentRecord(N.LRM_Flare_Ammo,                         T.MissileAmmo, Tech.IS, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.MRM_Ammo]:                             MechEquipmentRecord(N.MRM_Ammo,                               T.MissileAmmo, Tech.IS, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.SRM_Ammo]:                             MechEquipmentRecord(N.SRM_Ammo,                               T.MissileAmmo, Tech.IS, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.SRM_Artemis_Ammo]:                     MechEquipmentRecord(N.SRM_Artemis_Ammo,                       T.MissileAmmo, Tech.IS, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.SRM_Fragmentation_Ammo]:               MechEquipmentRecord(N.SRM_Fragmentation_Ammo,                 T.MissileAmmo, Tech.IS, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.SRM_Harpoon_Ammo]:                     MechEquipmentRecord(N.SRM_Harpoon_Ammo,                       T.MissileAmmo, Tech.IS, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.SRM_Inferno_Ammo]:                     MechEquipmentRecord(N.SRM_Inferno_Ammo,                       T.MissileAmmo, Tech.IS, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.Streak_SRM_Ammo]:                      MechEquipmentRecord(N.Streak_SRM_Ammo,                        T.MissileAmmo, Tech.IS, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.NARC_Ammo]:                            MechEquipmentRecord(N.NARC_Ammo,                              T.MissileAmmo, Tech.IS, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.NARC_Explosive_Ammo]:                  MechEquipmentRecord(N.NARC_Explosive_Ammo,                    T.MissileAmmo, Tech.IS, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.NARC_ECM_Ammo]:                        MechEquipmentRecord(N.NARC_ECM_Ammo,                          T.MissileAmmo, Tech.IS, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.NARC_Haywire_Ammo]:                    MechEquipmentRecord(N.NARC_Haywire_Ammo,                      T.MissileAmmo, Tech.IS, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.NARC_Nemesis_Ammo]:                    MechEquipmentRecord(N.NARC_Nemesis_Ammo,                      T.MissileAmmo, Tech.IS, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),

  // Clan tech
  [N.C_LB_2X_Autocannon]:       MechEquipmentRecord(N.C_LB_2X_Autocannon,       T.Autocannon,       Tech.Clan,  1, [         2],  1, [ 4, 10, 20, 30],            ClanLBXACAmmo,  45,  5.0,  3, Availability.F, []),
  [N.C_LB_5X_Autocannon]:       MechEquipmentRecord(N.C_LB_5X_Autocannon,       T.Autocannon,       Tech.Clan,  1, [         5],  1, [ 3,  8, 15, 24],            ClanLBXACAmmo,  20,  7.0,  4, Availability.F, []),
  [N.C_LB_10X_Autocannon]:      MechEquipmentRecord(N.C_LB_10X_Autocannon,      T.Autocannon,       Tech.Clan,  2, [        10],  1, [ 0,  6, 12, 18],            ClanLBXACAmmo,  10, 10.0,  5, Availability.F, []),
  [N.C_LB_20X_Autocannon]:      MechEquipmentRecord(N.C_LB_20X_Autocannon,      T.Autocannon,       Tech.Clan,  6, [        20],  1, [ 0,  4,  8, 12],            ClanLBXACAmmo,   5, 12.0,  9, Availability.F, []),
  [N.C_Ultra_Autocannon_2]:     MechEquipmentRecord(N.C_Ultra_Autocannon_2,     T.Autocannon,       Tech.Clan,  1, [         2],  2, [ 2,  9, 18, 27],          ClanUltraACAmmo,  45,  5.0,  2, Availability.F, []),
  [N.C_Ultra_Autocannon_5]:     MechEquipmentRecord(N.C_Ultra_Autocannon_5,     T.Autocannon,       Tech.Clan,  1, [         5],  2, [ 0,  7, 14, 21],          ClanUltraACAmmo,  20,  8.0,  3, Availability.F, []),
  [N.C_Ultra_Autocannon_10]:    MechEquipmentRecord(N.C_Ultra_Autocannon_10,    T.Autocannon,       Tech.Clan,  3, [        10],  2, [ 0,  6, 12, 18],          ClanUltraACAmmo,  10, 10.0,  4, Availability.F, []),
  [N.C_Ultra_Autocannon_20]:    MechEquipmentRecord(N.C_Ultra_Autocannon_20,    T.Autocannon,       Tech.Clan,  7, [        20],  2, [ 0,  4,  8, 12],          ClanUltraACAmmo,   5, 12.0,  8, Availability.F, []),
  [N.C_AP_Gauss_Rifle]:         MechEquipmentRecord(N.C_AP_Gauss_Rifle,         T.Gauss_Rifle,      Tech.Clan,  1, [         3],  1, [ 0,  3,  6,  9],          ClanAPGaussAmmo,  40,  0.5,  1, Availability.F, []),
  [N.C_Gauss_Rifle]:            MechEquipmentRecord(N.C_Gauss_Rifle,            T.Gauss_Rifle,      Tech.Clan,  1, [        15],  1, [ 2,  7, 15, 22],            ClanGaussAmmo,   8, 12.0,  6, Availability.F, []),
  [N.C_Hyper_Assault_Gauss_20]: MechEquipmentRecord(N.C_Hyper_Assault_Gauss_20, T.Gauss_Rifle,      Tech.Clan,  4, [        20], 20, [ 2,  8, 16, 24],          ClanHAGaussAmmo,   6, 10.0,  6, Availability.F, []),
  [N.C_Hyper_Assault_Gauss_30]: MechEquipmentRecord(N.C_Hyper_Assault_Gauss_30, T.Gauss_Rifle,      Tech.Clan,  6, [        30], 30, [ 2,  8, 16, 24],          ClanHAGaussAmmo,   4, 13.0,  8, Availability.F, []),
  [N.C_Hyper_Assault_Gauss_40]: MechEquipmentRecord(N.C_Hyper_Assault_Gauss_40, T.Gauss_Rifle,      Tech.Clan,  8, [        40], 40, [ 2,  8, 16, 24],          ClanHAGaussAmmo,   3, 16.0, 10, Availability.F, []),
  [N.C_Light_Machine_Gun]:      MechEquipmentRecord(N.C_Light_Machine_Gun,      T.Machine_Gun,      Tech.Clan,  0, [         1],  1, [ 0,  2,  4,  6],  ClanLightMachingeunAmmo, 200, 0.25,  1, Availability.F, []),
  [N.C_Machine_Gun]:            MechEquipmentRecord(N.C_Machine_Gun,            T.Machine_Gun,      Tech.Clan,  0, [         2],  1, [ 0,  1,  2,  3],       ClanMachingeunAmmo, 200, 0.25,  1, Availability.C, []),
  [N.C_Heavy_Machine_Gun]:      MechEquipmentRecord(N.C_Heavy_Machine_Gun,      T.Machine_Gun,      Tech.Clan,  0, [         3],  1, [ 0,  1,  2, -1],  ClanHeavyMachingeunAmmo, 100,  0.5,  1, Availability.C, []),
  [N.C_Flamer]:                 MechEquipmentRecord(N.C_Flamer,                 T.Flamer,           Tech.Clan,  3, [         2],  1, [ 0,  1,  2,  3],                       [],   0,  0.5,  1, Availability.C, []),
  [N.C_Vehicle_Flamer]:         MechEquipmentRecord(N.C_Vehicle_Flamer,         T.Flamer,           Tech.Clan,  3, [         2],  1, [ 0,  1,  2,  3],    ClanVehicleFlamerAmmo,  20,  0.5,  1, Availability.B, []),
  [N.C_ER_Micro_Laser]:         MechEquipmentRecord(N.C_ER_Micro_Laser,         T.Laser,            Tech.Clan,  1, [         2],  1, [ 0,  1,  2,  4],                       [],   0, 0.25,  1, Availability.F, []),
  [N.C_ER_Small_Laser]:         MechEquipmentRecord(N.C_ER_Small_Laser,         T.Laser,            Tech.Clan,  2, [         5],  1, [ 0,  2,  4,  6],                       [],   0,  0.5,  1, Availability.F, []),
  [N.C_ER_Medium_Laser]:        MechEquipmentRecord(N.C_ER_Medium_Laser,        T.Laser,            Tech.Clan,  5, [         7],  1, [ 0,  5, 10, 15],                       [],   0,  1.0,  1, Availability.F, []),
  [N.C_ER_Large_Laser]:         MechEquipmentRecord(N.C_ER_Large_Laser,         T.Laser,            Tech.Clan, 12, [        10],  1, [ 0,  8, 15, 25],                       [],   0,  4.0,  1, Availability.F, []),
  [N.C_Micro_Pulse_Laser]:      MechEquipmentRecord(N.C_Micro_Pulse_Laser,      T.Laser,            Tech.Clan,  1, [         3],  1, [ 0,  1,  2,  3],                       [],   0,  0.5,  1, Availability.F, []),
  [N.C_Small_Pulse_Laser]:      MechEquipmentRecord(N.C_Small_Pulse_Laser,      T.Laser,            Tech.Clan,  2, [         3],  1, [ 0,  2,  4,  6],                       [],   0,  1.0,  1, Availability.F, []),
  [N.C_Medium_Pulse_Laser]:     MechEquipmentRecord(N.C_Medium_Pulse_Laser,     T.Laser,            Tech.Clan,  4, [         7],  1, [ 0,  4,  8, 12],                       [],   0,  2.0,  1, Availability.F, []),
  [N.C_Large_Pulse_Laser]:      MechEquipmentRecord(N.C_Large_Pulse_Laser,      T.Laser,            Tech.Clan, 10, [        10],  1, [ 0,  6, 14, 20],                       [],   0,  6.0,  2, Availability.F, []),
  [N.C_Heavy_Small_Laser]:      MechEquipmentRecord(N.C_Heavy_Small_Laser,      T.Laser,            Tech.Clan,  3, [         6],  1, [ 0,  1,  2,  3],                       [],   0,  0.5,  1, Availability.F, []),
  [N.C_Heavy_Medium_Laser]:     MechEquipmentRecord(N.C_Heavy_Medium_Laser,     T.Laser,            Tech.Clan,  7, [        10],  1, [ 0,  3,  6,  9],                       [],   0,  1.0,  2, Availability.F, []),
  [N.C_Heavy_Large_Laser]:      MechEquipmentRecord(N.C_Heavy_Large_Laser,      T.Laser,            Tech.Clan, 18, [        18],  1, [ 0,  5, 10, 15],                       [],   0,  4.0,  3, Availability.F, []),
  [N.C_Plasma_Cannon]:          MechEquipmentRecord(N.C_Plasma_Cannon,          T.Plasma,           Tech.Clan,  7, [         5],  1, [ 0,  6, 12, 18],     ClanPlasmaCannonAmmo,  10,  3.0,  1, Availability.F, []),
  [N.C_ER_PPC]:                 MechEquipmentRecord(N.C_ER_PPC,                 T.PPC,              Tech.Clan, 15, [        15],  1, [ 0,  7, 14, 23],                       [],   0,  6.0,  2, Availability.F, []),
  [N.C_ATM_3]:                  MechEquipmentRecord(N.C_ATM_3,                  T.ATM,              Tech.Clan,  2, [         2],  3, [ 5,  5, 10, 15],              ClanATMAmmo,  20,  1.5,  2, Availability.F, []),
  [N.C_ATM_6]:                  MechEquipmentRecord(N.C_ATM_6,                  T.ATM,              Tech.Clan,  4, [         2],  6, [ 5,  5, 10, 15],              ClanATMAmmo,  10,  3.5,  3, Availability.F, []),
  [N.C_ATM_9]:                  MechEquipmentRecord(N.C_ATM_9,                  T.ATM,              Tech.Clan,  6, [         2],  9, [ 5,  5, 10, 15],              ClanATMAmmo,   7,  5.0,  4, Availability.F, []),
  [N.C_ATM_12]:                 MechEquipmentRecord(N.C_ATM_12,                 T.ATM,              Tech.Clan,  8, [         2], 12, [ 5,  5, 10, 15],              ClanATMAmmo,   5,  7.0,  5, Availability.F, []),
  [N.C_LRM_5]:                  MechEquipmentRecord(N.C_LRM_5,                  T.LRM,              Tech.Clan,  2, [         1],  5, [ 0,  7, 14, 21],              ClanLRMAmmo,  24,  1.0,  1, Availability.F, []),
  [N.C_LRM_10]:                 MechEquipmentRecord(N.C_LRM_10,                 T.LRM,              Tech.Clan,  4, [         1], 10, [ 0,  7, 14, 21],              ClanLRMAmmo,  12,  2.5,  1, Availability.F, []),
  [N.C_LRM_15]:                 MechEquipmentRecord(N.C_LRM_15,                 T.LRM,              Tech.Clan,  5, [         1], 15, [ 0,  7, 14, 21],              ClanLRMAmmo,   8,  3.5,  2, Availability.F, []),
  [N.C_LRM_20]:                 MechEquipmentRecord(N.C_LRM_20,                 T.LRM,              Tech.Clan,  6, [         1], 20, [ 0,  7, 14, 21],              ClanLRMAmmo,   6,  5.0,  4, Availability.F, []),
  [N.C_LRM_5_Artemis_IV]:       MechEquipmentRecord(N.C_LRM_5_Artemis_IV,       T.LRM,              Tech.Clan,  2, [         1],  5, [ 0,  7, 14, 21],       ClanLRMArtemisAmmo,  24,  2.0,  2, Availability.F, []),
  [N.C_LRM_10_Artemis_IV]:      MechEquipmentRecord(N.C_LRM_10_Artemis_IV,      T.LRM,              Tech.Clan,  4, [         1], 10, [ 0,  7, 14, 21],       ClanLRMArtemisAmmo,  12,  3.5,  2, Availability.F, []),
  [N.C_LRM_15_Artemis_IV]:      MechEquipmentRecord(N.C_LRM_15_Artemis_IV,      T.LRM,              Tech.Clan,  5, [         1], 15, [ 0,  7, 14, 21],       ClanLRMArtemisAmmo,   8,  4.5,  3, Availability.F, []),
  [N.C_LRM_20_Artemis_IV]:      MechEquipmentRecord(N.C_LRM_20_Artemis_IV,      T.LRM,              Tech.Clan,  6, [         1], 20, [ 0,  7, 14, 21],       ClanLRMArtemisAmmo,   6,  6.0,  5, Availability.F, []),
  [N.C_SRM_2]:                  MechEquipmentRecord(N.C_SRM_2,                  T.SRM,              Tech.Clan,  2, [         2],  2, [ 0,  3,  6,  9],              ClanSRMAmmo,  50,  0.5,  1, Availability.F, []),
  [N.C_SRM_4]:                  MechEquipmentRecord(N.C_SRM_4,                  T.SRM,              Tech.Clan,  3, [         2],  4, [ 0,  3,  6,  9],              ClanSRMAmmo,  25,  1.0,  1, Availability.F, []),
  [N.C_SRM_6]:                  MechEquipmentRecord(N.C_SRM_6,                  T.SRM,              Tech.Clan,  4, [         2],  6, [ 0,  3,  6,  9],              ClanSRMAmmo,  15,  1.5,  1, Availability.F, []),
  [N.C_SRM_2_Artemis_IV]:      MechEquipmentRecord(N.C_SRM_2_Artemis_IV,        T.SRM,              Tech.Clan,  2, [         2],  2, [ 0,  3,  6,  9],              ClanSRMAmmo,  50,  1.5,  2, Availability.F, []),
  [N.C_SRM_4_Artemis_IV]:      MechEquipmentRecord(N.C_SRM_4_Artemis_IV,        T.SRM,              Tech.Clan,  3, [         2],  4, [ 0,  3,  6,  9],              ClanSRMAmmo,  25,  2.0,  2, Availability.F, []),
  [N.C_SRM_6_Artemis_IV]:      MechEquipmentRecord(N.C_SRM_6_Artemis_IV,        T.SRM,              Tech.Clan,  4, [         2],  6, [ 0,  3,  6,  9],              ClanSRMAmmo,  15,  3.5,  2, Availability.F, []),
  [N.C_Streak_SRM_2]:           MechEquipmentRecord(N.C_Streak_SRM_2,           T.SRM,              Tech.Clan,  2, [         2],  2, [ 0,  4,  8, 12],        ClanStreakSRMAmmo,  50,  1.0,  1, Availability.F, []),
  [N.C_Streak_SRM_4]:           MechEquipmentRecord(N.C_Streak_SRM_4,           T.SRM,              Tech.Clan,  3, [         2],  4, [ 0,  4,  8, 12],        ClanStreakSRMAmmo,  25,  2.0,  1, Availability.F, []),
  [N.C_Streak_SRM_6]:           MechEquipmentRecord(N.C_Streak_SRM_6,           T.SRM,              Tech.Clan,  4, [         2],  6, [ 0,  3,  6,  9],        ClanStreakSRMAmmo,  15,  3.0,  2, Availability.F, []),
  [N.C_AMS]:                    MechEquipmentRecord(N.C_AMS,                    T.AMS,              Tech.Clan,  1, [         1],  1, [ 0,  1, -1, -1],              ClanAMSAmmo,  24,  0.5,  1, Availability.F, []),
  [N.C_LAMS]:                   MechEquipmentRecord(N.C_LAMS,                   T.Laser_AMS,        Tech.Clan,  2, [         1],  1, [ 0,  1, -1, -1],                       [],   0,  1.0,  1, Availability.F, []),
  [N.C_CASE]:                   MechEquipmentRecord(N.C_CASE,                   T.CASE,             Tech.Clan,  0, [         0],  0, [ 0,  0,  0,  0],                       [],   0,  0.0,  0, Availability.F, []),
  [N.C_Active_Probe]:           MechEquipmentRecord(N.C_Active_Probe,           T.Active_Probe,     Tech.Clan,  0, [         0],  0, [ 0,  0,  0,  5],                       [],   0,  1.0,  1, Availability.E, []),
  [N.C_Light_Active_Probe]:     MechEquipmentRecord(N.C_Light_Active_Probe,     T.Active_Probe,     Tech.Clan,  0, [         0],  0, [ 0,  0,  0,  3],                       [],   0,  0.5,  0, Availability.F, []),
  [N.C_ECM_Suite]:              MechEquipmentRecord(N.C_ECM_Suite,              T.ECM_Suite,        Tech.Clan,  0, [         0],  0, [ 0,  0,  0,  6],                       [],   0,  1.0,  1, Availability.F, []),
  [N.C_NARC_Launcher]:          MechEquipmentRecord(N.C_NARC_Launcher,          T.NARC_Launcher,    Tech.Clan,  0, [         0],  1, [ 0,  4,  8, 12],             ClanNARCAmmo,   6,  2.0,  1, Availability.F, []),
  [N.C_TAG]:                    MechEquipmentRecord(N.C_TAG,                    T.TAG,              Tech.Clan,  0, [         0],  0, [ 0,  5,  9, 15],                       [],   0,  1.0,  1, Availability.E, []),
  [N.C_Light_TAG]:              MechEquipmentRecord(N.C_Light_TAG,              T.TAG,              Tech.Clan,  0, [         0],  0, [ 0,  3,  6,  9],                       [],   0,  0.5,  1, Availability.E, []),
  [N.C_LB_X_Autocannon_Ammo]:                 MechEquipmentRecord(N.C_LB_X_Autocannon_Ammo,               T.BallisticAmmo, Tech.Clan, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.C_LB_X_Autocannon_Cluster_Ammo]:         MechEquipmentRecord(N.C_LB_X_Autocannon_Cluster_Ammo,       T.BallisticAmmo, Tech.Clan, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.C_Ultra_Autocannon_Ammo]:                MechEquipmentRecord(N.C_Ultra_Autocannon_Ammo,              T.BallisticAmmo, Tech.Clan, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.C_AP_Gauss_Ammo]:                        MechEquipmentRecord(N.C_AP_Gauss_Ammo,                      T.BallisticAmmo, Tech.Clan, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.C_Gauss_Ammo]:                           MechEquipmentRecord(N.C_Gauss_Ammo,                         T.BallisticAmmo, Tech.Clan, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.C_Hyper_Assault_Gauss_Ammo]:             MechEquipmentRecord(N.C_Hyper_Assault_Gauss_Ammo,           T.BallisticAmmo, Tech.Clan, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.C_Light_Machine_Gun_Ammo]:               MechEquipmentRecord(N.C_Light_Machine_Gun_Ammo,             T.BallisticAmmo, Tech.Clan, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.C_Machine_Gun_Ammo]:                     MechEquipmentRecord(N.C_Machine_Gun_Ammo,                   T.BallisticAmmo, Tech.Clan, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.C_Heavy_Machine_Gun_Ammo]:               MechEquipmentRecord(N.C_Heavy_Machine_Gun_Ammo,             T.BallisticAmmo, Tech.Clan, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.C_AMS_Ammo]:                             MechEquipmentRecord(N.C_AMS_Ammo,                           T.BallisticAmmo, Tech.Clan, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.C_Vehicle_Flamer_Ammo]:                  MechEquipmentRecord(N.C_Vehicle_Flamer_Ammo,                   T.EnergyAmmo, Tech.Clan, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.C_Plasma_Cannon_Ammo]:                   MechEquipmentRecord(N.C_Plasma_Cannon_Ammo,                    T.EnergyAmmo, Tech.Clan, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.C_LRM_Ammo]:                             MechEquipmentRecord(N.C_LRM_Ammo,                             T.MissileAmmo, Tech.Clan, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.C_LRM_Artemis_Ammo]:                     MechEquipmentRecord(N.C_LRM_Artemis_Ammo,                     T.MissileAmmo, Tech.Clan, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.C_LRM_Fragmentation_Ammo]:               MechEquipmentRecord(N.C_LRM_Fragmentation_Ammo,               T.MissileAmmo, Tech.Clan, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.C_LRM_SWARM_Ammo]:                       MechEquipmentRecord(N.C_LRM_SWARM_Ammo,                       T.MissileAmmo, Tech.Clan, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.C_LRM_Flare_Ammo]:                       MechEquipmentRecord(N.C_LRM_Flare_Ammo,                       T.MissileAmmo, Tech.Clan, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.C_ATM_Ammo]:                             MechEquipmentRecord(N.C_ATM_Ammo,                             T.MissileAmmo, Tech.Clan, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.C_ATM_ER_Ammo]:                          MechEquipmentRecord(N.C_ATM_ER_Ammo,                          T.MissileAmmo, Tech.Clan, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.C_ATM_HE_Ammo]:                          MechEquipmentRecord(N.C_ATM_HE_Ammo,                          T.MissileAmmo, Tech.Clan, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.C_SRM_Ammo]:                             MechEquipmentRecord(N.C_SRM_Ammo,                             T.MissileAmmo, Tech.Clan, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.C_SRM_Artemis_Ammo]:                     MechEquipmentRecord(N.C_SRM_Artemis_Ammo,                     T.MissileAmmo, Tech.Clan, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.C_SRM_Fragmentation_Ammo]:               MechEquipmentRecord(N.C_SRM_Fragmentation_Ammo,               T.MissileAmmo, Tech.Clan, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.C_SRM_Harpoon_Ammo]:                     MechEquipmentRecord(N.C_SRM_Harpoon_Ammo,                     T.MissileAmmo, Tech.Clan, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.C_SRM_Inferno_Ammo]:                     MechEquipmentRecord(N.C_SRM_Inferno_Ammo,                     T.MissileAmmo, Tech.Clan, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.C_Streak_SRM_Ammo]:                      MechEquipmentRecord(N.C_Streak_SRM_Ammo,                      T.MissileAmmo, Tech.Clan, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
  [N.C_NARC_Ammo]:                            MechEquipmentRecord(N.C_NARC_Ammo,                            T.MissileAmmo, Tech.Clan, 0, [0], 0, [0, 0, 0, 0], [], 0, 1.0, 1, Availability.X, []),
}

export const getEquipmentMeta = (equipment: MechEquipmentName): Readonly<IMechEquipmentRecord> => {
  if (MechEquipmentTable[equipment] != null) {
    return MechEquipmentTable[equipment]
  } else {
    throw new Error(`Equipment '${equipment}' meta data not found!`)
  }
}

export const getEquipmentType = (equipment: MechEquipmentName): MechEquipmentType => {
  const lookup = MechEquipmentTable[equipment]
  if (lookup != null) {
    const type = (lookup as IMechEquipmentRecord).type
    if ([T.Autocannon, T.Gauss_Rifle, T.Machine_Gun, T.AMS, T.TAG].includes(type)) {
      return T.Ballistic
    } else if ([T.Laser, T.Flamer, T.Plasma, T.PPC, T.Laser_AMS].includes(type)) {
      return T.Energy
    } else if ([T.LRM, T.SRM, T.Rocket_Launcher, T.MML, T.ATM, T.MRM].includes(type)) {
      return T.Missile
    } else if ([T.BallisticAmmo, T.EnergyAmmo, T.MissileAmmo].includes(type)) {
      return type
    } else {
      return T.Electronics
    }
  } else {
    throw new Error(`Equipment '${equipment}' meta data not found!`)
  }
}

export const getEquipmentTonnage = (mechTonnage: MechTonnage, equipment: MechEquipmentName): number => {
  const eq = getEquipmentMeta(equipment)
  if (eq.type === T.Jump_Jet) {
    const tonnage = (() => {
      if (mechTonnage < 60) {
        return 0.5
      } else if (mechTonnage < 90) {
        return 1.0
      } else {
        return 2.0
      }
    })()

    return eq.name === N.Improved_Jump_Jet
      ? 2.0 * tonnage
      : tonnage
  } else {
    return eq.tonnage
  }
}

export const getEquipmentCriticals = (mechTonnage: MechTonnage, tech: Tech, equipment: MechEquipmentName): number => {
  const eq = getEquipmentMeta(equipment)
  if (eq.type === T.Heatsink) {
    if (eq.name === N.Double_Heatsink) {
      if (tech === Tech.Clan) {
        return 2
      } else {
        return 3
      }
    }
  }
  return eq.criticals
}
