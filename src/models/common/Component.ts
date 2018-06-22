import { lens } from 'lens.ts'

import { MechEquipmentName } from '../MechEquipment/MechEquipmentName'
import { Hardpoint } from './Hardpoint'

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
  criticals: 6 | 12,
}

const BaseMechPart = (
  name: Component,
  armor: number,
  hardpoints: IHardpoints,
  equipment: MechEquipmentName[],
  criticals: 6 | 12,
): IBaseMechPart => ({
  name,
  armor,
  hardpoints,
  equipment,
  criticals,
})

export interface IHead extends IBaseMechPart {
  name: Component.Head,
  criticals: 6,
}

export const HeadL = lens<IHead>()

export const Head = (
  armor: number,
  hardpoints: IHardpoints,
  equipment: MechEquipmentName[],
): IHead => ({ ...BaseMechPart(Component.Head, armor, hardpoints, equipment, 6) }) as IHead


export interface ICenterTorso extends IBaseMechPart {
  name: Component.CenterTorso,
  rearArmor: number,
  criticals: 12,
}

export const CenterTorsoL = lens<ICenterTorso>()

export const CenterTorso = (
  armor: number,
  rearArmor: number,
  hardpoints: IHardpoints,
  equipment: MechEquipmentName[],
): ICenterTorso => ({
  rearArmor,
  ...BaseMechPart(Component.CenterTorso, armor, hardpoints, equipment, 12),
}) as ICenterTorso


export interface ISideTorso extends IBaseMechPart  {
  name: SideTorsos,
  rearArmor: number,
  criticals: 12,
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
  ...BaseMechPart(name, armor, hardpoints, equipment, 12),
}) as ISideTorso


export interface IArm extends IBaseMechPart {
  name: Arms,
  criticals: 12,
}

export const ArmL = lens<IArm>()

export const Arm = (
  name: Arms,
  armor: number,
  hardpoints: IHardpoints,
  equipment: MechEquipmentName[],
): IArm => BaseMechPart(name, armor, hardpoints, equipment, 12) as IArm


export interface ILeg extends IBaseMechPart  {
  name: Legs,
  criticals: 6,
}

export const LegL = lens<ILeg>()

export const Leg = (
  name: Legs,
  armor: number,
  hardpoints: IHardpoints,
  equipment: MechEquipmentName[],
): ILeg => BaseMechPart(name, armor, hardpoints, equipment, 6) as ILeg

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
