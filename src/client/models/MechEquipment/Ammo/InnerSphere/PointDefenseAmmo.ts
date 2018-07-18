import { Tech } from '../../../common/Tech'
import { GearName as Name } from '../../GearName'
import {
  AmmoBin,
  AmmoClass as C,
  AmmoType as T,
} from '../AmmoBin'

export const AMSAmmo = {
  [Name.IS_AMS_Ammo]: AmmoBin(Name.IS_AMS_Ammo, C.Ballistic, T.Bullet, Tech.IS, 200, 1, 1.0,  4, [], 'IS Standard AMS Ammo') }
