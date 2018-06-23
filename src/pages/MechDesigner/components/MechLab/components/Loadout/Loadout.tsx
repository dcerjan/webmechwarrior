import * as React from 'react'

import { Component } from '../../../../../../models/common/Component'
import { MechType } from '../../../../../../models/common/MechType'
import { IInjectedMechLabProps } from '../../MechLab'
import { Arm } from './Arm'
import { CenterTorso } from './CenterTorso'
import { Head } from './Head'
import { Leg } from './Leg'
import * as styles from './Loadout.css'
import { SideTorso } from './SideTorso'

export class Loadout extends React.PureComponent<IInjectedMechLabProps> {

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
          <Arm mech={mech} arm={mech.loadout[Component.LeftArm]} change={change} select={select} />
        </div>
        <div className={styles.Side}>
          <SideTorso mech={mech} sideTorso={mech.loadout[Component.LeftTorso]} change={change} select={select} />
          <Leg mech={mech} leg={mech.loadout[Component.LeftLeg]} change={change} select={select} />
        </div>
        <div className={styles.Center}>
          <Head mech={mech} head={mech.loadout[Component.Head]} change={change} select={select} />
          <CenterTorso mech={mech} centerTorso={mech.loadout[Component.CenterTorso]} change={change} select={select} />
        </div>
        <div className={styles.Side}>
          <SideTorso mech={mech} sideTorso={mech.loadout[Component.RightTorso]} change={change} select={select} />
          <Leg mech={mech} leg={mech.loadout[Component.RightLeg]} change={change} select={select} />
        </div>
        <div className={styles.Outer}>
          <Arm mech={mech} arm={mech.loadout[Component.RightArm]} change={change} select={select} />
        </div>
      </div>
    )
  }

  private renderTripod() {
    const { mech, change, select } = this.props
    return (
      <div className={styles.Loadout}>
        <div className={styles.Outer}>
          <Arm mech={mech} arm={mech.loadout[Component.LeftArm]} change={change} select={select} />
        </div>
        <div className={styles.Side}>
          <SideTorso mech={mech} sideTorso={mech.loadout[Component.LeftTorso]} change={change} select={select} />
          <Leg mech={mech} leg={mech.loadout[Component.FrontLeftLeg]} change={change} select={select} />
        </div>
        <div className={styles.Center}>
          <Head mech={mech} head={mech.loadout[Component.Head]} change={change} select={select} />
          <CenterTorso mech={mech} centerTorso={mech.loadout[Component.CenterTorso]} change={change} select={select} />
          <Leg mech={mech} leg={mech.loadout[Component.RearLeg]} change={change} select={select} />
        </div>
        <div className={styles.Side}>
          <SideTorso mech={mech} sideTorso={mech.loadout[Component.RightTorso]} change={change} select={select} />
          <Leg mech={mech} leg={mech.loadout[Component.FrontRightLeg]} change={change} select={select} />
        </div>
        <div className={styles.Outer}>
          <Arm mech={mech} arm={mech.loadout[Component.RightArm]} change={change} select={select} />
        </div>
      </div>
    )
  }

  private renderQuadrupedal() {
    const { mech, change, select } = this.props
    return (
      <div className={styles.Loadout}>
        <div className={styles.Outer}>
          <Leg mech={mech} leg={mech.loadout[Component.FrontLeftLeg]} change={change} select={select} />
          <Leg mech={mech} leg={mech.loadout[Component.RearLeftLeg]} change={change} select={select} />
        </div>
        <div className={styles.Side}>
          <SideTorso mech={mech} sideTorso={mech.loadout[Component.LeftTorso]} change={change} select={select} />
        </div>
        <div className={styles.Center}>
          <Head mech={mech} head={mech.loadout[Component.Head]} change={change} select={select} />
          <CenterTorso mech={mech} centerTorso={mech.loadout[Component.CenterTorso]} change={change} select={select} />
        </div>
        <div className={styles.Side}>
          <SideTorso mech={mech} sideTorso={mech.loadout[Component.RightTorso]} change={change} select={select} />
        </div>
        <div className={styles.Outer}>
          <Leg mech={mech} leg={mech.loadout[Component.FrontRightLeg]} change={change} select={select} />
          <Leg mech={mech} leg={mech.loadout[Component.RearRightLeg]} change={change} select={select} />
        </div>
      </div>
    )
  }
}
