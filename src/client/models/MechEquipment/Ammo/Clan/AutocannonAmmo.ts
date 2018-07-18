import { Tech } from '../../../common/Tech'
import { GearName as Name } from '../../GearName'
import {
  AmmoBin,
  AmmoClass as C,
  AmmoType as T,
} from '../AmmoBin'
import { AmmoTraits } from '../AmmoTraits'

export const LBXAutocannonAmmo = {
  [Name.C_LB_2X_AC_Ammo]:           AmmoBin(Name.C_LB_2X_AC_Ammo,           C.Ballistic, T.Projectile, Tech.Clan, 45, 1, 1.0, 5, [], 'Clan Standard LB-X Autocannon/2 Ammo Bin'),
  [Name.C_LB_5X_AC_Ammo]:           AmmoBin(Name.C_LB_5X_AC_Ammo,           C.Ballistic, T.Projectile, Tech.Clan, 20, 1, 1.0, 5, [], 'Clan Standard LB-X Autocannon/5 Ammo Bin'),
  [Name.C_LB_10X_AC_Ammo]:          AmmoBin(Name.C_LB_10X_AC_Ammo,          C.Ballistic, T.Projectile, Tech.Clan, 10, 1, 1.0, 5, [], 'Clan Standard LB-X Autocannon/10 Ammo Bin'),
  [Name.C_LB_20X_AC_Ammo]:          AmmoBin(Name.C_LB_20X_AC_Ammo,          C.Ballistic, T.Projectile, Tech.Clan,  5, 1, 1.0, 5, [], 'Clan Standard LB-X Autocannon/20 Ammo Bin'),
  [Name.C_LB_2X_AC_Cluster_Ammo]:   AmmoBin(Name.C_LB_2X_AC_Cluster_Ammo,   C.Ballistic,      T.Shell, Tech.Clan, 45, 1, 1.0, 5, [AmmoTraits.Cluster], 'Clan Cluster LB-X Autocannon/2 Ammo Bin'),
  [Name.C_LB_5X_AC_Cluster_Ammo]:   AmmoBin(Name.C_LB_5X_AC_Cluster_Ammo,   C.Ballistic,      T.Shell, Tech.Clan, 20, 1, 1.0, 5, [AmmoTraits.Cluster], 'Clan Cluster LB-X Autocannon/5 Ammo Bin'),
  [Name.C_LB_10X_AC_Cluster_Ammo]:  AmmoBin(Name.C_LB_10X_AC_Cluster_Ammo,  C.Ballistic,      T.Shell, Tech.Clan, 10, 1, 1.0, 5, [AmmoTraits.Cluster], 'Clan Cluster LB-X Autocannon/10 Ammo Bin'),
  [Name.C_LB_20X_AC_Cluster_Ammo]:  AmmoBin(Name.C_LB_20X_AC_Cluster_Ammo,  C.Ballistic,      T.Shell, Tech.Clan,  5, 1, 1.0, 5, [AmmoTraits.Cluster], 'Clan Cluster LB-X Autocannon/20 Ammo Bin') }
export const UltraAutocannonAmmo = {
  [Name.C_UAC2_Ammo]:               AmmoBin(Name.C_UAC2_Ammo,               C.Ballistic, T.Projectile, Tech.Clan, 45, 1, 1.0, 5, [AmmoTraits.Caseless], 'Clan Standard Ultra Autocannon/2 Ammo Bin'),
  [Name.C_UAC5_Ammo]:               AmmoBin(Name.C_UAC5_Ammo,               C.Ballistic, T.Projectile, Tech.Clan, 20, 1, 1.0, 5, [AmmoTraits.Caseless], 'Clan Standard Ultra Autocannon/5 Ammo Bin'),
  [Name.C_UAC10_Ammo]:              AmmoBin(Name.C_UAC10_Ammo,              C.Ballistic, T.Projectile, Tech.Clan, 10, 1, 1.0, 5, [AmmoTraits.Caseless], 'Clan Standard Ultra Autocannon/10 Ammo Bin'),
  [Name.C_UAC20_Ammo]:              AmmoBin(Name.C_UAC20_Ammo,              C.Ballistic, T.Projectile, Tech.Clan,  5, 1, 1.0, 5, [AmmoTraits.Caseless], 'Clan Standard Ultra Autocannon/20 Ammo Bin') }
