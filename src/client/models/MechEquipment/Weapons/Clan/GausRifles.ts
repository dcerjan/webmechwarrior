import { Tech } from '../../../common/Tech'
import { GearName as Name } from '../../GearName'
import {
  Weapon,
  WeaponClass as C,
  WeaponType as T,
} from '../Weapon'


export const GaussRifles = {
  [Name.C_Gauss_Rifle]:            Weapon(Name.C_Gauss_Rifle,            C.Ballistic, T.GaussRifle, Tech.Clan, [2,  7, 15, 22], [15, 15, 15], [0, 0, 0], 1, 12.0,  6,  1, [Name.C_Gauss_Ammo], [], 'Clan Gauss Rifle') }
export const AntiPersonelGaussRifles = {
  [Name.C_AP_Gauss_Rifle]:         Weapon(Name.C_AP_Gauss_Rifle,         C.Ballistic, T.GaussRifle, Tech.Clan, [0,  3,  6,  9], [ 3,  3,  3], [0, 0, 0], 1,  0.5,  1,  1, [Name.C_AP_Gauss_Ammo], [], 'Clan Anti-Personel Gauss Rifle') }
export const HyperAssaultGaussRifles = {
  [Name.C_Hyper_Assault_Gauss_20]: Weapon(Name.C_Hyper_Assault_Gauss_20, C.Ballistic, T.GaussRifle, Tech.Clan, [2, 18, 16, 24], [ 1,  1,  1], [0, 0, 0], 4, 10.0,  6, 20, [Name.C_HAG_Ammo], [/* #TODO: implement rapid-fire (20) trait */], 'Clan Heavy Gauss Rifle'),
  [Name.C_Hyper_Assault_Gauss_30]: Weapon(Name.C_Hyper_Assault_Gauss_30, C.Ballistic, T.GaussRifle, Tech.Clan, [2, 18, 16, 24], [ 1,  1,  1], [0, 0, 0], 6, 13.0,  8, 30, [Name.C_HAG_Ammo], [/* #TODO: implement rapid-fire (30) trait */], 'Clan Heavy Gauss Rifle'),
  [Name.C_Hyper_Assault_Gauss_40]: Weapon(Name.C_Hyper_Assault_Gauss_40, C.Ballistic, T.GaussRifle, Tech.Clan, [2, 18, 16, 24], [ 1,  1,  1], [0, 0, 0], 8, 16.0, 10, 40, [Name.C_HAG_Ammo], [/* #TODO: implement rapid-fire (40) trait */], 'Clan Heavy Gauss Rifle') }
