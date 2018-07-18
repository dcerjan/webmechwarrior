import { Tech } from '../../../common/Tech'
import { GearName as Name } from '../../GearName'
import {
  AmmoBin,
  AmmoClass as C,
  AmmoType as T,
} from '../AmmoBin'

export const LightGaussRifleAmmo = {
  [Name.IS_Light_Gauss_Ammo]:  AmmoBin(Name.IS_Light_Gauss_Ammo, C.Ballistic, T.Slug, Tech.IS, 16, 1, 1.0, 0, [], 'Inner Sphere Standard Light Gauss Slug Ammo Bin') }
export const GaussRifleAmmo = {
  [Name.IS_Gauss_Ammo]:        AmmoBin(Name.IS_Gauss_Ammo,       C.Ballistic, T.Slug, Tech.IS,  8, 1, 1.0, 0, [], 'Inner Sphere Standard Gauss Slug Ammo Bin') }
export const HeavyGaussRifleAmmo = {
  [Name.IS_Heavy_Gauss_Ammo]:  AmmoBin(Name.IS_Heavy_Gauss_Ammo, C.Ballistic, T.Slug, Tech.IS,  4, 1, 1.0, 0, [], 'Inner Sphere Standard Heavy Gauss Slug Ammo Bin') }
