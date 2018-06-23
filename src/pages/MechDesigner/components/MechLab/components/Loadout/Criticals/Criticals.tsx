import * as React from 'react'

import { Detail, DetailColor } from '../../../../../../../components/Common/Detail'
import { Component, getCriticalsForComponent, IArm, IBaseMechPart, ICenterTorso, IHead, ILeg, ISideTorso } from '../../../../../../../models/common/Component'

import { replicate } from '../../../../../../../lib/functional'
import { getCockpitCriticals, getLifeSupportCriticals, getSensorsCriticals } from '../../../../../../../models/Cockpit'
import { getEngineCriticalSlotAllocation } from '../../../../../../../models/Engine'
import { getGyroCriticals } from '../../../../../../../models/Gryo'
import { MechEquipmentName } from '../../../../../../../models/MechEquipment/MechEquipmentName'
import { IMechDesignerMech } from '../../../../../state/constants'
import { IInjectedMechLabProps } from '../../../MechLab'
import * as styles from './Criticals.css'

interface ICriticalsProps extends Pick<IInjectedMechLabProps, 'mech'> {
  part: IBaseMechPart,
}

interface ICriticalDescriptor {
  equipment: MechEquipmentName,
  criticals: number,
  color: DetailColor,
}

export class Criticals extends React.PureComponent<ICriticalsProps> {
  public render() {
    return (
      <div className={styles.Criticals}>
        { this.renderCriticals() }
      </div>
    )
  }

  private getHeadEquipment(mech: IMechDesignerMech, head: IHead): ICriticalDescriptor[] {
    const cockpitCriticals = getCockpitCriticals(mech.cockpit)
    const sensorsCriticals = getSensorsCriticals(mech.cockpit)
    const lifeSupportCriticals = getLifeSupportCriticals(mech.cockpit)
    const totalCriticals = cockpitCriticals + sensorsCriticals + lifeSupportCriticals
    const criticals = getCriticalsForComponent(mech.class, head.name)

    return [
      { equipment: MechEquipmentName.Cockpit, color: DetailColor.TransparentSand, criticals: cockpitCriticals },
      { equipment: MechEquipmentName.Sensors, color: DetailColor.TransparentSand, criticals: sensorsCriticals },
      { equipment: MechEquipmentName.Life_Support, color: DetailColor.TransparentSand, criticals: lifeSupportCriticals },
      ...replicate(
        { equipment: MechEquipmentName.None, color: DetailColor.Transparent, criticals: 1 },
        criticals - totalCriticals
      ),
    ]
  }

  private getArmEquipment(mech: IMechDesignerMech, arm: IArm): ICriticalDescriptor[] {
    const criticals = getCriticalsForComponent(mech.class, arm.name)
    // #TODO: add booleans for checkboxes to determine if lower arm and hand actuators are present
    // and correctly calculate totalCriticals
    const totalCriticals = 4

    return [
      { equipment: MechEquipmentName.Shoulder_Actuator, color: DetailColor.TransparentSand, criticals: 1 },
      { equipment: MechEquipmentName.Upper_Arm_Actuator, color: DetailColor.TransparentSand, criticals: 1 },
      { equipment: MechEquipmentName.Lower_Arm_Actuator, color: DetailColor.TransparentSand, criticals: 1 },
      { equipment: MechEquipmentName.Hand_Actuator, color: DetailColor.TransparentSand, criticals: 1 },
      ...replicate(
        { equipment: MechEquipmentName.None, color: DetailColor.Transparent, criticals: 1 },
        criticals - totalCriticals
      ),
    ]
  }

  private getLegEquipment(mech: IMechDesignerMech, leg: ILeg): ICriticalDescriptor[] {
    const criticals = getCriticalsForComponent(mech.class, leg.name)
    const totalCriticals = 4

    return [
      { equipment: MechEquipmentName.Hip_Actuator, color: DetailColor.TransparentSand, criticals: 1 },
      { equipment: MechEquipmentName.Upper_Leg_Actuator, color: DetailColor.TransparentSand, criticals: 1 },
      { equipment: MechEquipmentName.Lower_Leg_Actuator, color: DetailColor.TransparentSand, criticals: 1 },
      { equipment: MechEquipmentName.Foot_Actuator, color: DetailColor.TransparentSand, criticals: 1 },
      ...replicate(
        { equipment: MechEquipmentName.None, color: DetailColor.Transparent, criticals: 1 },
        criticals - totalCriticals
      ),
    ]
  }

  private getCenterTorsoEquipment(mech: IMechDesignerMech, centerTorso: ICenterTorso): ICriticalDescriptor[] {
    const engineCriticals = getEngineCriticalSlotAllocation(mech.tech, mech.engine.type)[Component.CenterTorso]
    const gyroCriticals = getGyroCriticals(mech.gyro.type)
    const criticals = getCriticalsForComponent(mech.class, centerTorso.name)

    const totalCriticals = engineCriticals + gyroCriticals

    return [
      { equipment: MechEquipmentName.Engine, color: DetailColor.TransparentSand, criticals: engineCriticals },
      { equipment: MechEquipmentName.Gyro, color: DetailColor.TransparentSand, criticals: gyroCriticals },
      ...replicate(
        { equipment: MechEquipmentName.None, color: DetailColor.Transparent, criticals: 1 },
        criticals - totalCriticals
      ),
    ]
  }

  private getSideTorsoEquipment(mech: IMechDesignerMech, sideTorso: ISideTorso): ICriticalDescriptor[] {
    const engineCriticals = getEngineCriticalSlotAllocation(mech.tech, mech.engine.type)[Component.LeftTorso] || 0
    const criticals = getCriticalsForComponent(mech.class, sideTorso.name)

    const totalCriticals = engineCriticals

    const engine = engineCriticals
      ? [{ equipment: MechEquipmentName.Engine, color: DetailColor.TransparentSand, criticals: engineCriticals }]
      : []

    return [
      ...engine,
      ...replicate(
        { equipment: MechEquipmentName.None, color: DetailColor.Transparent, criticals: 1 },
        criticals - totalCriticals
      ),
    ]
  }

  private getEquipment(): ICriticalDescriptor[] {
    const { mech, part } = this.props

    switch (part.name) {
    case Component.Head: return this.getHeadEquipment(mech, part as IHead)
    case Component.CenterTorso: return this.getCenterTorsoEquipment(mech, part as ICenterTorso)
    case Component.LeftTorso:
    case Component.RightTorso: return this.getSideTorsoEquipment(mech, part as ISideTorso)
    case Component.LeftArm:
    case Component.RightArm: return this.getArmEquipment(mech, part as IArm)
    case Component.LeftLeg:
    case Component.RightLeg:
    case Component.FrontLeftLeg:
    case Component.FrontRightLeg:
    case Component.RearLeftLeg:
    case Component.RearRightLeg:
    case Component.RearLeg: return this.getLegEquipment(mech, part as ILeg)
    default: return []
    }
  }

  private renderCriticals() {
    const equipment = this.getEquipment()

    return equipment.map((equipment, index) => (
      <Detail
        key={`${equipment.equipment}:${index}`}
        label={equipment.equipment}
        color={equipment.color}
        style={{ height: equipment.criticals * 20 }}
      />
    ))
  }
}