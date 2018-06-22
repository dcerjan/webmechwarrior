import { lens } from 'lens.ts'

import { MechEquipmentName } from '../MechEquipment/MechEquipmentName'
import { Hardpoint } from './Hardpoint'
import { MechClass } from './MechClass'

export enum Component {
  Head = 'Head',
  CenterTorso = 'Torso (Center)',
  LeftTorso = 'Torso (Left)',
  RightTorso = 'Torso (Right)',
  LeftArm = 'Left Arm',
  RightArm = 'Right Arm',
  LeftLeg = 'Left Leg',
  RightLeg = 'Right Leg',
  FrontLeftLeg = 'Front Left Leg',
  FrontRightLeg = 'Front Right Leg',
  RearLeftLeg = 'Rear Left Leg',
  RearRightLeg = 'Rear Right Leg',
  RearLeg = 'Rear Leg',
}

type Arms =
  | Component.LeftArm
  | Component.RightArm

type Legs =
  | Component.LeftLeg
  | Component.RightLeg
  | Component.FrontLeftLeg
  | Component.FrontRightLeg
  | Component.RearLeftLeg
  | Component.RearRightLeg
  | Component.RearLeg

type SideTorsos =
  | Component.LeftTorso
  | Component.RightTorso

export interface IHardpoints {
  [Hardpoint.Energy]: number,
  [Hardpoint.Ballistic]: number,
  [Hardpoint.Missile]: number,
}

export interface IBaseMechPart {
  name: Component,
  armor: number,
  hardpoints: IHardpoints,
  equipment: MechEquipmentName[],
}

const BaseMechPart = (
  name: Component,
  armor: number,
  hardpoints: IHardpoints,
  equipment: MechEquipmentName[],
): IBaseMechPart => ({
  name,
  armor,
  hardpoints,
  equipment,
})

export interface IHead extends IBaseMechPart {
  name: Component.Head,
}

export const HeadL = lens<IHead>()

export const Head = (
  armor: number,
  hardpoints: IHardpoints,
  equipment: MechEquipmentName[],
): IHead => ({ ...BaseMechPart(Component.Head, armor, hardpoints, equipment) }) as IHead


export interface ICenterTorso extends IBaseMechPart {
  name: Component.CenterTorso,
  rearArmor: number,
}

export const CenterTorsoL = lens<ICenterTorso>()

export const CenterTorso = (
  armor: number,
  rearArmor: number,
  hardpoints: IHardpoints,
  equipment: MechEquipmentName[],
): ICenterTorso => ({
  rearArmor,
  ...BaseMechPart(Component.CenterTorso, armor, hardpoints, equipment),
}) as ICenterTorso


export interface ISideTorso extends IBaseMechPart  {
  name: SideTorsos,
  rearArmor: number,
}

export const SideTorsoL = lens<ISideTorso>()

export const SideTorso = (
  name: SideTorsos,
  armor: number,
  rearArmor: number,
  hardpoints: IHardpoints,
  equipment: MechEquipmentName[],
): ISideTorso => ({
  rearArmor,
  ...BaseMechPart(name, armor, hardpoints, equipment),
}) as ISideTorso


export interface IArm extends IBaseMechPart {
  name: Arms,
}

export const ArmL = lens<IArm>()

export const Arm = (
  name: Arms,
  armor: number,
  hardpoints: IHardpoints,
  equipment: MechEquipmentName[],
): IArm => BaseMechPart(name, armor, hardpoints, equipment) as IArm


export interface ILeg extends IBaseMechPart  {
  name: Legs,
}

export const LegL = lens<ILeg>()

export const Leg = (
  name: Legs,
  armor: number,
  hardpoints: IHardpoints,
  equipment: MechEquipmentName[],
): ILeg => BaseMechPart(name, armor, hardpoints, equipment) as ILeg

export const getMechBipedComponents = () => [
  Component.Head,
  Component.CenterTorso,
  Component.LeftTorso,
  Component.RightTorso,
  Component.LeftArm,
  Component.RightArm,
  Component.LeftLeg,
  Component.RightLeg,
]

export const getMechTripodComponents = () => [
  Component.Head,
  Component.CenterTorso,
  Component.LeftTorso,
  Component.RightTorso,
  Component.LeftArm,
  Component.RightArm,
  Component.FrontLeftLeg,
  Component.FrontRightLeg,
  Component.RearLeg,
]

export const getMechQuadrupedComponents = () => [
  Component.Head,
  Component.CenterTorso,
  Component.LeftTorso,
  Component.RightTorso,
  Component.FrontLeftLeg,
  Component.FrontRightLeg,
  Component.RearLeftLeg,
  Component.RearRightLeg,
]

export const getCriticalsForComponent = (mechClass: MechClass, component: Component): number => {
  switch (component) {
  case Component.Head:
  case Component.LeftLeg:
  case Component.RightLeg:
  case Component.FrontLeftLeg:
  case Component.FrontRightLeg:
  case Component.RearLeftLeg:
  case Component.RearRightLeg:
  case Component.RearLeg: return 6
  case Component.LeftArm:
  case Component.RightArm:
  case Component.CenterTorso: return 12
  case Component.LeftTorso:
  case Component.RightTorso: return mechClass === MechClass.SuperHeavy ? 18 : 12
  }
}
