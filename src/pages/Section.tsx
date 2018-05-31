import * as React from 'react'

import { replicate } from '../lib/functional';

import { Equipment, IEquipment } from '../models/VehicleBay/Equipment/Equipment';
import { Hardpoint } from '../models/VehicleBay/Equipment/Hardpoint';
import { IMech, MechParts } from '../models/VehicleBay/Mech/Mech';
import { ISection } from '../models/VehicleBay/Mech/Section';
import { Tech } from '../models/VehicleBay/Tech';
import { HoverInfo } from './HoverInfo';
import './Section.css'

const countHardpoints = (hardpointType: Hardpoint, section: ISection): number =>
  section.hardpoints.filter(hardpoint => hardpoint === hardpointType).length

const Destructure: React.SFC<any> = ({ children }) => (children || null)


const Info: React.SFC<ISection> = ({ armor, rearArmor, structure, name }) => (
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
  </Destructure>
)

const CriticalSlots: React.SFC<{ equipment: IEquipment[], criticals: number, onEnter: (equimpent: Readonly<IEquipment>) => void, onLeave: () => void }> = ({ equipment, criticals, onEnter, onLeave }) => {
  const empty = Equipment({ name: '-- empty --', criticals: 1, type: Hardpoint.Empty, tech: Tech.None })

  const takenCriticals = equipment.reduce((sum, c) => sum + c.criticals, 0)

  return (
    <Destructure>
      { 
        [...equipment, ...replicate(empty, criticals - takenCriticals)]
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
interface IState { hoverContext?: Readonly<IEquipment>, hoverPosition: [number, number] }

export class Section extends React.PureComponent<IProps, IState> {
  public state: IState = {
    hoverContext: undefined,
    hoverPosition: [0, 0],
  }

  public componentDidMount() {
    window.document.addEventListener('mousemove', this.onMouseMove, true);
  }

  public componentWillUnmount() {
    window.document.removeEventListener('mousemove', this.onMouseMove);
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
        <div className='Equipment'>
          <CriticalSlots
            criticals={section.criticals}
            equipment={section.equipment}
            onEnter={(equipment: Readonly<IEquipment>) => this.setState({ hoverContext: equipment })}
            onLeave={() => this.setState({ hoverContext: undefined })}
          />
        </div>
      </div>
    )
  }

  private onMouseMove = (evt: MouseEvent) => {
    this.setState({ hoverPosition: [evt.clientX + 12, evt.clientY + 4] })
  }
}

