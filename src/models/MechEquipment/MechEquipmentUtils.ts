import { identity } from '../../lib/functional'
import { MechClass } from '../common/MechClass'
import { Tech } from '../common/Tech'
import { HeatsinkType } from '../Heatsink'
import { AmmoType, EquipmentType, MechEquipmentName as E, WeaponType } from './MechEquipmentName'

export const getAvailableEquipmentTypes = (
  tech: Tech,
  mechClass: MechClass,
  heatsinkType: HeatsinkType,
): EquipmentType[] => {
  const commonEquipment = [
    heatsinkType === HeatsinkType.Single ? E.Single_Heatsink : E.Double_Heatsink,
    mechClass !== MechClass.SuperHeavy ? E.Jump_Jet : null,
    mechClass !== MechClass.SuperHeavy ? E.Improved_Jump_Jet : null,
    E.Internal_Structure,
    E.Armor,
  ].filter(identity) as EquipmentType[]

  const innerSphereEquipment = [
    E.AMS,
    E.LAMS,
    E.Beagle_Active_Probe,
    E.CASE,
    E.C3_Computer_Master,
    E.C3_Computer_Slave,
    E.Improved_C3_Computer,
    E.Guardian_ECM_Suite,
    E.MASC,
    E.Narc_Launcher,
    E.Improved_Narc_Launcher,
    E.TAG,
    E.Artemis_IV,
    E.Targeting_Computer,
  ] as EquipmentType[]

  const clanEquipment = [
    E.C_AMS,
    E.C_LAMS,
    E.C_Active_Probe,
    E.C_Light_Active_Probe,
    E.C_ECM_Suite,
    E.C_MASC,
    E.C_TAG,
    E.C_Light_TAG,
    E.C_Targeting_Computer,
    E.C_Artemis_IV,
  ] as EquipmentType[]

  return [
    ...commonEquipment,
    ...(tech === Tech.IS
      ? innerSphereEquipment
      : clanEquipment
    ),
  ]
}

export const getAvailableWeaponTypes = (tech: Tech): WeaponType[] => {
  const innerSphereWeaponTypes = [
    E.ER_Small_Laser, E.ER_Medium_Laser, E.ER_Large_Laser,
    E.Small_Laser, E.Medium_Laser, E.Large_Laser,
    E.Small_Pulse_Laser, E.Medium_Pulse_Laser, E.Large_Pulse_Laser,
    E.Flamer, E.Vehicle_Flamer,
    E.Plasma_Rifle,
    E.Light_PPC, E.PPC, E.Heavy_PPC, E.ER_PPC, E.Snub_Nose_PPC,
    E.Autocannon_2, E.Autocannon_5, E.Autocannon_10, E.Autocannon_20,
    E.LB_2X_Autocannon, E.LB_5X_Autocannon, E.LB_10X_Autocannon, E.LB_20X_Autocannon,
    E.Light_Autocannon_2, E.Light_Autocannon_5,
    E.Rotary_Autocannon_2, E.Rotary_Autocannon_5,
    E.Ultra_Autocannon_2, E.Ultra_Autocannon_5, E.Ultra_Autocannon_10, E.Ultra_Autocannon_20,
    E.Light_Gauss_Rifle, E.Gauss_Rifle, E.Heavy_Gauss_Rifle,
    E.Light_Machine_Gun, E.Machine_Gun, E.Heavy_Machine_Gun,
    E.LRM_5, E.LRM_10, E.LRM_15, E.LRM_20,
    E.MML_3, E.MML_5, E.MML_7, E.MML_9,
    E.SRM_2, E.SRM_4, E.SRM_6,
    E.Streak_SRM_2, E.Streak_SRM_4, E.Streak_SRM_6,
    E.MRM_10, E.MRM_20, E.MRM_30, E.MRM_40,
    E.Rocket_Launcher_10, E.Rocket_Launcher_15, E.Rocket_Launcher_20,
  ] as WeaponType[]

  const clanWeaponTypes = [
    E.C_ER_Micro_Laser, E.C_ER_Small_Laser, E.C_ER_Medium_Laser, E.C_ER_Large_Laser,
    E.C_Micro_Pulse_Laser, E.C_Small_Pulse_Laser, E.C_Medium_Pulse_Laser, E.C_Large_Pulse_Laser,
    E.C_Heavy_Small_Laser, E.C_Heavy_Medium_Laser, E.C_Heavy_Large_Laser,
    E.C_Flamer, E.C_Vehicle_Flamer,
    E.C_Plasma_Cannon,
    E.C_ER_PPC,
    E.C_Autocannon_2, E.C_Autocannon_5, E.C_Autocannon_10, E.C_Autocannon_20,
    E.C_LB_2X_Autocannon, E.C_LB_5X_Autocannon, E.C_LB_10X_Autocannon, E.C_LB_20X_Autocannon,
    E.C_Ultra_Autocannon_2, E.C_Ultra_Autocannon_5, E.C_Ultra_Autocannon_10, E.C_Ultra_Autocannon_20,
    E.C_AP_Gauss_Rifle, E.C_Gauss_Rifle, E.C_Hyper_Assault_Gauss_20, E.C_Hyper_Assault_Gauss_30, E.C_Hyper_Assault_Gauss_40,
    E.C_Light_Machine_Gun, E.C_Machine_Gun, E.C_Heavy_Machine_Gun,
    E.C_ATM_3, E.C_ATM_6, E.C_ATM_9, E.C_ATM_12,
    E.C_LRM_5, E.C_LRM_10, E.C_LRM_15, E.C_LRM_20,
    E.C_SRM_2, E.C_SRM_4, E.C_SRM_6,
    E.C_Streak_SRM_2, E.C_Streak_SRM_4, E.C_Streak_SRM_6,
  ] as WeaponType[]

  return tech === Tech.IS
    ? innerSphereWeaponTypes
    : clanWeaponTypes
}

export const getAvailableAmmoTypes = (tech: Tech): AmmoType[] => {
  const commonAmmoTypes = [
    E.Vehicle_Flamer_Ammo,
    E.Autocannon_Ammo,
    E.LB_X_Autocannon_Ammo,
    E.LB_X_Autocannon_Cluster_Ammo,
    E.Ultra_Autocannon_Ammo,
    E.Gauss_Ammo,
    E.Light_Machine_Gun_Ammo,
    E.Machine_Gun_Ammo,
    E.Heavy_Machine_Gun_Ammo,
    E.LRM_Ammo,
    E.LRM_Fragmentation_Ammo,
    E.LRM_SWARM_Ammo,
    E.LRM_Flare_Ammo,
    E.SRM_Ammo,
    E.SRM_Fragmentation_Ammo,
    E.SRM_Harpoon_Ammo,
    E.SRM_Inferno_Ammo,
    E.Streak_SRM_Ammo,
    E.AMS_Ammo,
  ] as AmmoType[]

  const innerSphereAmmoTypes = [
    E.Plasma_Rifle_Ammo,
    E.Autocannon_Armor_Piercing_Ammo,
    E.Autocannon_Flechette_Ammo,
    E.Autocannon_Precision_Ammo,
    E.Light_Autocannon_Ammo,
    E.Light_Autocannon_Armor_Piercing_Ammo,
    E.Light_Autocannon_Flechette_Ammo,
    E.Light_Autocannon_Precision_Ammo,
    E.Rotary_Autocannon_Ammo,
    E.Light_Gauss_Ammo,
    E.Heavy_Gauss_Ammo,
    E.LRM_Incendiary_Ammo,
    E.MRM_Ammo,
    E.NARC_Ammo,
    E.NARC_Explosive_Ammo,
    E.NARC_ECM_Ammo,
    E.NARC_Haywire_Ammo,
    E.NARC_Nemesis_Ammo,
  ] as AmmoType[]

  const clanAmmoTypes = [
    E.Plasma_Cannon_Ammo,
    E.AP_Gauss_Ammo,
    E.Hyper_Assault_Gauss_Ammo,

    E.ATM_Ammo,
    E.ATM_ER_Ammo,
    E.ATM_HE_Ammo,
  ] as AmmoType[]

  return [
    ...commonAmmoTypes,
    ...(tech === Tech.IS
      ? innerSphereAmmoTypes
      : clanAmmoTypes
    ),
  ]
}