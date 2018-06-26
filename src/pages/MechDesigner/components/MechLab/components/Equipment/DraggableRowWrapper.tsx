import * as React from 'react'
import { ConnectDragSource, DragSource, DragSourceCollector, DragSourceSpec } from 'react-dnd'

import { ComponentClass } from 'react-redux'
import { IMechEquipmentRecord } from '../../../../../../models/MechEquipment'
import { DnDType } from '../DnD/Items'

interface IRowWrapperProps {
  value: IMechEquipmentRecord,
  component: JSX.Element,
}

interface IInjectedDraggableProps {
  connectDragSource: ConnectDragSource,
  isDragging: boolean,
}

const criticalSource: DragSourceSpec<IRowWrapperProps> = {
  beginDrag: (item) => {
    return item
  }
}

const collect: DragSourceCollector = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class RowWrapper extends React.PureComponent<IRowWrapperProps & IInjectedDraggableProps> {
  public render() {
    const { connectDragSource, isDragging, component } = this.props

    return connectDragSource(
      <div
        style={{ opacity: isDragging ? 0.5 : 1.0, width: 10, height: 20, background: 'red' }}
      >
        { component }
      </div>
    )
  }
}

export const DraggableRowWrapper = DragSource(DnDType.Critical, criticalSource, collect)(RowWrapper) as ComponentClass<IRowWrapperProps>

