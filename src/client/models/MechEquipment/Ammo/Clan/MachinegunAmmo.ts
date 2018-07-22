import { Tech } from '../../../common/Tech'
import { GearName as Name } from '../../GearName'
import {
  AmmoBin,
  AmmoClass as C,
  AmmoType as T,
} from '../AmmoBin'

export const MachinegunAmmo = {
  [Name.C_MG_Ammo]:       AmmoBin(Name.C_MG_Ammo,       C.Ballistic, T.Bullet, Tech.Clan, 200, 1, 1.0, 4, [], 'Clan Standard Machinegun Ammo Bin'),
  [Name.C_MG_Half_Ammo]:  AmmoBin(Name.C_MG_Half_Ammo,  C.Ballistic, T.Bullet, Tech.Clan, 100, 1, 0.5, 4, [], 'Clan Standard Machinegun Ammo Bin (1/2)') }
export const LightMacinegunAmmo = {
  [Name.C_LMG_Ammo]:      AmmoBin(Name.C_LMG_Ammo,      C.Ballistic, T.Bullet, Tech.Clan, 200, 1, 1.0, 4, [], 'Clan Standard Light Machinegun Ammo Bin'),
  [Name.C_LMG_Half_Ammo]: AmmoBin(Name.C_LMG_Half_Ammo, C.Ballistic, T.Bullet, Tech.Clan, 100, 1, 0.5, 4, [], 'Clan Standard Light Machinegun Ammo Bin (1/2)') }
export const HeavyMachinegunAmmo = {
  [Name.C_HMG_Ammo]:      AmmoBin(Name.C_HMG_Ammo,      C.Ballistic, T.Bullet, Tech.Clan, 100, 1, 1.0, 4, [], 'Clan Standard Heavy Machinegun Ammo Bin'),
  [Name.C_HMG_Half_Ammo]: AmmoBin(Name.C_HMG_Half_Ammo, C.Ballistic, T.Bullet, Tech.Clan,  50, 1, 0.5, 4, [], 'Clan Standard Heavy Machinegun Ammo Bin (1/2)') }
