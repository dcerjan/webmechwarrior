import { lens } from 'lens.ts'

import { ArmorType } from '../Armor'
import { MechComponentType } from '../common/MechComponentType'
import { TechType } from '../common/TechType'
import { IEngine } from '../Engine'
import { IGyro } from '../Gryo'
import { InternalStructureType, MechTonnage } from '../InternalStructure'

export enum Hardpoint {
  Empty = 'Empty',
  Sensors = 'Sensors',
  Shoulder = 'Shoulder',
  UpperArmActuator = 'UpperArmActuator',
  LowerArmActuator = 'LowerArmActuator',
  Hand = 'Hand',
  Hip = 'Hip',
  UpperLegActuator = 'UpperLegActuator',
  LowerLegActuator = 'LowerLegActuator',
  FootActuator = 'FootActuator',
  Cockpit = 'Cockpit',
  LifeSupport = 'LifeSupport',
  Engine = 'Engine',
  Gyro = 'Gyro',
  Energy = 'Energy',
  Ballistic = 'Ballistic',
  Missile = 'Missile',
  Omni = 'Omni',
  MissileAmmo = 'MissileAmmo',
  BallisticAmmo = 'BallisticAmmo',
  EnergyAmmo = 'EnergyAmmo',
  HeatSink = 'HeatSink',
  JumpJet = 'JumpJet',
  InternalStructure = 'InternalStructure',
  Armor = 'Armor',
}

export interface IComponent {
  type: Hardpoint,
  name: string,
}

export const Component = (props: IComponent): Readonly<IComponent> => ({
  ...props,
})

export const ComponentL = lens<IComponent>()


export interface ISection {
  name: MechComponentType,
  armor: number,
  rearArmor?: number,
  structure: number,
  hardpoints: Hardpoint[],
  components: IComponent[],
  criticals: number,
}

export const Section = (props: ISection): Readonly<ISection> => ({
  ...props,
})

export const SectionL = lens<ISection>()

export interface IMech {
  name: string,
  tech: TechType,
  tonnage: MechTonnage,
  engine: IEngine,
  gyro: IGyro,
  internalStructureType: InternalStructureType,
  armorType: ArmorType,
  loadout: {
    [MechComponentType.Head]: ISection,
    [MechComponentType.CenterTorso]: ISection,
    [MechComponentType.LeftTorso]: ISection,
    [MechComponentType.RightTorso]: ISection,
    [MechComponentType.LeftArm]: ISection,
    [MechComponentType.RightArm]: ISection,
    [MechComponentType.LeftLeg]: ISection,
    [MechComponentType.RightLeg]: ISection,
  },
}

export const Mech = (props: IMech): Readonly<IMech> => ({
  ...props,
})

export const MechL = lens<IMech>()
