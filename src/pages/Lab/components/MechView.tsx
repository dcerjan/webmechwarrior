import * as React from 'react'
import { IMech } from '../../../models/VehicleBay/Mech/Mech'

import './MechView.css'
import { Section } from './Section'

export const MechView: React.SFC<{ mech: IMech }> = ({ mech }) => (
  <div className='MechView'>
    <div className='Arm'>
      <Section mech={mech} section={mech.loadout.RightArm} />
    </div>
    <div className='Side'>
      <Section mech={mech} section={mech.loadout.RightTorso} />
      <Section mech={mech} section={mech.loadout.RightLeg} />
    </div>
    <div className='Center'>
      <Section mech={mech} section={mech.loadout.Head} />
      <Section mech={mech} section={mech.loadout.CenterTorso} />
    </div>
    <div className='Side'>
      <Section mech={mech} section={mech.loadout.LeftTorso} />
      <Section mech={mech} section={mech.loadout.LeftLeg} />
    </div>
    <div className='Arm'>
      <Section mech={mech} section={mech.loadout.LeftArm} />
    </div>
  </div>
)
