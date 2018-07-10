
export enum MissileGuidenceType {
  Standard = 'Standard',
  ArtemisIV = 'Artemis IV',
}

export const getAvaliableMissileGuidenceTypes = (): MissileGuidenceType[] => {
  return [MissileGuidenceType.Standard, MissileGuidenceType.ArtemisIV]
}
