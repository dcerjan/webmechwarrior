import { Tech } from '../../../common/Tech'
import { GearName as Name } from '../../GearName'
import {
  AmmoBin,
  AmmoClass as C,
  AmmoType as T,
} from '../AmmoBin'

export const FlamerAmmo = {
  [Name.IS_Flamer_Ammo]:       AmmoBin(Name.IS_Flamer_Ammo,       C.Energy, T.Tank, Tech.IS, 20, 1, 0.5, 7, [], 'Inner Sphere Standard Flamer Fuel Tank') }
export const PlasmaRifleAmmo = {
  [Name.IS_Plasma_Rifle_Ammo]: AmmoBin(Name.IS_Plasma_Rifle_Ammo, C.Energy, T.Tank, Tech.IS, 10, 1, 1.0, 7, [], 'Inner Sphere Standard Plasma Rifle Fuel Tank') }
