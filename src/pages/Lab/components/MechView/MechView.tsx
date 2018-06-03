import * as React from 'react'
import { IMech } from '../../../../models/VehicleBay/Mech/Mech'

import { IHoverContextState } from '../../state/reducer'

import './MechView.css'
import { Section } from './Section'

interface IMechViewProps {
  mech: IMech,
  setHoverContext: (context: IHoverContextState) => void,
}

export const MechView: React.SFC<IMechViewProps> = ({ mech, setHoverContext }) => (
  <div className='MechView'>
    <div className='Arm'>
      <Section mech={mech} section={mech.loadout.RightArm} setHoverContext={setHoverContext} />
    </div>
    <div className='Side'>
      <Section mech={mech} section={mech.loadout.RightTorso} setHoverContext={setHoverContext} />
      <Section mech={mech} section={mech.loadout.RightLeg} setHoverContext={setHoverContext} />
    </div>
    <div className='Center'>
      <Section mech={mech} section={mech.loadout.Head} setHoverContext={setHoverContext} />
      <Section mech={mech} section={mech.loadout.CenterTorso} setHoverContext={setHoverContext} />
    </div>
    <div className='Side'>
      <Section mech={mech} section={mech.loadout.LeftTorso} setHoverContext={setHoverContext} />
      <Section mech={mech} section={mech.loadout.LeftLeg} setHoverContext={setHoverContext} />
    </div>
    <div className='Arm'>
      <Section mech={mech} section={mech.loadout.LeftArm} setHoverContext={setHoverContext} />
    </div>
  </div>
)
