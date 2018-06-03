import * as classNames from 'classnames'
import * as React from 'react'

import { InternalStructureType } from '../../../../../models/Tables/InternalStructureTable'

import { Pane } from '../../common/Pane'

import { HoverContextType, IHoverContextState } from '../../../state/reducer'

import './InternalStructureConfiguration.css'


interface IInternalStructureConfigurationProps {
  internalStructureChoices: InternalStructureType[],
  internalStructure: InternalStructureType,
  setInternalStructure: (internalStructure: InternalStructureType) => void,
  setHoverContext: (context: IHoverContextState) => void,
}

export class InternalStructureConfiguration extends React.PureComponent<IInternalStructureConfigurationProps> {
  public render() {
    const {
      internalStructure,
      internalStructureChoices,
      setInternalStructure,
      setHoverContext,
    } = this.props
    return (
      <Pane title='Internal structure'>
        <div className='InernalStructureChoices'>
          { internalStructureChoices.map(choice => (
            <div
              key={choice}
              className={classNames('Choice', (internalStructure === choice) && 'Active')}
              onClick={() => setInternalStructure(choice)}
              onMouseEnter={() => setHoverContext({ type: HoverContextType.InternalStructure, context: choice })}
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
