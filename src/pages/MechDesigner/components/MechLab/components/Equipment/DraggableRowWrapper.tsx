import * as React from 'react'
import { ConnectDragPreview, ConnectDragSource, DragSource, DragSourceCollector, DragSourceSpec } from 'react-dnd'

import { getEmptyImage } from 'react-dnd-html5-backend'
import { IMechEquipmentRecord } from '../../../../../../models/MechEquipment'
import { MechEquipmentName } from '../../../../../../models/MechEquipment/MechEquipmentName'
import { DnDType } from '../DnD/Items'

export interface IDragObject {
  type: MechEquipmentName,
  item: IMechEquipmentRecord,
}

interface IRowWrapperProps extends Pick<React.HTMLAttributes<HTMLDivElement>, 'className'>{
  value: IMechEquipmentRecord,
  component: JSX.Element,
}

interface IInjectedDraggableProps {
  connectDragSource: ConnectDragSource,
  connectDragPreview: ConnectDragPreview,
  isDragging: boolean,
}

const criticalSource: DragSourceSpec<IRowWrapperProps, IDragObject> = {
  beginDrag: (props) => ({
    type: props.value.name,
    item: props.value,
  }),
}

const collect: DragSourceCollector<IInjectedDraggableProps> = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging(),
})

class RowWrapper extends React.PureComponent<IRowWrapperProps & IInjectedDraggableProps> {
  public render() {
    const { connectDragSource, connectDragPreview,  isDragging, component, className } = this.props

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

export const DraggableRowWrapper = DragSource(DnDType.Critical, criticalSource, collect)(RowWrapper)
