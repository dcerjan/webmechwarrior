import { Component } from '../common/Component'
import { getMaxArmorHitPoints, MechTonnage } from '../InternalStructure'

export enum Armor {
  Standard = 'Standard',
  FerroFibrousIS = 'Ferro Fibrous (IS)',
  FerroFibrousClan = 'Ferro Fibrous (Clan)',
  LightFerroFibrous = 'Light Ferro Fibrous',
  HeavyFerroFibrous = 'Heavy Ferro Fibrous',
  Stealth = 'Stealth',
}

export const getArmorCriticalSlots = (type: Armor) => {
  switch (type) {
  case Armor.Standard: return 0
  case Armor.FerroFibrousIS: return 14
  case Armor.FerroFibrousClan: return 7
  case Armor.LightFerroFibrous: return 7
  case Armor.HeavyFerroFibrous: return 21
  case Armor.Stealth: return 12
  }
}

export const getArmorBasePointMultiplier = (type: Armor) => {
  switch (type) {
    case Armor.Standard: return 1.0
    case Armor.FerroFibrousIS: return 1.12
    case Armor.FerroFibrousClan: return 1.2
    case Armor.LightFerroFibrous: return 1.06
    case Armor.HeavyFerroFibrous: return 1.24
    case Armor.Stealth: return 1.0
    }
}

export const getMaxArmorForPart = (mechTonnage: MechTonnage, type: Armor, component: Component): number => {
  const points = getMaxArmorHitPoints(mechTonnage, component)
  const multiplier = getArmorBasePointMultiplier(type)

  return Math.floor(points * multiplier)
}
