import * as React from 'react'
import { getGyroCriticals, getGyroHitPoints, getGyroTonnage } from '../../../../models/Tables/GyroTable'
import { IMech } from '../../../../models/VehicleBay/Mech/Mech'

export const GyroInfo: React.SFC<Readonly<IMech>> = ({ tech, engine, gyro }) => (
  <div className='Info'>
    <div className='Section'>
      <div className='Detail'>
        <div>{tech} tech gyro</div>
      </div>
    </div>
    <div className='Section'>
      <div className='Detail'>
        <div>Gyro:</div>
        <div>{ gyro.name }</div>
      </div>
      <div className='Detail'>
        <div>Type:</div>
        <div>{ gyro.type }</div>
      </div>
      <div className='Detail'>
        <div>Manufacturer:</div>
        <div>{ gyro.manufacturer }</div>
      </div>
      <div className='Detail'>
        <div>Tonnage:</div>
        <div>{ getGyroTonnage(engine.rating, gyro.type) } tons</div>
      </div>
      <div className='Detail'>
        <div>Criticals:</div>
        <div>{`CT: ${getGyroCriticals(gyro.type)}`}</div>
      </div>
    </div>
    <div className='Section'>
      <div className='Detail'>
        <div>Hitpoints:</div>
        <div>{ getGyroHitPoints(gyro.type) }</div>
      </div>
    </div>
  </div>
)
