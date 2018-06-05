import * as classNames from 'classnames'
import * as React from 'react'

import { Pane } from '../../common/Pane'

import { HoverContextType, IHoverContextState } from '../../../state/reducer'

import { ArmorType } from '../../../../../models/Armor'
import './ArmorTypeConfiguration.css'


interface IArmorTypeConfigurationProps {
  armorTypeChoices: ArmorType[],
  armorType: ArmorType,
  setArmorType: (armorType: ArmorType) => void,
  setHoverContext: (context: IHoverContextState) => void,
}

export class ArmorTypeConfiguration extends React.PureComponent<IArmorTypeConfigurationProps> {
  public render() {
    const {
      armorTypeChoices,
      armorType,
      setArmorType,
      setHoverContext,
    } = this.props
    return (
      <Pane title='Armor type'>
        <div className='ArmorTypeChoices'>
          { armorTypeChoices.map(choice => (
            <div
              key={choice}
              className={classNames('Choice', (armorType === choice) && 'Active')}
              onClick={() => setArmorType(choice)}
              onMouseEnter={() => setHoverContext({ type: HoverContextType.Armor, context: choice })}
              onMouseLeave={() => setHoverContext({ type: HoverContextType.None, context: null })}
            >
              { choice }
            </div>
          )) }
        </div>
      </Pane>
    )
  }
}
