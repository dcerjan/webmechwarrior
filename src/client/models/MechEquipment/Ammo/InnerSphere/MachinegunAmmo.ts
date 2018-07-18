import { Tech } from '../../../common/Tech'
import { GearName as Name } from '../../GearName'
import {
  AmmoBin,
  AmmoClass as C,
  AmmoType as T,
} from '../AmmoBin'

export const MachinegunAmmo = {
  [Name.IS_MG_Ammo]:       AmmoBin(Name.IS_MG_Ammo,       C.Ballistic, T.Bullet, Tech.IS, 200, 1, 0.5,  4, [], 'Inner Sphere Standard Machinegun Ammo Bin'),
  [Name.IS_MG_Half_Ammo]:  AmmoBin(Name.IS_MG_Half_Ammo,  C.Ballistic, T.Bullet, Tech.IS, 100, 1, 0.25, 4, [], 'Inner Sphere Standard Machinegun Ammo Bin (1/2)') }
export const LightMachinegunAmmo = {
  [Name.IS_LMG_Ammo]:      AmmoBin(Name.IS_LMG_Ammo,      C.Ballistic, T.Bullet, Tech.IS, 200, 1, 0.5,  4, [], 'Inner Sphere Standard Light Machinegun Ammo Bin'),
  [Name.IS_LMG_Half_Ammo]: AmmoBin(Name.IS_LMG_Half_Ammo, C.Ballistic, T.Bullet, Tech.IS, 100, 1, 0.25, 4, [], 'Inner Sphere Standard Light Machinegun Ammo Bin (1/2)') }
export const HeavyMachinegunAmmo = {
  [Name.IS_HMG_Ammo]:      AmmoBin(Name.IS_HMG_Ammo,      C.Ballistic, T.Bullet, Tech.IS, 100, 1, 1.0,  4, [], 'Inner Sphere Standard Heavy Machinegun Ammo Bin'),
  [Name.IS_HMG_Half_Ammo]: AmmoBin(Name.IS_HMG_Half_Ammo, C.Ballistic, T.Bullet, Tech.IS,  50, 1, 0.5,  4, [], 'Inner Sphere Standard Heavy Machinegun Ammo Bin (1/2)') }
