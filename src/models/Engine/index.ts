import { lens } from 'lens.ts'

import { Component } from '../common/Component'
import { Tech } from '../common/Tech'
import { HeatsinkType } from '../Heatsink'
import { MechTonnage } from '../Mech'

export enum EngineType {
  Compact = 'Compact',
  Standard = 'Standard',
  Light = 'Light',
  XL = 'XL',
  XXL = 'XXL',
  ICE = 'ICE',
  Cell = 'Cell',
  Fission = 'Fission',
}

export interface IEngine {
  type: EngineType,
  rating: EngineRating,
  hitPoints: number,
  internalHeatSinks: number,
  heatsinkType: HeatsinkType,
}

export const Engine = (props: IEngine): Readonly<IEngine> => ({
  ...props,
})

export const EngineL = lens<IEngine>()

interface IEngineTableRecord {
  rating: number,
  manufacturer: string,
  tonnage: number,
  hitPoints: number,
}

const EngineTableRecord = (
  rating: number,
  manufacturer: string,
  tonnage: number,
): IEngineTableRecord => ({
  rating,
  manufacturer,
  tonnage,
  hitPoints: 3,
})

export const EngineTypeTonnageMultipliers = {
  [EngineType.Compact]: 1.5,
  [EngineType.Standard]: 1.0,
  [EngineType.Light]: 0.75,
  [EngineType.XL]: 0.5,
  [EngineType.XXL]: 0.33,
  [EngineType.ICE]: 2.0,
  [EngineType.Cell]: 1.2,
  [EngineType.Fission]: 1.75,
}

export const EngineTable = {
  10:  EngineTableRecord(10,  'Omni',     0.5),
  15:  EngineTableRecord(15,  'GM',       0.5),
  20:  EngineTableRecord(20,  'Pitban',   0.5),
  25:  EngineTableRecord(25,  'Omni',     0.5),
  30:  EngineTableRecord(30,  'Nissan',   1.0),
  35:  EngineTableRecord(35,  'VOX',      1.0),
  40:  EngineTableRecord(40,  'GM',       1.0),
  45:  EngineTableRecord(45,  'GM',       1.0),
  50:  EngineTableRecord(50,  'DAV',      1.5),
  55:  EngineTableRecord(55,  'VOX',      1.5),
  60:  EngineTableRecord(60,  'Leenex',   1.5),
  65:  EngineTableRecord(65,  'Nissan',   2.0),
  70:  EngineTableRecord(70,  'Omni',     2.0),
  75:  EngineTableRecord(75,  'GM',       2.0),
  80:  EngineTableRecord(80,  'VOX',      2.5),
  85:  EngineTableRecord(85,  'DAV',      2.5),
  90:  EngineTableRecord(90,  'DAV',      3.0),
  95:  EngineTableRecord(95,  'Nissan',   3.0),
  100: EngineTableRecord(100, 'Hermes',   3.0),
  105: EngineTableRecord(105, 'DAV',      3.5),
  110: EngineTableRecord(110, 'GM',       3.5),
  115: EngineTableRecord(115, 'GM',       4.0),
  120: EngineTableRecord(120, 'GM',       4.0),
  125: EngineTableRecord(125, 'Vlar',     4.0),
  130: EngineTableRecord(130, 'Magna',    4.5),
  135: EngineTableRecord(135, 'Hermes',   4.5),
  140: EngineTableRecord(140, 'Leenex',   5.0),
  145: EngineTableRecord(145, 'Omni',     5.0),
  150: EngineTableRecord(150, 'GM',       5.5),
  155: EngineTableRecord(155, 'GM',       5.5),
  160: EngineTableRecord(160, 'LTV',      6.0),
  165: EngineTableRecord(165, 'VOX',      6.0),
  170: EngineTableRecord(170, 'DAV',      6.0),
  175: EngineTableRecord(175, 'Omni',     7.0),
  180: EngineTableRecord(180, 'GM',       7.0),
  185: EngineTableRecord(185, 'GM',       7.5),
  190: EngineTableRecord(190, 'DAV',      7.5),
  195: EngineTableRecord(195, 'Nissan',   8.0),
  200: EngineTableRecord(200, 'Nissan',   8.5),
  205: EngineTableRecord(205, 'Vlar',     8.5),
  210: EngineTableRecord(210, 'GM',       9.0),
  215: EngineTableRecord(215, 'Core',     9.5),
  220: EngineTableRecord(220, 'DAV',     10.0),
  225: EngineTableRecord(225, 'VOX',     10.0),
  230: EngineTableRecord(230, 'Leenex',  10.5),
  235: EngineTableRecord(235, 'GM',      11.0),
  240: EngineTableRecord(240, 'Pitban',  11.5),
  245: EngineTableRecord(245, 'Magna',   12.0),
  250: EngineTableRecord(250, 'Magna',   12.5),
  255: EngineTableRecord(255, 'Strand',  13.0),
  260: EngineTableRecord(260, 'Magna',   13.5),
  265: EngineTableRecord(265, 'Vlar',    14.0),
  270: EngineTableRecord(270, 'GM',      14.5),
  275: EngineTableRecord(275, 'Core',    15.5),
  280: EngineTableRecord(280, 'VOX',     16.0),
  285: EngineTableRecord(285, 'Pitban',  16.5),
  290: EngineTableRecord(290, 'Omni',    17.5),
  295: EngineTableRecord(295, 'GM',      18.0),
  300: EngineTableRecord(300, 'Vlar',    19.0),
  305: EngineTableRecord(305, 'GM',      19.5),
  310: EngineTableRecord(310, 'Magna',   20.5),
  315: EngineTableRecord(315, 'GM',      21.5),
  320: EngineTableRecord(320, 'Pitban',  22.5),
  325: EngineTableRecord(325, 'VOX',     23.5),
  330: EngineTableRecord(330, 'VOX',     24.5),
  335: EngineTableRecord(335, 'Leenex',  25.5),
  340: EngineTableRecord(340, 'VOX',     27.0),
  345: EngineTableRecord(345, 'Vlar',    28.5),
  350: EngineTableRecord(350, 'Magna',   29.5),
  355: EngineTableRecord(355, 'LTV',     31.5),
  360: EngineTableRecord(360, 'Hermes',  33.0),
  365: EngineTableRecord(365, 'Hermes',  34.5),
  370: EngineTableRecord(370, 'Magna',   36.5),
  375: EngineTableRecord(375, 'GM',      38.5),
  380: EngineTableRecord(380, 'GM',      41.0),
  385: EngineTableRecord(385, 'LTV',     43.5),
  390: EngineTableRecord(390, 'Magna',   46.0),
  395: EngineTableRecord(395, 'Hermes',  49.0),
  400: EngineTableRecord(400, 'LTV',     52.5),
  405: EngineTableRecord(405, 'GM',      56.5),
  410: EngineTableRecord(410, 'Magna',   61.0),
  415: EngineTableRecord(415, 'GM',      66.5),
  420: EngineTableRecord(420, 'Pitban',  72.5),
  425: EngineTableRecord(425, 'VOX',     79.5),
  430: EngineTableRecord(430, 'VOX',     87.5),
  435: EngineTableRecord(435, 'Leenex',  97.0),
  440: EngineTableRecord(440, 'VOX',     107.5),
  445: EngineTableRecord(445, 'Vlar',    119.5),
  450: EngineTableRecord(450, 'Magna',   133.5),
  455: EngineTableRecord(455, 'LTV',     150.0),
  460: EngineTableRecord(460, 'Hermes',  168.5),
  465: EngineTableRecord(465, 'Hermes',  190.0),
  470: EngineTableRecord(470, 'Magna',   214.5),
  475: EngineTableRecord(475, 'GM',      243.0),
  480: EngineTableRecord(480, 'GM',      275.5),
  485: EngineTableRecord(485, 'LTV',     313.0),
  490: EngineTableRecord(490, 'Magna',   356.0),
  495: EngineTableRecord(495, 'Hermes',  405.5),
  500: EngineTableRecord(500, 'LTV',     462.5),
}

export type EngineRating =
  | 10 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 50 | 55 | 60 | 65 | 70 | 75 | 80 | 85
  | 90 | 95 | 100 | 105 | 110 | 115 | 120 | 125 | 130 | 135 | 140 | 145 | 150 | 155
  | 160 | 165 | 170 | 175 | 180 | 185 | 190 | 195 | 200 | 205 | 210 | 215 | 220 | 225
  | 230 | 235 | 240 | 245 | 250 | 255 | 260 | 265 | 270 | 275 | 280 | 285 | 290 | 295
  | 300 | 305 | 310 | 315 | 320 | 325 | 330 | 335 | 340 | 345 | 350 | 355 | 360 | 365
  | 370 | 375 | 380 | 385 | 390 | 395 | 400

export interface IEngineCriticalSlotAllocation {
  [Component.CenterTorso]: number,
  [Component.LeftTorso]?: number,
  [Component.RightTorso]?: number,
}

export const getWalkingMP = (rating: EngineRating, tonnage: MechTonnage): number =>
  Math.floor(rating / tonnage)

export const getRunningMP = (rating: EngineRating, tonnage: MechTonnage): number =>
  Math.ceil(getWalkingMP(rating, tonnage) * 1.5)

export const getEngintInternalHeatsinks = (rating: EngineRating): number =>
  Math.floor(rating / 25)

export const getEngineHitPoints = (rating: EngineRating): number =>
  EngineTable[rating].hitPoints

export const getEngineManufacturer = (rating: EngineRating): string =>
  EngineTable[rating].manufacturer

export const getEngineTonnage = (rating: EngineRating, type: EngineType): number =>
  Math.ceil(EngineTable[rating].tonnage * EngineTypeTonnageMultipliers[type] * 2.0) * 0.5

export const getAvailableEngines = (tech: Tech) => {
  switch (tech) {
  case Tech.Clan: return [EngineType.Standard, EngineType.XL, EngineType.XXL]
  case Tech.IS: return [EngineType.Standard, EngineType.Compact, EngineType.Light, EngineType.XL, EngineType.XXL]
  default: return []
  }
}

export const getEngineCriticalSlotAllocation = (tech: Tech, type: EngineType): IEngineCriticalSlotAllocation => {
  switch (type) {
  case EngineType.Standard: return { [Component.CenterTorso]: 6 }
  case EngineType.Compact: return { [Component.CenterTorso]: 3 }
  case EngineType.Light: return { [Component.CenterTorso]: 6, [Component.LeftTorso]: 3, [Component.RightTorso]: 3 }
  case EngineType.XL: return tech === Tech.IS
    ? { [Component.CenterTorso]: 6, [Component.LeftTorso]: 3, [Component.RightTorso]: 3 }
    : { [Component.CenterTorso]: 6, [Component.LeftTorso]: 2, [Component.RightTorso]: 2 }
  case EngineType.XXL: return tech === Tech.IS
    ? { [Component.CenterTorso]: 6, [Component.LeftTorso]: 6, [Component.RightTorso]: 6 }
    : { [Component.CenterTorso]: 6, [Component.LeftTorso]: 4, [Component.RightTorso]: 4 }
  default: throw new Error(`Invalid engine type given: ${type}`)
  }
}
