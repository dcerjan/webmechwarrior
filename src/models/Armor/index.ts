import { Component } from '../common/Component'
import { Tech } from '../common/Tech'
import { getMaxArmorHitPoints } from '../InternalStructure'
import { MechTonnage } from '../Mech'

export enum ArmorType {
  Standard = 'Standard',
  FerroFibrous = 'Ferro Fibrous',
  LightFerro = 'Light Ferro',
  HeavyFerro = 'Heavy Ferro',
  Stealth = 'Stealth',
}

export const getArmorCriticalSlots = (tech: Tech, type: ArmorType) => {
  switch (type) {
  case ArmorType.Standard: return 0
  case ArmorType.FerroFibrous: return tech === Tech.IS ? 14 : 7
  case ArmorType.LightFerro: return 7
  case ArmorType.HeavyFerro: return 21
  case ArmorType.Stealth: return 12
  }
}

export const getArmorBasePointMultiplier = (tech: Tech, type: ArmorType) => {
  switch (type) {
    case ArmorType.Standard: return 1.0
    case ArmorType.FerroFibrous: return tech === Tech.IS ? 1.12 : 1.2
    case ArmorType.LightFerro: return 1.06
    case ArmorType.HeavyFerro: return 1.24
    case ArmorType.Stealth: return 1.0
    }
}

export const getMaxArmorForPart = (mechTonnage: MechTonnage, component: Component): number => {
  return getMaxArmorHitPoints(mechTonnage, component)
}

export const getAvailableArmorTypes = (tech: Tech) => {
  const types = [
    ArmorType.Standard,
    ArmorType.FerroFibrous
  ]

  if (tech === Tech.IS) {
    return types.concat([
      ArmorType.HeavyFerro,
      ArmorType.LightFerro,
      ArmorType.Stealth,
    ])
  } else {
    return types
  }
}
