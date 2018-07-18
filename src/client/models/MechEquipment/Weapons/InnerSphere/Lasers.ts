import { Tech } from '../../../common/Tech'
import { GearName as Name } from '../../GearName'
import {
  Weapon,
  WeaponClass as C,
  WeaponType as T,
} from '../Weapon'

export const Lasers = {
  [Name.IS_Small_Laser]:        Weapon(Name.IS_Small_Laser,        C.Energy, T.Laser, Tech.IS, [0, 1,  2,  3], [3, 3, 3], [0, 0, 0],  1, 0.5, 1, 0, [], [], 'Inner Sphere Small Laser'),
  [Name.IS_Medium_Laser]:       Weapon(Name.IS_Medium_Laser,       C.Energy, T.Laser, Tech.IS, [0, 3,  6,  9], [5, 5, 5], [0, 0, 0],  3, 1.0, 1, 0, [], [], 'Inner Sphere Medium Laser'),
  [Name.IS_Large_Laser]:        Weapon(Name.IS_Large_Laser,        C.Energy, T.Laser, Tech.IS, [0, 5, 10, 15], [8, 8, 8], [0, 0, 0],  8, 5.0, 2, 0, [], [], 'Inner Sphere Large Laser') }
export const ERLasers = {
  [Name.IS_ER_Small_Laser]:     Weapon(Name.IS_ER_Small_Laser,     C.Energy, T.Laser, Tech.IS, [0, 2,  4,  5], [3, 3, 3], [0, 0, 0],  2, 0.5, 1, 0, [], [], 'Inner Sphere ER Small Laser'),
  [Name.IS_ER_Medium_Laser]:    Weapon(Name.IS_ER_Medium_Laser,    C.Energy, T.Laser, Tech.IS, [0, 4,  8, 12], [5, 5, 5], [0, 0, 0],  5, 1.0, 1, 0, [], [], 'Inner Sphere ER Medium Laser'),
  [Name.IS_ER_Large_Laser]:     Weapon(Name.IS_ER_Large_Laser,     C.Energy, T.Laser, Tech.IS, [0, 7, 14, 19], [8, 8, 8], [0, 0, 0], 12, 5.0, 2, 0, [], [], 'Inner Sphere ER Large Laser') }
export const PulseLasers = {
  [Name.IS_Small_Pulse_Laser]:  Weapon(Name.IS_Small_Pulse_Laser,  C.Energy, T.Laser, Tech.IS, [0, 1,  2,  3], [3, 3, 3], [0, 0, 0],  2, 1.0, 1, 0, [], [/* TODO: implemente pulse trait */], 'Inner Sphere Small Laser'),
  [Name.IS_Medium_Pulse_Laser]: Weapon(Name.IS_Medium_Pulse_Laser, C.Energy, T.Laser, Tech.IS, [0, 2,  4,  6], [5, 5, 5], [0, 0, 0],  4, 2.0, 1, 0, [], [/* TODO: implemente pulse trait */], 'Inner Sphere Medium Laser'),
  [Name.IS_Large_Pulse_Laser]:  Weapon(Name.IS_Large_Pulse_Laser,  C.Energy, T.Laser, Tech.IS, [0, 3,  7, 10], [8, 8, 8], [0, 0, 0], 10, 7.0, 2, 0, [], [/* TODO: implemente pulse trait */], 'Inner Sphere Large Laser') }
