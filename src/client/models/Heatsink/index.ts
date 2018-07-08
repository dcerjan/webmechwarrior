import { lens } from 'lens.ts'
import { Tech } from '../common/Tech'

export enum HeatsinkType {
  Single = 'Single',
  Double = 'Double',
}

export interface IHeatsink {
  type: HeatsinkType,
}

export const Heatsink = (props: IHeatsink): Readonly<IHeatsink> => ({
  ...props,
})

export const HeatsinkL = lens<IHeatsink>()

interface IHeatsinkRecord {
  type: HeatsinkType,
  tonnage: {
    [Tech.IS]: number,
    [Tech.Clan]: number,
  },
  criticalSlots: {
    [Tech.IS]: number,
    [Tech.Clan]: number,
  },
}

const HeatsinkRecord = (
  type: HeatsinkType,
  tonnage: {
    [Tech.IS]: number,
    [Tech.Clan]: number,
  },
  criticalSlots: {
    [Tech.IS]: number,
    [Tech.Clan]: number,
  },
): IHeatsinkRecord => ({
  type,
  tonnage,
  criticalSlots,
})

export const HeatsinkTable = {
  [HeatsinkType.Single]:  HeatsinkRecord(HeatsinkType.Single, { 'Inner Sphere': 1.0, Clan: 1.0 }, { 'Inner Sphere': 1, Clan: 1 }),
  [HeatsinkType.Double]:  HeatsinkRecord(HeatsinkType.Double, { 'Inner Sphere': 1.0, Clan: 1.0 }, { 'Inner Sphere': 3, Clan: 2 }),
}

export const getAvaliableHeatsinkTypes = (tech: Tech): HeatsinkType[] => {
  switch (tech) {
  case Tech.IS:
  case Tech.Clan: return [HeatsinkType.Single, HeatsinkType.Double]
  }
}

export const getHeatsinkTonnage = (tech: Tech, type: HeatsinkType): number =>
  HeatsinkTable[type][tech].tonnage

export const getHeatsinkCriticals = (tech: Tech, type: HeatsinkType): number =>
  HeatsinkTable[type][tech].criticalSlots
