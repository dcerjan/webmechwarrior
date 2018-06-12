import * as React from 'react'

import {
  getEngineCriticalSlotAllocation,
  getEngineHitPoints,
  getEngineManufacturer,
  getEngineTonnage,
  getEngintInternalHeatsinks,
  getRunningMP,
  getWalkingMP,
  IEngine,
} from '../../../../models/Engine'
import { MechTonnage } from '../../../../models/InternalStructure'

interface IEngineInfoProps {
  mechTonnage: MechTonnage,
  engine: IEngine,
}

export const EngineInfo: React.SFC<IEngineInfoProps> = ({ mechTonnage, engine }) => {
  const criticalSlotAllocation = getEngineCriticalSlotAllocation(engine.type)

  return (
    <div className='Info'>
      <div className='Section'>
        <div className='Detail'>
          <div>Engine</div>
        </div>
      </div>
      <div className='Section'>
        <div className='Detail'>
          <div>Type:</div>
          <div>{ engine.type }</div>
        </div>
        <div className='Detail'>
          <div>Manufacturer:</div>
          <div>{ getEngineManufacturer(engine.rating) }</div>
        </div>
        <div className='Detail'>
          <div>Rating:</div>
          <div>{ engine.rating }</div>
        </div>
        <div className='Detail'>
          <div>Internal heatsinks:</div>
          <div>{ engine.internalHeatSinks }/{ getEngintInternalHeatsinks(engine.rating) }</div>
        </div>
        <div className='Detail'>
          <div>Tonnage:</div>
          <div>{ getEngineTonnage(engine.rating, engine.type) } tons</div>
        </div>
      </div>
      <div className='Section'>
        { Object.keys(criticalSlotAllocation).map(component => (
          <div key={component} className='Detail'>
            <div>{component}:</div>
            <div>{criticalSlotAllocation[component]}</div>
          </div>
        )) }
      </div>
      <div className='Section'>
        <div className='Detail'>
          <div>Hitpoints:</div>
          <div>{ getEngineHitPoints(engine.rating) }</div>
        </div>
      </div>
      <div className='Section'>
        <div className='Detail'>
          <div>Movement Points:</div>
        </div>
        <div className='Detail'>
          <div>Walking</div>
          <div>{ getWalkingMP(engine.rating, mechTonnage) }</div>
        </div>
        <div className='Detail'>
          <div>Running</div>
          <div>{ getRunningMP(engine.rating, mechTonnage) }</div>
        </div>
      </div>
    </div>
  )
}