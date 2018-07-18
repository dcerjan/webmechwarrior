import { Tech } from '../../../common/Tech'
import { GearName as Name } from '../../GearName'
import {
  Weapon,
  WeaponClass as C,
  WeaponType as T,
} from '../Weapon'


export const ParticleCannons = {
  [Name.C_ER_PPC]: Weapon(Name.C_ER_PPC, C.Energy, T.ParticleCannon, Tech.Clan, [0, 7, 14, 23], [15, 15, 15], [0, 0, 0], 15, 6.0, 2, 0, [], [], 'Clan Extended Range Particle Projection Cannon') }
