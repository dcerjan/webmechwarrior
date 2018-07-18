import { Tech } from '../../../common/Tech'
import { GearName as Name } from '../../GearName'
import {
  Weapon,
  WeaponClass as C,
  WeaponType as T,
} from '../Weapon'


export const Flamers = {
  [Name.C_Flamer]:         Weapon(Name.C_Flamer,         C.Energy, T.Flamer, Tech.IS, [0, 1, 2, 3], [2, 2, 2], [3, 3, 3], 3, 1.0, 1, 0, [],                        [], 'Inner Sphere Flamer'),
  [Name.C_Vehicle_Flamer]: Weapon(Name.C_Vehicle_Flamer, C.Energy, T.Flamer, Tech.IS, [0, 1, 2, 3], [2, 2, 2], [3, 3, 3], 0, 0.5, 1, 0, [Name.C_Flamer_Ammo], [], 'Inner Sphere Vehicle Flamer') }
