import { lens } from 'lens.ts'
import { Tech } from '../common/Tech'

export enum GyroType {
  Compact = 'Compact',
  HeavyDuty = 'HeavyDuty',
  Standard = 'Standard',
  XL = 'XL',
}

export interface IGyro {
  type: GyroType,
  hitPoints: number,
}

export const Gyro = (props: IGyro): Readonly<IGyro> => ({
  ...props,
})

export const GyroL = lens<IGyro>()

interface IGyroTableRecord {
  type: GyroType,
  weightMultiplier: number,
  criticalSlots: number,
  hitPoints: number,
}

const GyroTableRecord = (props: IGyroTableRecord) => ({
  ...props,
})

export const GyroTable = {
  [GyroType.Compact]:   GyroTableRecord({ type: GyroType.Compact,   weightMultiplier: 1.5, criticalSlots: 2, hitPoints: 2 }),
  [GyroType.HeavyDuty]: GyroTableRecord({ type: GyroType.HeavyDuty, weightMultiplier: 2.0, criticalSlots: 4, hitPoints: 3 }),
  [GyroType.Standard]:  GyroTableRecord({ type: GyroType.Standard,  weightMultiplier: 1.0, criticalSlots: 4, hitPoints: 2 }),
  [GyroType.XL]:        GyroTableRecord({ type: GyroType.XL,        weightMultiplier: 0.5, criticalSlots: 6, hitPoints: 2 }),
}

export const getAvaliableGyros = (tech: Tech) => {
  switch (tech) {
  case Tech.Clan: return [GyroType.Standard]
  case Tech.IS: return [GyroType.Standard, GyroType.Compact, GyroType.HeavyDuty, GyroType.XL]
  default: return []
  }
}

export const getGyroTonnage = (rating: number, type: GyroType): number =>
  Math.ceil(rating * 0.01 * GyroTable[type].weightMultiplier)

export const getGyroCriticals = (type: GyroType): number =>
  GyroTable[type].criticalSlots

export const getGyroHitPoints = (type: GyroType): number =>
  GyroTable[type].hitPoints
