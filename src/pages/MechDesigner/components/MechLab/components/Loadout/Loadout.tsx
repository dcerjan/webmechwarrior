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
    return this.props.values.type === MechType.Bipedal
      ? this.renderBipedal()
      : this.renderQuadrupedal()
  }

  private renderBipedal() {
    const { values } = this.props
    return (
      <div className={styles.Loadout}>
        <div className={styles.Outer}>
          <Arm values={values} arm={values.loadout[Component.LeftArm]} />
        </div>
        <div className={styles.Side}>
          <SideTorso values={values} sideTorso={values.loadout[Component.LeftTorso]} />
          <Leg values={values} leg={values.loadout[Component.LeftLeg]} />
        </div>
        <div className={styles.Center}>
          <Head values={values} head={values.loadout[Component.Head]} />
          <CenterTorso values={values} centerTorso={values.loadout[Component.CenterTorso]} />
        </div>
        <div className={styles.Side}>
          <SideTorso values={values} sideTorso={values.loadout[Component.RightTorso]} />
          <Leg values={values} leg={values.loadout[Component.RightLeg]} />
        </div>
        <div className={styles.Outer}>
          <Arm values={values} arm={values.loadout[Component.RightArm]} />
        </div>
      </div>
    )
  }

  private renderQuadrupedal() {
    const { values } = this.props
    return (
      <div className={styles.Loadout}>
        { values.name }
      </div>
    )
  }
}
