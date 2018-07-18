import { Tech } from '../../../common/Tech'
import { GearName as Name } from '../../GearName'
import {
  AmmoBin,
  AmmoClass as C,
  AmmoType as T,
} from '../AmmoBin'
import { AmmoTraits } from '../AmmoTraits'

export const LRMAmmo = {
  [Name.IS_LRM_Ammo]:                AmmoBin(Name.IS_LRM_Ammo,                C.Missile, T.Missile, Tech.IS, 120, 1, 1.0, 6, [], 'Inner Sphere Standard LRM Ammo Rack'),
  [Name.IS_LRM_Artemis_Ammo]:        AmmoBin(Name.IS_LRM_Artemis_Ammo,        C.Missile, T.Missile, Tech.IS, 120, 1, 1.0, 6, [AmmoTraits.Artemis], 'Inner Sphere Artemis IV LRM Ammo Rack'),
  [Name.IS_LRM_Fragmentation_Ammo]:  AmmoBin(Name.IS_LRM_Fragmentation_Ammo,  C.Missile, T.Missile, Tech.IS, 120, 1, 1.0, 6, [AmmoTraits.Fragmentation], 'Inner Sphere Fragmentation LRM Ammo Rack'),
  [Name.IS_LRM_Incendiary_Ammo]:     AmmoBin(Name.IS_LRM_Incendiary_Ammo,     C.Missile, T.Missile, Tech.IS, 120, 1, 1.0, 6, [AmmoTraits.Incendiary], 'Inner Sphere Incendiary LRM Ammo Rack'),
  [Name.IS_LRM_SWARM_Ammo]:          AmmoBin(Name.IS_LRM_SWARM_Ammo,          C.Missile, T.Missile, Tech.IS, 120, 1, 1.0, 6, [AmmoTraits.SWARM], 'Inner Sphere SWARM LRM Ammo Rack'),
  [Name.IS_LRM_Flare_Ammo]:          AmmoBin(Name.IS_LRM_Flare_Ammo,          C.Missile, T.Missile, Tech.IS, 120, 1, 1.0, 6, [AmmoTraits.Flare], 'Inner Sphere Flare LRM Ammo Rack') }
export const MRMAmmo = {
  [Name.IS_MRM_Ammo]:                AmmoBin(Name.IS_MRM_Ammo,                C.Missile, T.Missile, Tech.IS, 240, 1, 1.0, 6, [], 'Inner Sphere Standard MRM Ammo Rack') }
export const SRMAmmo = {
  [Name.IS_SRM_Ammo]:                AmmoBin(Name.IS_SRM_Ammo,                C.Missile, T.Missile, Tech.IS, 100, 1, 1.0, 6, [], 'Inner Sphere Standard SRM Ammo Rack'),
  [Name.IS_SRM_Artemis_Ammo]:        AmmoBin(Name.IS_SRM_Artemis_Ammo,        C.Missile, T.Missile, Tech.IS, 100, 1, 1.0, 6, [AmmoTraits.Artemis], 'Inner Sphere Artemis IV SRM Ammo Rack'),
  [Name.IS_SRM_Fragmentation_Ammo]:  AmmoBin(Name.IS_SRM_Fragmentation_Ammo,  C.Missile, T.Missile, Tech.IS, 100, 1, 1.0, 6, [AmmoTraits.Fragmentation], 'Inner Sphere Fragmentation IV SRM Ammo Rack'),
  [Name.IS_SRM_Inferno_Ammo]:        AmmoBin(Name.IS_SRM_Inferno_Ammo,        C.Missile, T.Missile, Tech.IS, 100, 1, 1.0, 6, [AmmoTraits.Inferno], 'Inner Sphere Inferno IV SRM Ammo Rack') }
export const StreakSRMAmmo = {
  [Name.IS_Streak_SRM_Ammo]:         AmmoBin(Name.IS_Streak_SRM_Ammo,         C.Missile, T.Missile, Tech.IS, 100, 1, 1.0, 6, [], 'Inner Sphere Standard Streak SRM Ammo Rack') }
export const NARCAmmo = {
  [Name.IS_NARC_Ammo]:               AmmoBin(Name.IS_NARC_Ammo,               C.Missile,     T.Pod, Tech.IS,   6, 1, 1.0, 6, [], 'Inner Sphere Standard NARC Ammo Bin'),
  [Name.IS_NARC_Explosive_Ammo]:     AmmoBin(Name.IS_NARC_Explosive_Ammo,     C.Missile,     T.Pod, Tech.IS,   6, 1, 1.0, 6, [/* TODO: Implement this ammo trait */], 'Inner Sphere Explosive NARC Ammo Bin'),
  [Name.IS_NARC_ECM_Ammo]:           AmmoBin(Name.IS_NARC_ECM_Ammo,           C.Missile,     T.Pod, Tech.IS,   6, 1, 1.0, 6, [/* TODO: Implement this ammo trait */], 'Inner Sphere ECM NARC Ammo Bin'),
  [Name.IS_NARC_Haywire_Ammo]:       AmmoBin(Name.IS_NARC_Haywire_Ammo,       C.Missile,     T.Pod, Tech.IS,   6, 1, 1.0, 6, [/* TODO: Implement this ammo trait */], 'Inner Sphere Haywire NARC Ammo Bin'),
  [Name.IS_NARC_Nemesis_Ammo]:       AmmoBin(Name.IS_NARC_Nemesis_Ammo,       C.Missile,     T.Pod, Tech.IS,   6, 1, 1.0, 6, [/* TODO: Implement this ammo trait */], 'Inner Sphere Nemesis NARC Ammo Bin') }
