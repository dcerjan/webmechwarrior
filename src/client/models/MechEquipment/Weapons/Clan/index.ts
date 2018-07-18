import {
  LBXAutocannons,
  UltraAutocannons,
} from './Autocannons'
import { Flamers } from './Flamers'
import { AntiPersonelGaussRifles, GaussRifles, HyperAssaultGaussRifles } from './GausRifles'
import { ERLasers, HeavyLasers, PulseLasers } from './Lasers'
import { HeavyMachineguns, LightMachineguns, Machineguns } from './Machineguns'
import {
  AdvancedTacticalMissileLaunchers,
  LongRangeMissileLaunchers,
  LongRangeMissileLaunchersWithArtemis,
  ShortRangeMissileLaunchers,
  ShortRangeMissileLaunchersWithArtemis,
  StreakShortRangeMissileLaunchers,
} from './MissileLaunchers'
import { ParticleCannons } from './ParticleCannons'
import { PlasmaCannons } from './PlasmaCannons'
import { NARCLaunchers } from './PodLaunchers'
import { PointDefenseSystems } from './PointDefenseSystems'

export const ClanWeapons = {
  ...LBXAutocannons,
  ...UltraAutocannons,
  ...GaussRifles,
  ...AntiPersonelGaussRifles,
  ...HyperAssaultGaussRifles,
  ...Machineguns,
  ...LightMachineguns,
  ...HeavyMachineguns,
  ...Flamers,
  ...PlasmaCannons,
  ...ERLasers,
  ...PulseLasers,
  ...HeavyLasers,
  ...ParticleCannons,
  ...LongRangeMissileLaunchers,
  ...LongRangeMissileLaunchersWithArtemis,
  ...ShortRangeMissileLaunchers,
  ...ShortRangeMissileLaunchersWithArtemis,
  ...StreakShortRangeMissileLaunchers,
  ...AdvancedTacticalMissileLaunchers,
  ...NARCLaunchers,
  ...PointDefenseSystems,
}
