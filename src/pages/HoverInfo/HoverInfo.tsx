import * as React from 'react'

import { Omit } from '../../lib/type';
import { IEquipment } from '../../models/VehicleBay/Equipment/Equipment';
import { Hardpoint } from '../../models/VehicleBay/Equipment/Hardpoint';
import { IMech } from '../../models/VehicleBay/Mech/Mech';

import './HoverInfo.css'

import { EngineInfo } from './EngineInfo'
import { GyroInfo } from './GyroInfo';

interface IProps {
  mech: IMech,
  hoverContext: Readonly<IEquipment>,
  position: [number, number]
}


const Info: React.SFC<Omit<IProps, 'position'>> = ({ mech, hoverContext }) => {
  switch (hoverContext.type) {
  case Hardpoint.Engine:
    return <EngineInfo {...mech} />
  case Hardpoint.Gyro:
    return <GyroInfo {...mech} />
  default:
    return (
      <div>{`#TODO: ${hoverContext.type}`}</div>
    )
  }
}

export const HoverInfo: React.SFC<IProps> = ({ hoverContext, mech, position }) => (
  <div
    className='HoverInfo'
    style={{ left: position[0], top: position[1] }}
  >
    <Info hoverContext={hoverContext} mech={mech} />
  </div>
)
