import { lens } from 'lens.ts'
import { Tech } from '../common/Tech'

export enum CockpitType {
  Standard = 'Standard',
  Small = 'Small',
}

export interface ICockpit {
  type: CockpitType,
  hitPoints: number,
}

export const Cockpit = (props: ICockpit): Readonly<ICockpit> => ({
  ...props,
})

export const CockpitL = lens<ICockpit>()

interface ICockpitTableRecord {
  type: CockpitType,
  tonnage: number,
  cockpitCriticals: number,
  sensorsCriticals: number,
  lifeSupportCriticals: number,
  hitPoints: number,
}

const CockpitTableRecord = (
  type: CockpitType,
  tonnage: number,
  cockpitCriticals: number,
  sensorsCriticals: number,
  lifeSupportCriticals: number,
  hitPoints: number,
): ICockpitTableRecord => ({
  type,
  tonnage,
  cockpitCriticals,
  sensorsCriticals,
  lifeSupportCriticals,
  hitPoints,
})

export const CockpitTable = {
  [CockpitType.Standard]: CockpitTableRecord(CockpitType.Standard, 3.0, 1, 2, 2, 2),
  [CockpitType.Small]:    CockpitTableRecord(CockpitType.Small,    2.0, 1, 2, 1, 2),
}

export const getAvaliableCockpits = (tech: Tech) => {
  switch (tech) {
  case Tech.Clan: return [CockpitType.Standard]
  case Tech.IS: return [CockpitType.Standard, CockpitType.Small]
  default: return []
  }
}

export const getCockpitTonnage = (type: CockpitType): number =>
  CockpitTable[type].tonnage

export const getCockpitCriticals = (type: CockpitType): number =>
  CockpitTable[type].cockpitCriticals

export const getSensorsCriticals = (type: CockpitType): number =>
  CockpitTable[type].sensorsCriticals

export const getLifeSupportCriticals = (type: CockpitType): number =>
  CockpitTable[type].lifeSupportCriticals

export const getCockpitHitPoints = (type: CockpitType): number =>
  CockpitTable[type].hitPoints
