import * as React from 'react'
import { EngineTable, getEngineHitPoints, getEngintInternalHeatsinks, getRunningMP, getWalkingMP } from '../../models/Tables/EngineTable';
import { IMech } from '../../models/VehicleBay/Mech/Mech';

export const EngineInfo: React.SFC<Readonly<IMech>> = ({ tech, tonnage, engine }) => (
  <div className='Info'>
    <div className='Section'>
      <div className='Detail'>
        <div>{tech} tech engine</div>
      </div>
    </div>
    <div className='Section'>
      <div className='Detail'>
        <div>Engine:</div>
        <div>{ engine.name }</div>
      </div>
      <div className='Detail'>
        <div>Type:</div>
        <div>{ engine.type }</div>
      </div>
      <div className='Detail'>
        <div>Manufacturer:</div>
        <div>{ engine.manufacturer }</div>
      </div>
      <div className='Detail'>
        <div>Rating:</div>
        <div>{ engine.rating }</div>
      </div>
      <div className='Detail'>
        <div>Internal heatsinks:</div>
        <div>{ getEngintInternalHeatsinks(engine.rating) }</div>
      </div>
      <div className='Detail'>
        <div>Tonnage:</div>
        <div>{ EngineTable[engine.rating][engine.type] } tons</div>
      </div>
      <div className='Detail'>
        <div>Criticals:</div>
        <div>{`CT: ${engine.criticalSlots}${engine.sideTorsoSlots ? ` - LT/RT: ${ engine.sideTorsoSlots }` : ''}`}</div>
      </div>
    </div>
    <div className='Section'>
      <div className='Detail'>
        <div>Hitpoints:</div>
        <div>{ getEngineHitPoints() }</div>
      </div>
    </div>
    <div className='Section'>
      <div className='Detail'>
        <div>Movement Points:</div>
      </div>
      <div className='Detail'>
        <div>Walking</div>
        <div>{ getWalkingMP(engine.rating, tonnage) }</div>
      </div>
      <div className='Detail'>
        <div>Running</div>
        <div>{ getRunningMP(engine.rating, tonnage) }</div>
      </div>
    </div>
  </div>
)
