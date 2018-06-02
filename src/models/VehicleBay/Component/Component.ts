import { lens } from 'lens.ts'

import { TechType } from '../../Tables/TechType'

import { Hardpoint } from './Hardpoint'

export interface IComponent {
  type: Hardpoint,
  tech: TechType,
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
})

export const ComponentL = lens<IComponent>()
