import { Component } from '../common/Component'
import { Tech } from '../common/Tech'
import { MechTonnage } from '../Mech'


export enum InternalStructureType {
  Standard = 'Standard',
  EndoSteel = 'Endo Steel',
}

interface IInternalStructureTableRecord {
  mechTonnage: number,
  standardTonnage: number,
  endoSteelTonnage: number,
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
): IInternalStructureTableRecord => ({
  mechTonnage,
  standardTonnage,
  endoSteelTonnage,
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
})

export const InternalStructureTable = {
  20:  InternalStructureRecord(20,  2.0,   1.0,  3, 6,  5,  3,  4 ),
  25:  InternalStructureRecord(25,  2.5,   1.5,  3, 8,  6,  4,  6 ),
  30:  InternalStructureRecord(30,  3.0,   1.5,  3, 10, 7,  5,  7 ),
  35:  InternalStructureRecord(35,  3.5,   2.0,  3, 11, 8,  6,  8 ),
  40:  InternalStructureRecord(40,  4.0,   2.0,  3, 12, 10, 6,  10),
  45:  InternalStructureRecord(45,  4.5,   2.5,  3, 14, 11, 7,  11),
  50:  InternalStructureRecord(50,  5.0,   2.5,  3, 16, 12, 8,  12),
  55:  InternalStructureRecord(55,  5.5,   3.0,  3, 18, 13, 9,  13),
  60:  InternalStructureRecord(60,  6.0,   3.0,  3, 20, 14, 10, 14),
  65:  InternalStructureRecord(65,  6.5,   3.5,  3, 21, 15, 10, 15),
  70:  InternalStructureRecord(70,  7.0,   3.5,  3, 22, 15, 11, 15),
  75:  InternalStructureRecord(75,  7.5,   4.0,  3, 23, 16, 12, 16),
  80:  InternalStructureRecord(80,  8.0,   4.0,  3, 25, 17, 13, 17),
  85:  InternalStructureRecord(85,  8.5,   4.5,  3, 27, 18, 14, 18),
  90:  InternalStructureRecord(90,  9.0,   4.5,  3, 29, 19, 15, 19),
  95:  InternalStructureRecord(95,  9.5,   5.0,  3, 30, 20, 16, 20),
  100: InternalStructureRecord(100, 10.0,  5.0,  3, 31, 21, 17, 21),
  105: InternalStructureRecord(105, 21.0, 10.5, 32, 22, 17, 22, 26),
  110: InternalStructureRecord(110, 22.0, 11.0, 33, 23, 18, 23, 27),
  115: InternalStructureRecord(115, 23.0, 11.5, 35, 24, 19, 24, 29),
  120: InternalStructureRecord(120, 24.0, 12.0, 36, 25, 20, 25, 30),
  125: InternalStructureRecord(125, 25.0, 12.5, 38, 26, 21, 26, 31),
  130: InternalStructureRecord(130, 26.0, 13.0, 39, 27, 21, 27, 32),
  135: InternalStructureRecord(135, 27.0, 13.5, 41, 28, 22, 28, 33),
  140: InternalStructureRecord(140, 28.0, 14.0, 42, 29, 23, 29, 35),
  145: InternalStructureRecord(145, 29.0, 14.5, 44, 31, 24, 31, 37),
  150: InternalStructureRecord(150, 30.0, 15.0, 45, 32, 25, 32, 38),
  155: InternalStructureRecord(155, 31.0, 15.5, 47, 33, 26, 33, 39),
  160: InternalStructureRecord(160, 32.0, 16.0, 48, 34, 26, 34, 40),
  165: InternalStructureRecord(165, 33.0, 16.5, 50, 35, 27, 35, 41),
  170: InternalStructureRecord(170, 34.0, 17.0, 51, 36, 28, 36, 43),
  175: InternalStructureRecord(175, 35.0, 17.5, 53, 37, 29, 37, 44),
  180: InternalStructureRecord(180, 36.0, 18.0, 54, 38, 30, 38, 45),
  185: InternalStructureRecord(185, 37.0, 18.5, 56, 39, 31, 39, 47),
  190: InternalStructureRecord(190, 38.0, 19.0, 57, 40, 31, 40, 47),
  195: InternalStructureRecord(195, 39.0, 19.5, 59, 41, 32, 41, 49),
  200: InternalStructureRecord(200, 40.0, 20.0, 60, 42, 33, 42, 50),
}

export const getInternalStructureTonnage = (mechTonnage: MechTonnage, type: InternalStructureType): number => {
  switch (type) {
  case InternalStructureType.Standard: return InternalStructureTable[mechTonnage].standardTonnage
  case InternalStructureType.EndoSteel: return InternalStructureTable[mechTonnage].endoSteelTonnage
  }
}

export const getInternalStructureCriticals = (tech: Tech, type: InternalStructureType): number => {
  switch (type) {
  case InternalStructureType.Standard: return 0
  case InternalStructureType.EndoSteel: return tech === Tech.IS ? 14 : 7
  }
}

export const getInternalStructureHitPoints = (mechTonnage: MechTonnage, component: Component): number =>
  InternalStructureTable[mechTonnage][component]

export const getMaxArmorHitPoints = (mechTonnage: MechTonnage, component: Component): number =>
  component === Component.Head
    ? 9
    : InternalStructureTable[mechTonnage][component] * 2

export const getAvailableInternalStructureTypes = (tech: Tech) => [
  InternalStructureType.Standard,
  InternalStructureType.EndoSteel,
]
