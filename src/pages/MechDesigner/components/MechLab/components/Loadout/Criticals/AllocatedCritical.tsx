import * as React from 'react'
import { DragSource, DragSourceCollector, DragSourceSpec } from 'react-dnd'
import { getEmptyImage } from 'react-dnd-html5-backend'
import { change } from 'redux-form'

import { Detail, DetailColor } from '../../../../../../../components/Common/Detail'
import { getEquipmentMeta } from '../../../../../../../models/MechEquipment'
import { DnDType, IDragedEquipment, IInjectedDragSourceProps } from '../../DnD'
import { ICriticalDescriptor } from './Criticals'

import { IBaseMechPart } from '../../../../../../../models/common/MechComponent'
import { store } from '../../../../../../../state/store'
import * as styles from './Criticals.css'


interface IAllocatedCriticalProps extends Pick<React.HTMLAttributes<HTMLDivElement>, 'className'> {
  descriptor: ICriticalDescriptor,
  mechComponent?: IBaseMechPart,
  index: number,
}

const criticalDragSource: DragSourceSpec<IAllocatedCriticalProps, IDragedEquipment> = {
  beginDrag: (props) => ({
    item: getEquipmentMeta(props.descriptor.equipment),
    mechComponent: props.mechComponent,
    index: props.index,
  }),
  endDrag: (props, monitor) => {
    const part = monitor.getDropResult()
    if (part) {
      const component = part.mechComponent as IBaseMechPart
      const item = monitor.getItem() as IDragedEquipment
      const mechComponent = item.mechComponent

      // #TODO: check wether it is possible to drop the item here at all
      if (mechComponent) {
        store.dispatch(change('Lab.Mech', `loadout.${mechComponent.name}.equipment`, mechComponent.equipment.filter((_, i) => i !== item.index)))
      }

      store.dispatch(change('Lab.Mech', `loadout.${component.name}.equipment`, [...component.equipment, item.item.name]))
    } else {
      const item = monitor.getItem() as IDragedEquipment
      const mechComponent = item.mechComponent
      if (mechComponent) {
        store.dispatch(change('Lab.Mech', `loadout.${mechComponent.name}.equipment`, mechComponent.equipment.filter((_, i) => i !== item.index)))
      }
    }
  }
}

const criticalsDragCollect: DragSourceCollector<IInjectedDragSourceProps> = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging(),
})

class AllocatedCritical extends React.PureComponent<IAllocatedCriticalProps & IInjectedDragSourceProps> {

  public render() {
    const { descriptor, index, connectDragSource, connectDragPreview, isDragging } = this.props

    if (connectDragPreview) {
			connectDragPreview(getEmptyImage(), { captureDraggingState: true })
    }

    return connectDragSource(
      <div className={styles.DetailWrapperBorderHack}>
        <Detail
          key={`${descriptor.equipment}:${index}`}
          label={descriptor.equipment}
          color={isDragging ? DetailColor.DragSourceActive : descriptor.color}
          style={{ height: descriptor.criticals * 20 - 1 /* -1 is to acomodate for missing border */ }}
        />
      </div>
    )
  }
}


const DraggableAllocatedCritical = DragSource(DnDType.Critical, criticalDragSource, criticalsDragCollect)(AllocatedCritical)

export {
  DraggableAllocatedCritical as AllocatedCritical,
}