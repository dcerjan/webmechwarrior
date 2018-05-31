import { lens } from 'lens.ts'

import { Tech } from '../Tech';
import { Hardpoint } from './Hardpoint'

export interface IEquipment {
  type: Hardpoint,
  tech: Tech,
  name: string,
  criticals: number,
  tonnage?: number,
  heat?: number,
  damage?: number,
  minimum?: number,
  short?: [number, number],
  medium?: [number, number],
  long?: [number, number],
  ammoPerTonn?: number,
}

export const Equipment = (props: IEquipment): Readonly<IEquipment> => ({
  ...props,
});

export const EquipmentL = lens<IEquipment>();