import { Tech } from '../../common/Tech'
import { AmmoBin, AmmoBinName as B, AmmoTrait, AmmoTraitName as A, AmmoType as T } from './Ammo'

export const AmmoTraits = {
  [A.ArmorPiercing]: AmmoTrait({ name: A.ArmorPiercing, capacityModifier: 0.5, critModifier: [-1, -1, -1] }),
  [A.Bulky]:         AmmoTrait({ name: A.Bulky, criticalsModifier: +1 }),
  [A.Caseless]:      AmmoTrait({ name: A.Caseless, capacityModifier: 1.5, jamModifier: +1 }),
  [A.Cluster]:       AmmoTrait({ name: A.Cluster, toHitModifier: [-2, +0, +2] }),
  [A.Flechette]:     AmmoTrait({ name: A.Flechette, toHitModifier: [-3, -1, +2], isAntiInfantry: true }),
  [A.Heavy]:         AmmoTrait({ name: A.Heavy, tonnageModifier: 2.0 }),
  [A.Precision]:     AmmoTrait({ name: A.Precision, toHitModifier: [-1, -1, -1], capacityModifier: 0.5 }),
  [A.Artemis]:       AmmoTrait({ name: A.Artemis, toHitModifier: [-1, -1, -1], tonnageModifier: 1.5 }),
  [A.Fragmentation]: AmmoTrait({ name: A.Fragmentation, toHitModifier: [-2, -2, -2], isAntiInfantry: true }),
  [A.Inferno]:       AmmoTrait({ name: A.Inferno, heatDamageModifier: [+1, +1, +1], ammoExplosionChanceModifier: +2 }),
  [A.Incendiary]:    AmmoTrait({ name: A.Inferno, ammoExplosionChanceModifier: +2, toHitModifier: [-2, -2, -2], damageModifier: [1.5, 1.5, 1.5], isAntiInfantry: true }),
  [A.SWARM]:         AmmoTrait({ name: A.SWARM, toHitModifier: [-2, -2, -2], damageModifier: [0.5, 0.5, 0.5] }),
  [A.Flare]:         AmmoTrait({ name: A.Flare, damageModifier: [0.0, 0.0, 0.0] }),
  [A.HE]:            AmmoTrait({ name: A.HE, damageModifier: [1.5, 1.5, 1.5], rangeModifier: [-5, -2, -4, -6] }),
  [A.ER]:            AmmoTrait({ name: A.ER, damageModifier: [0.5, 0.5, 0.5], rangeModifier: [+0, +4, +8, +12] }),
}

export const AmmoTable = [
  // Inner Sphere Balistic Ammo
  AmmoBin(B.AC2_Ammo,  T.Projectile, Tech.IS, 45, 1, 1.0, 5, [], 'Standard Autocannon/2 Ammo Bin'),
  AmmoBin(B.AC5_Ammo,  T.Projectile, Tech.IS, 20, 1, 1.0, 5, [], 'Standard Autocannon/5 Ammo Bin'),
  AmmoBin(B.AC10_Ammo, T.Projectile, Tech.IS, 10, 1, 1.0, 5, [], 'Standard Autocannon/10 Ammo Bin'),
  AmmoBin(B.AC20_Ammo, T.Projectile, Tech.IS,  5, 1, 1.0, 5, [], 'Standard Autocannon/20 Ammo Bin'),
  AmmoBin(B.AC2_AP_Ammo,  T.Projectile, Tech.IS, 45, 1, 1.0, 5, [AmmoTraits.ArmorPiercing], 'Armor Piercing Autocannon/2 Ammo Bin'),
  AmmoBin(B.AC5_AP_Ammo,  T.Projectile, Tech.IS, 20, 1, 1.0, 5, [AmmoTraits.ArmorPiercing], 'Armor Piercing Autocannon/5 Ammo Bin'),
  AmmoBin(B.AC10_AP_Ammo, T.Projectile, Tech.IS, 10, 1, 1.0, 5, [AmmoTraits.ArmorPiercing], 'Armor Piercing Autocannon/10 Ammo Bin'),
  AmmoBin(B.AC20_AP_Ammo, T.Projectile, Tech.IS,  5, 1, 1.0, 5, [AmmoTraits.ArmorPiercing], 'Armor Piercing Autocannon/20 Ammo Bin'),
  AmmoBin(B.AC2_Flechette_Ammo,  T.Projectile, Tech.IS, 45, 1, 1.0, 5, [AmmoTraits.Flechette], 'Flechette Autocannon/2 Ammo Bin'),
  AmmoBin(B.AC5_Flechette_Ammo,  T.Projectile, Tech.IS, 20, 1, 1.0, 5, [AmmoTraits.Flechette], 'Flechette Autocannon/5 Ammo Bin'),
  AmmoBin(B.AC10_Flechette_Ammo, T.Projectile, Tech.IS, 10, 1, 1.0, 5, [AmmoTraits.Flechette], 'Flechette Autocannon/10 Ammo Bin'),
  AmmoBin(B.AC20_Flechette_Ammo, T.Projectile, Tech.IS,  5, 1, 1.0, 5, [AmmoTraits.Flechette], 'Flechette Autocannon/20 Ammo Bin'),
  AmmoBin(B.AC2_Precision_Ammo,  T.Projectile, Tech.IS, 45, 1, 1.0, 5, [AmmoTraits.Precision], 'Precision Autocannon/2 Ammo Bin'),
  AmmoBin(B.AC5_Precision_Ammo,  T.Projectile, Tech.IS, 20, 1, 1.0, 5, [AmmoTraits.Precision], 'Precision Autocannon/5 Ammo Bin'),
  AmmoBin(B.AC10_Precision_Ammo, T.Projectile, Tech.IS, 10, 1, 1.0, 5, [AmmoTraits.Precision], 'Precision Autocannon/10 Ammo Bin'),
  AmmoBin(B.AC20_Precision_Ammo, T.Projectile, Tech.IS,  5, 1, 1.0, 5, [AmmoTraits.Precision], 'Precision Autocannon/20 Ammo Bin'),

  AmmoBin(B.LB2_X_AC_Ammo,  T.Projectile, Tech.IS, 45, 1, 1.0, 5, [], 'Standard LB-X Autocannon/2 Ammo Bin'),
  AmmoBin(B.LB5_X_AC_Ammo,  T.Projectile, Tech.IS, 20, 1, 1.0, 5, [], 'Standard LB-X Autocannon/5 Ammo Bin'),
  AmmoBin(B.LB10_X_AC_Ammo, T.Projectile, Tech.IS, 10, 1, 1.0, 5, [], 'Standard LB-X Autocannon/10 Ammo Bin'),
  AmmoBin(B.LB20_X_AC_Ammo, T.Projectile, Tech.IS,  5, 1, 1.0, 5, [], 'Standard LB-X Autocannon/20 Ammo Bin'),
  AmmoBin(B.LB2_X_AC_Cluster_Ammo,  T.Shell, Tech.IS, 45, 1, 1.0, 5, [AmmoTraits.Cluster], 'Cluster LB-X Autocannon/2 Ammo Bin'),
  AmmoBin(B.LB5_X_AC_Cluster_Ammo,  T.Shell, Tech.IS, 20, 1, 1.0, 5, [AmmoTraits.Cluster], 'Cluster LB-X Autocannon/5 Ammo Bin'),
  AmmoBin(B.LB10_X_AC_Cluster_Ammo, T.Shell, Tech.IS, 10, 1, 1.0, 5, [AmmoTraits.Cluster], 'Cluster LB-X Autocannon/10 Ammo Bin'),
  AmmoBin(B.LB20_X_AC_Cluster_Ammo, T.Shell, Tech.IS,  5, 1, 1.0, 5, [AmmoTraits.Cluster], 'Cluster LB-X Autocannon/20 Ammo Bin'),

  AmmoBin(B.LAC2_Ammo, T.Projectile, Tech.IS, 45, 1, 1.0, 5, [], 'Standard Light Autocannon/2 Ammo Bin'),
  AmmoBin(B.LAC5_Ammo, T.Projectile, Tech.IS, 20, 1, 1.0, 5, [], 'Standard Light Autocannon/5 Ammo Bin'),
  AmmoBin(B.LAC2_AP_Ammo, T.Projectile, Tech.IS, 45, 1, 1.0, 5, [AmmoTraits.ArmorPiercing], 'Armor Piercing Light Autocannon/2 Ammo Bin'),
  AmmoBin(B.LAC5_AP_Ammo, T.Projectile, Tech.IS, 20, 1, 1.0, 5, [AmmoTraits.ArmorPiercing], 'Armor Piercing Light Autocannon/5 Ammo Bin'),
  AmmoBin(B.LAC2_Flechette_Ammo, T.Projectile, Tech.IS, 45, 1, 1.0, 5, [AmmoTraits.Flechette], 'Flechette Light Autocannon/2 Ammo Bin'),
  AmmoBin(B.LAC5_Flechette_Ammo, T.Projectile, Tech.IS, 20, 1, 1.0, 5, [AmmoTraits.Flechette], 'Flechette Light Autocannon/5 Ammo Bin'),
  AmmoBin(B.LAC2_Precision_Ammo, T.Projectile, Tech.IS, 45, 1, 1.0, 5, [AmmoTraits.Precision], 'PRecision Light Autocannon/2 Ammo Bin'),
  AmmoBin(B.LAC5_Precision_Ammo, T.Projectile, Tech.IS, 20, 1, 1.0, 5, [AmmoTraits.Precision], 'PRecision Light Autocannon/5 Ammo Bin'),

  AmmoBin(B.RAC2_Ammo, T.Projectile, Tech.IS, 45, 1, 1.0, 5, [AmmoTraits.Caseless], 'Standard Rotary Autocannon/2 Ammo Bin'),
  AmmoBin(B.RAC5_Ammo, T.Projectile, Tech.IS, 20, 1, 1.0, 5, [AmmoTraits.Caseless], 'Standard Rotary Autocannon/5 Ammo Bin'),

  AmmoBin(B.UAC2_Ammo,  T.Projectile, Tech.IS, 45, 1, 1.0, 5, [AmmoTraits.Caseless], 'Standard Ultra Autocannon/2 Ammo Bin'),
  AmmoBin(B.UAC5_Ammo,  T.Projectile, Tech.IS, 20, 1, 1.0, 5, [AmmoTraits.Caseless], 'Standard Ultra Autocannon/5 Ammo Bin'),
  AmmoBin(B.UAC10_Ammo, T.Projectile, Tech.IS, 10, 1, 1.0, 5, [AmmoTraits.Caseless], 'Standard Ultra Autocannon/10 Ammo Bin'),
  AmmoBin(B.UAC20_Ammo, T.Projectile, Tech.IS,  5, 1, 1.0, 5, [AmmoTraits.Caseless], 'Standard Ultra Autocannon/20 Ammo Bin'),

  AmmoBin(B.Light_Gauss_Ammo, T.Slug, Tech.IS, 16, 1, 1.0, 0, [], 'Standard Light Gauss Slug Ammo Bin'),
  AmmoBin(B.Gauss_Ammo,       T.Slug, Tech.IS,  8, 1, 1.0, 0, [], 'Standard Gauss Slug Ammo Bin'),
  AmmoBin(B.Heavy_Gauss_Ammo, T.Slug, Tech.IS,  4, 1, 1.0, 0, [AmmoTraits.Bulky, AmmoTraits.Heavy], 'Standard Heavy Gauss Slug Ammo Bin'),

  AmmoBin(B.LMG_Ammo,      T.Bullet, Tech.IS,  200, 1, 0.5,  4, [], 'Standard Light Machinegun Ammo Bin'),
  AmmoBin(B.LMG_Half_Ammo, T.Bullet, Tech.IS,  100, 1, 0.25, 4, [], 'Standard Light Machinegun Ammo Bin (1/2)'),
  AmmoBin(B.MG_Ammo,       T.Bullet, Tech.IS,  200, 1, 0.5,  4, [], 'Standard Machinegun Ammo Bin'),
  AmmoBin(B.MG_Half_Ammo,  T.Bullet, Tech.IS,  100, 1, 0.25, 4, [], 'Standard Machinegun Ammo Bin (1/2)'),
  AmmoBin(B.HMG_Ammo,      T.Bullet, Tech.IS,  100, 1, 1.0,  4, [], 'Standard Heavy Machinegun Ammo Bin'),
  AmmoBin(B.HMG_Half_Ammo, T.Bullet, Tech.IS,   50, 1, 0.5,  4, [], 'Standard Heavy Machinegun Ammo Bin (1/2)'),

  // Inner Sphere Energy Ammo
  AmmoBin(B.Flamer_Ammo,       T.Tank, Tech.IS, 20, 1, 0.5, 7, [], 'Standard Flamer Fuel Tank'),
  AmmoBin(B.Plasma_Rifle_Ammo, T.Tank, Tech.IS, 10, 1, 1.0, 7, [], 'Standard Plasma Rifle Fuel Tank'),

  // Inner Sphere Missile Ammo
  AmmoBin(B.LRM_Ammo,               T.Missile, Tech.IS, 120, 1, 1.0, 6, [], 'Standard LRM Ammo Rack'),
  AmmoBin(B.LRM_Artemis_Ammo,       T.Missile, Tech.IS, 120, 1, 1.0, 6, [AmmoTraits.Artemis], 'Artemis IV LRM Ammo Rack'),
  AmmoBin(B.LRM_Fragmentation_Ammo, T.Missile, Tech.IS, 120, 1, 1.0, 6, [AmmoTraits.Fragmentation], 'Fragmentation LRM Ammo Rack'),
  AmmoBin(B.LRM_Incendiary_Ammo,    T.Missile, Tech.IS, 120, 1, 1.0, 6, [AmmoTraits.Incendiary], 'Incendiary LRM Ammo Rack'),
  AmmoBin(B.LRM_SWARM_Ammo,         T.Missile, Tech.IS, 120, 1, 1.0, 6, [AmmoTraits.SWARM], 'SWARM LRM Ammo Rack'),
  AmmoBin(B.LRM_Flare_Ammo,         T.Missile, Tech.IS, 120, 1, 1.0, 6, [AmmoTraits.Flare], 'Flare LRM Ammo Rack'),

  AmmoBin(B.MRM_Ammo,               T.Missile, Tech.IS, 240, 1, 1.0, 6, [], 'Standard MRM Ammo Rack'),

  AmmoBin(B.SRM_Ammo,               T.Missile, Tech.IS, 100, 1, 1.0, 6, [], 'Standard SRM Ammo Rack'),
  AmmoBin(B.SRM_Artemis_Ammo,       T.Missile, Tech.IS, 100, 1, 1.0, 6, [AmmoTraits.Artemis], 'Artemis IV SRM Ammo Rack'),
  AmmoBin(B.SRM_Fragmentation_Ammo, T.Missile, Tech.IS, 100, 1, 1.0, 6, [AmmoTraits.Fragmentation], 'Fragmentation IV SRM Ammo Rack'),
  AmmoBin(B.SRM_Inferno_Ammo,       T.Missile, Tech.IS, 100, 1, 1.0, 6, [AmmoTraits.Inferno], 'Inferno IV SRM Ammo Rack'),

  AmmoBin(B.Streak_SRM_Ammo,        T.Missile, Tech.IS, 100, 1, 1.0, 6, [], 'Standard Streak SRM Ammo Rack'),

  AmmoBin(B.NARC_Ammo,           T.Pod, Tech.IS, 6, 1, 1.0, 6, [], 'Standard NARC Ammo Bin'),
  AmmoBin(B.NARC_Explosive_Ammo, T.Pod, Tech.IS, 6, 1, 1.0, 6, [/* TODO: Implement this ammo trait */], 'Explosive NARC Ammo Bin'),
  AmmoBin(B.NARC_ECM_Ammo,       T.Pod, Tech.IS, 6, 1, 1.0, 6, [/* TODO: Implement this ammo trait */], 'ECM NARC Ammo Bin'),
  AmmoBin(B.NARC_Haywire_Ammo,   T.Pod, Tech.IS, 6, 1, 1.0, 6, [/* TODO: Implement this ammo trait */], 'Haywire NARC Ammo Bin'),
  AmmoBin(B.NARC_Nemesis_Ammo,   T.Pod, Tech.IS, 6, 1, 1.0, 6, [/* TODO: Implement this ammo trait */], 'Nemesis NARC Ammo Bin'),


  // Clan Balistic Ammo
  AmmoBin(B.LB2_X_AC_Ammo,  T.Projectile, Tech.Clan, 45, 1, 1.0, 5, [], 'Standard Clan LB-X Autocannon/2 Ammo Bin'),
  AmmoBin(B.LB5_X_AC_Ammo,  T.Projectile, Tech.Clan, 20, 1, 1.0, 5, [], 'Standard Clan LB-X Autocannon/5 Ammo Bin'),
  AmmoBin(B.LB10_X_AC_Ammo, T.Projectile, Tech.Clan, 10, 1, 1.0, 5, [], 'Standard Clan LB-X Autocannon/10 Ammo Bin'),
  AmmoBin(B.LB20_X_AC_Ammo, T.Projectile, Tech.Clan,  5, 1, 1.0, 5, [], 'Standard Clan LB-X Autocannon/20 Ammo Bin'),
  AmmoBin(B.LB2_X_AC_Cluster_Ammo,  T.Shell, Tech.Clan, 45, 1, 1.0, 5, [AmmoTraits.Cluster], 'Cluster Clan LB-X Autocannon/2 Ammo Bin'),
  AmmoBin(B.LB5_X_AC_Cluster_Ammo,  T.Shell, Tech.Clan, 20, 1, 1.0, 5, [AmmoTraits.Cluster], 'Cluster Clan LB-X Autocannon/5 Ammo Bin'),
  AmmoBin(B.LB10_X_AC_Cluster_Ammo, T.Shell, Tech.Clan, 10, 1, 1.0, 5, [AmmoTraits.Cluster], 'Cluster Clan LB-X Autocannon/10 Ammo Bin'),
  AmmoBin(B.LB20_X_AC_Cluster_Ammo, T.Shell, Tech.Clan,  5, 1, 1.0, 5, [AmmoTraits.Cluster], 'Cluster Clan LB-X Autocannon/20 Ammo Bin'),

  AmmoBin(B.UAC2_Ammo,  T.Projectile, Tech.Clan, 45, 1, 1.0, 5, [AmmoTraits.Caseless], 'Standard Clan Ultra Autocannon/2 Ammo Bin'),
  AmmoBin(B.UAC5_Ammo,  T.Projectile, Tech.Clan, 20, 1, 1.0, 5, [AmmoTraits.Caseless], 'Standard Clan Ultra Autocannon/5 Ammo Bin'),
  AmmoBin(B.UAC10_Ammo, T.Projectile, Tech.Clan, 10, 1, 1.0, 5, [AmmoTraits.Caseless], 'Standard Clan Ultra Autocannon/10 Ammo Bin'),
  AmmoBin(B.UAC20_Ammo, T.Projectile, Tech.Clan,  5, 1, 1.0, 5, [AmmoTraits.Caseless], 'Standard Clan Ultra Autocannon/20 Ammo Bin'),

  AmmoBin(B.Gauss_Ammo,       T.Slug, Tech.Clan,   8, 1, 1.0, 0, [], 'Standard Clan Gauss Slug Ammo Bin'),
  AmmoBin(B.HAG_Ammo,         T.Slug, Tech.Clan, 120, 1, 1.0, 0, [], 'Standard Clan HAG Slug Ammo Bin'),

  AmmoBin(B.LMG_Ammo,      T.Bullet, Tech.Clan,  200, 1, 0.5,  4, [], 'Standard Clan Light Machinegun Ammo Bin'),
  AmmoBin(B.LMG_Half_Ammo, T.Bullet, Tech.Clan,  100, 1, 0.25, 4, [], 'Standard Clan Light Machinegun Ammo Bin (1/2)'),
  AmmoBin(B.MG_Ammo,       T.Bullet, Tech.Clan,  200, 1, 0.5,  4, [], 'Standard Clan Machinegun Ammo Bin'),
  AmmoBin(B.MG_Half_Ammo,  T.Bullet, Tech.Clan,  100, 1, 0.25, 4, [], 'Standard Clan Machinegun Ammo Bin (1/2)'),
  AmmoBin(B.HMG_Ammo,      T.Bullet, Tech.Clan,  100, 1, 1.0,  4, [], 'Standard Clan Heavy Machinegun Ammo Bin'),
  AmmoBin(B.HMG_Half_Ammo, T.Bullet, Tech.Clan,   50, 1, 0.5,  4, [], 'Standard Clan Heavy Machinegun Ammo Bin (1/2)'),

  // Clan Energy Ammo
  AmmoBin(B.Flamer_Ammo,        T.Tank, Tech.Clan, 20, 1, 0.5, 7, [], 'Standard Clan Flamer Fuel Tank'),
  AmmoBin(B.Plasma_Cannon_Ammo, T.Tank, Tech.Clan, 10, 1, 1.0, 7, [], 'Standard Clan Plasma Cannon Fuel Tank'),

  // Clan Missile Ammo
  AmmoBin(B.ATM_Ammo,               T.Missile, Tech.Clan, 60, 1, 1.0, 6, [], 'Standard Clan ATM Ammo Rack'),
  AmmoBin(B.ATM_HE_Ammo,            T.Missile, Tech.Clan, 60, 1, 1.0, 6, [AmmoTraits.HE], 'HE Clan ATM Ammo Rack'),
  AmmoBin(B.ATM_ER_Ammo,            T.Missile, Tech.Clan, 60, 1, 1.0, 6, [AmmoTraits.ER], 'ER Clan ATM Ammo Rack'),

  AmmoBin(B.LRM_Ammo,               T.Missile, Tech.Clan, 120, 1, 1.0, 6, [], 'Standard Clan LRM Ammo Rack'),
  AmmoBin(B.LRM_Artemis_Ammo,       T.Missile, Tech.Clan, 120, 1, 1.0, 6, [AmmoTraits.Artemis], 'Artemis IV Clan LRM Ammo Rack'),
  AmmoBin(B.LRM_Fragmentation_Ammo, T.Missile, Tech.Clan, 120, 1, 1.0, 6, [AmmoTraits.Fragmentation], 'Fragmentation Clan LRM Ammo Rack'),
  AmmoBin(B.LRM_SWARM_Ammo,         T.Missile, Tech.Clan, 120, 1, 1.0, 6, [AmmoTraits.SWARM], 'SWARM Clan LRM Ammo Rack'),
  AmmoBin(B.LRM_Flare_Ammo,         T.Missile, Tech.Clan, 120, 1, 1.0, 6, [AmmoTraits.Flare], 'Flare Clan LRM Ammo Rack'),

  AmmoBin(B.SRM_Ammo,               T.Missile, Tech.Clan, 100, 1, 1.0, 6, [], 'Standard Clan SRM Ammo Rack'),
  AmmoBin(B.SRM_Artemis_Ammo,       T.Missile, Tech.Clan, 100, 1, 1.0, 6, [AmmoTraits.Artemis], 'Artemis IV Clan SRM Ammo Rack'),
  AmmoBin(B.SRM_Inferno_Ammo,       T.Missile, Tech.Clan, 100, 1, 1.0, 6, [AmmoTraits.Inferno], 'Inferno IV Clan SRM Ammo Rack'),

  AmmoBin(B.Streak_SRM_Ammo,        T.Missile, Tech.Clan, 100, 1, 1.0, 6, [], 'Standard Clan Streak SRM Ammo Rack'),

  AmmoBin(B.NARC_Ammo,           T.Pod, Tech.Clan, 6, 1, 1.0, 6, [], 'Standard Clan NARC Ammo Bin'),
]
