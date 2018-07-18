import { Tech } from '../../../common/Tech'
import { AmmoName, GearName as Name } from '../../GearName'
import {
  Weapon,
  WeaponClass as C,
  WeaponType as T,
} from '../Weapon'


const AC2Ammo  = [Name.IS_AC2_Ammo,  Name.IS_AC2_AP_Ammo,  Name.IS_AC2_Flechette_Ammo,  Name.IS_AC2_Precision_Ammo] as AmmoName[]
const AC5Ammo  = [Name.IS_AC5_Ammo,  Name.IS_AC5_AP_Ammo,  Name.IS_AC5_Flechette_Ammo,  Name.IS_AC5_Precision_Ammo] as AmmoName[]
const AC10Ammo = [Name.IS_AC10_Ammo, Name.IS_AC10_AP_Ammo, Name.IS_AC10_Flechette_Ammo, Name.IS_AC10_Precision_Ammo] as AmmoName[]
const AC20Ammo = [Name.IS_AC20_Ammo, Name.IS_AC20_AP_Ammo, Name.IS_AC20_Flechette_Ammo, Name.IS_AC20_Precision_Ammo] as AmmoName[]

const LB2XACAmmo  = [Name.IS_LB_2X_AC_Ammo,  Name.IS_LB_2X_AC_Cluster_Ammo] as AmmoName[]
const LB5XACAmmo  = [Name.IS_LB_5X_AC_Ammo,  Name.IS_LB_5X_AC_Cluster_Ammo] as AmmoName[]
const LB10XACAmmo = [Name.IS_LB_10X_AC_Ammo, Name.IS_LB_10X_AC_Cluster_Ammo] as AmmoName[]
const LB20XACAmmo = [Name.IS_LB_20X_AC_Ammo, Name.IS_LB_20X_AC_Cluster_Ammo] as AmmoName[]

const LAC2Ammo  = [Name.IS_LAC2_Ammo,  Name.IS_LAC2_AP_Ammo,  Name.IS_LAC2_Flechette_Ammo,  Name.IS_LAC2_Precision_Ammo] as AmmoName[]
const LAC5Ammo  = [Name.IS_LAC5_Ammo,  Name.IS_LAC5_AP_Ammo,  Name.IS_LAC5_Flechette_Ammo,  Name.IS_LAC5_Precision_Ammo] as AmmoName[]

const RAC2Ammo  = [Name.IS_RAC2_Ammo] as AmmoName[]
const RAC5Ammo  = [Name.IS_RAC5_Ammo] as AmmoName[]

const UAC2Ammo  = [Name.IS_UAC2_Ammo] as AmmoName[]
const UAC5Ammo  = [Name.IS_UAC5_Ammo] as AmmoName[]
const UAC10Ammo = [Name.IS_UAC10_Ammo] as AmmoName[]
const UAC20Ammo = [Name.IS_UAC20_Ammo] as AmmoName[]

export const Autocannons = {
  [Name.IS_Autocannon_2]:        Weapon(Name.IS_Autocannon_2,        C.Ballistic, T.Autocannon, Tech.IS, [ 4,  8, 16, 24], [ 2,  2,  2], [0, 0, 0], 1,  6.0,  1, 1, AC2Ammo,     [], 'Inner Sphere Autocannon/2'),
  [Name.IS_Autocannon_5]:        Weapon(Name.IS_Autocannon_5,        C.Ballistic, T.Autocannon, Tech.IS, [ 3,  6, 12, 18], [ 5,  5,  5], [0, 0, 0], 1,  8.0,  4, 1, AC5Ammo,     [], 'Inner Sphere Autocannon/5'),
  [Name.IS_Autocannon_10]:       Weapon(Name.IS_Autocannon_10,       C.Ballistic, T.Autocannon, Tech.IS, [ 0,  5, 10, 15], [10, 10, 10], [0, 0, 0], 3, 12.0,  7, 1, AC10Ammo,    [], 'Inner Sphere Autocannon/10'),
  [Name.IS_Autocannon_20]:       Weapon(Name.IS_Autocannon_20,       C.Ballistic, T.Autocannon, Tech.IS, [ 0,  3,  6,  9], [20, 20, 20], [0, 0, 0], 7, 14.0, 10, 1, AC20Ammo,    [], 'Inner Sphere Autocannon/20') }
export const LBXAutocannons = {
  [Name.IS_LB_2X_Autocannon]:    Weapon(Name.IS_LB_2X_Autocannon,    C.Ballistic, T.Autocannon, Tech.IS, [ 4,  9, 18, 27], [ 2,  2,  2], [0, 0, 0], 1,  6.0,  4, 1, LB2XACAmmo,  [], 'Inner Sphere LB-2X Autocannon'),
  [Name.IS_LB_5X_Autocannon]:    Weapon(Name.IS_LB_5X_Autocannon,    C.Ballistic, T.Autocannon, Tech.IS, [ 3,  7, 14, 21], [ 5,  5,  5], [0, 0, 0], 1,  8.0,  5, 1, LB5XACAmmo,  [], 'Inner Sphere LB-5X Autocannon'),
  [Name.IS_LB_10X_Autocannon]:   Weapon(Name.IS_LB_10X_Autocannon,   C.Ballistic, T.Autocannon, Tech.IS, [ 0,  6, 12, 18], [10, 10, 10], [0, 0, 0], 2, 11.0,  6, 1, LB10XACAmmo, [], 'Inner Sphere LB-10X Autocannon'),
  [Name.IS_LB_20X_Autocannon]:   Weapon(Name.IS_LB_20X_Autocannon,   C.Ballistic, T.Autocannon, Tech.IS, [ 0,  4,  8, 12], [20, 20, 20], [0, 0, 0], 6, 14.0, 11, 1, LB20XACAmmo, [], 'Inner Sphere LB-20X Autocannon') }
export const LightAutocannons = {
  [Name.IS_Light_Autocannon_2]:  Weapon(Name.IS_Light_Autocannon_2,  C.Ballistic, T.Autocannon, Tech.IS, [ 0,  6, 12, 18], [ 2,  2,  2], [0, 0, 0], 1,  4.0,  1, 1, LAC2Ammo,    [], 'Inner Sphere Light Autocannon/2'),
  [Name.IS_Light_Autocannon_5]:  Weapon(Name.IS_Light_Autocannon_5,  C.Ballistic, T.Autocannon, Tech.IS, [ 0,  5, 10, 15], [ 5,  5,  5], [0, 0, 0], 1,  5.0,  2, 1, LAC5Ammo,    [], 'Inner Sphere Light Autocannon/5') }
export const RotaryAutocannons = {
  [Name.IS_Rotary_Autocannon_2]: Weapon(Name.IS_Rotary_Autocannon_2, C.Ballistic, T.Autocannon, Tech.IS, [ 0,  6, 12, 18], [ 2,  2,  2], [0, 0, 0], 1,  8.0,  3, 6, RAC2Ammo,    [/* #TODO: implement multi shot (6) trait */], 'Inner Sphere Rotary Autocannon/2'),
  [Name.IS_Rotary_Autocannon_5]: Weapon(Name.IS_Rotary_Autocannon_5, C.Ballistic, T.Autocannon, Tech.IS, [ 0,  5, 10, 15], [ 5,  5,  5], [0, 0, 0], 1, 10.0,  6, 6, RAC5Ammo,    [/* #TODO: implement multi shot (6) trait */], 'Inner Sphere Rotary Autocannon/5') }
export const UltraAutocannons = {
  [Name.IS_Ultra_Autocannon_2]:  Weapon(Name.IS_Ultra_Autocannon_2,  C.Ballistic, T.Autocannon, Tech.IS, [ 3,  8, 17, 25], [ 2,  2,  2], [0, 0, 0], 1,  7.0,  3, 2, UAC2Ammo,    [/* #TODO: implement multi shot (2) trait */], 'Inner Sphere Autocannon/2'),
  [Name.IS_Ultra_Autocannon_5]:  Weapon(Name.IS_Ultra_Autocannon_5,  C.Ballistic, T.Autocannon, Tech.IS, [ 2,  6, 13, 20], [ 5,  5,  5], [0, 0, 0], 1,  9.0,  5, 2, UAC5Ammo,    [/* #TODO: implement multi shot (2) trait */], 'Inner Sphere Autocannon/5'),
  [Name.IS_Ultra_Autocannon_10]: Weapon(Name.IS_Ultra_Autocannon_10, C.Ballistic, T.Autocannon, Tech.IS, [ 0,  6, 12, 18], [10, 10, 10], [0, 0, 0], 4, 13.0,  7, 2, UAC10Ammo,   [/* #TODO: implement multi shot (2) trait */], 'Inner Sphere Autocannon/10'),
  [Name.IS_Ultra_Autocannon_20]: Weapon(Name.IS_Ultra_Autocannon_20, C.Ballistic, T.Autocannon, Tech.IS, [ 0,  3,  7, 10], [20, 20, 20], [0, 0, 0], 8, 15.0, 10, 2, UAC20Ammo,   [/* #TODO: implement multi shot (2) trait */], 'Inner Sphere Autocannon/20') }
