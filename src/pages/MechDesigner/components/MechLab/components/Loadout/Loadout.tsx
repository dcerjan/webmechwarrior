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
      switch (this.props.values.type) {
      case MechType.Bipedal: return this.renderBipedal()
      case MechType.Tripod: return this.renderTripod()
      case MechType.Quadrupedal: return this.renderQuadrupedal()
      }
    })()
  }

  private renderBipedal() {
    const { values, change, select } = this.props
    return (
      <div className={styles.Loadout}>
        <div className={styles.Outer}>
          <Arm values={values} arm={values.loadout[Component.LeftArm]} change={change} select={select} />
        </div>
        <div className={styles.Side}>
          <SideTorso values={values} sideTorso={values.loadout[Component.LeftTorso]} change={change} select={select} />
          <Leg values={values} leg={values.loadout[Component.LeftLeg]} change={change} select={select} />
        </div>
        <div className={styles.Center}>
          <Head values={values} head={values.loadout[Component.Head]} change={change} select={select} />
          <CenterTorso values={values} centerTorso={values.loadout[Component.CenterTorso]} change={change} select={select} />
        </div>
        <div className={styles.Side}>
          <SideTorso values={values} sideTorso={values.loadout[Component.RightTorso]} change={change} select={select} />
          <Leg values={values} leg={values.loadout[Component.RightLeg]} change={change} select={select} />
        </div>
        <div className={styles.Outer}>
          <Arm values={values} arm={values.loadout[Component.RightArm]} change={change} select={select} />
        </div>
      </div>
    )
  }

  private renderTripod() {
    const { values, change, select } = this.props
    return (
      <div className={styles.Loadout}>
        <div className={styles.Outer}>
          <Arm values={values} arm={values.loadout[Component.LeftArm]} change={change} select={select} />
        </div>
        <div className={styles.Side}>
          <SideTorso values={values} sideTorso={values.loadout[Component.LeftTorso]} change={change} select={select} />
          <Leg values={values} leg={values.loadout[Component.FrontLeftLeg]} change={change} select={select} />
        </div>
        <div className={styles.Center}>
          <Head values={values} head={values.loadout[Component.Head]} change={change} select={select} />
          <CenterTorso values={values} centerTorso={values.loadout[Component.CenterTorso]} change={change} select={select} />
          <Leg values={values} leg={values.loadout[Component.RearLeg]} change={change} select={select} />
        </div>
        <div className={styles.Side}>
          <SideTorso values={values} sideTorso={values.loadout[Component.RightTorso]} change={change} select={select} />
          <Leg values={values} leg={values.loadout[Component.FrontRightLeg]} change={change} select={select} />
        </div>
        <div className={styles.Outer}>
          <Arm values={values} arm={values.loadout[Component.RightArm]} change={change} select={select} />
        </div>
      </div>
    )
  }

  private renderQuadrupedal() {
    const { values, change, select } = this.props
    return (
      <div className={styles.Loadout}>
        <div className={styles.Outer}>
          <Leg values={values} leg={values.loadout[Component.FrontLeftLeg]} change={change} select={select} />
          <Leg values={values} leg={values.loadout[Component.RearLeftLeg]} change={change} select={select} />
        </div>
        <div className={styles.Side}>
          <SideTorso values={values} sideTorso={values.loadout[Component.LeftTorso]} change={change} select={select} />
        </div>
        <div className={styles.Center}>
          <Head values={values} head={values.loadout[Component.Head]} change={change} select={select} />
          <CenterTorso values={values} centerTorso={values.loadout[Component.CenterTorso]} change={change} select={select} />
        </div>
        <div className={styles.Side}>
          <SideTorso values={values} sideTorso={values.loadout[Component.RightTorso]} change={change} select={select} />
        </div>
        <div className={styles.Outer}>
          <Leg values={values} leg={values.loadout[Component.FrontRightLeg]} change={change} select={select} />
          <Leg values={values} leg={values.loadout[Component.RearRightLeg]} change={change} select={select} />
        </div>
      </div>
    )
  }
}
