import { lens } from 'lens.ts'
import { TechType } from '../TechType'
import { TechRating } from './TechRating'

interface IHeat {
  standard: number,
  aero: number,
}
export const HeatL = lens<IHeat>()

interface IDamage {
  short: number,
  medium: number,
  long: number,
}
export const DamageL = lens<IDamage>()

interface IRange {
  minimum: number,
  short: number,
  medium: number,
  long: number,
}
export const RangeL = lens<IRange>()

export enum WeaponType {
  Autocannon = 'Autocannon',
  GaussRifle = 'Gauss Rifle',
  MachineGun = 'Machine Gun',
  Flamer = 'Flamer',
  Laser = 'Laser',
  Plasma = 'Plasma',
  PPC = 'PPC',
  Missile = 'Missile',
}

export enum WeaponClass {
  Energy = 'Energy',
  Ballistic = 'Ballistic',
  Missile = 'Missile',
  Melee = 'Melee',
}

export interface IHeavyWeaponRecord {
  name: string,
  type: WeaponType,
  class: WeaponClass,
  techType: TechType,
  heat: IHeat,
  damage: IDamage,
  range: IRange,
  ammo: number,
  weight: number,
  space: number, 
  techRating: TechRating,
}
export const HeavyWeaponL = lens<IHeavyWeaponRecord>()
