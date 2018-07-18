import * as React from 'react'
import { DragSource, DragSourceSpec } from 'react-dnd'
import { change } from 'redux-form'

import { getEmptyImage } from 'react-dnd-html5-backend'
import { IBaseMechPart } from '../../../../../../models/common/MechComponent'
import { MechGear } from '../../../../../../models/MechEquipment'
import { store } from '../../../../../../state/store'
import { DnDType, IDragedEquipment, IInjectedDragSourceProps, sourceCollect } from '../DnD'

interface IRowWrapperProps extends Pick<React.HTMLAttributes<HTMLDivElement>, 'className'>{
  value: MechGear,
  component: JSX.Element,
}

const criticalSource: DragSourceSpec<IRowWrapperProps, IDragedEquipment> = {
  beginDrag: (props) => ({
    item: props.value,
  }),
  endDrag: (props, monitor) => {
    const part = monitor.getDropResult()
    if (part) {
      const component = part.mechComponent as IBaseMechPart
      const item = monitor.getItem() as IDragedEquipment

      // #TODO: check wether it is possible to drop the item here at all
      store.dispatch(change('Lab.Mech', `loadout.${component.name}.equipment`, [...component.equipment, item.item.name]))
    }
  }
}

class RowWrapper extends React.PureComponent<IRowWrapperProps & IInjectedDragSourceProps> {
  public render() {
    const { connectDragSource, connectDragPreview, isDragging, component, className } = this.props

    if (connectDragPreview) {
			connectDragPreview(getEmptyImage(), { captureDraggingState: true })
		}

    return connectDragSource(
      <div
        className={className}
        style={{ opacity: isDragging ? 0.5 : 1.0 }}
      >
        { component }
      </div>
    )
  }
}

export const DraggableRowWrapper = DragSource(DnDType.Critical, criticalSource, sourceCollect)(RowWrapper)
