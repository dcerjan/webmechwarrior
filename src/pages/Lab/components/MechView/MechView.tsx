import * as React from 'react'

import { IHoverContextState } from '../../state/reducer'

import { IMech } from '../../../../models/Mech'
import './MechView.css'
import { Section } from './Section'

interface IMechViewProps {
  mech: IMech,
  setHoverContext: (context: IHoverContextState) => void,
}

export const MechView: React.SFC<IMechViewProps> = ({ mech, setHoverContext }) => (
  <div className='MechView'>
    <div className='Arm'>
      <Section mech={mech} section={mech.loadout['Right Arm']} setHoverContext={setHoverContext} />
    </div>
    <div className='Side'>
      <Section mech={mech} section={mech.loadout['Torso (Right)']} setHoverContext={setHoverContext} />
      <Section mech={mech} section={mech.loadout['Right Leg']} setHoverContext={setHoverContext} />
    </div>
    <div className='Center'>
      <Section mech={mech} section={mech.loadout.Head} setHoverContext={setHoverContext} />
      <Section mech={mech} section={mech.loadout['Torso (Center)']} setHoverContext={setHoverContext} />
    </div>
    <div className='Side'>
      <Section mech={mech} section={mech.loadout['Torso (Left)']} setHoverContext={setHoverContext} />
      <Section mech={mech} section={mech.loadout['Left Leg']} setHoverContext={setHoverContext} />
    </div>
    <div className='Arm'>
      <Section mech={mech} section={mech.loadout['Left Arm']} setHoverContext={setHoverContext} />
    </div>
  </div>
)
