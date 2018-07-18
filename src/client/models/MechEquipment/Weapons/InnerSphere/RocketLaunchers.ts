import { Tech } from '../../../common/Tech'
import { GearName as Name } from '../../GearName'
import {
  Weapon,
  WeaponClass as C,
  WeaponType as T,
} from '../Weapon'

export const RocketLaunchers = {
  [Name.IS_Rocket_Launcher_10]: Weapon(Name.IS_Rocket_Launcher_10, C.Missile, T.RocketLauncher, Tech.IS, [0, 5, 11, 18], [1, 1, 1], [0, 0, 0],  3,  0.5, 1, 10, [], [], 'Inner Sphere 10-Tube Rocket Launcher'),
  [Name.IS_Rocket_Launcher_15]: Weapon(Name.IS_Rocket_Launcher_15, C.Missile, T.RocketLauncher, Tech.IS, [0, 4,  9, 15], [1, 1, 1], [0, 0, 0],  4,  1.0, 2, 15, [], [], 'Inner Sphere 15-Tube Rocket Launcher'),
  [Name.IS_Rocket_Launcher_20]: Weapon(Name.IS_Rocket_Launcher_20, C.Missile, T.RocketLauncher, Tech.IS, [0, 3,  7, 12], [1, 1, 1], [0, 0, 0],  5,  1.5, 3, 20, [], [], 'Inner Sphere 20-Tube Rocket Launcher') }
