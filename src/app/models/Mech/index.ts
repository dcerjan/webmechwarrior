import { lens } from 'lens.ts'

import { Armor } from '../Armor'
import { Component, IArm, ICenterTorso, IHead, ILeg, ISideTorso } from '../common/Component'
import { MechType } from '../common/MechType'
import { Tech } from '../common/Tech'
import { IEngine } from '../Engine'
import { IGyro } from '../Gryo'
import { InternalStructure, MechTonnage } from '../InternalStructure'

interface IBaseMech {
  name: string,
  tech: Tech,
  type: MechType,
  tonnage: MechTonnage,
  engine: IEngine,
  gyro: IGyro,
  internalStructure: InternalStructure,
  armor: Armor
}

export interface IBipedalMech extends IBaseMech {
  loadout: {
    [Component.Head]: IHead,
    [Component.CenterTorso]: ICenterTorso,
    [Component.LeftTorso]: ISideTorso,
    [Component.RightTorso]: ISideTorso,
    [Component.LeftArm]: IArm,
    [Component.RightArm]: IArm,
    [Component.LeftLeg]: ILeg,
    [Component.RightLeg]: ILeg,
  },
}

export const BipedalMech = (props: IBipedalMech): Readonly<IBipedalMech> => ({
  ...props,
})

export const BipedalMechL = lens<IBipedalMech>()

export interface IQuadrupedalMech extends IBaseMech {
  loadout: {
    [Component.Head]: IHead,
    [Component.CenterTorso]: ICenterTorso,
    [Component.LeftTorso]: ISideTorso,
    [Component.RightTorso]: ISideTorso,
    [Component.FrontLeftLeg]: ILeg,
    [Component.FrontRightLeg]: ILeg,
    [Component.RearLeftLeg]: ILeg,
    [Component.RearRightLeg]: ILeg,
  },
}

export const QuadrupedalMech = (props: IQuadrupedalMech): Readonly<IQuadrupedalMech> => ({
  ...props,
})

export const QuadrupedalMechL = lens<IQuadrupedalMech>()