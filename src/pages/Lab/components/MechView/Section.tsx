import * as React from 'react'

import { replicate } from '../../../../lib/functional'

import { HoverContextType, IHoverContextState } from '../../state/reducer'

import './Section.css'

import { ArmorType, getMaxArmorForPart } from '../../../../models/Armor'
import { MechTonnage } from '../../../../models/InternalStructure'
import { Component, Hardpoint, IComponent, IMech, ISection } from '../../../../models/Mech'

const countHardpoints = (hardpointType: Hardpoint, section: ISection): number =>
  section.hardpoints.filter(hardpoint => hardpoint === hardpointType).length

const Destructure: React.SFC<any> = ({ children }) => (children || null)

interface IInfoProps {
  mechTonnage: MechTonnage,
  armorType: ArmorType,
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
    { /* dd traits
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
  component: IComponent[],
  criticals: number,
  setHoverContext: (context: IHoverContextState) => void,
}

const CriticalSlots: React.SFC<ICriticalSlotsProps> = ({ component, criticals, setHoverContext }) => {
  const empty = Component({ name: '-- empty slot --', type: Hardpoint.Empty })

  // const takenCriticals = component.reduce((sum, c) => sum + c.criticals, 0)
  const takenCriticals = component.reduce((sum, c) => sum + 1, 0)

  return (
    <Destructure>
      {
        [...component, ...replicate(empty, criticals - takenCriticals)]
          .map((critical, index) => (
            <div
              key={`${critical.name}:${index}`}
              className={`Critical ${critical.type}`}
              style={{ height: 20 * 1} /* style={{ height: 20 * critical.criticals}} */ }
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
  mech: IMech,
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
          { energy
            ? <div className='Hardpoint Energy'>{energy}</div>
            : null }
          { ballistic
            ? <div className='Hardpoint Ballistic'>{ballistic}</div>
            : null }
          { missile
            ? <div className='Hardpoint Missile'>{missile}</div>
            : null }
          { omni
            ? <div className='Hardpoint Omni'>{omni}</div>
            : null }
        </div>
      </div>
      <div className='Info'>
        <Info section={section} mechTonnage={mech.tonnage} armorType={mech.armorType}/>
      </div>
      <div className='Component'>
        <CriticalSlots
          criticals={section.criticals}
          component={section.components}
          setHoverContext={setHoverContext}
        />
      </div>
    </div>
  )
}
