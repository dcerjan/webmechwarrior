import * as React from 'react'

import { MechView } from './MechView'
import './VehicleBay.css'

import { MadCatMkII } from '../__mocks__/MadCatMkII';

export const VehicleBay: React.SFC<{}> = () => {
  return (
    <div className='VehicleBay'>
      <MechView mech={MadCatMkII} />
    </div>
  )
}
