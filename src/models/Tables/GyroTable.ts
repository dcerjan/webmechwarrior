export enum GyroType {
  Compact = 'Compact',
  HeavyDuty = 'HeavyDuty',
  Standard = 'Standard',
  XL = 'XL',
}

interface IGyroTableRecord {
  type: GyroType,
  weightMultiplier: number,
  criticals: number,
}

export const GyroTable: { [gyro: string]: IGyroTableRecord } = [
  { type: GyroType.Compact, weightMultiplier: 1.5, criticals: 2 },
  { type: GyroType.HeavyDuty, weightMultiplier: 2.0, criticals: 4 },
  { type: GyroType.Standard, weightMultiplier: 1.0, criticals: 4 },
  { type: GyroType.XL, weightMultiplier: 0.5, criticals: 6 },
].reduce((memo, gyro: IGyroTableRecord) => {
  memo[gyro.type] = gyro
  return memo
}, {})

export const getGyroTonnage = (rating: number, type: GyroType): number =>
  Math.ceil(rating * 0.01 * GyroTable[type].weightMultiplier)

export const getGyroCriticals = (type: GyroType): number =>
  GyroTable[type].criticals

export const getGyroHitPoints = (type: GyroType): number =>
  type === GyroType.HeavyDuty
    ? 3
    : 2

