import { MechComponentType } from './MechComponentType'

interface IInternalStructureTableRecord {
  mechTonnage: number,
  tonnage: number,
  [MechComponentType.Head]: number,
  [MechComponentType.CenterTorso]: number,
  [MechComponentType.SideTorso]: number,
  [MechComponentType.Arm]: number,
  [MechComponentType.Leg]: number,
  maximumArmor: number,
}

export const InternalStructureTable: { [InternalStructure: string]: IInternalStructureTableRecord } = [
  { mechTonnage: 20,  tonnage: 2.0,  Head: 6,  CenterTorso: 5,  SideTorso: 3,  Arm: 4,  Leg: 69 },
  { mechTonnage: 25,  tonnage: 2.5,  Head: 8,  CenterTorso: 6,  SideTorso: 4,  Arm: 6,  Leg: 89 },
  { mechTonnage: 30,  tonnage: 3.0,  Head: 10, CenterTorso: 7,  SideTorso: 5,  Arm: 7,  Leg: 105 },
  { mechTonnage: 35,  tonnage: 3.5,  Head: 11, CenterTorso: 8,  SideTorso: 6,  Arm: 8,  Leg: 119 },
  { mechTonnage: 40,  tonnage: 4.0,  Head: 12, CenterTorso: 10, SideTorso: 6,  Arm: 10, Leg: 137 },
  { mechTonnage: 45,  tonnage: 4.5,  Head: 14, CenterTorso: 11, SideTorso: 7,  Arm: 11, Leg: 153 },
  { mechTonnage: 50,  tonnage: 5.0,  Head: 16, CenterTorso: 12, SideTorso: 8,  Arm: 12, Leg: 169 },
  { mechTonnage: 55,  tonnage: 5.5,  Head: 18, CenterTorso: 13, SideTorso: 9,  Arm: 13, Leg: 185 },
  { mechTonnage: 60,  tonnage: 6.0,  Head: 20, CenterTorso: 14, SideTorso: 10, Arm: 14, Leg: 201 },
  { mechTonnage: 65,  tonnage: 6.5,  Head: 21, CenterTorso: 15, SideTorso: 10, Arm: 15, Leg: 211 },
  { mechTonnage: 70,  tonnage: 7.0,  Head: 22, CenterTorso: 15, SideTorso: 11, Arm: 15, Leg: 217 },
  { mechTonnage: 75,  tonnage: 7.5,  Head: 23, CenterTorso: 16, SideTorso: 12, Arm: 16, Leg: 231 },
  { mechTonnage: 80,  tonnage: 8.0,  Head: 25, CenterTorso: 17, SideTorso: 13, Arm: 17, Leg: 247 },
  { mechTonnage: 85,  tonnage: 8.5,  Head: 27, CenterTorso: 18, SideTorso: 14, Arm: 18, Leg: 263 },
  { mechTonnage: 90,  tonnage: 9.0,  Head: 29, CenterTorso: 19, SideTorso: 15, Arm: 19, Leg: 279 },
  { mechTonnage: 95,  tonnage: 9.5,  Head: 30, CenterTorso: 20, SideTorso: 16, Arm: 20, Leg: 293 },
  { mechTonnage: 100, tonnage: 10.0, Head: 31, CenterTorso: 21, SideTorso: 17, Arm: 21, Leg: 307 },
].reduce((memo, internalStructure: IInternalStructureTableRecord) => {
  memo[internalStructure.mechTonnage] = internalStructure
  return memo
}, {})

export const getInternalStructureTonnage = (mechTonnage: number): number =>
  InternalStructureTable[mechTonnage].tonnage

export const getInternalStructureHitPoints = (mechTonnage: number, component: MechComponentType): number =>
  InternalStructureTable[mechTonnage][component]

export const getMaxArmorHitPoints = (mechTonnage: number, component: MechComponentType): number =>
  InternalStructureTable[mechTonnage][component] * 2
