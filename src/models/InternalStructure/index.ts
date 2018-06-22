import { Component } from '../common/Component'
import { MechClass } from '../common/MechClass'
import { Tech } from '../common/Tech'
import { MechTonnage } from '../Mech'


export enum InternalStructureType {
  Standard = 'Standard',
  EndoSteel = 'Endo Steel',
}

interface IInternalStructureTableRecord {
  mechTonnage: number,
  tonnage: number,
  [Component.Head]: number,
  [Component.CenterTorso]: number,
  [Component.LeftTorso]: number,
  [Component.RightTorso]: number,
  [Component.LeftArm]: number,
  [Component.RightArm]: number,
  [Component.LeftLeg]: number,
  [Component.RightLeg]: number,
  [Component.FrontLeftLeg]: number,
  [Component.FrontRightLeg]: number,
  [Component.RearLeftLeg]: number,
  [Component.RearRightLeg]: number,
  [Component.RearLeg]: number,
}

const InternalStructureRecord = (
  mechTonnage: number,
  tonnage: number,
  head: number,
  centerTorso: number,
  sideTorsos: number,
  arms: number,
  legs: number,
): IInternalStructureTableRecord => ({
  mechTonnage,
  tonnage,
  [Component.Head]: head,
  [Component.CenterTorso]: centerTorso,
  [Component.LeftTorso]: sideTorsos,
  [Component.RightTorso]: sideTorsos,
  [Component.LeftArm]: arms,
  [Component.RightArm]: arms,
  [Component.LeftLeg]: legs,
  [Component.RightLeg]: legs,
  [Component.FrontLeftLeg]: legs,
  [Component.FrontRightLeg]: legs,
  [Component.RearLeftLeg]: legs,
  [Component.RearRightLeg]: legs,
  [Component.RearLeg]: legs,
})

export const InternalStructureTypeWeightMultipliers = {
  [InternalStructureType.Standard]: 1.0,
  [InternalStructureType.EndoSteel]: 0.5,
}

export const InternalStructureTable = {
  20:  InternalStructureRecord(20,  2.0,  3, 6,  5,  3,  4 ),
  25:  InternalStructureRecord(25,  2.5,  3, 8,  6,  4,  6 ),
  30:  InternalStructureRecord(30,  3.0,  3, 10, 7,  5,  7 ),
  35:  InternalStructureRecord(35,  3.5,  3, 11, 8,  6,  8 ),
  40:  InternalStructureRecord(40,  4.0,  3, 12, 10, 6,  10),
  45:  InternalStructureRecord(45,  4.5,  3, 14, 11, 7,  11),
  50:  InternalStructureRecord(50,  5.0,  3, 16, 12, 8,  12),
  55:  InternalStructureRecord(55,  5.5,  3, 18, 13, 9,  13),
  60:  InternalStructureRecord(60,  6.0,  3, 20, 14, 10, 14),
  65:  InternalStructureRecord(65,  6.5,  3, 21, 15, 10, 15),
  70:  InternalStructureRecord(70,  7.0,  3, 22, 15, 11, 15),
  75:  InternalStructureRecord(75,  7.5,  3, 23, 16, 12, 16),
  80:  InternalStructureRecord(80,  8.0,  3, 25, 17, 13, 17),
  85:  InternalStructureRecord(85,  8.5,  3, 27, 18, 14, 18),
  90:  InternalStructureRecord(90,  9.0,  3, 29, 19, 15, 19),
  95:  InternalStructureRecord(95,  9.5,  3, 30, 20, 16, 20),
  100: InternalStructureRecord(100, 10.0, 3, 31, 21, 17, 21),
  105: InternalStructureRecord(105, 21.0, 4, 32, 22, 17, 26),
  110: InternalStructureRecord(110, 22.0, 4, 33, 23, 18, 27),
  115: InternalStructureRecord(115, 23.0, 4, 35, 24, 19, 29),
  120: InternalStructureRecord(120, 24.0, 4, 36, 25, 20, 30),
  125: InternalStructureRecord(125, 25.0, 4, 38, 26, 21, 31),
  130: InternalStructureRecord(130, 26.0, 4, 39, 27, 21, 32),
  135: InternalStructureRecord(135, 27.0, 4, 41, 28, 22, 33),
  140: InternalStructureRecord(140, 28.0, 4, 42, 29, 23, 35),
  145: InternalStructureRecord(145, 29.0, 4, 44, 31, 24, 37),
  150: InternalStructureRecord(150, 30.0, 4, 45, 32, 25, 38),
  155: InternalStructureRecord(155, 31.0, 4, 47, 33, 26, 39),
  160: InternalStructureRecord(160, 32.0, 4, 48, 34, 26, 40),
  165: InternalStructureRecord(165, 33.0, 4, 50, 35, 27, 41),
  170: InternalStructureRecord(170, 34.0, 4, 51, 36, 28, 43),
  175: InternalStructureRecord(175, 35.0, 4, 53, 37, 29, 44),
  180: InternalStructureRecord(180, 36.0, 4, 54, 38, 30, 45),
  185: InternalStructureRecord(185, 37.0, 4, 56, 39, 31, 47),
  190: InternalStructureRecord(190, 38.0, 4, 57, 40, 31, 47),
  195: InternalStructureRecord(195, 39.0, 4, 59, 41, 32, 49),
  200: InternalStructureRecord(200, 40.0, 4, 60, 42, 33, 50),
}

export const getInternalStructureTonnage = (mechTonnage: MechTonnage, type: InternalStructureType): number =>
  InternalStructureTable[mechTonnage].tonnage * InternalStructureTypeWeightMultipliers[type]

export const getInternalStructureCriticals = (tech: Tech, type: InternalStructureType): number => {
  switch (type) {
  case InternalStructureType.Standard: return 0
  case InternalStructureType.EndoSteel: return tech === Tech.IS ? 14 : 7
  }
}

export const getInternalStructureHitPoints = (mechTonnage: MechTonnage, component: Component): number =>
  InternalStructureTable[mechTonnage][component]

export const getMaxArmorHitPoints = (mechClass: MechClass, mechTonnage: MechTonnage, component: Component): number =>
  component === Component.Head
    ? mechClass === MechClass.SuperHeavy ? 12 : 9
    : InternalStructureTable[mechTonnage][component] * 2

export const getAvailableInternalStructureTypes = (tech: Tech) => [
  InternalStructureType.Standard,
  InternalStructureType.EndoSteel,
]
