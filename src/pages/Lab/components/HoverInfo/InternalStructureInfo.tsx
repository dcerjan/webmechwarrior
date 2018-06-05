import * as React from 'react'
import { getInternalStructureCriticals, getInternalStructureTonnage, InternalStructureType, MechTonnage } from '../../../../models/InternalStructure'

interface IInternalStructureInfoProps {
  internalStructure: InternalStructureType,
  mechTonnage: MechTonnage,
}

export const InternalStructureInfo: React.SFC<IInternalStructureInfoProps> = ({
  internalStructure,
  mechTonnage,
}) => (
  <div className='Info'>
    <div className='Section'>
      <div className='Detail'>
        <div>{ internalStructure } internal structure</div>
      </div>
    </div>
    <div className='Section'>
      <div className='Detail'>
        <div>Tonnage:</div>
        <div>{ getInternalStructureTonnage(mechTonnage, internalStructure).toFixed(1) } tons</div>
      </div>
      { getInternalStructureCriticals(internalStructure) > 0
        ? (
          <div className='Detail'>
            <div>Critical slots:</div>
            <div>{ getInternalStructureCriticals(internalStructure) }</div>
          </div>
        )
        : null }
    </div>
  </div>
)
