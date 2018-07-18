import { Tech } from '../../../common/Tech'
import { GearName as Name } from '../../GearName'
import {
  Weapon,
  WeaponClass as C,
  WeaponType as T,
} from '../Weapon'

export const PointDefenseSystems = {
  [Name.C_AMS]:  Weapon(Name.C_AMS,  C.PointDefense, T.Machinegun, Tech.Clan, [0, 1, 1, 1], [1, 1, 1], [0, 0, 0], 0, 0.5, 1, 1, [Name.C_AMS_Ammo],  [/* TODO: implement point-defense trait */], 'Clan AMS'),
  [Name.C_LAMS]: Weapon(Name.C_LAMS, C.PointDefense, T.Laser,      Tech.Clan, [0, 1, 1, 1], [1, 1, 1], [0, 0, 0], 2, 1.5, 2, 0, [],  [/* TODO: implement point-defense trait */], 'Clan Laser AMS') }
