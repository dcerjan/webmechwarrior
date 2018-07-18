import { Tech } from '../../../common/Tech'
import { GearName as Name } from '../../GearName'
import {
  Weapon,
  WeaponClass as C,
  WeaponType as T,
} from '../Weapon'


export const PlasmaRifles = {
  [Name.IS_Plasma_Rifle]: Weapon(Name.IS_Plasma_Rifle, C.Energy, T.Plasma, Tech.IS, [0, 5, 10, 15], [10, 10, 10], [3, 3, 3], 10, 6.0, 2, 0, [Name.IS_Plasma_Rifle_Ammo], [], 'Inner Sphere Plasma Rifle') }
