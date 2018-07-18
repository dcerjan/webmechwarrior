import { Tech } from '../../../common/Tech'
import { GearName as Name } from '../../GearName'
import {
  AmmoBin,
  AmmoClass as C,
  AmmoType as T,
} from '../AmmoBin'

export const AMSAmmo = {
  [Name.C_AMS_Ammo]: AmmoBin(Name.C_AMS_Ammo, C.Ballistic, T.Bullet, Tech.Clan, 200, 1, 1.0,  4, [], 'Clan Standard AMS Ammo') }
