import { getRunningMP, getWalkingMP } from './EngineTable'

export enum JumpJetType {
  Standard = 'Standard',
  Improved = 'Improved',
}

interface IJumpJetTableRecord {
  type: JumpJetType,
  tonnage: {
    light: number,
    medium: number,
    heavy: number,
  },
}

export const JumpJetTable: { [jumpJet: string]: IJumpJetTableRecord } = [
  { type: JumpJetType.Standard, tonnage: { light: 0.5, medium: 1.0, heavy: 2.0 }, criticals: 1 },
  { type: JumpJetType.Improved, tonnage: { light: 1.0, medium: 2.0, heavy: 4.0 }, criticals: 2 },
].reduce((memo, JumpJet: IJumpJetTableRecord) => {
  memo[JumpJet.type] = JumpJet
  return memo
}, {})

export const getJumpJetTonnage = (mechTonnage: number, type: JumpJetType): number => {
  if (mechTonnage <= 55.0) {
    return JumpJetTable[type].tonnage.light
  } else if (mechTonnage >= 60.0 && mechTonnage <= 85.0) {
    return JumpJetTable[type].tonnage.medium
  } else {
    return JumpJetTable[type].tonnage.heavy
  }
}

export const getJumpJetCriticals = (type: JumpJetType): number => {
  switch (type) {
  case JumpJetType.Standard:
    return 1
  case JumpJetType.Improved:
    return 2
  }
}

export const getMaxJumpJets = (engineRating: number, mechTonnage: number, type: JumpJetType): number => {
  switch (type) {
  case JumpJetType.Standard:
    return getWalkingMP(engineRating, mechTonnage)
  case JumpJetType.Improved:
  return getRunningMP(engineRating, mechTonnage)
  }
}
