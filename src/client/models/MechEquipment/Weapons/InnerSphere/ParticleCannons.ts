import { Tech } from '../../../common/Tech'
import { GearName as Name } from '../../GearName'
import {
  Weapon,
  WeaponClass as C,
  WeaponType as T,
} from '../Weapon'


export const ParticleCannons = {
  [Name.IS_PPC]:           Weapon(Name.IS_PPC,           C.Energy, T.ParticleCannon, Tech.IS, [3, 6, 12, 18], [10, 10, 10], [0, 0, 0], 10,  7.0, 3, 0, [], [], 'Inner Sphere Particle Projection Cannon'),
  [Name.IS_Light_PPC]:     Weapon(Name.IS_Light_PPC,     C.Energy, T.ParticleCannon, Tech.IS, [3, 6, 12, 18], [ 5,  5,  5], [0, 0, 0],  5,  3.0, 2, 0, [], [], 'Inner Sphere Light Particle Projection Cannon'),
  [Name.IS_Heavy_PPC]:     Weapon(Name.IS_Heavy_PPC,     C.Energy, T.ParticleCannon, Tech.IS, [3, 6, 12, 18], [15, 15, 15], [0, 0, 0], 15, 10.0, 4, 0, [], [], 'Inner Sphere Heavy Particle Projection Cannon'),
  [Name.IS_ER_PPC]:        Weapon(Name.IS_ER_PPC,        C.Energy, T.ParticleCannon, Tech.IS, [0, 7, 14, 23], [10, 10, 10], [0, 0, 0], 15,  7.0, 3, 0, [], [], 'Inner Sphere Extended Range Particle Projection Cannon'),
  [Name.IS_Snub_Nose_PPC]: Weapon(Name.IS_Snub_Nose_PPC, C.Energy, T.ParticleCannon, Tech.IS, [0, 9, 13, 15], [10,  8,  5], [0, 0, 0], 10,  7.0, 2, 0, [], [], 'Inner Sphere Snub-Nose Particle Projection Cannon') }
