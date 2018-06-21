import * as React from 'react'

import { Detail, DetailColor } from '../../../../../../../components/Common/Detail'
import { Component, IArm, IBaseMechPart, ICenterTorso, IHead, ILeg, ISideTorso } from '../../../../../../../models/common/Component'
import { IMechDesignerState } from '../../../../../state/reducer'

import { replicate } from '../../../../../../../lib/functional'
import { CockpitType, getCockpitCriticals, getLifeSupportCriticals, getSensorsCriticals } from '../../../../../../../models/Cockpit'
import { getEngineCriticalSlotAllocation } from '../../../../../../../models/Engine'
import { getGyroCriticals } from '../../../../../../../models/Gryo'
import { MechEquipmentName } from '../../../../../../../models/MechEquipment/MechEquipmentName'
import * as styles from './Criticals.css'

interface ICriticalsProps {
  mech: IMechDesignerState,
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

  private getHeadEquipment(cockpit: CockpitType, head: IHead): ICriticalDescriptor[] {
    const cockpitCriticals = getCockpitCriticals(cockpit)
    const sensorsCriticals = getSensorsCriticals(cockpit)
    const lifeSupportCriticals = getLifeSupportCriticals(cockpit)
    const totalCriticals = cockpitCriticals + sensorsCriticals + lifeSupportCriticals

    return [
      { equipment: MechEquipmentName.Cockpit, color: DetailColor.TransparentSand, criticals: cockpitCriticals },
      { equipment: MechEquipmentName.Sensors, color: DetailColor.TransparentSand, criticals: sensorsCriticals },
      { equipment: MechEquipmentName.Life_Support, color: DetailColor.TransparentSand, criticals: lifeSupportCriticals },
      ...replicate(
        { equipment: MechEquipmentName.None, color: DetailColor.Transparent, criticals: 1 },
        head.criticals - totalCriticals
      ),
    ]
  }

  private getArmEquipment(arm: IArm): ICriticalDescriptor[] {
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
        arm.criticals - totalCriticals
      ),
    ]
  }

  private getLegEquipment(leg: ILeg): ICriticalDescriptor[] {
    const totalCriticals = 4

    return [
      { equipment: MechEquipmentName.Hip_Actuator, color: DetailColor.TransparentSand, criticals: 1 },
      { equipment: MechEquipmentName.Upper_Leg_Actuator, color: DetailColor.TransparentSand, criticals: 1 },
      { equipment: MechEquipmentName.Lower_Leg_Actuator, color: DetailColor.TransparentSand, criticals: 1 },
      { equipment: MechEquipmentName.Foot_Actuator, color: DetailColor.TransparentSand, criticals: 1 },
      ...replicate(
        { equipment: MechEquipmentName.None, color: DetailColor.Transparent, criticals: 1 },
        leg.criticals - totalCriticals
      ),
    ]
  }

  private getCenterTorsoEquipment(mech: IMechDesignerState, centerTorso: ICenterTorso): ICriticalDescriptor[] {
    const engineCriticals = getEngineCriticalSlotAllocation(mech.tech, mech.engine.type)[Component.CenterTorso]
    const gyroCriticals = getGyroCriticals(mech.gyro.type)

    const totalCriticals = engineCriticals + gyroCriticals

    return [
      { equipment: MechEquipmentName.Engine, color: DetailColor.TransparentSand, criticals: engineCriticals },
      { equipment: MechEquipmentName.Gyro, color: DetailColor.TransparentSand, criticals: gyroCriticals },
      ...replicate(
        { equipment: MechEquipmentName.None, color: DetailColor.Transparent, criticals: 1 },
        centerTorso.criticals - totalCriticals
      ),
    ]
  }

  private getSideTorsoEquipment(mech: IMechDesignerState, sideTorso: ISideTorso): ICriticalDescriptor[] {
    const engineCriticals = getEngineCriticalSlotAllocation(mech.tech, mech.engine.type)[Component.LeftTorso] || 0

    const totalCriticals = engineCriticals

    const engine = engineCriticals
      ? [{ equipment: MechEquipmentName.Engine, color: DetailColor.TransparentSand, criticals: engineCriticals }]
      : []

    return [
      ...engine,
      ...replicate(
        { equipment: MechEquipmentName.None, color: DetailColor.Transparent, criticals: 1 },
        sideTorso.criticals - totalCriticals
      ),
    ]
  }

  private getEquipment(): ICriticalDescriptor[] {
    const { mech, part } = this.props

    switch (part.name) {
    case Component.Head: return this.getHeadEquipment(mech.cockpit, part as IHead)
    case Component.CenterTorso: return this.getCenterTorsoEquipment(mech, part as ICenterTorso)
    case Component.LeftTorso:
    case Component.RightTorso: return this.getSideTorsoEquipment(mech, part as ISideTorso)
    case Component.LeftArm:
    case Component.RightArm: return this.getArmEquipment(part as IArm)
    case Component.LeftLeg:
    case Component.RightLeg:
    case Component.FrontLeftLeg:
    case Component.FrontRightLeg:
    case Component.RearLeftLeg:
    case Component.RearRightLeg: return this.getLegEquipment(part as ILeg)
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