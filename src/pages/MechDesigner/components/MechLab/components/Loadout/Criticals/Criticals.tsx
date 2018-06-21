import * as React from 'react'

import { Detail, DetailColor } from '../../../../../../../components/Common/Detail'
import { Component, IArm, IBaseMechPart, IHead } from '../../../../../../../models/common/Component'
import { IMechDesignerState } from '../../../../../state/reducer'

import { replicate } from '../../../../../../../lib/functional'
import { CockpitType, getCockpitCriticals, getLifeSupportCriticals, getSensorsCriticals } from '../../../../../../../models/Cockpit'
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

  private getEquipment(): ICriticalDescriptor[] {
    const { mech, part } = this.props

    switch (part.name) {
    case Component.Head: return this.getHeadEquipment(mech.cockpit, part as IHead)
    case Component.LeftArm:
    case Component.RightArm: return this.getArmEquipment(part as IArm)
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