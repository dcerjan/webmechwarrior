import { Tech } from '../../../common/Tech'
import { GearName as Name } from '../../GearName'
import {
  Weapon,
  WeaponClass as C,
  WeaponType as T,
} from '../Weapon'

export const PointDefenseSystems = {
  [Name.IS_AMS]:  Weapon(Name.IS_AMS,  C.PointDefense, T.Machinegun, Tech.IS, [0, 1, 1, 1], [1, 1, 1], [0, 0, 0], 0, 0.5, 1, 1, [Name.IS_AMS_Ammo],  [/* TODO: implement point-defense trait */], 'Inner Sphere AMS'),
  [Name.IS_LAMS]: Weapon(Name.IS_LAMS, C.PointDefense, T.Laser,      Tech.IS, [0, 1, 1, 1], [1, 1, 1], [0, 0, 0], 2, 1.5, 2, 0, [],  [/* TODO: implement point-defense trait */], 'Inner Sphere Laser AMS') }
