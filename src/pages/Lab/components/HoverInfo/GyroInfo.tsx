import * as React from 'react'

import { IEngine } from '../../../../models/Engine'
import { getGyroCriticals, getGyroHitPoints, getGyroTonnage, IGyro } from '../../../../models/Gryo'

interface IEngineInfoProps {
  engine: IEngine,
  gyro: IGyro
}

export const GyroInfo: React.SFC<IEngineInfoProps> = ({ engine, gyro }) => (
  <div className='Info'>
    <div className='Section'>
      <div className='Detail'>
        <div>Gyro</div>
      </div>
    </div>
    <div className='Section'>
      <div className='Detail'>
        <div>Type:</div>
        <div>{ gyro.type }</div>
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
