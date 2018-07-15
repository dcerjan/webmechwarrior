import { Omit } from '../../../lib/type'
import { Tech } from '../../common/Tech'

export enum AmmoBinName {
  // Ballistic Ammo
  AC2_Ammo                  = 'AC/2 Ammo',
  AC2_AP_Ammo               = 'AC/2 AP Ammo',
  AC2_Flechette_Ammo        = 'AC/2 Flechette Ammo',
  AC2_Precision_Ammo        = 'AC/2 Precision Ammo',
  AC5_Ammo                  = 'AC/5 Ammo',
  AC5_AP_Ammo               = 'AC/5 AP Ammo',
  AC5_Flechette_Ammo        = 'AC/5 Flechette Ammo',
  AC5_Precision_Ammo        = 'AC/5 Precision Ammo',
  AC10_Ammo                 = 'AC/10 Ammo',
  AC10_AP_Ammo              = 'AC/10 AP Ammo',
  AC10_Flechette_Ammo       = 'AC/10 Flechette Ammo',
  AC10_Precision_Ammo       = 'AC/10 Precision Ammo',
  AC20_Ammo                 = 'AC/20 Ammo',
  AC20_AP_Ammo              = 'AC/20 AP Ammo',
  AC20_Flechette_Ammo       = 'AC/20 Flechette Ammo',
  AC20_Precision_Ammo       = 'AC/20 Precision Ammo',
  LB2_X_AC_Ammo             = 'LB-X AC/2 Ammo',
  LB2_X_AC_Cluster_Ammo     = 'LB-X AC/2 Cluster Ammo',
  LB5_X_AC_Ammo             = 'LB-X AC/5 Ammo',
  LB5_X_AC_Cluster_Ammo     = 'LB-X AC/5 Cluster Ammo',
  LB10_X_AC_Ammo            = 'LB-X AC/10 Ammo',
  LB10_X_AC_Cluster_Ammo    = 'LB-X AC/10 Cluster Ammo',
  LB20_X_AC_Ammo            = 'LB-X AC/20 Ammo',
  LB20_X_AC_Cluster_Ammo    = 'LB-X AC/20 Cluster Ammo',
  LAC2_Ammo                 = 'LAC/2 Ammo',
  LAC2_AP_Ammo              = 'LAC/2 AP Ammo',
  LAC2_Flechette_Ammo       = 'LAC/2 Flechette Ammo',
  LAC2_Precision_Ammo       = 'LAC/2 Precision Ammo',
  LAC5_Ammo                 = 'LAC/5 Ammo',
  LAC5_AP_Ammo              = 'LAC/5 AP Ammo',
  LAC5_Flechette_Ammo       = 'LAC/5 Flechette Ammo',
  LAC5_Precision_Ammo       = 'LAC/5 Precision Ammo',
  RAC2_Ammo                 = 'RAC/2 Ammo',
  RAC5_Ammo                 = 'RAC/5 Ammo',
  UAC2_Ammo                 = 'UAC/2 Ammo',
  UAC5_Ammo                 = 'UAC/5 Ammo',
  UAC10_Ammo                = 'UAC/10 Ammo',
  UAC20_Ammo                = 'UAC/20 Ammo',
  Light_Gauss_Ammo          = 'Light Gauss Ammo',
  Gauss_Ammo                = 'Gauss Ammo',
  Heavy_Gauss_Ammo          = 'Heavy Gauss Ammo',
  AP_Gauss_Ammo             = 'AP Gauss Ammo',
  HAG_Ammo                  = 'HAG Ammo',
  LMG_Ammo                  = 'LMG Ammo',
  LMG_Half_Ammo             = 'LMG Ammo (1/2)',
  MG_Ammo                   = 'MG Ammo',
  MG_Half_Ammo              = 'MG Ammo (1/2)',
  HMG_Ammo                  = 'HMG Ammo',
  HMG_Half_Ammo             = 'HMG Ammo (1/2)',
  AMS_Ammo                  = 'AMS Ammo',

  // Ballistic Ammo
  Flamer_Ammo             = 'Flamer Ammo',
  Plasma_Rifle_Ammo       = 'Plasma Rifle Ammo',
  Plasma_Cannon_Ammo      = 'Plasma Cannon Ammo',

  // Ballistic Ammo
  ATM_Ammo                = 'ATM Ammo',
  ATM_ER_Ammo             = 'ATM ER Ammo',
  ATM_HE_Ammo             = 'ATM HE Ammo',
  LRM_Ammo                = 'LRM Ammo',
  LRM_Artemis_Ammo        = 'LRM + Artemis Ammo',
  LRM_Fragmentation_Ammo  = 'LRM Fragmentation Ammo',
  LRM_Incendiary_Ammo     = 'LRM Incendiary Ammo',
  LRM_SWARM_Ammo          = 'LRM SWARM Ammo',
  LRM_Flare_Ammo          = 'LRM Flare Ammo',
  MRM_Ammo                = 'MRM Ammo',
  SRM_Ammo                = 'SRM Ammo',
  SRM_Artemis_Ammo        = 'SRM + Artemis Ammo',
  SRM_Fragmentation_Ammo  = 'SRM Fragmentation Ammo',
  SRM_Harpoon_Ammo        = 'SRM Harpoon Ammo',
  SRM_Inferno_Ammo        = 'SRM Inferno Ammo',
  Streak_SRM_Ammo         = 'Streak SRM Ammo',
  NARC_Ammo               = 'NARC Ammo',
  NARC_Explosive_Ammo     = 'NARC Explosive Ammo',
  NARC_ECM_Ammo           = 'NARC ECM Ammo',
  NARC_Haywire_Ammo       = 'NARC Haywire Ammo',
  NARC_Nemesis_Ammo       = 'NARC Nemesis Ammo',
}

export enum AmmoType {
  Projectile  = 'Projectile',
  Shell       = 'Shell',
  Slug        = 'Slug',
  Bullet      = 'Bullet',
  Missile     = 'Missile',
  Rocket      = 'Rocket',
  Tank        = 'Tank',
  Pod         = 'Pod',
}

export enum AmmoTraitName {
  Precision     = 'Precision',
  ArmorPiercing = 'ArmorPiercing',
  Flechette     = 'Flechette',
  Cluster       = 'Cluster',
  Heavy         = 'Heavy',
  Bulky         = 'Bulky',
  Caseless      = 'Caseless',
  Artemis       = 'Artemis',
  Fragmentation = 'Fragmentation',
  Inferno       = 'Inferno',
  Incendiary    = 'Incendiary',
  SWARM         = 'SWARM',
  Flare         = 'Flare',
  HE            = 'HE',
  ER            = 'ER',
}

export interface IAmmoTrait {
  name: AmmoTraitName,
  capacityModifier: number,
  criticalsModifier: number,
  tonnageModifier: number,
  toHitModifier: [number, number, number],
  critModifier: [number, number, number],
  rangeModifier: [number, number, number, number],
  damageModifier: [number, number, number],
  heatDamageModifier: [number, number, number],
  jamModifier: number,
  ammoExplosionChanceModifier: number,
  heatModifier: number,
  isAntiInfantry: boolean,
}

export const AmmoTrait = (props: Pick<IAmmoTrait, 'name'> & Partial<Omit<IAmmoTrait, 'name'>>): IAmmoTrait => ({
  capacityModifier: 0,
  criticalsModifier: 0,
  tonnageModifier: 0.0,
  toHitModifier: [0, 0, 0],
  critModifier: [0, 0, 0],
  rangeModifier: [0, 0, 0, 0],
  damageModifier: [0, 0, 0],
  heatDamageModifier: [0, 0, 0],
  jamModifier: 0,
  ammoExplosionChanceModifier: 0,
  heatModifier: 0,
  isAntiInfantry: false,
  ...props,
})

export interface IAmmoBin {
  name: AmmoBinName,
  type: AmmoType,
  tech: Tech,
  capacity: number,
  criticals: number,
  tonnage: number,
  ammoExplosionChance: number,
  traits: IAmmoTrait[],
  description: string,
}

export const AmmoBin = (
  name: AmmoBinName,
  type: AmmoType,
  tech: Tech,
  capacity: number,
  criticals: number,
  tonnage: number,
  ammoExplosionChance: number,
  traits: IAmmoTrait[],
  description: string,
): IAmmoBin => ({
  name,
  type,
  tech,
  capacity,
  criticals,
  tonnage,
  ammoExplosionChance,
  traits,
  description,
})

