import * as React from 'react'
import { DragLayer, DragLayerCollector, XYCoord } from 'react-dnd'
import { Card } from '../../../../../../components/Common/Card'
import { Detail, DetailColor } from '../../../../../../components/Common/Detail'
import { getGearCriticals, MechGear } from '../../../../../../models/MechEquipment'
import { EquipmentType } from '../../../../../../models/MechEquipment/Equipment'
import { GearName } from '../../../../../../models/MechEquipment/GearName'
import { getTargetingComputerWeight } from '../../../../../../models/MechEquipment/MechEquipmentUtils'
import { IMechDesignerMech } from '../../../../state/constants'
import { IDragedEquipment } from '../DnD'
import { getGearDetailColor } from './common'

const layerStyles: React.CSSProperties = {
	position: 'fixed',
	pointerEvents: 'none',
	zIndex: 100,
	left: 0,
	top: 0,
	width: '100%',
	height: '100%',
}

interface IDragPreviewLayerProps {
  item: IDragedEquipment,
  mech: IMechDesignerMech,
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
	return { transform, WebkitTransform: transform, opacity: 0.7 }
}

const collect: DragLayerCollector<IDragPreviewLayerProps, IDragedEquipment> = (monitor) => ({
  item: monitor.getItem(),
  type: monitor.getItemType() as GearName,
  isDragging: monitor.isDragging(),
  initialOffset: monitor.getInitialSourceClientOffset(),
	currentOffset: monitor.getSourceClientOffset(),
})

export const getEquipmentDetailColor = (gear: MechGear): DetailColor => {
  return getGearDetailColor(gear)
}

export class Preview extends React.PureComponent<IDragPreviewLayerProps> {
  public render() {
    const { item, isDragging } = this.props

    return isDragging
      ? (
        <div style={layerStyles}>
          <Card style={getItemStyles(this.props)} >
            <Detail
              label={item.item.name}
              color={getEquipmentDetailColor(item.item)}
              style={{ height: this.getItemCriticals() * 20 }}
            />
          </Card>
        </div>
      )
      : null
  }

  private getItemCriticals() {
    const { item, mech } = this.props

    return item.item.type === EquipmentType.Targeting_Computer
      ? getTargetingComputerWeight(mech.tonnage, mech.type, mech.tech, mech.loadout)
      : getGearCriticals(mech.tonnage, mech.tech, item.item.name)
  }
}


export const DragPreview = DragLayer(collect)(Preview) as React.ComponentClass<Pick<IDragPreviewLayerProps, 'mech'>>
