import { parseHeavyWeaponRecord } from './HeavyWeaponRecord'

import * as isAutocannons from './csv/is_autocannons.csv'
import * as isFlamers from './csv/is_flamers.csv'
import * as isGaussRifles from './csv/is_gauss_rifles.csv'
import * as isLasers from './csv/is_lasers.csv'
import * as isMachineguns from './csv/is_machine_guns.csv'
import * as isMissiles from './csv/is_missiles.csv'
import * as isPlasmaWeapons from './csv/is_plasma_weapons.csv'
import * as isPPCs from './csv/is_ppcs.csv'

const InnerSphere = [
  ...isAutocannons,
  ...isFlamers,
  ...isGaussRifles,
  ...isLasers,
  ...isMachineguns,
  ...isMissiles,
  ...isPlasmaWeapons,
  ...isPPCs,
].map(parseHeavyWeaponRecord)

export {
  InnerSphere,
}
