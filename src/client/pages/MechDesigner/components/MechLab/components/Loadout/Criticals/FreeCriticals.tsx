import * as React from 'react'
import { DropTarget, DropTargetSpec } from 'react-dnd'

import { Detail, DetailColor } from '../../../../../../../components/Common/Detail'
import { range } from '../../../../../../../lib/functional'
import { IBaseMechPart } from '../../../../../../../models/common/MechComponent'
import { getGearCriticals } from '../../../../../../../models/MechEquipment'
import { EquipmentType } from '../../../../../../../models/MechEquipment/Equipment'
import { getTargetingComputerWeight } from '../../../../../../../models/MechEquipment/MechEquipmentUtils'
import { IMechDesignerMech } from '../../../../../state/constants'
import { DnDType, IDragedEquipment, IInjectedDropTargetProps, targetCollect } from '../../DnD'


interface IFreeCriticalProps extends Pick<React.HTMLAttributes<HTMLDivElement>, 'className'> {
  mechComponent: IBaseMechPart
  freeSlots: number,
  mech: IMechDesignerMech,
}

const criticalDropTarget: DropTargetSpec<IFreeCriticalProps> = {
  canDrop: (props, monitor) => {
    const { mech, freeSlots } = props
    const item = monitor.getItem() as IDragedEquipment
    return getGearCriticals(mech.tonnage, mech.tech, item.item.name) <= freeSlots
  },
  drop: (props) => ({
    mechComponent: props.mechComponent,
  })
}

class FreeCriticals extends React.PureComponent<IFreeCriticalProps & IInjectedDropTargetProps> {

  public render() {
    const { freeSlots, connectDropTarget } = this.props

    return connectDropTarget(
      <div>
        { range(0, freeSlots).map(index => (
          <Detail
            key={index}
            label={'-- empty slot --'}
            color={this.getSlotColor(index)}
          />
        ))
        }
      </div>
    )
  }

  private getSlotColor(index: number): DetailColor {
    const { canDrop, descriptor, isOver } = this.props

    if (!descriptor) {
      return DetailColor.Transparent
    } else {
      if (canDrop) {
        if (isOver && index <  this.getItemCriticals()) {
          return DetailColor.Blue
        } else {
          return DetailColor.TransaprentBlue
        }
      } else {
        return DetailColor.TransparentRed
      }
    }
  }

  private getItemCriticals() {
    const { descriptor, mech } = this.props

    return descriptor.type === EquipmentType.Targeting_Computer
      ? getTargetingComputerWeight(mech.tonnage, mech.type, mech.tech, mech.loadout)
      : getGearCriticals(mech.tonnage, mech.tech, descriptor.name)
  }
}


const DroppableFreeCriticals = DropTarget(DnDType.Critical, criticalDropTarget, targetCollect)(FreeCriticals)

export {
  DroppableFreeCriticals as FreeCriticals,
}