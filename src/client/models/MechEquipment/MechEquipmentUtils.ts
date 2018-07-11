import { identity } from '../../lib/functional'
import { MechClass } from '../common/MechClass'
import { getMechBipedComponents, getMechQuadrupedComponents, getMechTripodComponents, MechComponent } from '../common/MechComponent'
import { MechType } from '../common/MechType'
import { Tech } from '../common/Tech'
import { HeatsinkType } from '../Heatsink'
import { JumpJetType } from '../JumpJets'
import { MechLoadout, MechTonnage } from '../Mech'
import { MissileGuidenceType } from '../MissileGuidenceType'
import { getEquipmentTonnage } from './index'
import { AmmoType, EquipmentType, MechEquipmentName, MechEquipmentName as E, WeaponType } from './MechEquipmentName'

export const getAvailableEquipmentTypes = (
  tech: Tech,
  mechClass: MechClass,
  heatsinkType: HeatsinkType,
  jumpJetType: JumpJetType,
): EquipmentType[] => {
  const commonEquipment = [
    heatsinkType === HeatsinkType.Single ? E.Single_Heatsink : E.Double_Heatsink,
    mechClass !== MechClass.SuperHeavy
      ? (jumpJetType === JumpJetType.Standard
        ? E.Jump_Jet
        : E.Improved_Jump_Jet)
      : null,
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
    E.NARC_Launcher,
    E.Improved_NARC_Launcher,
    E.TAG,
    // E.Targeting_Computer,
  ] as EquipmentType[]

  const clanEquipment = [
    E.C_AMS,
    E.C_LAMS,
    E.C_Active_Probe,
    E.C_Light_Active_Probe,
    // E.C_CASE,
    E.C_ECM_Suite,
    E.C_TAG,
    E.C_NARC_Launcher,
    E.C_Light_TAG,
    // E.C_Targeting_Computer,
  ] as EquipmentType[]

  return [
    ...commonEquipment,
    ...(tech === Tech.IS
      ? innerSphereEquipment
      : clanEquipment
    ),
  ]
}

export const getAvailableWeaponTypes = (tech: Tech, missileGuidanceType: MissileGuidenceType): WeaponType[] => {
  const innerSphereMissiles = missileGuidanceType === MissileGuidenceType.Standard
    ? [
      E.LRM_5, E.LRM_10, E.LRM_15, E.LRM_20,
      E.MML_3, E.MML_5, E.MML_7, E.MML_9,
      E.SRM_2, E.SRM_4, E.SRM_6,
    ]
    : [
      E.LRM_5_Artemis_IV, E.LRM_10_Artemis_IV, E.LRM_15_Artemis_IV, E.LRM_20_Artemis_IV,
      E.MML_3_Artemis_IV, E.MML_5_Artemis_IV, E.MML_7_Artemis_IV, E.MML_9_Artemis_IV,
      E.SRM_2_Artemis_IV, E.SRM_4_Artemis_IV, E.SRM_6_Artemis_IV,
    ]
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
    ...innerSphereMissiles,
    E.Streak_SRM_2, E.Streak_SRM_4, E.Streak_SRM_6,
    E.MRM_10, E.MRM_20, E.MRM_30, E.MRM_40,
    E.Rocket_Launcher_10, E.Rocket_Launcher_15, E.Rocket_Launcher_20,
  ] as WeaponType[]

  const clanMissiles = missileGuidanceType === MissileGuidenceType.Standard
    ? [
      E.C_LRM_5, E.C_LRM_10, E.C_LRM_15, E.C_LRM_20,
      E.C_SRM_2, E.C_SRM_4, E.C_SRM_6,
    ]
    : [
      E.C_LRM_5_Artemis_IV, E.C_LRM_10_Artemis_IV, E.C_LRM_15_Artemis_IV, E.C_LRM_20_Artemis_IV,
      E.C_SRM_2_Artemis_IV, E.C_SRM_4_Artemis_IV, E.C_SRM_6_Artemis_IV,
    ]
  const clanWeaponTypes = [
    E.C_ER_Micro_Laser, E.C_ER_Small_Laser, E.C_ER_Medium_Laser, E.C_ER_Large_Laser,
    E.C_Micro_Pulse_Laser, E.C_Small_Pulse_Laser, E.C_Medium_Pulse_Laser, E.C_Large_Pulse_Laser,
    E.C_Heavy_Small_Laser, E.C_Heavy_Medium_Laser, E.C_Heavy_Large_Laser,
    E.C_Flamer, E.C_Vehicle_Flamer,
    E.C_Plasma_Cannon,
    E.C_ER_PPC,
    E.C_LB_2X_Autocannon, E.C_LB_5X_Autocannon, E.C_LB_10X_Autocannon, E.C_LB_20X_Autocannon,
    E.C_Ultra_Autocannon_2, E.C_Ultra_Autocannon_5, E.C_Ultra_Autocannon_10, E.C_Ultra_Autocannon_20,
    E.C_AP_Gauss_Rifle, E.C_Gauss_Rifle, E.C_Hyper_Assault_Gauss_20, E.C_Hyper_Assault_Gauss_30, E.C_Hyper_Assault_Gauss_40,
    E.C_Light_Machine_Gun, E.C_Machine_Gun, E.C_Heavy_Machine_Gun,
    E.C_ATM_3, E.C_ATM_6, E.C_ATM_9, E.C_ATM_12,
    ...clanMissiles,
    E.C_Streak_SRM_2, E.C_Streak_SRM_4, E.C_Streak_SRM_6,
  ] as WeaponType[]

  return tech === Tech.IS
    ? innerSphereWeaponTypes
    : clanWeaponTypes
}

export const getAvailableAmmoTypes = (tech: Tech, missileGuidanceType: MissileGuidenceType): AmmoType[] => {
  const innerSphereMissileAmmo = missileGuidanceType === MissileGuidenceType.Standard
    ? [
      E.LRM_Ammo,
      E.LRM_Fragmentation_Ammo,
      E.LRM_Incendiary_Ammo,
      E.LRM_SWARM_Ammo,
      E.LRM_Flare_Ammo,
      E.SRM_Ammo,
      E.SRM_Fragmentation_Ammo,
      E.SRM_Harpoon_Ammo,
      E.SRM_Inferno_Ammo,
    ]
    : [
      E.LRM_Artemis_Ammo,
      E.SRM_Artemis_Ammo,
    ]
  const innerSphereAmmoTypes = [
    E.Autocannon_Ammo,
    E.Autocannon_Armor_Piercing_Ammo,
    E.Autocannon_Flechette_Ammo,
    E.Autocannon_Precision_Ammo,
    E.LB_X_Autocannon_Ammo,
    E.LB_X_Autocannon_Cluster_Ammo,
    E.Light_Autocannon_Ammo,
    E.Light_Autocannon_Armor_Piercing_Ammo,
    E.Light_Autocannon_Flechette_Ammo,
    E.Light_Autocannon_Precision_Ammo,
    E.Rotary_Autocannon_Ammo,
    E.Ultra_Autocannon_Ammo,
    E.Light_Gauss_Ammo,
    E.Gauss_Ammo,
    E.Heavy_Gauss_Ammo,
    E.Light_Machine_Gun_Ammo,
    E.Light_Machine_Gun_Ammo_Half,
    E.Machine_Gun_Ammo,
    E.Machine_Gun_Ammo_Half,
    E.Heavy_Machine_Gun_Ammo,
    E.Heavy_Machine_Gun_Ammo_Half,
    E.Vehicle_Flamer_Ammo,
    E.Plasma_Rifle_Ammo,
    ...innerSphereMissileAmmo,
    E.MRM_Ammo,
    E.Streak_SRM_Ammo,
    E.AMS_Ammo,
    E.NARC_Ammo,
    E.NARC_Explosive_Ammo,
    E.NARC_ECM_Ammo,
    E.NARC_Haywire_Ammo,
    E.NARC_Nemesis_Ammo,
  ] as AmmoType[]

  const clanMissileAmmo = missileGuidanceType === MissileGuidenceType.Standard
    ? [
      E.C_LRM_Ammo,
      E.C_LRM_Fragmentation_Ammo,
      E.C_LRM_SWARM_Ammo,
      E.C_LRM_Flare_Ammo,
      E.C_SRM_Ammo,
      E.C_SRM_Fragmentation_Ammo,
      E.C_SRM_Harpoon_Ammo,
      E.C_SRM_Inferno_Ammo,
    ]
    : [
      E.C_LRM_Artemis_Ammo,
      E.C_SRM_Artemis_Ammo,
    ]

  const clanAmmoTypes = [
    E.C_LB_X_Autocannon_Ammo,
    E.C_LB_X_Autocannon_Cluster_Ammo,
    E.C_Ultra_Autocannon_Ammo,
    E.C_Gauss_Ammo,
    E.C_AP_Gauss_Ammo,
    E.C_Hyper_Assault_Gauss_Ammo,
    E.C_Light_Machine_Gun_Ammo,
    E.C_Light_Machine_Gun_Ammo_Half,
    E.C_Machine_Gun_Ammo,
    E.C_Machine_Gun_Ammo_Half,
    E.C_Heavy_Machine_Gun_Ammo,
    E.C_Heavy_Machine_Gun_Ammo_Half,
    E.C_Vehicle_Flamer_Ammo,
    E.C_Plasma_Cannon_Ammo,
    ...clanMissileAmmo,
    E.C_Streak_SRM_Ammo,
    E.C_ATM_Ammo,
    E.C_ATM_ER_Ammo,
    E.C_ATM_HE_Ammo,
    E.C_AMS_Ammo,
    E.C_NARC_Ammo,
  ] as AmmoType[]

  return tech === Tech.IS
    ? innerSphereAmmoTypes
    : clanAmmoTypes
}

const sumEquipmentTonnage = (mechTonnage: MechTonnage) => (equipment: MechEquipmentName[]): number => {
  return equipment.reduce((total, equipment) => {
    const tonnage = [E.Single_Heatsink, E.Double_Heatsink].includes(equipment)
      ? 0
      : getEquipmentTonnage(mechTonnage, equipment)

    return total + tonnage
  }, 0)
}

const getAllMechComponents = (mechType: MechType, loadout: MechLoadout): MechComponent[] => {
  switch (mechType) {
  case MechType.Bipedal: return getMechBipedComponents()
  case MechType.Tripod: return getMechTripodComponents()
  case MechType.Quadrupedal: return getMechQuadrupedComponents()
  }
}

export const getLoadoutTonnage = (mechTonnage: MechTonnage, mechType: MechType, loadout: MechLoadout): number => {
  return getAllMechComponents(mechType, loadout)
    .map(component => loadout[component].equipment as MechEquipmentName[])
    .map(sumEquipmentTonnage(mechTonnage))
    .reduce((s, t) => s + t, 0)
}

export const getLoadoutInternalStructureCriticals = (mechType: MechType, loadout: MechLoadout): number => {
  return getAllMechComponents(mechType, loadout)
    .map(component => loadout[component].equipment as MechEquipmentName[])
    .reduce((memo, equipment) => [...memo, ...equipment], [])
    .reduce((total, equipment) => total + (equipment === E.Internal_Structure ? 1 : 0), 0)
}

export const getLoadoutArmorCriticals = (mechType: MechType, loadout: MechLoadout): number => {
  return getAllMechComponents(mechType, loadout)
    .map(component => loadout[component].equipment as MechEquipmentName[])
    .reduce((memo, equipment) => [...memo, ...equipment], [])
    .reduce((total, equipment) => total + (equipment === E.Armor ? 1 : 0), 0)
}

export const geLoadoutHeatsinks = (mechType: MechType, loadout: MechLoadout): number => {
  return getAllMechComponents(mechType, loadout)
    .map(component => loadout[component].equipment as MechEquipmentName[])
    .reduce((memo, equipment) => [...memo, ...equipment], [])
    .reduce((memo, equipment) => memo + (([E.Single_Heatsink, E.Double_Heatsink].includes(equipment) ? 1 : 0)), 0)
}
