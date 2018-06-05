import { MechComponentType } from '../common/MechComponentType'
import { getMaxArmorHitPoints, MechTonnage } from '../InternalStructure'

export enum ArmorType {
  Standard = 'Standard',
  FerroFibrousIS = 'Ferro Fibrous (IS)',
  FerroFibrousClan = 'Ferro Fibrous (Clan)',
  LightFerroFibrous = 'Light Ferro Fibrous',
  HeavyFerroFibrous = 'Heavy Ferro Fibrous',
  Stealth = 'Stealth',
}

export const getArmorCriticalSlots = (type: ArmorType) => {
  switch (type) {
  case ArmorType.Standard: return 0
  case ArmorType.FerroFibrousIS: return 14
  case ArmorType.FerroFibrousClan: return 7
  case ArmorType.LightFerroFibrous: return 7
  case ArmorType.HeavyFerroFibrous: return 21
  case ArmorType.Stealth: return 12
  }
}

export const getArmorBasePointMultiplier = (type: ArmorType) => {
  switch (type) {
    case ArmorType.Standard: return 1.0
    case ArmorType.FerroFibrousIS: return 1.12
    case ArmorType.FerroFibrousClan: return 1.2
    case ArmorType.LightFerroFibrous: return 1.06
    case ArmorType.HeavyFerroFibrous: return 1.24
    case ArmorType.Stealth: return 1.0
    }
}

export const getMaxArmorForPart = (mechTonnage: MechTonnage, type: ArmorType, component: MechComponentType): number => {
  const points = getMaxArmorHitPoints(mechTonnage, component)
  const multiplier = getArmorBasePointMultiplier(type)

  return Math.floor(points * multiplier)
}
