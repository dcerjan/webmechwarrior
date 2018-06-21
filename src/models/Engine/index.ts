import { lens } from 'lens.ts'

import { Component } from '../common/Component'
import { Tech } from '../common/Tech'
import { MechTonnage } from '../InternalStructure'

export enum EngineType {
  Compact = 'Compact',
  Standard = 'Standard',
  Light = 'Light',
  XL = 'XL',
  ICE = 'ICE',
  Cell = 'Cell',
  Fission = 'Fission',
}

export interface IEngine {
  type: EngineType,
  rating: EngineRating,
  hitPoints: number,
  internalHeatSinks: number,
}

export const Engine = (props: IEngine): Readonly<IEngine> => ({
  ...props,
})

export const EngineL = lens<IEngine>()

interface IEngineTableRecord {
  rating: number,
  manufacturer: string,
  [EngineType.ICE]: number,
  [EngineType.Cell]: number,
  [EngineType.Fission]: number,
  [EngineType.Compact]: number,
  [EngineType.Standard]: number,
  [EngineType.Light]: number,
  [EngineType.XL]: number,
  hitPoints: number,
}

const EngineTableRecord = (
  rating: number,
  manufacturer: string,
  ice: number,
  cell: number,
  fission: number,
  compact: number,
  standard: number,
  light: number,
  xl: number,
): IEngineTableRecord => ({
  rating,
  manufacturer,
  [EngineType.ICE]: ice,
  [EngineType.Cell]: cell,
  [EngineType.Fission]: fission,
  [EngineType.Compact]: compact,
  [EngineType.Standard]: standard,
  [EngineType.Light]: light,
  [EngineType.XL]: xl,
  hitPoints: 3,
})

export const EngineTable = {
  10:  EngineTableRecord(10,  'Omni',   1.0,   1.0,  5.0,  1.0,  0.5,  0.5,  0.5),
  15:  EngineTableRecord(15,  'GM',     1.0,   1.0,  5.0,  1.0,  0.5,  0.5,  0.5),
  20:  EngineTableRecord(20,  'Pitban', 1.0,   1.0,  5.0,  1.0,  0.5,  0.5,  0.5),
  25:  EngineTableRecord(25,  'Omni',   1.0,   1.0,  5.0,  1.0,  0.5,  0.5,  0.5),
  30:  EngineTableRecord(30,  'Nissan', 2.0,   1.5,  5.0,  1.5,  1.0,  1.0,  0.5),
  35:  EngineTableRecord(35,  'VOX',    2.0,   1.5,  5.0,  1.5,  1.0,  1.0,  0.5),
  40:  EngineTableRecord(40,  'GM',     2.0,   1.5,  5.0,  1.5,  1.0,  1.0,  0.5),
  45:  EngineTableRecord(45,  'GM',     2.0,   1.5,  5.0,  1.5,  1.0,  1.0,  0.5),
  50:  EngineTableRecord(50,  'DAV',    3.0,   2.0,  5.0,  2.5,  1.5,  1.5,  1.0),
  55:  EngineTableRecord(55,  'VOX',    3.0,   2.0,  5.0,  2.5,  1.5,  1.5,  1.0),
  60:  EngineTableRecord(60,  'Leenex', 3.0,   2.0,  5.0,  2.5,  1.5,  1.5,  1.0),
  65:  EngineTableRecord(65,  'Nissan', 4.0,   2.5,  5.0,  3.0,  2.0,  1.5,  1.0),
  70:  EngineTableRecord(70,  'Omni',   4.0,   2.5,  5.0,  3.0,  2.0,  1.5,  1.0),
  75:  EngineTableRecord(75,  'GM',     4.0,   2.5,  5.0,  3.0,  2.0,  1.5,  1.0),
  80:  EngineTableRecord(80,  'VOX',    5.0,   3.0,  5.0,  4.0,  2.5,  2.0,  1.5),
  85:  EngineTableRecord(85,  'DAV',    5.0,   3.0,  5.0,  4.0,  2.5,  2.0,  1.5),
  90:  EngineTableRecord(90,  'DAV',    6.0,   4.0,  5.5,  4.5,  3.0,  2.5,  1.5),
  95:  EngineTableRecord(95,  'Nissan', 6.0,   4.0,  5.5,  4.5,  3.0,  2.5,  1.5),
  100: EngineTableRecord(100, 'Hermes', 6.0,   4.0,  5.5,  4.5,  3.0,  2.5,  1.5),
  105: EngineTableRecord(105, 'DAV',    7.0,   4.5,  6.5,  5.5,  3.5,  3.0,  2.0),
  110: EngineTableRecord(110, 'GM',     7.0,   4.5,  6.5,  5.5,  3.5,  3.0,  2.0),
  115: EngineTableRecord(115, 'GM',     8.0,   5.0,  7.0,  6.0,  4.0,  3.0,  2.0),
  120: EngineTableRecord(120, 'GM',     8.0,   5.0,  7.0,  6.0,  4.0,  3.0,  2.0),
  125: EngineTableRecord(125, 'Vlar',   8.0,   5.0,  7.0,  6.0,  4.0,  3.0,  2.0),
  130: EngineTableRecord(130, 'Magna',  9.0,   5.5,  8.0,  7.0,  4.5,  3.5,  2.5),
  135: EngineTableRecord(135, 'Hermes', 9.0,   5.5,  8.0,  7.0,  4.5,  3.5,  2.5),
  140: EngineTableRecord(140, 'Leenex', 10.0,  6.0,  9.0,  7.5,  5.0,  4.0,  2.5),
  145: EngineTableRecord(145, 'Omni',   10.0,  6.0,  9.0,  7.5,  5.0,  4.0,  2.5),
  150: EngineTableRecord(150, 'GM',     11.0,  7.0,  10.0, 8.5,  5.5,  4.5,  3.0),
  155: EngineTableRecord(155, 'GM',     11.0,  7.0,  10.0, 8.5,  5.5,  4.5,  3.0),
  160: EngineTableRecord(160, 'LTV',    12.0,  7.5,  10.5, 9.0,  6.0,  4.5,  3.0),
  165: EngineTableRecord(165, 'VOX',    12.0,  7.5,  10.5, 9.0,  6.0,  4.5,  3.0),
  170: EngineTableRecord(170, 'DAV',    12.0,  7.5,  10.5, 9.0,  6.0,  4.5,  3.0),
  175: EngineTableRecord(175, 'Omni',   14.0,  8.5,  12.5, 10.5, 7.0,  5.5,  3.5),
  180: EngineTableRecord(180, 'GM',     14.0,  8.5,  12.5, 10.5, 7.0,  5.5,  3.5),
  185: EngineTableRecord(185, 'GM',     15.0,  9.0,  13.5, 11.5, 7.5,  6.0,  4.0),
  190: EngineTableRecord(190, 'DAV',    15.0,  9.0,  13.5, 11.5, 7.5,  6.0,  4.0),
  195: EngineTableRecord(195, 'Nissan', 16.0,  10.0, 14.0, 12.0, 8.0,  6.0,  4.0),
  200: EngineTableRecord(200, 'Nissan', 17.0,  10.5, 15.0, 13.0, 8.5,  6.5,  4.5),
  205: EngineTableRecord(205, 'Vlar',   17.0,  10.5, 15.0, 13.0, 8.5,  6.5,  4.5),
  210: EngineTableRecord(210, 'GM',     18.0,  11.0, 16.0, 13.5, 9.0,  7.0,  4.5),
  215: EngineTableRecord(215, 'Core',   19.0,  11.5, 17.0, 14.5, 9.5,  7.5,  5.0),
  220: EngineTableRecord(220, 'DAV',    20.0,  12.0, 17.5, 15.0, 10.0, 7.5,  5.0),
  225: EngineTableRecord(225, 'VOX',    20.0,  12.0, 17.5, 15.0, 10.0, 7.5,  5.0),
  230: EngineTableRecord(230, 'Leenex', 21.0,  13.0, 18.5, 16.0, 10.5, 8.0,  5.5),
  235: EngineTableRecord(235, 'GM',     22.0,  13.5, 19.5, 16.5, 11.0, 8.5,  5.5),
  240: EngineTableRecord(240, 'Pitban', 23.0,  14.0, 20.5, 17.5, 11.5, 9.0,  6.0),
  245: EngineTableRecord(245, 'Magna',  24.0,  14.5, 21.0, 18.0, 12.0, 9.0,  6.0),
  250: EngineTableRecord(250, 'Magna',  25.0,  15.0, 22.0, 19.0, 12.5, 9.5,  6.5),
  255: EngineTableRecord(255, 'Strand', 26.0,  16.0, 23.0, 19.5, 13.0, 10.0, 6.5),
  260: EngineTableRecord(260, 'Magna',  27.0,  16.5, 24.0, 20.5, 13.5, 10.5, 7.0),
  265: EngineTableRecord(265, 'Vlar',   28.0,  17.0, 24.5, 21.0, 14.0, 10.5, 7.0),
  270: EngineTableRecord(270, 'GM',     29.0,  17.5, 25.5, 22.0, 14.5, 11.0, 7.5),
  275: EngineTableRecord(275, 'Core',   31.0,  19.0, 27.5, 23.5, 15.5, 12.0, 8.0),
  280: EngineTableRecord(280, 'VOX',    32.0,  19.5, 28.0, 24.0, 16.0, 12.0, 8.0),
  285: EngineTableRecord(285, 'Pitban', 33.0,  20.0, 29.0, 25.0, 16.5, 12.5, 8.5),
  290: EngineTableRecord(290, 'Omni',   35.0,  21.0, 31.0, 26.5, 17.5, 13.5, 9.0),
  295: EngineTableRecord(295, 'GM',     36.0,  22.0, 31.5, 27.0, 18.0, 13.5, 9.0),
  300: EngineTableRecord(300, 'Vlar',   38.0,  23.0, 33.5, 28.5, 19.0, 14.5, 9.5),
  305: EngineTableRecord(305, 'GM',     39.0,  23.5, 34.5, 29.5, 19.5, 15.0, 10.0),
  310: EngineTableRecord(310, 'Magna',  41.0,  25.0, 36.0, 31.0, 20.5, 15.5, 10.5),
  315: EngineTableRecord(315, 'GM',     43.0,  26.0, 38.0, 32.5, 21.5, 16.5, 11.0),
  320: EngineTableRecord(320, 'Pitban', 45.0,  27.0, 39.5, 34.0, 22.5, 17.0, 11.5),
  325: EngineTableRecord(325, 'VOX',    47.0,  28.5, 41.5, 35.5, 23.5, 18.0, 12.0),
  330: EngineTableRecord(330, 'VOX',    49.0,  29.5, 43.0, 37.0, 24.5, 18.5, 12.5),
  335: EngineTableRecord(335, 'Leenex', 51.0,  31.0, 45.0, 38.5, 25.5, 19.5, 13.0),
  340: EngineTableRecord(340, 'VOX',    54.0,  32.5, 47.5, 40.5, 27.0, 20.5, 13.5),
  345: EngineTableRecord(345, 'Vlar',   57.0,  34.5, 50.0, 43.0, 28.5, 21.5, 14.5),
  350: EngineTableRecord(350, 'Magna',  59.0,  35.5, 52.0, 44.5, 29.5, 22.5, 15.0),
  355: EngineTableRecord(355, 'LTV',    63.0,  38.0, 55.5, 47.5, 31.5, 24.0, 16.0),
  360: EngineTableRecord(360, 'Hermes', 66.0,  40.0, 58.0, 49.5, 33.0, 25.0, 16.5),
  365: EngineTableRecord(365, 'Hermes', 69.0,  41.5, 60.5, 52.0, 34.5, 26.0, 17.5),
  370: EngineTableRecord(370, 'Magna',  73.0,  44.0, 64.0, 55.0, 36.5, 27.5, 18.5),
  375: EngineTableRecord(375, 'GM',     77.0,  46.5, 67.5, 58.0, 38.5, 29.0, 19.5),
  380: EngineTableRecord(380, 'GM',     82.0,  49.5, 72.0, 61.5, 41.0, 31.0, 20.5),
  385: EngineTableRecord(385, 'LTV',    87.0,  52.5, 76.5, 65.5, 43.5, 33.0, 22.0),
  390: EngineTableRecord(390, 'Magna',  92.0,  55.5, 80.5, 69.0, 46.0, 34.5, 23.0),
  395: EngineTableRecord(395, 'Hermes', 98.0,  59.0, 86.0, 73.5, 49.0, 37.0, 24.5),
  400: EngineTableRecord(400, 'LTV',    105.0, 63.0, 92.0, 79.0, 52.5, 39.5, 26.5),
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
  EngineTable[rating][type]

export const getAvailableEngines = (tech: Tech) => {
  switch (tech) {
  case Tech.Clan: return [EngineType.Standard, EngineType.XL]
  case Tech.IS: return [EngineType.Standard, EngineType.Compact, EngineType.Light, EngineType.XL]
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
  default: throw new Error(`Invalid engine type given: ${type}`)
  }
}
