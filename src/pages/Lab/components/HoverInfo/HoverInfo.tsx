import * as React from 'react'

import { IHeavyWeaponRecord } from '../../../../models/Tables/WeaponTable/HeavyWeaponRecord'
import { IComponent } from '../../../../models/VehicleBay/Component/Component'
import { Hardpoint } from '../../../../models/VehicleBay/Component/Hardpoint'
import { IMech } from '../../../../models/VehicleBay/Mech/Mech'

import { HoverContextType, IHoverContextState } from '../../state/reducer'

import './HoverInfo.css'

import { ArmorType } from '../../../../models/Tables/ArmorTable'
import { InternalStructureType } from '../../../../models/Tables/InternalStructureTable'
import { ArmorTypeInfo } from './ArmorInfo'
import { EngineInfo } from './EngineInfo'
import { GyroInfo } from './GyroInfo'
import { HeavyWeaponInfo } from './HeavyWeaponInfo'
import { InternalStructureInfo } from './InternalStructureInfo'


const getInfo = (mech: IMech, hoverContext: IHoverContextState) => {
  switch (hoverContext.type) {
  case HoverContextType.Component:
    return getComponent(mech, hoverContext.context as IComponent)
  case HoverContextType.HeavyWeapon:
    return <HeavyWeaponInfo {...(hoverContext.context as IHeavyWeaponRecord)} />
  case HoverContextType.InternalStructure:
    return <InternalStructureInfo
      internalStructure={hoverContext.context as InternalStructureType}
      mechTonnage={mech.tonnage}
    />
  case HoverContextType.Armor:
    return <ArmorTypeInfo
      armorType={hoverContext.context as ArmorType}
      mechTonnage={mech.tonnage}
    />
  default:
    return <div>{`#TODO: ${hoverContext.type}`}</div>
  }
}

const getComponent = (mech: IMech, component: IComponent) => {
  switch (component.type) {
  case Hardpoint.Engine:
    return <EngineInfo {...mech} />
  case Hardpoint.Gyro:
    return <GyroInfo {...mech} />
  default:
    return <div>{`#TODO: ${component.type}`}</div>
  }
}

interface IHoverInfoProps {
  mech: IMech,
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
