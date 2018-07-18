import { ConnectDragPreview, ConnectDragSource, ConnectDropTarget, DragSourceCollector, DropTargetCollector } from 'react-dnd'

import { IBaseMechPart } from '../../../../../../models/common/MechComponent'
import { MechGear } from '../../../../../../models/MechEquipment'

export enum DnDType {
  Critical = 'Critical',
}

export interface IDragedEquipment {
  item: MechGear,
  mechComponent?: IBaseMechPart
  index?: number,
}

export interface IInjectedDragSourceProps {
  connectDragSource: ConnectDragSource,
  connectDragPreview: ConnectDragPreview,
  isDragging: boolean,
}

export const sourceCollect: DragSourceCollector<IInjectedDragSourceProps> = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging(),
})

export interface IInjectedDropTargetProps {
  connectDropTarget: ConnectDropTarget,
  isOver: boolean,
  canDrop: boolean,
  descriptor: MechGear,
}

export const targetCollect: DropTargetCollector<IInjectedDropTargetProps> = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: Boolean(monitor.isOver()),
  canDrop: Boolean(monitor.canDrop()),
  descriptor: monitor.getItem() && monitor.getItem().item,
})
