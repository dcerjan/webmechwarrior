import { MechTonnage } from '../Mech'

export enum MechClass {
  Light = 'Light',
  Medium = 'Medium',
  Heavy = 'Heavy',
  Assault = 'Assault',
  SuperHeavy = 'Super Heavy'
}

export const isLight = (tonnage: MechTonnage) =>
  tonnage >= 20 && tonnage < 40

export const isMedium = (tonnage: MechTonnage) =>
  tonnage >= 40 && tonnage < 60

export const isHeavy = (tonnage: MechTonnage) =>
  tonnage >= 60 && tonnage < 80

export const isAssault = (tonnage: MechTonnage) =>
  tonnage >= 80 && tonnage <= 100

export const isSuperHeavy = (tonnage: MechTonnage) =>
  tonnage > 100 && tonnage <= 200