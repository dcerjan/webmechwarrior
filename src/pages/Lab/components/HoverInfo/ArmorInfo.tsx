import * as React from 'react'
import { ArmorType, getArmorCriticalSlots, getMaxArmorForPart } from '../../../../models/Armor'
import { MechComponentType } from '../../../../models/common/MechComponentType'
import { MechTonnage } from '../../../../models/InternalStructure'


interface IArmorTypeInfoProps {
  armorType: ArmorType,
  mechTonnage: MechTonnage,
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
              .reduce((total, component) => total + getMaxArmorForPart(mechTonnage, armorType, component), 0)
            }
          </div>
        </div>
    </div>
  </div>
)
