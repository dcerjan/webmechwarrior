import { Tech } from '../../../common/Tech'
import { AmmoName, GearName as Name } from '../../GearName'
import {
  Weapon,
  WeaponClass as C,
  WeaponType as T,
} from '../Weapon'


const LRMAmmo        = [Name.C_LRM_Ammo, Name.C_LRM_Fragmentation_Ammo, Name.C_LRM_SWARM_Ammo, Name.C_LRM_Flare_Ammo] as AmmoName[]
const LRMArtemisAmmo = [Name.C_LRM_Artemis_Ammo] as AmmoName[]
const SRMAmmo        = [Name.C_SRM_Ammo, Name.C_SRM_Fragmentation_Ammo, Name.C_SRM_Inferno_Ammo] as AmmoName[]
const SRMArtemisAmmo = [Name.C_SRM_Artemis_Ammo] as AmmoName[]
const StreakSRMAmmo  = [Name.C_Streak_SRM_Ammo] as AmmoName[]
const ATMAmmo        = [Name.C_ATM_Ammo, Name.C_ATM_HE_Ammo, Name.C_ATM_ER_Ammo] as AmmoName[]


export const LongRangeMissileLaunchers = {
  [Name.C_LRM_5]:             Weapon(Name.C_LRM_5,             C.Missile, T.MissileLauncher, Tech.Clan, [0, 7, 14, 21], [1, 1, 1], [0, 0, 0], 2, 1.0, 1,  5, LRMAmmo, [], 'Clan LRM-5 Missile Launcher'),
  [Name.C_LRM_10]:            Weapon(Name.C_LRM_10,            C.Missile, T.MissileLauncher, Tech.Clan, [0, 7, 14, 21], [1, 1, 1], [0, 0, 0], 4, 2.5, 1, 10, LRMAmmo, [], 'Clan LRM-10 Missile Launcher'),
  [Name.C_LRM_15]:            Weapon(Name.C_LRM_15,            C.Missile, T.MissileLauncher, Tech.Clan, [0, 7, 14, 21], [1, 1, 1], [0, 0, 0], 5, 3.5, 2, 15, LRMAmmo, [], 'Clan LRM-15 Missile Launcher'),
  [Name.C_LRM_20]:            Weapon(Name.C_LRM_20,            C.Missile, T.MissileLauncher, Tech.Clan, [0, 7, 14, 21], [1, 1, 1], [0, 0, 0], 6, 5.0, 4, 20, LRMAmmo, [], 'Clan LRM-20 Missile Launcher') }
export const LongRangeMissileLaunchersWithArtemis = {
  [Name.C_LRM_5_Artemis_IV]:  Weapon(Name.C_LRM_5_Artemis_IV,  C.Missile, T.MissileLauncher, Tech.Clan, [0, 7, 14, 21], [1, 1, 1], [0, 0, 0], 2, 2.0, 2,  5, LRMArtemisAmmo, [/* TODO: implement artemis iv trait */], 'Clan LRM-5 Missile Launcher With Artemis IV FCS'),
  [Name.C_LRM_10_Artemis_IV]: Weapon(Name.C_LRM_10_Artemis_IV, C.Missile, T.MissileLauncher, Tech.Clan, [0, 7, 14, 21], [1, 1, 1], [0, 0, 0], 4, 3.5, 2, 10, LRMArtemisAmmo, [/* TODO: implement artemis iv trait */], 'Clan LRM-10 Missile Launcher With Artemis IV FCS'),
  [Name.C_LRM_15_Artemis_IV]: Weapon(Name.C_LRM_15_Artemis_IV, C.Missile, T.MissileLauncher, Tech.Clan, [0, 7, 14, 21], [1, 1, 1], [0, 0, 0], 5, 4.5, 3, 15, LRMArtemisAmmo, [/* TODO: implement artemis iv trait */], 'Clan LRM-15 Missile Launcher With Artemis IV FCS'),
  [Name.C_LRM_20_Artemis_IV]: Weapon(Name.C_LRM_20_Artemis_IV, C.Missile, T.MissileLauncher, Tech.Clan, [0, 7, 14, 21], [1, 1, 1], [0, 0, 0], 6, 6.0, 5, 20, LRMArtemisAmmo, [/* TODO: implement artemis iv trait */], 'Clan LRM-20 Missile Launcher With Artemis IV FCS') }
export const ShortRangeMissileLaunchers = {
  [Name.C_SRM_2]:             Weapon(Name.C_SRM_2,             C.Missile, T.MissileLauncher, Tech.Clan, [0, 3,  6,  6], [2, 2, 2], [0, 0, 0], 2, 0.5, 1,  2, SRMAmmo, [], 'Clan SRM-2 Missile Launcher'),
  [Name.C_SRM_4]:             Weapon(Name.C_SRM_4,             C.Missile, T.MissileLauncher, Tech.Clan, [0, 3,  6,  9], [2, 2, 2], [0, 0, 0], 3, 1.0, 1,  4, SRMAmmo, [], 'Clan SRM-4 Missile Launcher'),
  [Name.C_SRM_6]:             Weapon(Name.C_SRM_6,             C.Missile, T.MissileLauncher, Tech.Clan, [0, 3,  6,  9], [2, 2, 2], [0, 0, 0], 4, 1.5, 1,  6, SRMAmmo, [], 'Clan SRM-6 Missile Launcher') }
export const ShortRangeMissileLaunchersWithArtemis = {
  [Name.C_SRM_2_Artemis_IV]:  Weapon(Name.C_SRM_2_Artemis_IV,  C.Missile, T.MissileLauncher, Tech.Clan, [0, 3,  6,  9], [2, 2, 2], [0, 0, 0], 2, 1.5, 2,  2, SRMArtemisAmmo, [/* TODO: implement artemis iv trait */], 'Clan SRM-2 Missile Launcher With Artemis IV FCS'),
  [Name.C_SRM_4_Artemis_IV]:  Weapon(Name.C_SRM_4_Artemis_IV,  C.Missile, T.MissileLauncher, Tech.Clan, [0, 3,  6,  9], [2, 2, 2], [0, 0, 0], 3, 2.0, 2,  4, SRMArtemisAmmo, [/* TODO: implement artemis iv trait */], 'Clan SRM-4 Missile Launcher With Artemis IV FCS'),
  [Name.C_SRM_6_Artemis_IV]:  Weapon(Name.C_SRM_6_Artemis_IV,  C.Missile, T.MissileLauncher, Tech.Clan, [0, 3,  6,  9], [2, 2, 2], [0, 0, 0], 4, 2.5, 2,  6, SRMArtemisAmmo, [/* TODO: implement artemis iv trait */], 'Clan SRM-6 Missile Launcher With Artemis IV FCS') }
export const StreakShortRangeMissileLaunchers = {
  [Name.C_Streak_SRM_2]:      Weapon(Name.C_Streak_SRM_2,      C.Missile, T.MissileLauncher, Tech.Clan, [0, 4,  8, 12], [2, 2, 2], [0, 0, 0], 2, 1.0, 1,  2, StreakSRMAmmo, [/* TODO: implement streak trait */], 'Clan Streak SRM-2 Missile Launcher'),
  [Name.C_Streak_SRM_4]:      Weapon(Name.C_Streak_SRM_4,      C.Missile, T.MissileLauncher, Tech.Clan, [0, 4,  8, 12], [2, 2, 2], [0, 0, 0], 3, 2.0, 1,  4, StreakSRMAmmo, [/* TODO: implement streak trait */], 'Clan Streak SRM-4 Missile Launcher'),
  [Name.C_Streak_SRM_6]:      Weapon(Name.C_Streak_SRM_6,      C.Missile, T.MissileLauncher, Tech.Clan, [0, 4,  8, 12], [2, 2, 2], [0, 0, 0], 4, 3.0, 2,  6, StreakSRMAmmo, [/* TODO: implement streak trait */], 'Clan Streak SRM-6 Missile Launcher') }
export const AdvancedTacticalMissileLaunchers = {
  [Name.C_ATM_3]:             Weapon(Name.C_ATM_3,             C.Missile, T.MissileLauncher, Tech.Clan, [4, 5, 10, 15], [2, 2, 2], [0, 0, 0], 2, 1.5, 2,  3, ATMAmmo, [], 'Clan Streak ATM-3 Missile Launcher'),
  [Name.C_ATM_6]:             Weapon(Name.C_ATM_6,             C.Missile, T.MissileLauncher, Tech.Clan, [4, 5, 10, 15], [2, 2, 2], [0, 0, 0], 2, 3.5, 3,  6, ATMAmmo, [], 'Clan Streak ATM-6 Missile Launcher'),
  [Name.C_ATM_9]:             Weapon(Name.C_ATM_9,             C.Missile, T.MissileLauncher, Tech.Clan, [4, 5, 10, 15], [2, 2, 2], [0, 0, 0], 2, 5.0, 4,  9, ATMAmmo, [], 'Clan Streak ATM-9 Missile Launcher'),
  [Name.C_ATM_12]:            Weapon(Name.C_ATM_12,            C.Missile, T.MissileLauncher, Tech.Clan, [4, 5, 10, 15], [2, 2, 2], [0, 0, 0], 2, 7.0, 5, 12, ATMAmmo, [], 'Clan Streak ATM-12 Missile Launcher') }
