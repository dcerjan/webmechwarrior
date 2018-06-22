import { EngineRating, getRunningMP, getWalkingMP } from '../Engine'
import { MechTonnage } from '../Mech'

export enum JumpJetType {
  Standard = 'Standard Jump Jet',
  Improved = 'Improved Jump Jet',
}

interface IJumpJetRecord {
  light: number,
  medium: number,
  heavy: number,
  criticalSlots: number,
}

const JumpJetRecord = (
  light: number,
  medium: number,
  heavy: number,
  criticalSlots: number,
): IJumpJetRecord => ({
  light,
  medium,
  heavy,
  criticalSlots,
})

export const JumpJetTable = {
  [JumpJetType.Standard]: JumpJetRecord(0.5, 1.0, 2.0, 1),
  [JumpJetType.Improved]: JumpJetRecord(1.0, 2.0, 4.0, 2),
}

export const getJumpJetTonnage = (mechTonnage: MechTonnage, type: JumpJetType): number => {
  if (mechTonnage <= 55.0) {
    return JumpJetTable[type].light
  } else if (mechTonnage >= 60.0 && mechTonnage <= 85.0) {
    return JumpJetTable[type].medium
  } else {
    return JumpJetTable[type].heavy
  }
}

export const getJumpJetCriticals = (type: JumpJetType): number =>
  JumpJetTable[type].criticalSlots

export const getMaxJumpJets = (engineRating: EngineRating, mechTonnage: MechTonnage, type: JumpJetType): number => {
  switch (type) {
  case JumpJetType.Standard:
    return getWalkingMP(engineRating, mechTonnage)
  case JumpJetType.Improved:
  return getRunningMP(engineRating, mechTonnage)
  }
}
