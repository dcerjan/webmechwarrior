import * as React from 'react'
import { DropTarget, DropTargetSpec } from 'react-dnd'

import { Detail, DetailColor } from '../../../../../../../components/Common/Detail'
import { range } from '../../../../../../../lib/functional'
import { IBaseMechPart } from '../../../../../../../models/common/MechComponent'
import { MechEquipmentName } from '../../../../../../../models/MechEquipment/MechEquipmentName'
import { DnDType, IDragedEquipment, IInjectedDropTargetProps, targetCollect } from '../../DnD'


interface IFreeCriticalProps extends Pick<React.HTMLAttributes<HTMLDivElement>, 'className'> {
  mechComponent: IBaseMechPart
  freeSlots: number,
}

const criticalDropTarget: DropTargetSpec<IFreeCriticalProps> = {
  canDrop: (props, monitor) => {
    const item = monitor.getItem() as IDragedEquipment
    return item.item.criticals <= props.freeSlots
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
            label={MechEquipmentName.None}
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
        if (isOver && index < descriptor.criticals) {
          return DetailColor.Blue
        } else {
          return DetailColor.TransaprentBlue
        }
      } else {
        return DetailColor.TransparentRed
      }
    }
  }
}


const DroppableFreeCriticals = DropTarget(DnDType.Critical, criticalDropTarget, targetCollect)(FreeCriticals)

export {
  DroppableFreeCriticals as FreeCriticals,
}