import * as React from 'react'

import { IHeavyWeaponRecord } from '../../../../models/Tables/WeaponTable/HeavyWeaponRecord'

import { HoverContextType, IHoverContextState } from '../../state/reducer'

import './HoverInfo.css'

import { Armor } from '../../../../models/Armor'
import { Hardpoint } from '../../../../models/common/Hardpoint'
import { InternalStructure } from '../../../../models/InternalStructure'
import { IBipedalMech } from '../../../../models/Mech'
import { ArmorTypeInfo } from './ArmorInfo'
import { EngineInfo } from './EngineInfo'
import { GyroInfo } from './GyroInfo'
import { HeavyWeaponInfo } from './HeavyWeaponInfo'
import { InternalStructureInfo } from './InternalStructureInfo'


const getInfo = (mech: IBipedalMech, hoverContext: IHoverContextState) => {
  switch (hoverContext.type) {
  case HoverContextType.Component:
    return getComponent(mech, hoverContext.context as IComponent)
  case HoverContextType.HeavyWeapon:
    return <HeavyWeaponInfo {...(hoverContext.context as IHeavyWeaponRecord)} />
  case HoverContextType.InternalStructure:
    return <InternalStructureInfo
      internalStructure={hoverContext.context as InternalStructure}
      mechTonnage={mech.tonnage}
    />
  case HoverContextType.Armor:
    return <ArmorTypeInfo
      armorType={hoverContext.context as Armor}
      mechTonnage={mech.tonnage}
    />
  default:
    return <div>{`#TODO: ${hoverContext.type}`}</div>
  }
}

const getComponent = (mech: IBipedalMech, component: IComponent) => {
  switch (component.type) {
  case Hardpoint.Engine:
    return <EngineInfo engine={mech.engine} mechTonnage={mech.tonnage} />
  case Hardpoint.Gyro:
    return <GyroInfo engine={mech.engine} gyro={mech.gyro} />
  default:
    return <div>{`#TODO: ${component.type}`}</div>
  }
}

interface IHoverInfoProps {
  mech: IBipedalMech,
  hoverContext: IHoverContextState,
  position: [number, number]
}

export const HoverInfo: React.SFC<IHoverInfoProps> = ({ hoverContext, mech, position }) => (
  <div
    className='HoverInfo'
    style={{ left: position[0], top: position[1] }}
  >
    { getInfo(mech, hoverContext) }
  </div>
)
