import { MechComponentType } from '../common/MechComponentType'


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
  [MechComponentType.LeftTorso]: number,
  [MechComponentType.RightTorso]: number,
  [MechComponentType.LeftArm]: number,
  [MechComponentType.RightArm]: number,
  [MechComponentType.LeftLeg]: number,
  [MechComponentType.RightLeg]: number,
  [MechComponentType.FrontLeftLeg]: number,
  [MechComponentType.FrontRightLeg]: number,
  [MechComponentType.RearLeftLeg]: number,
  [MechComponentType.RearRightLeg]: number,
  maximumArmor: number,
}

const InternalStructureRecord = (
  mechTonnage: number,
  standardTonnage: number,
  endoSteelTonnage: number,
  head: number,
  centerTorso: number,
  sideTorsos: number,
  arms: number,
  legs: number,
  maximumArmor: number,
): IInternalStructureTableRecord => ({
  mechTonnage,
  standardTonnage,
  endoSteelTonnage,
  [MechComponentType.Head]: head,
  [MechComponentType.CenterTorso]: centerTorso,
  [MechComponentType.LeftTorso]: sideTorsos,
  [MechComponentType.RightTorso]: sideTorsos,
  [MechComponentType.LeftArm]: arms,
  [MechComponentType.RightArm]: arms,
  [MechComponentType.LeftLeg]: legs,
  [MechComponentType.RightLeg]: legs,
  [MechComponentType.FrontLeftLeg]: legs,
  [MechComponentType.FrontRightLeg]: legs,
  [MechComponentType.RearLeftLeg]: legs,
  [MechComponentType.RearRightLeg]: legs,
  maximumArmor,
})

export const InternalStructureTable = {
  20:  InternalStructureRecord(20,  2.0,  1.0, 3, 6,  5,  3,  4,  69 ),
  25:  InternalStructureRecord(25,  2.5,  1.5, 3, 8,  6,  4,  6,  89 ),
  30:  InternalStructureRecord(30,  3.0,  1.5, 3, 10, 7,  5,  7,  105),
  35:  InternalStructureRecord(35,  3.5,  2.0, 3, 11, 8,  6,  8,  119),
  40:  InternalStructureRecord(40,  4.0,  2.0, 3, 12, 10, 6,  10, 137),
  45:  InternalStructureRecord(45,  4.5,  2.5, 3, 14, 11, 7,  11, 153),
  50:  InternalStructureRecord(50,  5.0,  2.5, 3, 16, 12, 8,  12, 169),
  55:  InternalStructureRecord(55,  5.5,  3.0, 3, 18, 13, 9,  13, 185),
  60:  InternalStructureRecord(60,  6.0,  3.0, 3, 20, 14, 10, 14, 201),
  65:  InternalStructureRecord(65,  6.5,  3.5, 3, 21, 15, 10, 15, 211),
  70:  InternalStructureRecord(70,  7.0,  3.5, 3, 22, 15, 11, 15, 217),
  75:  InternalStructureRecord(75,  7.5,  4.0, 3, 23, 16, 12, 16, 231),
  80:  InternalStructureRecord(80,  8.0,  4.0, 3, 25, 17, 13, 17, 247),
  85:  InternalStructureRecord(85,  8.5,  4.5, 3, 27, 18, 14, 18, 263),
  90:  InternalStructureRecord(90,  9.0,  4.5, 3, 29, 19, 15, 19, 279),
  95:  InternalStructureRecord(95,  9.5,  5.0, 3, 30, 20, 16, 20, 293),
  100: InternalStructureRecord(100, 10.0, 5.0, 3, 31, 21, 17, 21, 307),
}

export type MechTonnage = 20 | 25 | 30 | 35 | 40 | 45 | 50 | 55 | 60 | 65 | 70 | 75 | 80 | 85 | 90 | 95 | 100

export const getInternalStructureTonnage = (mechTonnage: MechTonnage, type: InternalStructureType): number => {
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

export const getInternalStructureHitPoints = (mechTonnage: MechTonnage, component: MechComponentType): number =>
  InternalStructureTable[mechTonnage][component]

export const getMaxArmorHitPoints = (mechTonnage: MechTonnage, component: MechComponentType): number =>
  component === MechComponentType.Head
    ? 9
    : InternalStructureTable[mechTonnage][component] * 2
