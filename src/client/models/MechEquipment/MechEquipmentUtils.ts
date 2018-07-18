import { identity } from '../../lib/functional'
import { MechClass } from '../common/MechClass'
import { getMechBipedComponents, getMechQuadrupedComponents, getMechTripodComponents, MechComponent } from '../common/MechComponent'
import { MechType } from '../common/MechType'
import { Tech } from '../common/Tech'
import { HeatsinkType } from '../Heatsink'
import { JumpJetType } from '../JumpJets'
import { MechLoadout, MechTonnage } from '../Mech'
import { MissileGuidenceType } from '../MissileGuidenceType'
import { EquipmentType } from './Equipment'
import { AmmoName, GearClass, GearName, WeaponName } from './GearName'
import { getGearData, getGearTonnage } from './index'
import { IWeapon, WeaponType } from './Weapons'

export const getAvailableEquipmentNames = (
  tech: Tech,
  mechClass: MechClass,
  heatsinkType: HeatsinkType,
  jumpJetType: JumpJetType,
): GearName[] => {

  const innerSphereEquipment = [
    heatsinkType === HeatsinkType.Single ? GearName.IS_Single_Heatsink : GearName.IS_Double_Heatsink,
    mechClass !== MechClass.SuperHeavy && (jumpJetType === JumpJetType.Standard ? GearName.IS_Jump_Jet : GearName.IS_Improved_Jump_Jet),
    GearName.IS_Endo_Steel,
    // #TODO: pass in the whole mech to detect wther to show different armor
    GearName.IS_Ferro_Fibrous,
    GearName.IS_Light_Ferro,
    GearName.IS_Heavy_Ferro,
    GearName.IS_Stealth_Armor,
    GearName.IS_Beagle_Active_Probe,
    GearName.IS_CASE,
    GearName.IS_MASC,
    GearName.IS_TSM,
    GearName.IS_C3_Master_Computer,
    GearName.IS_C3_Slave_Computer,
    GearName.IS_Improved_C3_Computer,
    GearName.IS_Guardian_ECM,
    GearName.IS_Targeting_Computer,
    GearName.IS_TAG,
  ].filter(identity) as GearName[]

  const clanEquipment = [
    heatsinkType === HeatsinkType.Single ? GearName.C_Single_Heatsink : GearName.C_Double_Heatsink,
    mechClass !== MechClass.SuperHeavy && (jumpJetType === JumpJetType.Standard ? GearName.C_Jump_Jet : GearName.C_Improved_Jump_Jet),
    GearName.C_Endo_Steel,
    GearName.C_Ferro_Fibrous,
    GearName.C_Active_Probe,
    GearName.C_Light_Active_Probe,
    GearName.C_MASC,
    GearName.C_ECM_Suite,
    GearName.C_Targeting_Computer,
    GearName.C_TAG,
    GearName.C_Light_TAG,
  ].filter(identity) as GearName[]

  return [
    ...(tech === Tech.IS
      ? innerSphereEquipment
      : clanEquipment
    ),
  ]
}

export const getAvailableWeaponNames = (tech: Tech, missileGuidanceType: MissileGuidenceType): WeaponName[] => {
  const innerSphereMissiles = missileGuidanceType === MissileGuidenceType.Standard
    ? [
      GearName.IS_LRM_5, GearName.IS_LRM_10, GearName.IS_LRM_15, GearName.IS_LRM_20,
      GearName.IS_SRM_2, GearName.IS_SRM_4, GearName.IS_SRM_6,
      GearName.IS_MML_3, GearName.IS_MML_5, GearName.IS_MML_7, GearName.IS_MML_9,
    ]
    : [
      GearName.IS_LRM_5_Artemis_IV, GearName.IS_LRM_10_Artemis_IV, GearName.IS_LRM_15_Artemis_IV, GearName.IS_LRM_20_Artemis_IV,
      GearName.IS_SRM_2_Artemis_IV, GearName.IS_SRM_4_Artemis_IV, GearName.IS_SRM_6_Artemis_IV,
      GearName.IS_MML_3_Artemis_IV, GearName.IS_MML_5_Artemis_IV, GearName.IS_MML_7_Artemis_IV, GearName.IS_MML_9_Artemis_IV,
    ]

  const innerSphereWeaponTypes = [
    GearName.IS_Autocannon_2, GearName.IS_Autocannon_5, GearName.IS_Autocannon_10, GearName.IS_Autocannon_20,
    GearName.IS_LB_2X_Autocannon, GearName.IS_LB_5X_Autocannon, GearName.IS_LB_10X_Autocannon, GearName.IS_LB_20X_Autocannon,
    GearName.IS_Light_Autocannon_2, GearName.IS_Light_Autocannon_5,
    GearName.IS_Rotary_Autocannon_2, GearName.IS_Rotary_Autocannon_5,
    GearName.IS_Ultra_Autocannon_2, GearName.IS_Ultra_Autocannon_5, GearName.IS_Ultra_Autocannon_10, GearName.IS_Ultra_Autocannon_20,
    GearName.IS_Gauss_Rifle, GearName.IS_Light_Gauss_Rifle, GearName.IS_Heavy_Gauss_Rifle,
    GearName.IS_Machine_Gun, GearName.IS_Light_Machine_Gun, GearName.IS_Heavy_Machine_Gun,
    GearName.IS_AMS,
    GearName.IS_ER_Small_Laser, GearName.IS_ER_Medium_Laser, GearName.IS_ER_Large_Laser,
    GearName.IS_Small_Laser, GearName.IS_Medium_Laser, GearName.IS_Large_Laser,
    GearName.IS_Small_Pulse_Laser, GearName.IS_Medium_Pulse_Laser, GearName.IS_Large_Pulse_Laser,
    GearName.IS_Flamer,
    GearName.IS_Vehicle_Flamer,
    GearName.IS_Plasma_Rifle,
    GearName.IS_PPC, GearName.IS_Light_PPC, GearName.IS_Heavy_PPC, GearName.IS_ER_PPC, GearName.IS_Snub_Nose_PPC,
    GearName.IS_LAMS,
    ...innerSphereMissiles,
    GearName.IS_MRM_10, GearName.IS_MRM_20, GearName.IS_MRM_30, GearName.IS_MRM_40,
    GearName.IS_Streak_SRM_2, GearName.IS_Streak_SRM_4, GearName.IS_Streak_SRM_6,
    GearName.IS_Rocket_Launcher_10, GearName.IS_Rocket_Launcher_15, GearName.IS_Rocket_Launcher_20,
    GearName.IS_NARC_Launcher,
    GearName.IS_Improved_NARC_Launcher,
  ] as WeaponName[]

  const clanMissiles = missileGuidanceType === MissileGuidenceType.Standard
    ? [
      GearName.C_LRM_5, GearName.C_LRM_10, GearName.C_LRM_15, GearName.C_LRM_20,
      GearName.C_SRM_2, GearName.C_SRM_4, GearName.C_SRM_6,
    ]
    : [
      GearName.C_LRM_5_Artemis_IV, GearName.C_LRM_10_Artemis_IV, GearName.C_LRM_15_Artemis_IV, GearName.C_LRM_20_Artemis_IV,
      GearName.C_SRM_2_Artemis_IV, GearName.C_SRM_4_Artemis_IV, GearName.C_SRM_6_Artemis_IV,
    ]

  const clanWeaponTypes = [
    GearName.C_LB_2X_Autocannon, GearName.C_LB_5X_Autocannon, GearName.C_LB_10X_Autocannon, GearName.C_LB_20X_Autocannon,
    GearName.C_Ultra_Autocannon_2, GearName.C_Ultra_Autocannon_5, GearName.C_Ultra_Autocannon_10, GearName.C_Ultra_Autocannon_20,
    GearName.C_Gauss_Rifle,
    GearName.C_AP_Gauss_Rifle,
    GearName.C_Hyper_Assault_Gauss_20, GearName.C_Hyper_Assault_Gauss_30, GearName.C_Hyper_Assault_Gauss_40,
    GearName.C_Machine_Gun, GearName.C_Light_Machine_Gun, GearName.C_Heavy_Machine_Gun,
    GearName.C_AMS,
    GearName.C_ER_Micro_Laser, GearName.C_ER_Small_Laser, GearName.C_ER_Medium_Laser, GearName.C_ER_Large_Laser,
    GearName.C_Micro_Pulse_Laser, GearName.C_Small_Pulse_Laser, GearName.C_Medium_Pulse_Laser, GearName.C_Large_Pulse_Laser,
    GearName.C_Heavy_Small_Laser, GearName.C_Heavy_Medium_Laser, GearName.C_Heavy_Large_Laser,
    GearName.C_Flamer,
    GearName.C_Vehicle_Flamer,
    GearName.C_Plasma_Cannon,
    GearName.C_ER_PPC,
    GearName.C_LAMS,
    ...clanMissiles,
    GearName.C_Streak_SRM_2, GearName.C_Streak_SRM_4, GearName.C_Streak_SRM_6,
    GearName.C_ATM_3, GearName.C_ATM_6, GearName.C_ATM_9, GearName.C_ATM_12,
    GearName.C_NARC_Launcher,
  ] as WeaponName[]

  return tech === Tech.IS
    ? innerSphereWeaponTypes
    : clanWeaponTypes
}

export const getAvailableAmmoNames = (tech: Tech, missileGuidanceType: MissileGuidenceType): AmmoName[] => {
  const innerSphereMissileAmmo = missileGuidanceType === MissileGuidenceType.Standard
    ? [
      GearName.IS_LRM_Ammo,
      GearName.IS_LRM_Fragmentation_Ammo,
      GearName.IS_LRM_Incendiary_Ammo,
      GearName.IS_LRM_SWARM_Ammo,
      GearName.IS_LRM_Flare_Ammo,
      GearName.IS_SRM_Ammo,
      GearName.IS_SRM_Fragmentation_Ammo,
      GearName.IS_SRM_Inferno_Ammo,
    ]
    : [GearName.IS_LRM_Artemis_Ammo, GearName.IS_SRM_Artemis_Ammo]

  const innerSphereAmmoTypes = [
    GearName.IS_AC2_Ammo, GearName.IS_AC2_AP_Ammo, GearName.IS_AC2_Flechette_Ammo, GearName.IS_AC2_Precision_Ammo,
    GearName.IS_AC5_Ammo, GearName.IS_AC5_AP_Ammo, GearName.IS_AC5_Flechette_Ammo, GearName.IS_AC5_Precision_Ammo,
    GearName.IS_AC10_Ammo, GearName.IS_AC10_AP_Ammo, GearName.IS_AC10_Flechette_Ammo, GearName.IS_AC10_Precision_Ammo,
    GearName.IS_AC20_Ammo, GearName.IS_AC20_AP_Ammo, GearName.IS_AC20_Flechette_Ammo, GearName.IS_AC20_Precision_Ammo,
    GearName.IS_LB_2X_AC_Ammo, GearName.IS_LB_2X_AC_Cluster_Ammo,
    GearName.IS_LB_5X_AC_Ammo, GearName.IS_LB_5X_AC_Cluster_Ammo,
    GearName.IS_LB_10X_AC_Ammo, GearName.IS_LB_10X_AC_Cluster_Ammo,
    GearName.IS_LB_20X_AC_Ammo, GearName.IS_LB_20X_AC_Cluster_Ammo,
    GearName.IS_LAC2_Ammo, GearName.IS_LAC2_AP_Ammo, GearName.IS_LAC2_Flechette_Ammo, GearName.IS_LAC2_Precision_Ammo,
    GearName.IS_LAC5_Ammo, GearName.IS_LAC5_AP_Ammo, GearName.IS_LAC5_Flechette_Ammo, GearName.IS_LAC5_Precision_Ammo,
    GearName.IS_RAC2_Ammo,
    GearName.IS_RAC5_Ammo,
    GearName.IS_UAC2_Ammo,
    GearName.IS_UAC5_Ammo,
    GearName.IS_UAC10_Ammo,
    GearName.IS_UAC20_Ammo,
    GearName.IS_Light_Gauss_Ammo,
    GearName.IS_Gauss_Ammo,
    GearName.IS_Heavy_Gauss_Ammo,
    GearName.IS_LMG_Ammo,
    GearName.IS_LMG_Half_Ammo,
    GearName.IS_MG_Ammo,
    GearName.IS_MG_Half_Ammo,
    GearName.IS_HMG_Ammo,
    GearName.IS_HMG_Half_Ammo,
    GearName.IS_AMS_Ammo,
    GearName.IS_Flamer_Ammo,
    GearName.IS_Plasma_Rifle_Ammo,
    ...innerSphereMissileAmmo,
    GearName.IS_MRM_Ammo,
    GearName.IS_Streak_SRM_Ammo,
    GearName.IS_NARC_Ammo,
    GearName.IS_NARC_Explosive_Ammo,
    GearName.IS_NARC_ECM_Ammo,
    GearName.IS_NARC_Haywire_Ammo,
    GearName.IS_NARC_Nemesis_Ammo,
  ] as AmmoName[]

  const clanMissileAmmo = missileGuidanceType === MissileGuidenceType.Standard
    ? [
      GearName.C_LRM_Ammo,
      GearName.C_LRM_Fragmentation_Ammo,
      GearName.C_LRM_SWARM_Ammo,
      GearName.C_LRM_Flare_Ammo,
      GearName.C_SRM_Ammo,
      GearName.C_SRM_Fragmentation_Ammo,
      GearName.C_SRM_Inferno_Ammo,
    ]
    : [
      GearName.C_LRM_Artemis_Ammo,
      GearName.C_SRM_Artemis_Ammo,
    ]

  const clanAmmoTypes = [
    GearName.C_LB_2X_AC_Ammo, GearName.C_LB_2X_AC_Cluster_Ammo,
    GearName.C_LB_5X_AC_Ammo, GearName.C_LB_5X_AC_Cluster_Ammo,
    GearName.C_LB_10X_AC_Ammo, GearName.C_LB_10X_AC_Cluster_Ammo,
    GearName.C_LB_20X_AC_Ammo, GearName.C_LB_20X_AC_Cluster_Ammo,
    GearName.C_UAC2_Ammo,
    GearName.C_UAC5_Ammo,
    GearName.C_UAC10_Ammo,
    GearName.C_UAC20_Ammo,
    GearName.C_Gauss_Ammo,
    GearName.C_AP_Gauss_Ammo,
    GearName.C_HAG_Ammo,
    GearName.C_LMG_Ammo,
    GearName.C_LMG_Half_Ammo,
    GearName.C_MG_Ammo,
    GearName.C_MG_Half_Ammo,
    GearName.C_HMG_Ammo,
    GearName.C_HMG_Half_Ammo,
    GearName.C_AMS_Ammo,
    GearName.C_Flamer_Ammo,
    GearName.C_Plasma_Cannon_Ammo,
    ...clanMissileAmmo,
    GearName.C_ATM_Ammo,
    GearName.C_ATM_ER_Ammo,
    GearName.C_ATM_HE_Ammo,
    GearName.C_Streak_SRM_Ammo,
    GearName.C_NARC_Ammo,
  ] as AmmoName[]

  return tech === Tech.IS
    ? innerSphereAmmoTypes
    : clanAmmoTypes
}

const sumGearTonnage = (mechTonnage: MechTonnage) => (gearNames: GearName[]): number => {
  return gearNames
    .filter(gearName => getGearData(gearName).type !== EquipmentType.Heatsink)
    .reduce((total, gearName) => total + getGearTonnage(mechTonnage, gearName), 0)
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
    .map(component => loadout[component].equipment as GearName[])
    .map(sumGearTonnage(mechTonnage))
    .reduce((s, t) => s + t, 0)
}

export const getLoadoutInternalStructureCriticals = (mechType: MechType, loadout: MechLoadout): number => {
  return getAllMechComponents(mechType, loadout)
    .map(component => loadout[component].equipment as GearName[])
    .reduce((memo, equipment) => [...memo, ...equipment], [])
    .reduce((total, gear) => total + (getGearData(gear).type === EquipmentType.Internal_Structure ? 1 : 0), 0)
}

export const getLoadoutArmorCriticals = (mechType: MechType, loadout: MechLoadout): number => {
  return getAllMechComponents(mechType, loadout)
    .map(component => loadout[component].equipment as GearName[])
    .reduce((memo, gear) => [...memo, ...gear], [])
    .reduce((total, gear) => total + (getGearData(gear).type === EquipmentType.Armor ? 1 : 0), 0)
}

export const geLoadoutHeatsinks = (mechType: MechType, loadout: MechLoadout): number => {
  return getAllMechComponents(mechType, loadout)
    .map(component => loadout[component].equipment as GearName[])
    .reduce((memo, gear) => [...memo, ...gear], [])
    .reduce((total, gear) => total + (getGearData(gear).type === EquipmentType.Heatsink ? 1 : 0), 0)
}

const TARGETING_COMPUTER_AFFECTED_WEAPON_TYPE = [
  WeaponType.Autocannon,
  WeaponType.GaussRifle,
  WeaponType.Laser,
  WeaponType.Plasma,
  WeaponType.ParticleCannon,
]

export const getTargetingComputerWeight = (mechTonnage: MechTonnage, mechType: MechType, tech: Tech, loadout: MechLoadout) => {
  const tonnage = getAllMechComponents(mechType, loadout)
    .map(component => loadout[component].equipment as GearName[])
    .reduce((memo, equipment) => [...memo, ...equipment], [])
    .map(getGearData)
    .filter(gear => gear.gearClass === GearClass.Weapon && TARGETING_COMPUTER_AFFECTED_WEAPON_TYPE.includes((gear as IWeapon).type))
    .reduce((memo, eq) => memo + getGearTonnage(mechTonnage, eq.name), 0)

  return Math.ceil(tonnage / (tech === Tech.IS ? 4 : 5))
}

export const hasTargetingComputerEquiped = (mechType: MechType, loadout: MechLoadout) => {
  return Boolean(getAllMechComponents(mechType, loadout)
    .map(component => loadout[component].equipment as GearName[])
    .reduce((memo, equipment) => [...memo, ...equipment], [])
    .map(getGearData)
    .find(gear => gear.type === EquipmentType.Targeting_Computer))
}
