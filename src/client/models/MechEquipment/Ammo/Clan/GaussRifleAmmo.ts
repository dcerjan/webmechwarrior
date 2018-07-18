import { Tech } from '../../../common/Tech'
import { GearName as Name } from '../../GearName'
import {
  AmmoBin,
  AmmoClass as C,
  AmmoType as T,
} from '../AmmoBin'

export const GaussRifleAmmo = {
  [Name.C_Gauss_Ammo]: AmmoBin(Name.C_Gauss_Ammo, C.Ballistic, T.Slug, Tech.Clan,   8, 1, 1.0, 0, [], 'Clan Standard Gauss Slug Ammo Bin') }
export const APGaussRifleAmmo = {
  [Name.C_AP_Gauss_Ammo]: AmmoBin(Name.C_AP_Gauss_Ammo, C.Ballistic, T.Slug, Tech.Clan,  40, 1, 1.0, 0, [], 'Clan Standard AP Gauss Slug Ammo Bin') }
export const HAGAmmo = {
  [Name.C_HAG_Ammo]:   AmmoBin(Name.C_HAG_Ammo,   C.Ballistic, T.Slug, Tech.Clan, 120, 1, 1.0, 0, [], 'Clan Standard HAG Slug Ammo Bin') }
