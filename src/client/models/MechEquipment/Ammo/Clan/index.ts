import { LBXAutocannonAmmo, UltraAutocannonAmmo } from './AutocannonAmmo'
import { FlamerAmmo, PlasmaCannonAmmo } from './EnergyAmmo'
import { APGaussRifleAmmo, GaussRifleAmmo, HAGAmmo } from './GaussRifleAmmo'
import { HeavyMachinegunAmmo, LightMacinegunAmmo, MachinegunAmmo } from './MachinegunAmmo'
import { ATMAmmo, LRMAmmo, NARCAmmo, SRMAmmo, StreakSRMAmmo } from './MissileLauncherAmmo'
import { AMSAmmo } from './PointDefenseAmmo'

export const Ammo = {
  ...LBXAutocannonAmmo,
  ...UltraAutocannonAmmo,
  ...GaussRifleAmmo,
  ...APGaussRifleAmmo,
  ...HAGAmmo,
  ...MachinegunAmmo,
  ...LightMacinegunAmmo,
  ...HeavyMachinegunAmmo,
  ...AMSAmmo,
  ...FlamerAmmo,
  ...PlasmaCannonAmmo,
  ...ATMAmmo,
  ...LRMAmmo,
  ...SRMAmmo,
  ...StreakSRMAmmo,
  ...NARCAmmo,
}
