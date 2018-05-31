import { lens } from 'lens.ts'
import { EngineType } from '../../Tables/EngineTable';

export interface IEngine {
  name: string,
  manufacturer: string,
  rating: number,
  type: EngineType,
  criticalSlots: number, // Center Torso Slots
  sideTorsoSlots: number, // Side Torsos Slots
}

export const Engine = (props: IEngine): Readonly<IEngine> => ({
  ...props,
})

export const EngineL = lens<IEngine>();
