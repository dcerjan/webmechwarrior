import { AmmoClass, AmmoType, IAmmo } from './AmmoBin'
import { Ammo as ClanAmmo } from './Clan'
import { Ammo as InnerSphereAmmo } from './InnerSphere'

export const Ammo = {
  ...InnerSphereAmmo,
  ...ClanAmmo,
}

export {
  IAmmo,
  AmmoClass,
  AmmoType,
}
