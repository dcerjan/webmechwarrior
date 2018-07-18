import { Tech } from '../../../common/Tech'
import { AmmoName, GearName as Name } from '../../GearName'
import {
  Weapon,
  WeaponClass as C,
  WeaponType as T,
} from '../Weapon'

const LB2XACAmmo  = [Name.C_LB_2X_AC_Ammo,  Name.C_LB_2X_AC_Cluster_Ammo] as AmmoName[]
const LB5XACAmmo  = [Name.C_LB_5X_AC_Ammo,  Name.C_LB_5X_AC_Cluster_Ammo] as AmmoName[]
const LB10XACAmmo = [Name.C_LB_10X_AC_Ammo, Name.C_LB_10X_AC_Cluster_Ammo] as AmmoName[]
const LB20XACAmmo = [Name.C_LB_20X_AC_Ammo, Name.C_LB_20X_AC_Cluster_Ammo] as AmmoName[]

const UAC2Ammo  = [Name.C_UAC2_Ammo] as AmmoName[]
const UAC5Ammo  = [Name.C_UAC5_Ammo] as AmmoName[]
const UAC10Ammo = [Name.C_UAC10_Ammo] as AmmoName[]
const UAC20Ammo = [Name.C_UAC20_Ammo] as AmmoName[]

export const LBXAutocannons = {
  [Name.C_LB_2X_Autocannon]:    Weapon(Name.C_LB_2X_Autocannon,    C.Ballistic, T.Autocannon, Tech.Clan, [ 4, 10, 20, 30], [ 2,  2,  2], [0, 0, 0], 1,  5.0,  3, 1, LB2XACAmmo,  [], 'Clan LB-2X Autocannon'),
  [Name.C_LB_5X_Autocannon]:    Weapon(Name.C_LB_5X_Autocannon,    C.Ballistic, T.Autocannon, Tech.Clan, [ 3,  8, 15, 24], [ 5,  5,  5], [0, 0, 0], 1,  7.0,  4, 1, LB5XACAmmo,  [], 'Clan LB-5X Autocannon'),
  [Name.C_LB_10X_Autocannon]:   Weapon(Name.C_LB_10X_Autocannon,   C.Ballistic, T.Autocannon, Tech.Clan, [ 0,  6, 12, 18], [10, 10, 10], [0, 0, 0], 2, 10.0,  5, 1, LB10XACAmmo, [], 'Clan LB-10X Autocannon'),
  [Name.C_LB_20X_Autocannon]:   Weapon(Name.C_LB_20X_Autocannon,   C.Ballistic, T.Autocannon, Tech.Clan, [ 0,  4,  8, 12], [20, 20, 20], [0, 0, 0], 6, 12.0,  9, 1, LB20XACAmmo, [], 'Clan LB-20X Autocannon') }
export const UltraAutocannons = {
  [Name.C_Ultra_Autocannon_2]:  Weapon(Name.C_Ultra_Autocannon_2,  C.Ballistic, T.Autocannon, Tech.Clan, [ 2,  9, 18, 27], [ 2,  2,  2], [0, 0, 0], 1,  5.0,  2, 2, UAC2Ammo,    [/* #TODO: implement multi shot (2) trait */], 'Clan Autocannon/2'),
  [Name.C_Ultra_Autocannon_5]:  Weapon(Name.C_Ultra_Autocannon_5,  C.Ballistic, T.Autocannon, Tech.Clan, [ 0,  7, 14, 21], [ 5,  5,  5], [0, 0, 0], 1,  8.0,  3, 2, UAC5Ammo,    [/* #TODO: implement multi shot (2) trait */], 'Clan Autocannon/5'),
  [Name.C_Ultra_Autocannon_10]: Weapon(Name.C_Ultra_Autocannon_10, C.Ballistic, T.Autocannon, Tech.Clan, [ 0,  6, 12, 18], [10, 10, 10], [0, 0, 0], 3, 10.0,  4, 2, UAC10Ammo,   [/* #TODO: implement multi shot (2) trait */], 'Clan Autocannon/10'),
  [Name.C_Ultra_Autocannon_20]: Weapon(Name.C_Ultra_Autocannon_20, C.Ballistic, T.Autocannon, Tech.Clan, [ 0,  4,  8, 12], [20, 20, 20], [0, 0, 0], 7, 12.0,  8, 2, UAC20Ammo,   [/* #TODO: implement multi shot (2) trait */], 'Clan Autocannon/20') }
