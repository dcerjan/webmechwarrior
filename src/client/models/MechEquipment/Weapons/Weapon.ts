import { Tech } from '../../common/Tech'

import { AmmoName, GearClass, WeaponName } from '../GearName'

import { IWeaponTrait } from './WeaponTrait'

export enum WeaponClass {
  Energy       = 'Energy',
  Ballistic    = 'Ballistic',
  Missile      = 'Missile',
  PointDefense = 'PointDefense',
  Melee        = 'Melee',
}

export enum WeaponType {
  Autocannon      = 'Autocannon',
  GaussRifle      = 'Gauss Rifle',
  Machinegun      = 'Machinegun',
  Laser           = 'Laser',
  ParticleCannon  = 'Particle Cannon',
  Flamer          = 'Flamer',
  Plasma          = 'Plasma',
  MissileLauncher = 'Missile Launcher',
  RocketLauncher  = 'Rocket Launcher',
  PodLauncher     = 'PodLauncher',
}

export interface IWeapon {
  name: WeaponName,
  gearClass: GearClass.Weapon,
  weaponClass: WeaponClass,
  type: WeaponType,
  tech: Tech,
  range: [number, number, number, number],
  damage: [number, number, number],
  heatTransfer: [number, number, number],
  heat: number,
  tonnage: number,
  criticals: number,
  salvoSize: number,
  compatibleAmmo: AmmoName[],
  traits: IWeaponTrait[],
  description: string,
}

export const Weapon = (
  name: WeaponName,
  weaponClass: WeaponClass,
  type: WeaponType,
  tech: Tech,
  range: [number, number, number, number],
  damage: [number, number, number],
  heatTransfer: [number, number, number],
  heat: number,
  tonnage: number,
  criticals: number,
  salvoSize: number,
  compatibleAmmo: AmmoName[],
  traits: IWeaponTrait[],
  description: string,
): IWeapon => ({
  name,
  gearClass: GearClass.Weapon,
  weaponClass,
  type,
  tech,
  range,
  damage,
  heatTransfer,
  heat,
  tonnage,
  criticals,
  salvoSize,
  compatibleAmmo,
  traits,
  description,
})
