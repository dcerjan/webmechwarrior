import { lens } from 'lens.ts'

import { Tech } from '../Tech';
import { Hardpoint } from './Hardpoint'

export interface IComponent {
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

export const Component = (props: IComponent): Readonly<IComponent> => ({
  ...props,
});

export const ComponentL = lens<IComponent>();
