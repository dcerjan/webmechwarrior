import * as React from 'react'
import { DragLayer, DragLayerCollector, XYCoord } from 'react-dnd'
import { MechEquipmentName } from '../../../../../../models/MechEquipment/MechEquipmentName'
import { IDragObject } from './DraggableRowWrapper'

const layerStyles: React.CSSProperties = {
	position: 'fixed',
	pointerEvents: 'none',
	zIndex: 100,
	left: 0,
	top: 0,
	width: '100%',
	height: '100%',
}

interface IDragPreviewLayerProps extends IDragObject{
	initialOffset?: XYCoord
	currentOffset?: XYCoord
	isDragging?: boolean
}

const getItemStyles = (props: IDragPreviewLayerProps) => {
	const { initialOffset, currentOffset } = props
	if (!initialOffset || !currentOffset) {
		return {
			display: 'none',
		}
	}

	const { x, y } = currentOffset

	const transform = `translate(${x}px, ${y}px)`
	return { transform, WebkitTransform: transform }
}

const collect: DragLayerCollector<IDragPreviewLayerProps, IDragObject> = (monitor) => ({
  item: monitor.getItem(),
  type: monitor.getItemType() as MechEquipmentName,
  isDragging: monitor.isDragging(),
  initialOffset: monitor.getInitialSourceClientOffset(),
	currentOffset: monitor.getSourceClientOffset(),
})

export class Preview extends React.PureComponent<IDragPreviewLayerProps> {
  public render() {
    const { item, type, isDragging } = this.props

    console.log(isDragging, item, type)
    return isDragging
      ? (
        <div style={layerStyles}>
          <div style={getItemStyles(this.props)}>
            { type }
            { item.name }
          </div>
        </div>
      )
      : null
  }
}


export const DragPreview = DragLayer(collect)(Preview) as React.ComponentClass<{}>
