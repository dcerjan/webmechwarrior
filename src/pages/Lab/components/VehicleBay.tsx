import * as React from 'react'

import { MechView } from './MechView'
import './VehicleBay.css'

import { IComponentExplorerState } from '../state/reducer'

import { MadCatMkII } from '../__mocks__/MadCatMkII'
import { ComponentExplorer } from './ComponentExplorer'

interface IVehicleBayProps {
  componentExplorer: IComponentExplorerState,
  setActiveTab: (tab: string) => void,
}

export const VehicleBay: React.SFC<IVehicleBayProps> = ({ componentExplorer, setActiveTab }) => {
  return (
    <div className='VehicleBay'>
      <MechView mech={MadCatMkII} />
      <ComponentExplorer
        componentExplorer={componentExplorer}
        setActiveTab={setActiveTab}
      />
    </div>
  )
}
