import { Tech } from '../../../common/Tech'
import { GearName as Name } from '../../GearName'
import {
  Weapon,
  WeaponClass as C,
  WeaponType as T,
} from '../Weapon'


export const Flamers = {
  [Name.IS_Flamer]:         Weapon(Name.IS_Flamer,         C.Energy, T.Flamer, Tech.IS, [0, 1, 2, 3], [2, 2, 2], [3, 3, 3], 3, 1.0, 1, 0, [],                        [], 'Inner Sphere Flamer'),
  [Name.IS_Vehicle_Flamer]: Weapon(Name.IS_Vehicle_Flamer, C.Energy, T.Flamer, Tech.IS, [0, 1, 2, 3], [2, 2, 2], [3, 3, 3], 0, 0.5, 1, 0, [Name.IS_Flamer_Ammo], [], 'Inner Sphere Vehicle Flamer') }
