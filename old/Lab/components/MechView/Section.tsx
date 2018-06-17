import * as React from 'react'

import { replicate } from '../../../../lib/functional'

import { HoverContextType, IHoverContextState } from '../../state/reducer'

import './Section.css'

import { Armor, getMaxArmorForPart } from '../../../../models/Armor'
import { Hardpoint } from '../../../../models/common/Hardpoint'
import { getCriticalSlotsFor } from '../../../../models/common/utils'
import { IEngineCriticalSlotAllocation } from '../../../../models/Engine'
import { MechTonnage } from '../../../../models/InternalStructure'
import { IBipedalMech } from '../../../../models/Mech'

const countHardpoints = (hardpointType: Hardpoint, section: ISection): number =>
  section.hardpoints.filter(hardpoint => hardpoint === hardpointType).length

const Destructure: React.SFC<any> = ({ children }) => (children || null)

interface IInfoProps {
  mechTonnage: MechTonnage,
  armorType: Armor,
  section: ISection,
}

const Info: React.SFC<IInfoProps> = ({ mechTonnage, armorType, section }) => (
  <Destructure>
    <div className='Detail'>
      <div>Armor</div>
      <div>{ section.armor }/{ getMaxArmorForPart(mechTonnage, armorType, section.name) - (section.rearArmor || 0) }
      </div>
    </div>
    { section.rearArmor != null
      ? (
        <div className='Detail'>
          <div>Rear Armor</div>
          <div>{ section.rearArmor }/{ getMaxArmorForPart(mechTonnage, armorType, section.name) - section.armor }</div>
        </div>
      )
      : null }
    <div className='Detail'>
      <div>Structure</div>
      <div>{ section.structure }</div>
    </div>
    { /* TODO: traits
      section.traits.length
        ? section.traits.map((trait, index) => (
          <div key={`${trait.name}:${index}`} className='Detail'>
            <div>{ trait.name }</div>
          </div>
        ))
        : null
      */ }
  </Destructure>
)

interface ICriticalSlotsProps {
  mechComponentType: Component,
  components: IComponent[],
  criticals: number,
  setHoverContext: (context: IHoverContextState) => void,
}

const CriticalSlots: React.SFC<ICriticalSlotsProps> = ({ mechComponentType, components, criticals, setHoverContext }) => {
  const empty = Component({ name: '-- empty slot --', type: Hardpoint.Empty })

  const getCriticals = (component: IComponent): number => {
    if (
      (component.type === Hardpoint.Engine) &&
      [Component.CenterTorso, Component.LeftTorso, Component.RightTorso].includes(mechComponentType)
    ) {
      const criticalsAllocation = getCriticalSlotsFor(component.type, component.name) as IEngineCriticalSlotAllocation
      return criticalsAllocation[mechComponentType]
    } else {
      return getCriticalSlotsFor(component.type, component.name) as number
    }
  }

  const takenCriticals = components.reduce((sum, c) => sum + getCriticals(c), 0)

  return (
    <Destructure>
      {
        [...components, ...replicate(empty, criticals - takenCriticals)]
          .map((critical, index) => (
            <div
              key={`${critical.name}:${index}`}
              className={`Critical ${critical.type}`}
              style={{ height: 20 * getCriticals(critical) }}
              onMouseEnter={() => setHoverContext({ type: HoverContextType.Component, context: critical })}
              onMouseLeave={() => setHoverContext({ type: HoverContextType.None, context: null })}
            >
              <div>
                { critical.name }
              </div>
              { /* get ammo
              { critical.ammoPerTonn != null
                ? (
                  <div>({ critical.ammoPerTonn })</div>
                )
                : null }
              */ }
            </div>
          ))
      }
    </Destructure>
  )
}

interface ISectionProps {
  mech: IBipedalMech,
  section: ISection,
  setHoverContext: (context: IHoverContextState) => void,
}

export const Section: React.SFC<ISectionProps> = ({ mech, section, setHoverContext }) => {
  const energy = countHardpoints(Hardpoint.Energy, section)
  const ballistic = countHardpoints(Hardpoint.Ballistic, section)
  const missile = countHardpoints(Hardpoint.Missile, section)
  const omni = countHardpoints(Hardpoint.Omni, section)

  return (
    <div className='CriticalsSection'>
      <div className='Header'>
        <div className='Title'>{ section.name }</div>
        <div className='Hardpoints'>
          { energy ? <div className='Hardpoint Energy'>{energy}</div> : null }
          { ballistic ? <div className='Hardpoint Ballistic'>{ballistic}</div> : null }
          { missile ? <div className='Hardpoint Missile'>{missile}</div> : null }
          { omni ? <div className='Hardpoint Omni'>{omni}</div> : null }
        </div>
      </div>
      <div className='Info'>
        <Info section={section} mechTonnage={mech.tonnage} armorType={mech.armor}/>
      </div>
      <div className='Component'>
        <CriticalSlots
          mechComponentType={section.name}
          criticals={section.criticals}
          components={section.components}
          setHoverContext={setHoverContext}
        />
      </div>
    </div>
  )
}