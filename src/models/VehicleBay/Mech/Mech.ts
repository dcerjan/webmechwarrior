import { lens } from 'lens.ts'

import { IEngine } from '../Equipment/Engine'
import { IQuirk } from '../Equipment/Quirk'

import { IGyro } from '../Equipment/Gyro';
import { Tech } from '../Tech';
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
  tech: Tech,
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

export const MechL = lens<IMech>();
