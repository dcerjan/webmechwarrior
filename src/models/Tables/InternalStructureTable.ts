import { MechComponentType } from './MechComponentType'

export enum InternalStructureType {
  Standard = 'Standard',
  EndoSteelIS = 'Endo Steel (IS)',
  EndoSteelClan = 'Endo Steel (Clan)',
}

interface IInternalStructureTableRecord {
  mechTonnage: number,
  standardTonnage: number,
  endoSteelTonnage: number,
  [MechComponentType.Head]: number,
  [MechComponentType.CenterTorso]: number,
  [MechComponentType.SideTorso]: number,
  [MechComponentType.Arm]: number,
  [MechComponentType.Leg]: number,
  maximumArmor: number,
}

export const InternalStructureTable: { [InternalStructure: string]: IInternalStructureTableRecord } = [
  { mechTonnage: 20,  standardTonnage: 2.0,  endoSteelTonnage: 1.0, Head: 3, CenterTorso: 6,  SideTorso: 5,  Arm: 3,  Leg: 4,  maximumArmor: 69 },
  { mechTonnage: 25,  standardTonnage: 2.5,  endoSteelTonnage: 1.5, Head: 3, CenterTorso: 8,  SideTorso: 6,  Arm: 4,  Leg: 6,  maximumArmor: 89 },
  { mechTonnage: 30,  standardTonnage: 3.0,  endoSteelTonnage: 1.5, Head: 3, CenterTorso: 10, SideTorso: 7,  Arm: 5,  Leg: 7,  maximumArmor: 105 },
  { mechTonnage: 35,  standardTonnage: 3.5,  endoSteelTonnage: 2.0, Head: 3, CenterTorso: 11, SideTorso: 8,  Arm: 6,  Leg: 8,  maximumArmor: 119 },
  { mechTonnage: 40,  standardTonnage: 4.0,  endoSteelTonnage: 2.0, Head: 3, CenterTorso: 12, SideTorso: 10, Arm: 6,  Leg: 10, maximumArmor: 137 },
  { mechTonnage: 45,  standardTonnage: 4.5,  endoSteelTonnage: 2.5, Head: 3, CenterTorso: 14, SideTorso: 11, Arm: 7,  Leg: 11, maximumArmor: 153 },
  { mechTonnage: 50,  standardTonnage: 5.0,  endoSteelTonnage: 2.5, Head: 3, CenterTorso: 16, SideTorso: 12, Arm: 8,  Leg: 12, maximumArmor: 169 },
  { mechTonnage: 55,  standardTonnage: 5.5,  endoSteelTonnage: 3.0, Head: 3, CenterTorso: 18, SideTorso: 13, Arm: 9,  Leg: 13, maximumArmor: 185 },
  { mechTonnage: 60,  standardTonnage: 6.0,  endoSteelTonnage: 3.0, Head: 3, CenterTorso: 20, SideTorso: 14, Arm: 10, Leg: 14, maximumArmor: 201 },
  { mechTonnage: 65,  standardTonnage: 6.5,  endoSteelTonnage: 3.5, Head: 3, CenterTorso: 21, SideTorso: 15, Arm: 10, Leg: 15, maximumArmor: 211 },
  { mechTonnage: 70,  standardTonnage: 7.0,  endoSteelTonnage: 3.5, Head: 3, CenterTorso: 22, SideTorso: 15, Arm: 11, Leg: 15, maximumArmor: 217 },
  { mechTonnage: 75,  standardTonnage: 7.5,  endoSteelTonnage: 4.0, Head: 3, CenterTorso: 23, SideTorso: 16, Arm: 12, Leg: 16, maximumArmor: 231 },
  { mechTonnage: 80,  standardTonnage: 8.0,  endoSteelTonnage: 4.0, Head: 3, CenterTorso: 25, SideTorso: 17, Arm: 13, Leg: 17, maximumArmor: 247 },
  { mechTonnage: 85,  standardTonnage: 8.5,  endoSteelTonnage: 4.5, Head: 3, CenterTorso: 27, SideTorso: 18, Arm: 14, Leg: 18, maximumArmor: 263 },
  { mechTonnage: 90,  standardTonnage: 9.0,  endoSteelTonnage: 4.5, Head: 3, CenterTorso: 29, SideTorso: 19, Arm: 15, Leg: 19, maximumArmor: 279 },
  { mechTonnage: 95,  standardTonnage: 9.5,  endoSteelTonnage: 5.0, Head: 3, CenterTorso: 30, SideTorso: 20, Arm: 16, Leg: 20, maximumArmor: 293 },
  { mechTonnage: 100, standardTonnage: 10.0, endoSteelTonnage: 5.0, Head: 3, CenterTorso: 31, SideTorso: 21, Arm: 17, Leg: 21, maximumArmor: 307 },
].reduce((memo, internalStructure: IInternalStructureTableRecord) => {
  memo[internalStructure.mechTonnage] = internalStructure
  return memo
}, {})

export const getInternalStructureTonnage = (mechTonnage: number, type: InternalStructureType): number => {
  switch (type) {
  case InternalStructureType.Standard: return InternalStructureTable[mechTonnage].standardTonnage
  case InternalStructureType.EndoSteelIS: return InternalStructureTable[mechTonnage].endoSteelTonnage
  case InternalStructureType.EndoSteelClan: return InternalStructureTable[mechTonnage].endoSteelTonnage
  }
}

export const getInternalStructureCriticals = (type: InternalStructureType): number => {
  switch (type) {
  case InternalStructureType.Standard: return 0
  case InternalStructureType.EndoSteelIS: return 14
  case InternalStructureType.EndoSteelClan: return 7
  }
}

export const getInternalStructureHitPoints = (mechTonnage: number, component: MechComponentType): number =>
  InternalStructureTable[mechTonnage][component]

export const getMaxArmorHitPoints = (mechTonnage: number, component: MechComponentType): number =>
  InternalStructureTable[mechTonnage][component] * 2
