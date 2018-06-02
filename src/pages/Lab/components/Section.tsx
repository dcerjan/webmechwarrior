import * as React from 'react'

import { replicate } from '../../../lib/functional'

import { TechType } from '../../../models/Tables/TechType'
import { Component, IComponent } from '../../../models/VehicleBay/Component/Component'
import { Hardpoint } from '../../../models/VehicleBay/Component/Hardpoint'
import { IMech, MechParts } from '../../../models/VehicleBay/Mech/Mech'
import { ISection } from '../../../models/VehicleBay/Mech/Section'

import { HoverInfo } from './HoverInfo'
import './Section.css'

const countHardpoints = (hardpointType: Hardpoint, section: ISection): number =>
  section.hardpoints.filter(hardpoint => hardpoint === hardpointType).length

const Destructure: React.SFC<any> = ({ children }) => (children || null)


const Info: React.SFC<ISection> = ({ armor, rearArmor, structure, name, traits }) => (
  <Destructure>
    <div className='Detail'>
      <div>Armor</div>
      <div>{armor}/{
        name === MechParts.Head
          ? 9
          : structure * 2 - (rearArmor != null
            ? rearArmor
            : 0) }
      </div>
    </div>
    { rearArmor != null
      ? (
        <div className='Detail'>
          <div>Rear Armor</div>
          <div>{rearArmor}/{structure * 2 - armor}</div>
        </div>
      )
      : null }
    <div className='Detail'>
      <div>Structure</div>
      <div>{structure}</div>
    </div>
    {
      traits.length
        ? traits.map((trait, index) => (
          <div key={`${trait.name}:${index}`} className='Detail'>
            <div>{ trait.name }</div>
          </div>
        ))
        : null
    }
  </Destructure>
)

const CriticalSlots: React.SFC<{ component: IComponent[], criticals: number, onEnter: (equimpent: Readonly<IComponent>) => void, onLeave: () => void }> = ({ component, criticals, onEnter, onLeave }) => {
  const empty = Component({ name: '-- empty slot --', criticals: 1, type: Hardpoint.Empty, tech: TechType.Clan })

  const takenCriticals = component.reduce((sum, c) => sum + c.criticals, 0)

  return (
    <Destructure>
      {
        [...component, ...replicate(empty, criticals - takenCriticals)]
          .map((critical, index) => (
            <div
              key={`${critical.name}:${index}`}
              className={`Critical ${critical.type}`}
              style={{ height: 20 * critical.criticals}}
              onMouseEnter={() => onEnter(critical)}
              onMouseLeave={onLeave}
            >
              <div>
                { critical.name }
              </div>
              { critical.ammoPerTonn != null
                ? (
                  <div>({ critical.ammoPerTonn })</div>
                )
                : null }
            </div>
          ))
      }
    </Destructure>
  )
}

interface IProps { mech: IMech, section: ISection }
interface IState { hoverContext?: Readonly<IComponent>, hoverPosition: [number, number] }

export class Section extends React.PureComponent<IProps, IState> {
  public state: IState = {
    hoverContext: undefined,
    hoverPosition: [0, 0],
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
    const { mech, section } = this.props
    const { hoverContext, hoverPosition } = this.state

    const energy = countHardpoints(Hardpoint.Energy, section)
    const ballistic = countHardpoints(Hardpoint.Ballistic, section)
    const missile = countHardpoints(Hardpoint.Missile, section)
    const omni = countHardpoints(Hardpoint.Omni, section)

    return (
      <div className='CriticalsSection'>
        { hoverContext != null
          ? <HoverInfo mech={mech} hoverContext={hoverContext} position={hoverPosition}/>
          : null }
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
          <Info {...section} />
        </div>
        <div className='Component'>
          <CriticalSlots
            criticals={section.criticals}
            component={section.components}
            onEnter={(component: Readonly<IComponent>) => this.setState({ hoverContext: component })}
            onLeave={() => this.setState({ hoverContext: undefined })}
          />
        </div>
      </div>
    )
  }

  private onMouseMove = (evt: MouseEvent) => {
    if (this.mounted) {
      this.setState({ hoverPosition: [evt.clientX + 12, evt.clientY + 4] })
    }
  }
}
