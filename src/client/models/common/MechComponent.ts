import { lens } from 'lens.ts'

import { MechEquipmentName } from '../MechEquipment/MechEquipmentName'
import { Hardpoint } from './Hardpoint'
import { MechClass } from './MechClass'

export enum MechComponent {
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
  | MechComponent.LeftArm
  | MechComponent.RightArm

type Legs =
  | MechComponent.LeftLeg
  | MechComponent.RightLeg
  | MechComponent.FrontLeftLeg
  | MechComponent.FrontRightLeg
  | MechComponent.RearLeftLeg
  | MechComponent.RearRightLeg
  | MechComponent.RearLeg

type SideTorsos =
  | MechComponent.LeftTorso
  | MechComponent.RightTorso

export interface IHardpoints {
  [Hardpoint.Energy]: number,
  [Hardpoint.Ballistic]: number,
  [Hardpoint.Missile]: number,
}

export interface IBaseMechPart {
  name: MechComponent,
  armor: number,
  hardpoints: IHardpoints,
  equipment: MechEquipmentName[],
}

const BaseMechPart = (
  name: MechComponent,
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
  name: MechComponent.Head,
}

export const HeadL = lens<IHead>()

export const Head = (
  armor: number,
  hardpoints: IHardpoints,
  equipment: MechEquipmentName[],
): IHead => ({ ...BaseMechPart(MechComponent.Head, armor, hardpoints, equipment) }) as IHead


export interface ICenterTorso extends IBaseMechPart {
  name: MechComponent.CenterTorso,
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
  ...BaseMechPart(MechComponent.CenterTorso, armor, hardpoints, equipment),
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
  MechComponent.Head,
  MechComponent.CenterTorso,
  MechComponent.LeftTorso,
  MechComponent.RightTorso,
  MechComponent.LeftArm,
  MechComponent.RightArm,
  MechComponent.LeftLeg,
  MechComponent.RightLeg,
]

export const getMechTripodComponents = () => [
  MechComponent.Head,
  MechComponent.CenterTorso,
  MechComponent.LeftTorso,
  MechComponent.RightTorso,
  MechComponent.LeftArm,
  MechComponent.RightArm,
  MechComponent.FrontLeftLeg,
  MechComponent.FrontRightLeg,
  MechComponent.RearLeg,
]

export const getMechQuadrupedComponents = () => [
  MechComponent.Head,
  MechComponent.CenterTorso,
  MechComponent.LeftTorso,
  MechComponent.RightTorso,
  MechComponent.FrontLeftLeg,
  MechComponent.FrontRightLeg,
  MechComponent.RearLeftLeg,
  MechComponent.RearRightLeg,
]

export const getCriticalsForComponent = (mechClass: MechClass, component: MechComponent): number => {
  switch (component) {
  case MechComponent.Head:
  case MechComponent.LeftLeg:
  case MechComponent.RightLeg:
  case MechComponent.FrontLeftLeg:
  case MechComponent.FrontRightLeg:
  case MechComponent.RearLeftLeg:
  case MechComponent.RearRightLeg:
  case MechComponent.RearLeg: return 6
  case MechComponent.LeftArm:
  case MechComponent.RightArm:
  case MechComponent.CenterTorso: return 12
  case MechComponent.LeftTorso:
  case MechComponent.RightTorso: return mechClass === MechClass.SuperHeavy ? 18 : 12
  }
}
