import { MechGear } from '../../../../../../models/MechEquipment'
import { AmmoType } from '../../../../../../models/MechEquipment/Ammo'
import { WeaponType } from '../../../../../../models/MechEquipment/Weapons'

import { DetailColor } from '../../../../../../components/Common/Detail'
import * as styles from './Equipment.css'

export const getGearCSSClass = (gear: MechGear) => {
  switch (gear.type) {
  case WeaponType.Autocannon:
  case WeaponType.GaussRifle:
  case WeaponType.Machinegun: return styles.Ballistic
  case WeaponType.Flamer:
  case WeaponType.Laser:
  case WeaponType.Plasma:
  case WeaponType.ParticleCannon: return styles.Energy
  case WeaponType.MissileLauncher:
  case WeaponType.RocketLauncher:
  case WeaponType.PodLauncher: return styles.Missile
  case AmmoType.Bullet:
  case AmmoType.Projectile:
  case AmmoType.Shell:
  case AmmoType.Slug: return styles.BallisticAmmo
  case AmmoType.Tank: return styles.EnergyAmmo
  case AmmoType.Missile:
  case AmmoType.Rocket:
  case AmmoType.Pod: return styles.MissileAmmo
  default: return styles.Equipment
  }
}

export const getGearDetailColor = (gear: MechGear): DetailColor => {
  switch (gear.type) {
  case WeaponType.Autocannon:
  case WeaponType.GaussRifle:
  case WeaponType.Machinegun: return DetailColor.Purple
  case WeaponType.Flamer:
  case WeaponType.Laser:
  case WeaponType.Plasma:
  case WeaponType.ParticleCannon: return DetailColor.Lime
  case WeaponType.MissileLauncher:
  case WeaponType.RocketLauncher:
  case WeaponType.PodLauncher: return DetailColor.Teal
  case AmmoType.Bullet:
  case AmmoType.Projectile:
  case AmmoType.Shell:
  case AmmoType.Slug: return DetailColor.TransparentPurple
  case AmmoType.Tank: return DetailColor.TransparentLime
  case AmmoType.Missile:
  case AmmoType.Rocket:
  case AmmoType.Pod: return DetailColor.TransparentTeal
  default: return DetailColor.TransaprentBlue
  }
}
