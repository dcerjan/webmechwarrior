import {
  Autocannons,
  LBXAutocannons,
  LightAutocannons,
  RotaryAutocannons,
  UltraAutocannons,
} from './Autocannons'
import { Flamers } from './Flamers'
import { GaussRifles, HeavyGaussRifles, LightGaussRifles } from './GausRifles'
import { ERLasers, Lasers, PulseLasers } from './Lasers'
import { HeavyMachineguns, LightMachineguns, Machineguns } from './Machineguns'
import {
  LongRangeMissileLaunchers,
  LongRangeMissileLaunchersWithArtemis,
  MediumRangeMissileLaunchers,
  MultiMissileLaunchers,
  MultiMissileLaunchersWithArtemis,
  ShortRangeMissileLaunchers,
  ShortRangeMissileLaunchersWithArtemis,
  StreakShortRangeMissileLaunchers,
} from './MissileLaunchers'
import { ParticleCannons } from './ParticleCannons'
import { PlasmaRifles } from './PlasmaRifles'
import { NARCLaunchers } from './PodLaunchers'
import { PointDefenseSystems } from './PointDefenseSystems'
import { RocketLaunchers } from './RocketLaunchers'

export const InnerSphereWeapons = {
  ...Autocannons,
  ...LBXAutocannons,
  ...LightAutocannons,
  ...RotaryAutocannons,
  ...UltraAutocannons,
  ...GaussRifles,
  ...LightGaussRifles,
  ...HeavyGaussRifles,
  ...Machineguns,
  ...LightMachineguns,
  ...HeavyMachineguns,
  ...Flamers,
  ...PlasmaRifles,
  ...Lasers,
  ...ERLasers,
  ...PulseLasers,
  ...ParticleCannons,
  ...LongRangeMissileLaunchers,
  ...LongRangeMissileLaunchersWithArtemis,
  ...MediumRangeMissileLaunchers,
  ...ShortRangeMissileLaunchers,
  ...ShortRangeMissileLaunchersWithArtemis,
  ...StreakShortRangeMissileLaunchers,
  ...MultiMissileLaunchers,
  ...MultiMissileLaunchersWithArtemis,
  ...RocketLaunchers,
  ...NARCLaunchers,
  ...PointDefenseSystems,
}
