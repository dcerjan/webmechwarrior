import { Tech } from '../../../common/Tech'
import { AmmoName, GearName as Name } from '../../GearName'
import {
  Weapon,
  WeaponClass as C,
  WeaponType as T,
} from '../Weapon'


const LRMAmmo        = [Name.IS_LRM_Ammo, Name.IS_LRM_Fragmentation_Ammo, Name.IS_LRM_Incendiary_Ammo, Name.IS_LRM_SWARM_Ammo, Name.IS_LRM_Flare_Ammo] as AmmoName[]
const LRMArtemisAmmo = [Name.IS_LRM_Artemis_Ammo] as AmmoName[]
const MRMAmmo        = [Name.IS_MRM_Ammo] as AmmoName[]
const SRMAmmo        = [Name.IS_SRM_Ammo, Name.IS_SRM_Fragmentation_Ammo, Name.IS_SRM_Inferno_Ammo] as AmmoName[]
const SRMArtemisAmmo = [Name.IS_SRM_Artemis_Ammo] as AmmoName[]
const StreakSRMAmmo  = [Name.IS_Streak_SRM_Ammo] as AmmoName[]
const MMLAmmo        = [...LRMAmmo, ...SRMAmmo] as AmmoName[]
const MMLArtemisAmmo = [...LRMArtemisAmmo, ...SRMArtemisAmmo] as AmmoName[]

export const LongRangeMissileLaunchers = {
  [Name.IS_LRM_5]:             Weapon(Name.IS_LRM_5,             C.Missile, T.MissileLauncher, Tech.IS, [6, 7, 14, 21], [1, 1, 1], [0, 0, 0],  2,  2.0, 1,  5, LRMAmmo, [], 'Inner Sphere LRM-5 Missile Launcher'),
  [Name.IS_LRM_10]:            Weapon(Name.IS_LRM_10,            C.Missile, T.MissileLauncher, Tech.IS, [6, 7, 14, 21], [1, 1, 1], [0, 0, 0],  4,  5.0, 2, 10, LRMAmmo, [], 'Inner Sphere LRM-10 Missile Launcher'),
  [Name.IS_LRM_15]:            Weapon(Name.IS_LRM_15,            C.Missile, T.MissileLauncher, Tech.IS, [6, 7, 14, 21], [1, 1, 1], [0, 0, 0],  5,  7.0, 3, 15, LRMAmmo, [], 'Inner Sphere LRM-15 Missile Launcher'),
  [Name.IS_LRM_20]:            Weapon(Name.IS_LRM_20,            C.Missile, T.MissileLauncher, Tech.IS, [6, 7, 14, 21], [1, 1, 1], [0, 0, 0],  6, 10.0, 5, 20, LRMAmmo, [], 'Inner Sphere LRM-20 Missile Launcher') }
export const LongRangeMissileLaunchersWithArtemis = {
  [Name.IS_LRM_5_Artemis_IV]:  Weapon(Name.IS_LRM_5_Artemis_IV,  C.Missile, T.MissileLauncher, Tech.IS, [6, 7, 14, 21], [1, 1, 1], [0, 0, 0],  2,  3.0, 2,  5, LRMArtemisAmmo, [/* TODO: implement artemis iv trait */], 'Inner Sphere LRM-5 Missile Launcher With Artemis IV FCS'),
  [Name.IS_LRM_10_Artemis_IV]: Weapon(Name.IS_LRM_10_Artemis_IV, C.Missile, T.MissileLauncher, Tech.IS, [6, 7, 14, 21], [1, 1, 1], [0, 0, 0],  4,  6.0, 3, 10, LRMArtemisAmmo, [/* TODO: implement artemis iv trait */], 'Inner Sphere LRM-10 Missile Launcher With Artemis IV FCS'),
  [Name.IS_LRM_15_Artemis_IV]: Weapon(Name.IS_LRM_15_Artemis_IV, C.Missile, T.MissileLauncher, Tech.IS, [6, 7, 14, 21], [1, 1, 1], [0, 0, 0],  5,  8.0, 4, 15, LRMArtemisAmmo, [/* TODO: implement artemis iv trait */], 'Inner Sphere LRM-15 Missile Launcher With Artemis IV FCS'),
  [Name.IS_LRM_20_Artemis_IV]: Weapon(Name.IS_LRM_20_Artemis_IV, C.Missile, T.MissileLauncher, Tech.IS, [6, 7, 14, 21], [1, 1, 1], [0, 0, 0],  6, 11.0, 6, 20, LRMArtemisAmmo, [/* TODO: implement artemis iv trait */], 'Inner Sphere LRM-20 Missile Launcher With Artemis IV FCS') }
export const MediumRangeMissileLaunchers = {
  [Name.IS_MRM_10]:            Weapon(Name.IS_MRM_10,            C.Missile, T.MissileLauncher, Tech.IS, [0, 3,  8, 15], [1, 1, 1], [0, 0, 0],  4,  3.0, 2,  5, MRMAmmo, [], 'Inner Sphere MRM-10 Missile Launcher'),
  [Name.IS_MRM_20]:            Weapon(Name.IS_MRM_20,            C.Missile, T.MissileLauncher, Tech.IS, [0, 3,  8, 15], [1, 1, 1], [0, 0, 0],  6,  7.0, 3, 10, MRMAmmo, [], 'Inner Sphere MRM-20 Missile Launcher'),
  [Name.IS_MRM_30]:            Weapon(Name.IS_MRM_30,            C.Missile, T.MissileLauncher, Tech.IS, [0, 3,  8, 15], [1, 1, 1], [0, 0, 0], 10, 10.0, 5, 15, MRMAmmo, [], 'Inner Sphere MRM-30 Missile Launcher'),
  [Name.IS_MRM_40]:            Weapon(Name.IS_MRM_40,            C.Missile, T.MissileLauncher, Tech.IS, [0, 3,  8, 15], [1, 1, 1], [0, 0, 0], 12, 12.0, 7, 20, MRMAmmo, [], 'Inner Sphere MRM-40 Missile Launcher') }
export const ShortRangeMissileLaunchers = {
  [Name.IS_SRM_2]:             Weapon(Name.IS_SRM_2,             C.Missile, T.MissileLauncher, Tech.IS, [0, 3,  6,  9], [2, 2, 2], [0, 0, 0],  2,  1.0, 1,  2, SRMAmmo, [], 'Inner Sphere SRM-2 Missile Launcher'),
  [Name.IS_SRM_4]:             Weapon(Name.IS_SRM_4,             C.Missile, T.MissileLauncher, Tech.IS, [0, 3,  6,  9], [2, 2, 2], [0, 0, 0],  3,  2.0, 1,  4, SRMAmmo, [], 'Inner Sphere SRM-4 Missile Launcher'),
  [Name.IS_SRM_6]:             Weapon(Name.IS_SRM_6,             C.Missile, T.MissileLauncher, Tech.IS, [0, 3,  6,  9], [2, 2, 2], [0, 0, 0],  4,  3.0, 2,  6, SRMAmmo, [], 'Inner Sphere SRM-6 Missile Launcher') }
export const ShortRangeMissileLaunchersWithArtemis = {
  [Name.IS_SRM_2_Artemis_IV]:  Weapon(Name.IS_SRM_2_Artemis_IV,  C.Missile, T.MissileLauncher, Tech.IS, [0, 3,  6,  9], [2, 2, 2], [0, 0, 0],  2,  2.0, 2,  2, SRMArtemisAmmo, [/* TODO: implement artemis iv trait */], 'Inner Sphere SRM-2 Missile Launcher With Artemis IV FCS'),
  [Name.IS_SRM_4_Artemis_IV]:  Weapon(Name.IS_SRM_4_Artemis_IV,  C.Missile, T.MissileLauncher, Tech.IS, [0, 3,  6,  9], [2, 2, 2], [0, 0, 0],  3,  3.0, 2,  4, SRMArtemisAmmo, [/* TODO: implement artemis iv trait */], 'Inner Sphere SRM-4 Missile Launcher With Artemis IV FCS'),
  [Name.IS_SRM_6_Artemis_IV]:  Weapon(Name.IS_SRM_6_Artemis_IV,  C.Missile, T.MissileLauncher, Tech.IS, [0, 3,  6,  9], [2, 2, 2], [0, 0, 0],  4,  4.0, 3,  6, SRMArtemisAmmo, [/* TODO: implement artemis iv trait */], 'Inner Sphere SRM-6 Missile Launcher With Artemis IV FCS') }
export const StreakShortRangeMissileLaunchers = {
  [Name.IS_Streak_SRM_2]:      Weapon(Name.IS_Streak_SRM_2,      C.Missile, T.MissileLauncher, Tech.IS, [0, 3,  6,  9], [2, 2, 2], [0, 0, 0],  2,  1.5, 1,  2, StreakSRMAmmo, [/* TODO: implement streak trait */], 'Inner Sphere Streak SRM-2 Missile Launcher'),
  [Name.IS_Streak_SRM_4]:      Weapon(Name.IS_Streak_SRM_4,      C.Missile, T.MissileLauncher, Tech.IS, [0, 3,  6,  9], [2, 2, 2], [0, 0, 0],  3,  3.0, 1,  4, StreakSRMAmmo, [/* TODO: implement streak trait */], 'Inner Sphere Streak SRM-4 Missile Launcher'),
  [Name.IS_Streak_SRM_6]:      Weapon(Name.IS_Streak_SRM_6,      C.Missile, T.MissileLauncher, Tech.IS, [0, 3,  6,  9], [2, 2, 2], [0, 0, 0],  4,  4.5, 2,  6, StreakSRMAmmo, [/* TODO: implement streak trait */], 'Inner Sphere Streak SRM-6 Missile Launcher') }
export const MultiMissileLaunchers = {
  [Name.IS_MML_3]:             Weapon(Name.IS_MML_3,             C.Missile, T.MissileLauncher, Tech.IS, [6, 7, 14, 21], [1, 1, 1], [0, 0, 0],  2,  1.5, 2,  3, MMLAmmo, [], 'Inner Sphere MML-3 Missile Launcher'),
  [Name.IS_MML_5]:             Weapon(Name.IS_MML_5,             C.Missile, T.MissileLauncher, Tech.IS, [6, 7, 14, 21], [1, 1, 1], [0, 0, 0],  3,  3.0, 3,  5, MMLAmmo, [], 'Inner Sphere MML-5 Missile Launcher'),
  [Name.IS_MML_7]:             Weapon(Name.IS_MML_7,             C.Missile, T.MissileLauncher, Tech.IS, [6, 7, 14, 21], [1, 1, 1], [0, 0, 0],  4,  4.5, 4,  7, MMLAmmo, [], 'Inner Sphere MML-7 Missile Launcher'),
  [Name.IS_MML_9]:             Weapon(Name.IS_MML_9,             C.Missile, T.MissileLauncher, Tech.IS, [6, 7, 14, 21], [1, 1, 1], [0, 0, 0],  5,  6.0, 5,  9, MMLAmmo, [], 'Inner Sphere MML-9 Missile Launcher') }
export const MultiMissileLaunchersWithArtemis = {
  [Name.IS_MML_3_Artemis_IV]:  Weapon(Name.IS_MML_3_Artemis_IV,  C.Missile, T.MissileLauncher, Tech.IS, [6, 7, 14, 21], [1, 1, 1], [0, 0, 0],  2,  2.5, 3,  3, MMLArtemisAmmo, [], 'Inner Sphere MML-3 Missile Launcher With Artemis IV FCS'),
  [Name.IS_MML_5_Artemis_IV]:  Weapon(Name.IS_MML_5_Artemis_IV,  C.Missile, T.MissileLauncher, Tech.IS, [6, 7, 14, 21], [1, 1, 1], [0, 0, 0],  3,  4.0, 4,  5, MMLArtemisAmmo, [], 'Inner Sphere MML-5 Missile Launcher With Artemis IV FCS'),
  [Name.IS_MML_7_Artemis_IV]:  Weapon(Name.IS_MML_7_Artemis_IV,  C.Missile, T.MissileLauncher, Tech.IS, [6, 7, 14, 21], [1, 1, 1], [0, 0, 0],  4,  5.5, 5,  7, MMLArtemisAmmo, [], 'Inner Sphere MML-7 Missile Launcher With Artemis IV FCS'),
  [Name.IS_MML_9_Artemis_IV]:  Weapon(Name.IS_MML_9_Artemis_IV,  C.Missile, T.MissileLauncher, Tech.IS, [6, 7, 14, 21], [1, 1, 1], [0, 0, 0],  5,  7.0, 6,  9, MMLArtemisAmmo, [], 'Inner Sphere MML-9 Missile Launcher With Artemis IV FCS') }
