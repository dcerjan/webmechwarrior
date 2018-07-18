import { Tech } from '../../common/Tech'
import { AmmoName, GearClass } from '../GearName'
import { IAmmoTrait } from './AmmoTraits'

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

export enum AmmoClass {
  Ballistic = 'Ballistic',
  Energy    = 'Energy',
  Missile   = 'Missile',
}

export interface IAmmo {
  name: AmmoName,
  gearClass: GearClass.Ammo,
  ammoClass: AmmoClass,
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
  name: AmmoName,
  ammoClass: AmmoClass,
  type: AmmoType,
  tech: Tech,
  capacity: number,
  criticals: number,
  tonnage: number,
  ammoExplosionChance: number,
  traits: IAmmoTrait[],
  description: string,
): IAmmo => ({
  name,
  gearClass: GearClass.Ammo,
  ammoClass,
  type,
  tech,
  capacity,
  criticals,
  tonnage,
  ammoExplosionChance,
  traits,
  description,
})

