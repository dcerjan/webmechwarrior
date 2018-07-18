import { Tech } from '../../../common/Tech'
import { GearName as Name } from '../../GearName'
import {
  Weapon,
  WeaponClass as C,
  WeaponType as T,
} from '../Weapon'

export const ERLasers = {
  [Name.C_ER_Micro_Laser]:     Weapon(Name.C_ER_Micro_Laser,     C.Energy, T.Laser, Tech.Clan, [0, 1,  2,  4], [ 2,  2,  2], [0, 0, 0],  1, 0.25, 1, 0, [], [], 'Clan ER Micro Laser'),
  [Name.C_ER_Small_Laser]:     Weapon(Name.C_ER_Small_Laser,     C.Energy, T.Laser, Tech.Clan, [0, 2,  4,  6], [ 5,  5,  5], [0, 0, 0],  2,  0.5, 1, 0, [], [], 'Clan ER Small Laser'),
  [Name.C_ER_Medium_Laser]:    Weapon(Name.C_ER_Medium_Laser,    C.Energy, T.Laser, Tech.Clan, [0, 5, 10, 15], [ 7,  7,  7], [0, 0, 0],  5,  1.0, 1, 0, [], [], 'Clan ER Medium Laser'),
  [Name.C_ER_Large_Laser]:     Weapon(Name.C_ER_Large_Laser,     C.Energy, T.Laser, Tech.Clan, [0, 8, 15, 25], [10, 10, 10], [0, 0, 0], 12,  4.0, 1, 0, [], [], 'Clan ER Large Laser') }
export const PulseLasers = {
  [Name.C_Micro_Pulse_Laser]:  Weapon(Name.C_Micro_Pulse_Laser,  C.Energy, T.Laser, Tech.Clan, [0, 1,  2,  3], [ 3,  3,  3], [0, 0, 0],  1,  0.5, 1, 0, [], [/* TODO: implemente pulse trait */], 'Clan Micro Laser'),
  [Name.C_Small_Pulse_Laser]:  Weapon(Name.C_Small_Pulse_Laser,  C.Energy, T.Laser, Tech.Clan, [0, 2,  4,  6], [ 5,  5,  5], [0, 0, 0],  2,  1.0, 1, 0, [], [/* TODO: implemente pulse trait */], 'Clan Small Laser'),
  [Name.C_Medium_Pulse_Laser]: Weapon(Name.C_Medium_Pulse_Laser, C.Energy, T.Laser, Tech.Clan, [0, 4,  8, 12], [ 7,  7,  7], [0, 0, 0],  4,  2.0, 1, 0, [], [/* TODO: implemente pulse trait */], 'Clan Medium Laser'),
  [Name.C_Large_Pulse_Laser]:  Weapon(Name.C_Large_Pulse_Laser,  C.Energy, T.Laser, Tech.Clan, [0, 6, 14, 20], [10, 10, 10], [0, 0, 0], 10,  6.0, 2, 0, [], [/* TODO: implemente pulse trait */], 'Clan Large Laser') }
export const HeavyLasers = {
  [Name.C_Heavy_Small_Laser]:  Weapon(Name.C_Heavy_Small_Laser,  C.Energy, T.Laser, Tech.Clan, [0, 1,  2,  3], [ 6,  6,  6], [0, 0, 0],  3,  0.5, 1, 0, [], [/* TODO: implemente heavy laser trait */], 'Clan Heavy Small Laser'),
  [Name.C_Heavy_Medium_Laser]: Weapon(Name.C_Heavy_Medium_Laser, C.Energy, T.Laser, Tech.Clan, [0, 3,  6,  9], [10, 10, 10], [0, 0, 0],  7,  1.0, 2, 0, [], [/* TODO: implemente heavy laser trait */], 'Clan Heavy Medium Laser'),
  [Name.C_Heavy_Large_Laser]:  Weapon(Name.C_Heavy_Large_Laser,  C.Energy, T.Laser, Tech.Clan, [0, 5, 10, 15], [16, 16, 16], [0, 0, 0], 18,  4.0, 3, 0, [], [/* TODO: implemente heavy laser trait */], 'Clan Heavy Large Laser') }