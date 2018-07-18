import { ClanWeapons } from './Clan'
import { InnerSphereWeapons } from './InnerSphere'
import { IWeapon, WeaponClass, WeaponType } from './Weapon'

export const Weapons = {
  ...InnerSphereWeapons,
  ...ClanWeapons,
}

export {
  IWeapon,
  WeaponClass,
  WeaponType,
}
