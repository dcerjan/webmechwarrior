import * as React from 'react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import { MechComponent } from '../../../../../../models/common/MechComponent'
import { MechType } from '../../../../../../models/common/MechType'
import { IInjectedMechLabProps } from '../../MechLab'
import { Arm } from './Arm'
import { CenterTorso } from './CenterTorso'
import { Head } from './Head'
import { Leg } from './Leg'
import * as styles from './Loadout.css'
import { SideTorso } from './SideTorso'

class Loadout extends React.PureComponent<IInjectedMechLabProps> {

  public render() {
    return (() => {
      switch (this.props.mech.type) {
      case MechType.Bipedal: return this.renderBipedal()
      case MechType.Tripod: return this.renderTripod()
      case MechType.Quadrupedal: return this.renderQuadrupedal()
      }
    })()
  }

  private renderBipedal() {
    const { mech, change, select } = this.props
    return (
      <div className={styles.Loadout}>
        <div className={styles.Outer}>
          <Arm mech={mech} arm={mech.loadout[MechComponent.LeftArm]} change={change} select={select} />
        </div>
        <div className={styles.Side}>
          <SideTorso mech={mech} sideTorso={mech.loadout[MechComponent.LeftTorso]} change={change} select={select} />
          <Leg mech={mech} leg={mech.loadout[MechComponent.LeftLeg]} change={change} select={select} />
        </div>
        <div className={styles.Center}>
          <Head mech={mech} head={mech.loadout[MechComponent.Head]} change={change} select={select} />
          <CenterTorso mech={mech} centerTorso={mech.loadout[MechComponent.CenterTorso]} change={change} select={select} />
        </div>
        <div className={styles.Side}>
          <SideTorso mech={mech} sideTorso={mech.loadout[MechComponent.RightTorso]} change={change} select={select} />
          <Leg mech={mech} leg={mech.loadout[MechComponent.RightLeg]} change={change} select={select} />
        </div>
        <div className={styles.Outer}>
          <Arm mech={mech} arm={mech.loadout[MechComponent.RightArm]} change={change} select={select} />
        </div>
      </div>
    )
  }

  private renderTripod() {
    const { mech, change, select } = this.props
    return (
      <div className={styles.Loadout}>
        <div className={styles.Outer}>
          <Arm mech={mech} arm={mech.loadout[MechComponent.LeftArm]} change={change} select={select} />
        </div>
        <div className={styles.Side}>
          <SideTorso mech={mech} sideTorso={mech.loadout[MechComponent.LeftTorso]} change={change} select={select} />
          <Leg mech={mech} leg={mech.loadout[MechComponent.FrontLeftLeg]} change={change} select={select} />
        </div>
        <div className={styles.Center}>
          <Head mech={mech} head={mech.loadout[MechComponent.Head]} change={change} select={select} />
          <CenterTorso mech={mech} centerTorso={mech.loadout[MechComponent.CenterTorso]} change={change} select={select} />
          <Leg mech={mech} leg={mech.loadout[MechComponent.RearLeg]} change={change} select={select} />
        </div>
        <div className={styles.Side}>
          <SideTorso mech={mech} sideTorso={mech.loadout[MechComponent.RightTorso]} change={change} select={select} />
          <Leg mech={mech} leg={mech.loadout[MechComponent.FrontRightLeg]} change={change} select={select} />
        </div>
        <div className={styles.Outer}>
          <Arm mech={mech} arm={mech.loadout[MechComponent.RightArm]} change={change} select={select} />
        </div>
      </div>
    )
  }

  private renderQuadrupedal() {
    const { mech, change, select } = this.props
    return (
      <div className={styles.Loadout}>
        <div className={styles.Outer}>
          <Leg mech={mech} leg={mech.loadout[MechComponent.FrontLeftLeg]} change={change} select={select} />
          <Leg mech={mech} leg={mech.loadout[MechComponent.RearLeftLeg]} change={change} select={select} />
        </div>
        <div className={styles.Side}>
          <SideTorso mech={mech} sideTorso={mech.loadout[MechComponent.LeftTorso]} change={change} select={select} />
        </div>
        <div className={styles.Center}>
          <Head mech={mech} head={mech.loadout[MechComponent.Head]} change={change} select={select} />
          <CenterTorso mech={mech} centerTorso={mech.loadout[MechComponent.CenterTorso]} change={change} select={select} />
        </div>
        <div className={styles.Side}>
          <SideTorso mech={mech} sideTorso={mech.loadout[MechComponent.RightTorso]} change={change} select={select} />
        </div>
        <div className={styles.Outer}>
          <Leg mech={mech} leg={mech.loadout[MechComponent.FrontRightLeg]} change={change} select={select} />
          <Leg mech={mech} leg={mech.loadout[MechComponent.RearRightLeg]} change={change} select={select} />
        </div>
      </div>
    )
  }
}

const DnDLoadout = DragDropContext(HTML5Backend)(Loadout)

export {
  DnDLoadout as Loadout,
}
