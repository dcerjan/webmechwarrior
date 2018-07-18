import { Tech } from '../../../common/Tech'
import { GearName as Name } from '../../GearName'
import {
  Weapon,
  WeaponClass as C,
  WeaponType as T,
} from '../Weapon'


export const GaussRifles = {
  [Name.IS_Gauss_Rifle]:       Weapon(Name.IS_Gauss_Rifle,       C.Ballistic, T.GaussRifle, Tech.IS, [2, 7, 15, 22], [15, 15, 15], [0, 0, 0], 1, 15.0,  7, 1, [Name.IS_Gauss_Ammo], [], 'Inner Sphere Gauss Rifle') }
export const LightGaussRifles = {
  [Name.IS_Light_Gauss_Rifle]: Weapon(Name.IS_Light_Gauss_Rifle, C.Ballistic, T.GaussRifle, Tech.IS, [3, 8, 17, 25], [ 8,  8,  8], [0, 0, 0], 1, 12.0,  5, 1, [Name.IS_Light_Gauss_Ammo], [], 'Inner Sphere Light Gauss Rifle') }
export const HeavyGaussRifles = {
  [Name.IS_Heavy_Gauss_Rifle]: Weapon(Name.IS_Heavy_Gauss_Rifle, C.Ballistic, T.GaussRifle, Tech.IS, [4, 6, 13, 20], [25, 20, 10], [0, 0, 0], 2, 18.0, 11, 1, [Name.IS_Heavy_Gauss_Ammo], [/* #TODO: implement heavy recoil trait */], 'Inner Sphere Heavy Gauss Rifle') }
