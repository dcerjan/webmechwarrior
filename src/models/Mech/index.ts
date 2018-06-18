import { lens } from 'lens.ts'

import { ArmorType, getArmorBasePointMultiplier } from '../Armor'
import { Component, IArm, ICenterTorso, IHead, ILeg, ISideTorso } from '../common/Component'
import { MechType } from '../common/MechType'
import { Tech } from '../common/Tech'
import { IEngine } from '../Engine'
import { IGyro } from '../Gryo'
import { InternalStructureType, MechTonnage } from '../InternalStructure'

export interface IBaseMech {
  name: string,
  tech: Tech,
  type: MechType,
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

export const getArmorTonnage = (type: MechType, tech: Tech, armorType: ArmorType,  loadout: IBipedalLoadout | IQuadrupedalLoadout) => {
  const armor =  type === MechType.Bipedal
    ? getBipedalLoadoutArmor(loadout as IBipedalLoadout)
    : getQuadrupedalLoadoutArmor(loadout as IQuadrupedalLoadout)

  return Math.ceil((armor / (16 * getArmorBasePointMultiplier(tech, armorType))) * 2.0) * 0.5
}
