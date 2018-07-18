import { Tech } from '../../../common/Tech'
import { GearName as Name } from '../../GearName'
import {
  Weapon,
  WeaponClass as C,
  WeaponType as T,
} from '../Weapon'

export const Machineguns = {
  [Name.C_Machine_Gun]:       Weapon(Name.C_Machine_Gun,       C.Ballistic, T.Machinegun, Tech.Clan, [0, 1, 2, 3], [2, 2, 2], [0, 0, 0], 0, 0.25, 1, 1, [Name.C_MG_Ammo],  [], 'Clan Machinegun') }
export const LightMachineguns = {
  [Name.C_Light_Machine_Gun]: Weapon(Name.C_Light_Machine_Gun, C.Ballistic, T.Machinegun, Tech.Clan, [0, 2, 4, 6], [1, 1, 1], [0, 0, 0], 0, 0.25, 1, 1, [Name.C_LMG_Ammo], [], 'Clan Light Machinegun') }
export const HeavyMachineguns = {
  [Name.C_Heavy_Machine_Gun]: Weapon(Name.C_Heavy_Machine_Gun, C.Ballistic, T.Machinegun, Tech.Clan, [0, 1, 2, 2], [3, 3, 0], [0, 0, 0], 0,  0.5, 1, 1, [Name.C_HMG_Ammo], [], 'Clan Heavy Machinegun') }
