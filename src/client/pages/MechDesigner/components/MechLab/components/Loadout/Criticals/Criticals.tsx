import * as React from 'react'

import { Detail, DetailColor } from '../../../../../../../components/Common/Detail'
import { getCriticalsForComponent, IArm, IBaseMechPart, ICenterTorso, IHead, ILeg, ISideTorso, MechComponent } from '../../../../../../../models/common/MechComponent'

import { identity } from '../../../../../../../lib/functional'
import { getCockpitCriticals, getLifeSupportCriticals, getSensorsCriticals } from '../../../../../../../models/Cockpit'
import { getEngineCriticalSlotAllocation } from '../../../../../../../models/Engine'
import { getGyroCriticals } from '../../../../../../../models/Gryo'
import { getGearCriticals, getGearData } from '../../../../../../../models/MechEquipment'
import { EquipmentType } from '../../../../../../../models/MechEquipment/Equipment'
import { GearName } from '../../../../../../../models/MechEquipment/GearName'
import { getTargetingComputerWeight } from '../../../../../../../models/MechEquipment/MechEquipmentUtils'
import { IMechDesignerMech } from '../../../../../state/constants'
import { ICommonProps } from '../../../MechLab'
import { getEquipmentDetailColor } from '../../Equipment/DragPreview'
import { AllocatedCritical } from './AllocatedCritical'
import * as styles from './Criticals.css'
import { FreeCriticals } from './FreeCriticals'

interface ICriticalsProps extends Pick<ICommonProps, 'mech'> {
  part: IBaseMechPart,
}

export interface ICriticalDescriptor {
  equipment: GearName,
  criticals: number,
  color: DetailColor,
}

interface ICriticals {
  builtin: ICriticalDescriptor[],
  allocated: ICriticalDescriptor[],
  free: number,
}

export class Criticals extends React.PureComponent<ICriticalsProps> {
  public render() {
    const { part, mech } = this.props
    const equipment = this.getEquipment()

    return (
      <div className={styles.Criticals}>
        { this.renderBuiltinCriticals() }
        { this.renderAllocatedCriticals() }
        { equipment.free > 0
          ? <FreeCriticals freeSlots={equipment.free} mechComponent={part} mech={mech} />
          : null }
      </div>
    )
  }

  private getAllocated(part: IBaseMechPart): ICriticalDescriptor[] {
    return part.equipment.map((equipment): ICriticalDescriptor => {
      const criticals = this.getGearCriticals(equipment)
      return {
        equipment,
        criticals,
        color: getEquipmentDetailColor(getGearData(equipment)),
      }
    })
  }

  private getGearCriticals(gearName: GearName) {
    const { mech } = this.props

    const gear = getGearData(gearName)

    return gear.type === EquipmentType.Targeting_Computer
      ? getTargetingComputerWeight(mech.tonnage, mech.type, mech.tech, mech.loadout)
      : getGearCriticals(mech.tonnage, mech.tech, gear.name)
  }

  private getHeadEquipment(mech: IMechDesignerMech, head: IHead): ICriticals {
    const cockpitCriticals = getCockpitCriticals(mech.cockpit)
    const sensorsCriticals = getSensorsCriticals(mech.cockpit)
    const lifeSupportCriticals = getLifeSupportCriticals(mech.cockpit)
    const totalCriticals = cockpitCriticals + sensorsCriticals + lifeSupportCriticals
    const criticals = getCriticalsForComponent(mech.class, head.name)

    const builtin = [
      { equipment: GearName.Cockpit, color: DetailColor.TransaprentLightGrey, criticals: cockpitCriticals },
      { equipment: GearName.Sensors, color: DetailColor.TransaprentLightGrey, criticals: sensorsCriticals },
      { equipment: GearName.Life_Support, color: DetailColor.TransaprentLightGrey, criticals: lifeSupportCriticals },
    ]

    const allocated = this.getAllocated(head)

    const free = criticals - totalCriticals - allocated.reduce((sum, a) => sum + a.criticals, 0)

    return { builtin, allocated, free }
  }

  private getArmEquipment(mech: IMechDesignerMech, arm: IArm): ICriticals {
    const criticals = getCriticalsForComponent(mech.class, arm.name)

    const builtin = [
      { equipment: GearName.Shoulder_Actuator, color: DetailColor.TransaprentLightGrey, criticals: 1 },
      { equipment: GearName.Upper_Arm_Actuator, color: DetailColor.TransaprentLightGrey, criticals: 1 },
      arm.hasLowerArmActuator ? { equipment: GearName.Lower_Arm_Actuator, color: DetailColor.TransaprentLightGrey, criticals: 1 } : null,
      arm.hasHandActuator ? { equipment: GearName.Hand_Actuator, color: DetailColor.TransaprentLightGrey, criticals: 1 } : null,
    ].filter(identity) as ICriticalDescriptor[]

    const totalCriticals = builtin.length

    const allocated = this.getAllocated(arm)

    const free = criticals - totalCriticals - allocated.reduce((sum, a) => sum + a.criticals, 0)

    return { builtin, allocated, free }
  }

  private getLegEquipment(mech: IMechDesignerMech, leg: ILeg): ICriticals {
    const criticals = getCriticalsForComponent(mech.class, leg.name)
    const totalCriticals = 4

    const builtin = [
      { equipment: GearName.Hip_Actuator, color: DetailColor.TransaprentLightGrey, criticals: 1 },
      { equipment: GearName.Upper_Leg_Actuator, color: DetailColor.TransaprentLightGrey, criticals: 1 },
      { equipment: GearName.Lower_Leg_Actuator, color: DetailColor.TransaprentLightGrey, criticals: 1 },
      { equipment: GearName.Foot_Actuator, color: DetailColor.TransaprentLightGrey, criticals: 1 },
    ]

    const allocated = this.getAllocated(leg)

    const free = criticals - totalCriticals - allocated.reduce((sum, a) => sum + a.criticals, 0)

    return { builtin, allocated, free }
  }

  private getCenterTorsoEquipment(mech: IMechDesignerMech, centerTorso: ICenterTorso): ICriticals {
    const engineCriticals = getEngineCriticalSlotAllocation(mech.tech, mech.engine.type)[MechComponent.CenterTorso]
    const gyroCriticals = getGyroCriticals(mech.gyro.type)
    const criticals = getCriticalsForComponent(mech.class, centerTorso.name)

    const totalCriticals = engineCriticals + gyroCriticals

    const  builtin = [
      { equipment: GearName.Engine, color: DetailColor.TransaprentLightGrey, criticals: engineCriticals },
      { equipment: GearName.Gyro, color: DetailColor.TransaprentLightGrey, criticals: gyroCriticals },
    ]

    const allocated = this.getAllocated(centerTorso)

    const free = criticals - totalCriticals - allocated.reduce((sum, a) => sum + a.criticals, 0)

    return { builtin, allocated, free }
  }

  private getSideTorsoEquipment(mech: IMechDesignerMech, sideTorso: ISideTorso): ICriticals {
    const engineCriticals = getEngineCriticalSlotAllocation(mech.tech, mech.engine.type)[MechComponent.LeftTorso] || 0
    const criticals = getCriticalsForComponent(mech.class, sideTorso.name)

    const totalCriticals = engineCriticals

    const engine = engineCriticals
      ? [{ equipment: GearName.Engine, color: DetailColor.TransaprentLightGrey, criticals: engineCriticals }]
      : []

    const builtin = engine

    const allocated = this.getAllocated(sideTorso)

    const free = criticals - totalCriticals - allocated.reduce((sum, a) => sum + a.criticals, 0)

    return { builtin, allocated, free }
  }

  private getEquipment(): ICriticals {
    const { mech, part } = this.props

    switch (part.name) {
    case MechComponent.Head: return this.getHeadEquipment(mech, part as IHead)
    case MechComponent.CenterTorso: return this.getCenterTorsoEquipment(mech, part as ICenterTorso)
    case MechComponent.LeftTorso:
    case MechComponent.RightTorso: return this.getSideTorsoEquipment(mech, part as ISideTorso)
    case MechComponent.LeftArm:
    case MechComponent.RightArm: return this.getArmEquipment(mech, part as IArm)
    case MechComponent.LeftLeg:
    case MechComponent.RightLeg:
    case MechComponent.FrontLeftLeg:
    case MechComponent.FrontRightLeg:
    case MechComponent.RearLeftLeg:
    case MechComponent.RearRightLeg:
    case MechComponent.RearLeg: return this.getLegEquipment(mech, part as ILeg)
    }
  }

  private renderBuiltinCriticals() {
    const equipment = this.getEquipment()

    return equipment.builtin.map((equipment, index) => (
      <Detail
        key={`${equipment.equipment}:${index}`}
        label={equipment.equipment}
        color={equipment.color}
        style={{ height: equipment.criticals * 20 }}
      />
    ))
  }

  private renderAllocatedCriticals() {
    const { part } = this.props
    const equipment = this.getEquipment()

    return equipment.allocated.map((descriptor, index) => (
      <AllocatedCritical
        key={`${descriptor.equipment}:${index}`}
        descriptor={descriptor}
        index={index}
        mechComponent={part}
      />
    ))
  }
}
