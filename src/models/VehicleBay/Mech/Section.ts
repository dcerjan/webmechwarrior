import { lens } from 'lens.ts'

import { IEquipment} from '../Equipment/Equipment'
import { Hardpoint } from '../Equipment/Hardpoint'
import { ITrait } from '../Equipment/Trait'

export interface ISection {
  name: string,
  armor: number,
  rearArmor?: number,
  structure: number,
  hardpoints: Hardpoint[],
  equipment: IEquipment[],
  criticals: number,
  traits: ITrait[],
}

export const Section = (props: ISection): Readonly<ISection> => ({
  ...props,
})

export const SectionL = lens<ISection>()
