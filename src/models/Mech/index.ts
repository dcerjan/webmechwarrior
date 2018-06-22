import { lens } from 'lens.ts'

import { ArmorType, getArmorBasePointMultiplier } from '../Armor'
import { Component, IArm, ICenterTorso, IHead, ILeg, ISideTorso } from '../common/Component'
import { MechClass } from '../common/MechClass'
import { MechType } from '../common/MechType'
import { Tech } from '../common/Tech'
import { IEngine } from '../Engine'
import { IGyro } from '../Gryo'
import { InternalStructureType } from '../InternalStructure'

export type MechTonnage =
  | 20 | 25 | 30 | 35 | 40 | 45 | 50
  | 55 | 60 | 65 | 70 | 75 | 80 | 85 | 90 | 95 | 100
  | 105 | 110 | 115 | 120 | 125 | 130 | 135 | 140 | 145 | 150
  | 155 | 160 | 165 | 170 | 175 | 180 | 185 | 190 | 195 | 200

export interface IBaseMech {
  name: string,
  tech: Tech,
  type: MechType,
  class: MechClass,
  tonnage: MechTonnage,
  engine: IEngine,
  gyro: IGyro,
  internalStructure: InternalStructureType,
  armor: ArmorType
}

export interface IBipedalLoadout {
  [Component.Head]: IHead,
  [Component.CenterTorso]: ICenterTorso,
  [Component.LeftTorso]: ISideTorso,
  [Component.RightTorso]: ISideTorso,
  [Component.LeftArm]: IArm,
  [Component.RightArm]: IArm,
  [Component.LeftLeg]: ILeg,
  [Component.RightLeg]: ILeg,
}

export interface IBipedalMech extends IBaseMech {
  loadout: IBipedalLoadout,
}

export const BipedalMech = (props: IBipedalMech): Readonly<IBipedalMech> => ({
  ...props,
})

export const BipedalMechL = lens<IBipedalMech>()

export interface ITripodLoadout {
  [Component.Head]: IHead,
  [Component.CenterTorso]: ICenterTorso,
  [Component.LeftTorso]: ISideTorso,
  [Component.RightTorso]: ISideTorso,
  [Component.LeftArm]: IArm,
  [Component.RightArm]: IArm,
  [Component.FrontLeftLeg]: ILeg,
  [Component.FrontRightLeg]: ILeg,
  [Component.RearLeg]: ILeg,
}

export interface ITripodMech extends IBaseMech {
  loadout: ITripodLoadout,
}

export const TripodMech = (props: ITripodMech): Readonly<ITripodMech> => ({
  ...props,
})

export interface IQuadrupedalLoadout {
  [Component.Head]: IHead,
  [Component.CenterTorso]: ICenterTorso,
  [Component.LeftTorso]: ISideTorso,
  [Component.RightTorso]: ISideTorso,
  [Component.FrontLeftLeg]: ILeg,
  [Component.FrontRightLeg]: ILeg,
  [Component.RearLeftLeg]: ILeg,
  [Component.RearRightLeg]: ILeg,
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
    loadout[Component.Head].armor +
    loadout[Component.CenterTorso].armor +
    loadout[Component.CenterTorso].rearArmor +
    loadout[Component.LeftTorso].armor +
    loadout[Component.LeftTorso].rearArmor +
    loadout[Component.RightTorso].armor +
    loadout[Component.RightTorso].rearArmor +
    loadout[Component.LeftArm].armor +
    loadout[Component.RightArm].armor +
    loadout[Component.LeftLeg].armor +
    loadout[Component.RightLeg].armor
  )
}

export const getTripodLoadoutArmor = (loadout: ITripodLoadout): number => {
  return (
    loadout[Component.Head].armor +
    loadout[Component.CenterTorso].armor +
    loadout[Component.CenterTorso].rearArmor +
    loadout[Component.LeftTorso].armor +
    loadout[Component.LeftTorso].rearArmor +
    loadout[Component.RightTorso].armor +
    loadout[Component.RightTorso].rearArmor +
    loadout[Component.LeftArm].armor +
    loadout[Component.RightArm].armor +
    loadout[Component.FrontLeftLeg].armor +
    loadout[Component.FrontRightLeg].armor +
    loadout[Component.RearLeg].armor
  )
}

export const getQuadrupedalLoadoutArmor = (loadout: IQuadrupedalLoadout): number => {
  return (
    loadout[Component.Head].armor +
    loadout[Component.CenterTorso].armor +
    loadout[Component.CenterTorso].rearArmor +
    loadout[Component.LeftTorso].armor +
    loadout[Component.LeftTorso].rearArmor +
    loadout[Component.RightTorso].armor +
    loadout[Component.RightTorso].rearArmor +
    loadout[Component.FrontLeftLeg].armor +
    loadout[Component.FrontRightLeg].armor +
    loadout[Component.RearLeftLeg].armor +
    loadout[Component.RearRightLeg].armor
  )
}

export const getArmorTonnage = (type: MechType, tech: Tech, armorType: ArmorType,  loadout: IBipedalLoadout | ITripodLoadout | IQuadrupedalLoadout) => {
  const armor = (() => {
    switch (type) {
    case MechType.Bipedal: return getBipedalLoadoutArmor(loadout as IBipedalLoadout)
    case MechType.Tripod: return getTripodLoadoutArmor(loadout as ITripodLoadout)
    case MechType.Quadrupedal: return getQuadrupedalLoadoutArmor(loadout as IQuadrupedalLoadout)
    }
  })()

  return Math.ceil((armor / (16 * getArmorBasePointMultiplier(tech, armorType))) * 2.0) * 0.5
}
