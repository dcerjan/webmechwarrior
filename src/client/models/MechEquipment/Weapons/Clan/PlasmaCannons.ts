import { Tech } from '../../../common/Tech'
import { GearName as Name } from '../../GearName'
import {
  Weapon,
  WeaponClass as C,
  WeaponType as T,
} from '../Weapon'


export const PlasmaCannons = {
  [Name.C_Plasma_Cannon]: Weapon(Name.C_Plasma_Cannon, C.Energy, T.Plasma, Tech.Clan, [0, 6, 12, 18], [3, 3, 3], [6, 6, 6], 10, 3.0, 1, 0, [Name.C_Plasma_Cannon_Ammo], [], 'Clan Plasma Cannon') }
