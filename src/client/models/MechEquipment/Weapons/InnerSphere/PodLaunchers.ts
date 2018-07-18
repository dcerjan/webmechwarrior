import { Tech } from '../../../common/Tech'
import { AmmoName, GearName as Name } from '../../GearName'
import {
  Weapon,
  WeaponClass as C,
  WeaponType as T,
} from '../Weapon'

const NARCAmmo = [
  Name.IS_NARC_Ammo,
  Name.IS_NARC_ECM_Ammo,
  Name.IS_NARC_Explosive_Ammo,
  Name.IS_NARC_Haywire_Ammo,
  Name.IS_NARC_Nemesis_Ammo,
] as AmmoName[]

export const NARCLaunchers = {
  [Name.IS_NARC_Launcher]:          Weapon(Name.IS_NARC_Launcher,          C.Missile, T.PodLauncher, Tech.IS, [0, 3, 6,  9], [0, 0, 0], [0, 0, 0], 0, 3.0, 2, 1, NARCAmmo, [], 'Inner Sphere NARC-Pod Launcher'),
  [Name.IS_Improved_NARC_Launcher]: Weapon(Name.IS_Improved_NARC_Launcher, C.Missile, T.PodLauncher, Tech.IS, [0, 4, 9, 15], [0, 0, 0], [0, 0, 0], 0, 5.0, 3, 1, NARCAmmo, [], 'Inner Sphere Improved NARC-Pod Launcher') }
