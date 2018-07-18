import { Tech } from '../../../common/Tech'
import { AmmoName, GearName as Name } from '../../GearName'
import {
  Weapon,
  WeaponClass as C,
  WeaponType as T,
} from '../Weapon'

const NARCAmmo = [Name.C_NARC_Ammo] as AmmoName[]

export const NARCLaunchers = {
  [Name.C_NARC_Launcher]: Weapon(Name.C_NARC_Launcher, C.Missile, T.PodLauncher, Tech.Clan, [0, 4, 8,  12], [0, 0, 0], [0, 0, 0], 0, 2.0, 1, 1, NARCAmmo, [], 'Clan NARC-Pod Launcher') }
