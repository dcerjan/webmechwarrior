import { lens } from 'lens.ts'
import { TechType } from '../TechType'
import { TechRating } from './TechRating'

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
  tech: TechType,
  class: WeaponClass,
  type: WeaponType,
  heat: number,
  damage: IDamage,
  range: IRange,
  ammo?: number,
  weight: number,
  space: number,
  rating: TechRating,
}
export const HeavyWeaponL = lens<IHeavyWeaponRecord>()


export interface IWeaponTableRow {
  name: string,
  tech: string,
  class: string,
  type: string,
  heat: string,
  damage: string,
  range: string,
  ammo: string,
  weight: string,
  space: string,
  rating: string,
}

const parseDamage = (damage: string): IDamage => {
  const [short, medium, long] = damage.split('/').map((val) => parseInt(val, 10))

  return {
    short: short || 0,
    medium: medium || 0,
    long: long || 0,
  }
}

const parseRange = (range: string): IRange => {
  const [minimum, short, medium, long] = range.split('/').map((val) => parseInt(val, 10))

  return {
    minimum: minimum || 0,
    short: short || 0,
    medium: medium || 0,
    long: long || 0,
  }
}

export const parseHeavyWeaponRecord = (weapon: IWeaponTableRow): IHeavyWeaponRecord => ({
  name: weapon.name,
  tech: weapon.tech as TechType,
  class: weapon.class as WeaponClass,
  type: weapon.type as WeaponType,
  heat: parseInt(weapon.heat, 10),
  damage: parseDamage(weapon.damage),
  range: parseRange(weapon.range),
  ammo: weapon.ammo === 'NA'
    ? undefined
    : parseInt(weapon.ammo, 10),
  weight: parseInt(weapon.weight, 10),
  space: parseInt(weapon.space, 10),
  rating: weapon.rating as TechRating,
})
