import { lens } from 'lens.ts'

import { ArmorType, getArmorBasePointMultiplier } from '../Armor'
import { MechClass } from '../common/MechClass'
import { IArm, ICenterTorso, IHead, ILeg, ISideTorso, MechComponent } from '../common/MechComponent'
import { MechType } from '../common/MechType'
import { Tech } from '../common/Tech'
import { IEngine } from '../Engine'
import { IGyro } from '../Gryo'
import { HeatsinkType } from '../Heatsink'
import { InternalStructureType } from '../InternalStructure'
import { MissileGuidenceType } from '../MissileGuidenceType'

export type MechTonnage =
  | 20 | 25 | 30 | 35 | 40 | 45 | 50
  | 55 | 60 | 65 | 70 | 75 | 80 | 85 | 90 | 95 | 100
  | 105 | 110 | 115 | 120 | 125 | 130 | 135 | 140 | 145 | 150
  | 155 | 160 | 165 | 170 | 175 | 180 | 185 | 190 | 195 | 200

export interface IBaseMech {
  _id?: string,
  name: string,
  tech: Tech,
  type: MechType,
  class: MechClass,
  tonnage: MechTonnage,
  heatsinkType: HeatsinkType,
  missileGuidenceType: MissileGuidenceType,
  engine: IEngine,
  gyro: IGyro,
  internalStructure: InternalStructureType,
  armor: ArmorType
}

export interface IBipedalLoadout {
  [MechComponent.Head]: IHead,
  [MechComponent.CenterTorso]: ICenterTorso,
  [MechComponent.LeftTorso]: ISideTorso,
  [MechComponent.RightTorso]: ISideTorso,
  [MechComponent.LeftArm]: IArm,
  [MechComponent.RightArm]: IArm,
  [MechComponent.LeftLeg]: ILeg,
  [MechComponent.RightLeg]: ILeg,
}

export interface IBipedalMech extends IBaseMech {
  loadout: IBipedalLoadout,
}

export const BipedalMech = (props: IBipedalMech): Readonly<IBipedalMech> => ({
  ...props,
})

export const BipedalMechL = lens<IBipedalMech>()

export interface ITripodLoadout {
  [MechComponent.Head]: IHead,
  [MechComponent.CenterTorso]: ICenterTorso,
  [MechComponent.LeftTorso]: ISideTorso,
  [MechComponent.RightTorso]: ISideTorso,
  [MechComponent.LeftArm]: IArm,
  [MechComponent.RightArm]: IArm,
  [MechComponent.FrontLeftLeg]: ILeg,
  [MechComponent.FrontRightLeg]: ILeg,
  [MechComponent.RearLeg]: ILeg,
}

export interface ITripodMech extends IBaseMech {
  loadout: ITripodLoadout,
}

export const TripodMech = (props: ITripodMech): Readonly<ITripodMech> => ({
  ...props,
})

export interface IQuadrupedalLoadout {
  [MechComponent.Head]: IHead,
  [MechComponent.CenterTorso]: ICenterTorso,
  [MechComponent.LeftTorso]: ISideTorso,
  [MechComponent.RightTorso]: ISideTorso,
  [MechComponent.FrontLeftLeg]: ILeg,
  [MechComponent.FrontRightLeg]: ILeg,
  [MechComponent.RearLeftLeg]: ILeg,
  [MechComponent.RearRightLeg]: ILeg,
}

export interface IQuadrupedalMech extends IBaseMech {
  loadout: IQuadrupedalLoadout,
}

export const QuadrupedalMech = (props: IQuadrupedalMech): Readonly<IQuadrupedalMech> => ({
  ...props,
})

export const QuadrupedalMechL = lens<IQuadrupedalMech>()

export const getBipedalLoadoutArmor = (loadout: IBipedalLoadout): number => {
  return (
    loadout[MechComponent.Head].armor +
    loadout[MechComponent.CenterTorso].armor +
    loadout[MechComponent.CenterTorso].rearArmor +
    loadout[MechComponent.LeftTorso].armor +
    loadout[MechComponent.LeftTorso].rearArmor +
    loadout[MechComponent.RightTorso].armor +
    loadout[MechComponent.RightTorso].rearArmor +
    loadout[MechComponent.LeftArm].armor +
    loadout[MechComponent.RightArm].armor +
    loadout[MechComponent.LeftLeg].armor +
    loadout[MechComponent.RightLeg].armor
  )
}

export const getTripodLoadoutArmor = (loadout: ITripodLoadout): number => {
  return (
    loadout[MechComponent.Head].armor +
    loadout[MechComponent.CenterTorso].armor +
    loadout[MechComponent.CenterTorso].rearArmor +
    loadout[MechComponent.LeftTorso].armor +
    loadout[MechComponent.LeftTorso].rearArmor +
    loadout[MechComponent.RightTorso].armor +
    loadout[MechComponent.RightTorso].rearArmor +
    loadout[MechComponent.LeftArm].armor +
    loadout[MechComponent.RightArm].armor +
    loadout[MechComponent.FrontLeftLeg].armor +
    loadout[MechComponent.FrontRightLeg].armor +
    loadout[MechComponent.RearLeg].armor
  )
}

export const getQuadrupedalLoadoutArmor = (loadout: IQuadrupedalLoadout): number => {
  return (
    loadout[MechComponent.Head].armor +
    loadout[MechComponent.CenterTorso].armor +
    loadout[MechComponent.CenterTorso].rearArmor +
    loadout[MechComponent.LeftTorso].armor +
    loadout[MechComponent.LeftTorso].rearArmor +
    loadout[MechComponent.RightTorso].armor +
    loadout[MechComponent.RightTorso].rearArmor +
    loadout[MechComponent.FrontLeftLeg].armor +
    loadout[MechComponent.FrontRightLeg].armor +
    loadout[MechComponent.RearLeftLeg].armor +
    loadout[MechComponent.RearRightLeg].armor
  )
}

export const getArmorTonnage = (type: MechType, tech: Tech, armorType: ArmorType,  loadout: MechLoadout) => {
  const armor = (() => {
    switch (type) {
    case MechType.Bipedal: return getBipedalLoadoutArmor(loadout as IBipedalLoadout)
    case MechType.Tripod: return getTripodLoadoutArmor(loadout as ITripodLoadout)
    case MechType.Quadrupedal: return getQuadrupedalLoadoutArmor(loadout as IQuadrupedalLoadout)
    }
  })()

  return Math.ceil((armor / (16 * getArmorBasePointMultiplier(tech, armorType))) * 2.0) * 0.5
}

export type MechChassis =
  | IBipedalMech
  | ITripodMech
  | IQuadrupedalMech

export type MechLoadout =
  | IBipedalLoadout
  | ITripodLoadout
  | IQuadrupedalLoadout
