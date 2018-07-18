import { Tech } from '../../../common/Tech'
import { GearName as Name } from '../../GearName'
import {
  AmmoBin,
  AmmoClass as C,
  AmmoType as T,
} from '../AmmoBin'
import { AmmoTraits } from '../AmmoTraits'

export const ATMAmmo = {
  [Name.C_ATM_Ammo]:                AmmoBin(Name.C_ATM_Ammo,               C.Missile, T.Missile, Tech.Clan, 60, 1, 1.0, 6, [], 'Clan Standard ATM Ammo Rack'),
  [Name.C_ATM_HE_Ammo]:             AmmoBin(Name.C_ATM_HE_Ammo,            C.Missile, T.Missile, Tech.Clan, 60, 1, 1.0, 6, [AmmoTraits.HE], 'Clan HE ATM Ammo Rack'),
  [Name.C_ATM_ER_Ammo]:             AmmoBin(Name.C_ATM_ER_Ammo,            C.Missile, T.Missile, Tech.Clan, 60, 1, 1.0, 6, [AmmoTraits.ER], 'Clan ER ATM Ammo Rack') }
export const LRMAmmo = {
  [Name.C_LRM_Ammo]:                AmmoBin(Name.C_LRM_Ammo,               C.Missile, T.Missile, Tech.Clan, 120, 1, 1.0, 6, [], 'Clan Standard LRM Ammo Rack'),
  [Name.C_LRM_Artemis_Ammo]:        AmmoBin(Name.C_LRM_Artemis_Ammo,       C.Missile, T.Missile, Tech.Clan, 120, 1, 1.0, 6, [AmmoTraits.Artemis], 'Artemis Clan IV LRM Ammo Rack'),
  [Name.C_LRM_Fragmentation_Ammo]:  AmmoBin(Name.C_LRM_Fragmentation_Ammo, C.Missile, T.Missile, Tech.Clan, 120, 1, 1.0, 6, [AmmoTraits.Fragmentation], 'Clan Fragmentation LRM Ammo Rack'),
  [Name.C_LRM_SWARM_Ammo]:          AmmoBin(Name.C_LRM_SWARM_Ammo,         C.Missile, T.Missile, Tech.Clan, 120, 1, 1.0, 6, [AmmoTraits.SWARM], 'Clan SWARM LRM Ammo Rack'),
  [Name.C_LRM_Flare_Ammo]:          AmmoBin(Name.C_LRM_Flare_Ammo,         C.Missile, T.Missile, Tech.Clan, 120, 1, 1.0, 6, [AmmoTraits.Flare], 'Clan Flare LRM Ammo Rack') }
export const SRMAmmo = {
  [Name.C_SRM_Ammo]:                AmmoBin(Name.C_SRM_Ammo,               C.Missile, T.Missile, Tech.Clan, 100, 1, 1.0, 6, [], 'Clan Standard SRM Ammo Rack'),
  [Name.C_SRM_Artemis_Ammo]:        AmmoBin(Name.C_SRM_Artemis_Ammo,       C.Missile, T.Missile, Tech.Clan, 100, 1, 1.0, 6, [AmmoTraits.Artemis], 'Artemis Clan IV SRM Ammo Rack'),
  [Name.C_SRM_Fragmentation_Ammo]:  AmmoBin(Name.C_SRM_Fragmentation_Ammo, C.Missile, T.Missile, Tech.Clan, 100, 1, 1.0, 6, [AmmoTraits.Fragmentation], 'Clan Fragmentation IV SRM Ammo Rack'),
  [Name.C_SRM_Inferno_Ammo]:        AmmoBin(Name.C_SRM_Inferno_Ammo,       C.Missile, T.Missile, Tech.Clan, 100, 1, 1.0, 6, [AmmoTraits.Inferno], 'Inferno Clan IV SRM Ammo Rack') }
export const StreakSRMAmmo = {
  [Name.C_Streak_SRM_Ammo]:         AmmoBin(Name.C_Streak_SRM_Ammo,        C.Missile, T.Missile, Tech.Clan, 100, 1, 1.0, 6, [], 'Clan Standard Streak SRM Ammo Rack') }
export const NARCAmmo = {
  [Name.C_NARC_Ammo]:               AmmoBin(Name.C_NARC_Ammo,              C.Missile,     T.Pod, Tech.Clan,   6, 1, 1.0, 6, [], 'Clan Standard NARC Ammo Bin') }
