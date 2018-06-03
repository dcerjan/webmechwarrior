import * as React from 'react'

import { ArmorType, getArmorCriticalSlots, getMaxArmorForPart } from '../../../../models/Tables/ArmorTable'
import { MechComponentType } from '../../../../models/Tables/MechComponentType'

interface IArmorTypeInfoProps {
  armorType: ArmorType,
  mechTonnage: number,
}

export const ArmorTypeInfo: React.SFC<IArmorTypeInfoProps> = ({
  armorType,
  mechTonnage,
}) => (
  <div className='Info'>
    <div className='Section'>
      <div className='Detail'>
        <div>{ armorType } armor</div>
      </div>
    </div>
    <div className='Section'>
      <div className='Detail'>
        <div>Max armor:</div>
      </div>
      {
        Object.values(MechComponentType).map(component => (
          <div key={component} className='Detail'>
            <div>{component}:</div>
            <div>{ getMaxArmorForPart(mechTonnage, armorType, component) } PTS</div>
          </div>
        ))
      }
      { getArmorCriticalSlots(armorType) > 0
        ? (
          <div className='Detail'>
            <div>Critical slots:</div>
            <div>{ getArmorCriticalSlots(armorType) }</div>
          </div>
        )
        : null }
        <div className='Detail'>
          <div>Max armor total:</div>
          <div>
            { Object.values(MechComponentType)
              .reduce((total, component) => {
                if ([MechComponentType.Arm, MechComponentType.Leg, MechComponentType.SideTorso].includes(component)) {
                  return total + 2.0 * getMaxArmorForPart(mechTonnage, armorType, component)
                } else {
                  return getMaxArmorForPart(mechTonnage, armorType, component)
                }
              }, 0)
            }
          </div>
        </div>
    </div>
  </div>
)
