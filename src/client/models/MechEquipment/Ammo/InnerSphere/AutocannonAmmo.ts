import { Tech } from '../../../common/Tech'
import { GearName as Name } from '../../GearName'
import {
  AmmoBin,
  AmmoClass as C,
  AmmoType as T,
} from '../AmmoBin'
import { AmmoTraits } from '../AmmoTraits'

export const AutocannonAmmo = {
  [Name.IS_AC2_Ammo]:                AmmoBin(Name.IS_AC2_Ammo,                C.Ballistic, T.Projectile, Tech.IS,  45, 1, 1.0, 5, [], 'Inner Sphere Standard Autocannon/2 Ammo Bin'),
  [Name.IS_AC5_Ammo]:                AmmoBin(Name.IS_AC5_Ammo,                C.Ballistic, T.Projectile, Tech.IS,  20, 1, 1.0, 5, [], 'Inner Sphere Standard Autocannon/5 Ammo Bin'),
  [Name.IS_AC10_Ammo]:               AmmoBin(Name.IS_AC10_Ammo,               C.Ballistic, T.Projectile, Tech.IS,  10, 1, 1.0, 5, [], 'Inner Sphere Standard Autocannon/10 Ammo Bin'),
  [Name.IS_AC20_Ammo]:               AmmoBin(Name.IS_AC20_Ammo,               C.Ballistic, T.Projectile, Tech.IS,   5, 1, 1.0, 5, [], 'Inner Sphere Standard Autocannon/20 Ammo Bin'),
  [Name.IS_AC2_AP_Ammo]:             AmmoBin(Name.IS_AC2_AP_Ammo,             C.Ballistic, T.Projectile, Tech.IS,  45, 1, 1.0, 5, [AmmoTraits.ArmorPiercing], 'Inner Sphere Armor Piercing Autocannon/2 Ammo Bin'),
  [Name.IS_AC5_AP_Ammo]:             AmmoBin(Name.IS_AC5_AP_Ammo,             C.Ballistic, T.Projectile, Tech.IS,  20, 1, 1.0, 5, [AmmoTraits.ArmorPiercing], 'Inner Sphere Armor Piercing Autocannon/5 Ammo Bin'),
  [Name.IS_AC10_AP_Ammo]:            AmmoBin(Name.IS_AC10_AP_Ammo,            C.Ballistic, T.Projectile, Tech.IS,  10, 1, 1.0, 5, [AmmoTraits.ArmorPiercing], 'Inner Sphere Armor Piercing Autocannon/10 Ammo Bin'),
  [Name.IS_AC20_AP_Ammo]:            AmmoBin(Name.IS_AC20_AP_Ammo,            C.Ballistic, T.Projectile, Tech.IS,   5, 1, 1.0, 5, [AmmoTraits.ArmorPiercing], 'Inner Sphere Armor Piercing Autocannon/20 Ammo Bin'),
  [Name.IS_AC2_Flechette_Ammo]:      AmmoBin(Name.IS_AC2_Flechette_Ammo,      C.Ballistic, T.Projectile, Tech.IS,  45, 1, 1.0, 5, [AmmoTraits.Flechette], 'Inner Sphere Flechette Autocannon/2 Ammo Bin'),
  [Name.IS_AC5_Flechette_Ammo]:      AmmoBin(Name.IS_AC5_Flechette_Ammo,      C.Ballistic, T.Projectile, Tech.IS,  20, 1, 1.0, 5, [AmmoTraits.Flechette], 'Inner Sphere Flechette Autocannon/5 Ammo Bin'),
  [Name.IS_AC10_Flechette_Ammo]:     AmmoBin(Name.IS_AC10_Flechette_Ammo,     C.Ballistic, T.Projectile, Tech.IS,  10, 1, 1.0, 5, [AmmoTraits.Flechette], 'Inner Sphere Flechette Autocannon/10 Ammo Bin'),
  [Name.IS_AC20_Flechette_Ammo]:     AmmoBin(Name.IS_AC20_Flechette_Ammo,     C.Ballistic, T.Projectile, Tech.IS,   5, 1, 1.0, 5, [AmmoTraits.Flechette], 'Inner Sphere Flechette Autocannon/20 Ammo Bin'),
  [Name.IS_AC2_Precision_Ammo]:      AmmoBin(Name.IS_AC2_Precision_Ammo,      C.Ballistic, T.Projectile, Tech.IS,  45, 1, 1.0, 5, [AmmoTraits.Precision], 'Inner Sphere Precision Autocannon/2 Ammo Bin'),
  [Name.IS_AC5_Precision_Ammo]:      AmmoBin(Name.IS_AC5_Precision_Ammo,      C.Ballistic, T.Projectile, Tech.IS,  20, 1, 1.0, 5, [AmmoTraits.Precision], 'Inner Sphere Precision Autocannon/5 Ammo Bin'),
  [Name.IS_AC10_Precision_Ammo]:     AmmoBin(Name.IS_AC10_Precision_Ammo,     C.Ballistic, T.Projectile, Tech.IS,  10, 1, 1.0, 5, [AmmoTraits.Precision], 'Inner Sphere Precision Autocannon/10 Ammo Bin'),
  [Name.IS_AC20_Precision_Ammo]:     AmmoBin(Name.IS_AC20_Precision_Ammo,     C.Ballistic, T.Projectile, Tech.IS,   5, 1, 1.0, 5, [AmmoTraits.Precision], 'Inner Sphere Precision Autocannon/20 Ammo Bin') }
export const LBXAutocannonAmmo = {
  [Name.IS_LB_2X_AC_Ammo]:           AmmoBin(Name.IS_LB_2X_AC_Ammo,           C.Ballistic, T.Projectile, Tech.IS,  45, 1, 1.0, 5, [], 'Inner Sphere Standard LB-X Autocannon/2 Ammo Bin'),
  [Name.IS_LB_5X_AC_Ammo]:           AmmoBin(Name.IS_LB_5X_AC_Ammo,           C.Ballistic, T.Projectile, Tech.IS,  20, 1, 1.0, 5, [], 'Inner Sphere Standard LB-X Autocannon/5 Ammo Bin'),
  [Name.IS_LB_10X_AC_Ammo]:          AmmoBin(Name.IS_LB_10X_AC_Ammo,          C.Ballistic, T.Projectile, Tech.IS,  10, 1, 1.0, 5, [], 'Inner Sphere Standard LB-X Autocannon/10 Ammo Bin'),
  [Name.IS_LB_20X_AC_Ammo]:          AmmoBin(Name.IS_LB_20X_AC_Ammo,          C.Ballistic, T.Projectile, Tech.IS,   5, 1, 1.0, 5, [], 'Inner Sphere Standard LB-X Autocannon/20 Ammo Bin'),
  [Name.IS_LB_2X_AC_Cluster_Ammo]:   AmmoBin(Name.IS_LB_2X_AC_Cluster_Ammo,   C.Ballistic,      T.Shell, Tech.IS,  45, 1, 1.0, 5, [AmmoTraits.Cluster], 'Inner Sphere Cluster LB-X Autocannon/2 Ammo Bin'),
  [Name.IS_LB_5X_AC_Cluster_Ammo]:   AmmoBin(Name.IS_LB_5X_AC_Cluster_Ammo,   C.Ballistic,      T.Shell, Tech.IS,  20, 1, 1.0, 5, [AmmoTraits.Cluster], 'Inner Sphere Cluster LB-X Autocannon/5 Ammo Bin'),
  [Name.IS_LB_10X_AC_Cluster_Ammo]:  AmmoBin(Name.IS_LB_10X_AC_Cluster_Ammo,  C.Ballistic,      T.Shell, Tech.IS,  10, 1, 1.0, 5, [AmmoTraits.Cluster], 'Inner Sphere Cluster LB-X Autocannon/10 Ammo Bin'),
  [Name.IS_LB_20X_AC_Cluster_Ammo]:  AmmoBin(Name.IS_LB_20X_AC_Cluster_Ammo,  C.Ballistic,      T.Shell, Tech.IS,   5, 1, 1.0, 5, [AmmoTraits.Cluster], 'Inner Sphere Cluster LB-X Autocannon/20 Ammo Bin') }
export const LightAutocannonAmmo = {
  [Name.IS_LAC2_Ammo]:               AmmoBin(Name.IS_LAC2_Ammo,               C.Ballistic, T.Projectile, Tech.IS,  45, 1, 1.0, 5, [], 'Inner Sphere Standard Light Autocannon/2 Ammo Bin'),
  [Name.IS_LAC5_Ammo]:               AmmoBin(Name.IS_LAC5_Ammo,               C.Ballistic, T.Projectile, Tech.IS,  20, 1, 1.0, 5, [], 'Inner Sphere Standard Light Autocannon/5 Ammo Bin'),
  [Name.IS_LAC2_AP_Ammo]:            AmmoBin(Name.IS_LAC2_AP_Ammo,            C.Ballistic, T.Projectile, Tech.IS,  45, 1, 1.0, 5, [AmmoTraits.ArmorPiercing], 'Inner Sphere Armor Piercing Light Autocannon/2 Ammo Bin'),
  [Name.IS_LAC5_AP_Ammo]:            AmmoBin(Name.IS_LAC5_AP_Ammo,            C.Ballistic, T.Projectile, Tech.IS,  20, 1, 1.0, 5, [AmmoTraits.ArmorPiercing], 'Inner Sphere Armor Piercing Light Autocannon/5 Ammo Bin'),
  [Name.IS_LAC2_Flechette_Ammo]:     AmmoBin(Name.IS_LAC2_Flechette_Ammo,     C.Ballistic, T.Projectile, Tech.IS,  45, 1, 1.0, 5, [AmmoTraits.Flechette], 'Inner Sphere Flechette Light Autocannon/2 Ammo Bin'),
  [Name.IS_LAC5_Flechette_Ammo]:     AmmoBin(Name.IS_LAC5_Flechette_Ammo,     C.Ballistic, T.Projectile, Tech.IS,  20, 1, 1.0, 5, [AmmoTraits.Flechette], 'Inner Sphere Flechette Light Autocannon/5 Ammo Bin'),
  [Name.IS_LAC2_Precision_Ammo]:     AmmoBin(Name.IS_LAC2_Precision_Ammo,     C.Ballistic, T.Projectile, Tech.IS,  45, 1, 1.0, 5, [AmmoTraits.Precision], 'Inner Sphere PRecision Light Autocannon/2 Ammo Bin'),
  [Name.IS_LAC5_Precision_Ammo]:     AmmoBin(Name.IS_LAC5_Precision_Ammo,     C.Ballistic, T.Projectile, Tech.IS,  20, 1, 1.0, 5, [AmmoTraits.Precision], 'Inner Sphere PRecision Light Autocannon/5 Ammo Bin') }
export const RotaryAutocannonAmmo = {
  [Name.IS_RAC2_Ammo]:               AmmoBin(Name.IS_RAC2_Ammo,               C.Ballistic, T.Projectile, Tech.IS,  45, 1, 1.0, 5, [AmmoTraits.Caseless], 'Inner Sphere Standard Rotary Autocannon/2 Ammo Bin'),
  [Name.IS_RAC5_Ammo]:               AmmoBin(Name.IS_RAC5_Ammo,               C.Ballistic, T.Projectile, Tech.IS,  20, 1, 1.0, 5, [AmmoTraits.Caseless], 'Inner Sphere Standard Rotary Autocannon/5 Ammo Bin') }
export const UltraAutocannonAmmo = {
  [Name.IS_UAC2_Ammo]:               AmmoBin(Name.IS_UAC2_Ammo,               C.Ballistic, T.Projectile, Tech.IS,  45, 1, 1.0, 5, [AmmoTraits.Caseless], 'Inner Sphere Standard Ultra Autocannon/2 Ammo Bin'),
  [Name.IS_UAC5_Ammo]:               AmmoBin(Name.IS_UAC5_Ammo,               C.Ballistic, T.Projectile, Tech.IS,  20, 1, 1.0, 5, [AmmoTraits.Caseless], 'Inner Sphere Standard Ultra Autocannon/5 Ammo Bin'),
  [Name.IS_UAC10_Ammo]:              AmmoBin(Name.IS_UAC10_Ammo,              C.Ballistic, T.Projectile, Tech.IS,  10, 1, 1.0, 5, [AmmoTraits.Caseless], 'Inner Sphere Standard Ultra Autocannon/10 Ammo Bin'),
  [Name.IS_UAC20_Ammo]:              AmmoBin(Name.IS_UAC20_Ammo,              C.Ballistic, T.Projectile, Tech.IS,   5, 1, 1.0, 5, [AmmoTraits.Caseless], 'Inner Sphere Standard Ultra Autocannon/20 Ammo Bin') }
