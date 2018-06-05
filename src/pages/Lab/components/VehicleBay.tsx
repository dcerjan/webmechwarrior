import * as React from 'react'

import { MechView } from './MechView'
import './VehicleBay.css'

import { IComponentExplorerState, IHoverContextState } from '../state/reducer'

import { ArmorType } from '../../../models/Armor'
import { InternalStructureType } from '../../../models/InternalStructure'
import { MadCatMkII } from '../__mocks__/MadCatMkII'
import { ComponentExplorer } from './ComponentExplorer'
import { HoverInfo } from './HoverInfo'
import { ArmorTypeConfiguration } from './MechView/ArmorTypeConfiguration/ArmorTypeConfiguration'
import { InternalStructureConfiguration } from './MechView/InternalStructureConfiguration'

interface IVehicleBayProps {
  componentExplorer: IComponentExplorerState,
  hoverContext: IHoverContextState,
  setActiveTab: (tab: string) => void,
  setHoverContext: (context: IHoverContextState) => void,
}

interface IVehicleBayState {
  mousePosition: [number, number],
}

export class VehicleBay extends React.Component<IVehicleBayProps, IVehicleBayState> {
  public state: IVehicleBayState = {
    mousePosition: [0, 0],
  }

  private mounted: boolean = false

  public componentDidMount() {
    this.mounted = true
    window.document.addEventListener('mousemove', this.onMouseMove, true)
  }

  public componentWillUnmount() {
    this.mounted = false
    window.document.removeEventListener('mousemove', this.onMouseMove)
  }

  public render() {
    const { mousePosition } = this.state
    const { componentExplorer, hoverContext, setActiveTab, setHoverContext } = this.props

    return (
      <div className='VehicleBay'>
        { hoverContext.context != null
          ? <HoverInfo
            mech={MadCatMkII}
            hoverContext={hoverContext}
            position={mousePosition}
          />
          : null }
        <div className='Column'>
          <MechView
            mech={MadCatMkII}
            setHoverContext={setHoverContext}
          />
          <InternalStructureConfiguration
            internalStructureChoices={Object.values(InternalStructureType) as InternalStructureType[]}
            internalStructure={InternalStructureType.Standard}
            setHoverContext={setHoverContext}
            setInternalStructure={internalStructure => console.log(`$TODO: set internal structure to ${internalStructure}`)}
          />
          <ArmorTypeConfiguration
            armorTypeChoices={Object.values(ArmorType) as ArmorType[]}
            armorType={ArmorType.Standard}
            setHoverContext={setHoverContext}
            setArmorType={armorType => console.log(`$TODO: set armor type to ${armorType}`)}
          />
        </div>
        <ComponentExplorer
          componentExplorer={componentExplorer}
          setActiveTab={setActiveTab}
          setHoverContext={setHoverContext}
        />
      </div>
    )
  }

  private onMouseMove = (evt: MouseEvent) => {
    if (this.mounted) {
      this.setState({ mousePosition: [evt.clientX + 12, evt.clientY + 4] })
    }
  }
}
