import { lens } from 'lens.ts'

import { IComponent} from '../Component/Component'
import { Hardpoint } from '../Component/Hardpoint'
import { ITrait } from '../Component/Trait'

export interface ISection {
  name: string,
  armor: number,
  rearArmor?: number,
  structure: number,
  hardpoints: Hardpoint[],
  components: IComponent[],
  criticals: number,
  traits: ITrait[],
}

export const Section = (props: ISection): Readonly<ISection> => ({
  ...props,
})

export const SectionL = lens<ISection>()
