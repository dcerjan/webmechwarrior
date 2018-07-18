import { Tech } from '../../../common/Tech'
import { GearName as Name } from '../../GearName'
import {
  Weapon,
  WeaponClass as C,
  WeaponType as T,
} from '../Weapon'

export const Machineguns = {
  [Name.IS_Machine_Gun]:       Weapon(Name.IS_Machine_Gun,       C.Ballistic, T.Machinegun, Tech.IS, [0, 1, 2, 3], [2, 2, 2], [0, 0, 0], 0, 0.5, 1, 1, [Name.IS_MG_Ammo],  [], 'Inner Sphere Machinegun') }
export const LightMachineguns = {
  [Name.IS_Light_Machine_Gun]: Weapon(Name.IS_Light_Machine_Gun, C.Ballistic, T.Machinegun, Tech.IS, [0, 2, 4, 6], [1, 1, 1], [0, 0, 0], 0, 0.5, 1, 1, [Name.IS_LMG_Ammo], [], 'Inner Sphere Light Machinegun') }
export const HeavyMachineguns = {
  [Name.IS_Heavy_Machine_Gun]: Weapon(Name.IS_Heavy_Machine_Gun, C.Ballistic, T.Machinegun, Tech.IS, [0, 1, 2, 2], [3, 3, 0], [0, 0, 0], 0, 0.5, 1, 1, [Name.IS_HMG_Ammo], [], 'Inner Sphere Heavy Machinegun') }
