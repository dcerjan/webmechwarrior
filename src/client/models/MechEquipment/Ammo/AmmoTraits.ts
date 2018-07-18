import { Omit } from '../../../lib/type'

export enum AmmoTraitName {
  Precision     = 'Precision',
  ArmorPiercing = 'ArmorPiercing',
  Flechette     = 'Flechette',
  Cluster       = 'Cluster',
  Heavy         = 'Heavy',
  Bulky         = 'Bulky',
  Caseless      = 'Caseless',
  Artemis       = 'Artemis',
  Fragmentation = 'Fragmentation',
  Inferno       = 'Inferno',
  Incendiary    = 'Incendiary',
  SWARM         = 'SWARM',
  Flare         = 'Flare',
  HE            = 'HE',
  ER            = 'ER',
}

export interface IAmmoTrait {
  name: AmmoTraitName,
  capacityModifier: number,
  criticalsModifier: number,
  tonnageModifier: number,
  toHitModifier: [number, number, number],
  critModifier: [number, number, number],
  rangeModifier: [number, number, number, number],
  damageModifier: [number, number, number],
  heatDamageModifier: [number, number, number],
  jamModifier: number,
  ammoExplosionChanceModifier: number,
  heatModifier: number,
  isAntiInfantry: boolean,
}

export const AmmoTrait = (props: Pick<IAmmoTrait, 'name'> & Partial<Omit<IAmmoTrait, 'name'>>): IAmmoTrait => ({
  capacityModifier: 0,
  criticalsModifier: 0,
  tonnageModifier: 0.0,
  toHitModifier: [0, 0, 0],
  critModifier: [0, 0, 0],
  rangeModifier: [0, 0, 0, 0],
  damageModifier: [0, 0, 0],
  heatDamageModifier: [0, 0, 0],
  jamModifier: 0,
  ammoExplosionChanceModifier: 0,
  heatModifier: 0,
  isAntiInfantry: false,
  ...props,
})

export const AmmoTraits = {
  [AmmoTraitName.ArmorPiercing]: AmmoTrait({ name: AmmoTraitName.ArmorPiercing, capacityModifier: 0.5, critModifier: [-1, -1, -1] }),
  [AmmoTraitName.Bulky]:         AmmoTrait({ name: AmmoTraitName.Bulky, criticalsModifier: +1 }),
  [AmmoTraitName.Caseless]:      AmmoTrait({ name: AmmoTraitName.Caseless, capacityModifier: 1.5, jamModifier: +1 }),
  [AmmoTraitName.Cluster]:       AmmoTrait({ name: AmmoTraitName.Cluster, toHitModifier: [-2, +0, +2] }),
  [AmmoTraitName.Flechette]:     AmmoTrait({ name: AmmoTraitName.Flechette, toHitModifier: [-3, -1, +2], isAntiInfantry: true }),
  [AmmoTraitName.Heavy]:         AmmoTrait({ name: AmmoTraitName.Heavy, tonnageModifier: 2.0 }),
  [AmmoTraitName.Precision]:     AmmoTrait({ name: AmmoTraitName.Precision, toHitModifier: [-1, -1, -1], capacityModifier: 0.5 }),
  [AmmoTraitName.Artemis]:       AmmoTrait({ name: AmmoTraitName.Artemis, toHitModifier: [-1, -1, -1], tonnageModifier: 1.5 }),
  [AmmoTraitName.Fragmentation]: AmmoTrait({ name: AmmoTraitName.Fragmentation, toHitModifier: [-2, -2, -2], isAntiInfantry: true }),
  [AmmoTraitName.Inferno]:       AmmoTrait({ name: AmmoTraitName.Inferno, heatDamageModifier: [+1, +1, +1], ammoExplosionChanceModifier: +2 }),
  [AmmoTraitName.Incendiary]:    AmmoTrait({ name: AmmoTraitName.Inferno, ammoExplosionChanceModifier: +2, toHitModifier: [-2, -2, -2], damageModifier: [1.5, 1.5, 1.5], isAntiInfantry: true }),
  [AmmoTraitName.SWARM]:         AmmoTrait({ name: AmmoTraitName.SWARM, toHitModifier: [-2, -2, -2], damageModifier: [0.5, 0.5, 0.5] }),
  [AmmoTraitName.Flare]:         AmmoTrait({ name: AmmoTraitName.Flare, damageModifier: [0.0, 0.0, 0.0] }),
  [AmmoTraitName.HE]:            AmmoTrait({ name: AmmoTraitName.HE, damageModifier: [1.5, 1.5, 1.5], rangeModifier: [-5, -2, -4, -6] }),
  [AmmoTraitName.ER]:            AmmoTrait({ name: AmmoTraitName.ER, damageModifier: [0.5, 0.5, 0.5], rangeModifier: [+0, +4, +8, +12] }),
}
