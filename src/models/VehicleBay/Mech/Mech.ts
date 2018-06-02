import { lens } from 'lens.ts'

import { TechType } from '../../Tables/TechType'

import { IEngine } from '../Component/Engine'
import { IGyro } from '../Component/Gyro'
import { IQuirk } from '../Component/Quirk'
import { ISection } from './Section'

export enum MechParts {
  Head = 'Head',
  CenterTorso = 'CenterTorso',
  LeftTorso = 'LeftTorso',
  RightTorso = 'RightTorso',
  LeftArm = 'LeftArm',
  RightArm = 'RightArm',
  LeftLeg = 'LeftLeg',
  RightLeg = 'RightLeg',
}

export interface IMech {
  name: string,
  tech: TechType,
  quirks: IQuirk[],
  tonnage: number,
  engine: IEngine,
  gyro: IGyro,
  engineHitPoints: number,
  gyroHitPoints: number,
  sensorsHitPoints: number,
  lifeSupportHitPoints: number,
  loadout: {
    [MechParts.Head]: ISection,
    [MechParts.CenterTorso]: ISection,
    [MechParts.LeftTorso]: ISection,
    [MechParts.RightTorso]: ISection,
    [MechParts.LeftArm]: ISection,
    [MechParts.RightArm]: ISection,
    [MechParts.LeftLeg]: ISection,
    [MechParts.RightLeg]: ISection,
  },
}

export const Mech = (props: IMech): Readonly<IMech> => ({
  ...props,
})

export const MechL = lens<IMech>()
