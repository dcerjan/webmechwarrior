import { Tech } from '../../../common/Tech'
import { GearName as Name } from '../../GearName'
import {
  AmmoBin,
  AmmoClass as C,
  AmmoType as T,
} from '../AmmoBin'

export const FlamerAmmo = {
  [Name.C_Flamer_Ammo]:        AmmoBin(Name.C_Flamer_Ammo,        C.Energy, T.Tank, Tech.Clan, 20, 1, 0.5, 7, [], 'Clan Standard Flamer Fuel Tank') }
export const PlasmaCannonAmmo = {
  [Name.C_Plasma_Cannon_Ammo]: AmmoBin(Name.C_Plasma_Cannon_Ammo, C.Energy, T.Tank, Tech.Clan, 10, 1, 1.0, 7, [], 'Clan Standard Plasma Cannon Fuel Tank') }
