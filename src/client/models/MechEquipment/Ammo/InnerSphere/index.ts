import {
  AutocannonAmmo,
  LBXAutocannonAmmo,
  LightAutocannonAmmo,
  RotaryAutocannonAmmo,
  UltraAutocannonAmmo,
} from './AutocannonAmmo'
import { FlamerAmmo, PlasmaRifleAmmo } from './EnergyAmmo'
import { GaussRifleAmmo, HeavyGaussRifleAmmo, LightGaussRifleAmmo } from './GaussRifleAmmo'
import { HeavyMachinegunAmmo, LightMachinegunAmmo, MachinegunAmmo } from './MachinegunAmmo'
import { LRMAmmo, MRMAmmo, NARCAmmo, SRMAmmo, StreakSRMAmmo } from './MissileLauncherAmmo'
import { AMSAmmo } from './PointDefenseAmmo'


export const Ammo = {
  ...AutocannonAmmo,
  ...LBXAutocannonAmmo,
  ...LightAutocannonAmmo,
  ...RotaryAutocannonAmmo,
  ...UltraAutocannonAmmo,
  ...GaussRifleAmmo,
  ...LightGaussRifleAmmo,
  ...HeavyGaussRifleAmmo,
  ...MachinegunAmmo,
  ...LightMachinegunAmmo,
  ...HeavyMachinegunAmmo,
  ...AMSAmmo,
  ...FlamerAmmo,
  ...PlasmaRifleAmmo,
  ...LRMAmmo,
  ...MRMAmmo,
  ...SRMAmmo,
  ...StreakSRMAmmo,
  ...NARCAmmo,
}
