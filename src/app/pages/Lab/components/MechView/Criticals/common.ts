import { IBipedalMech, IQuadrupedalMech } from '../../../../../models/Mech'
import { MechEquipmentName } from '../../../../../models/MechEquipment/MechEquipmentName'
import { IHoverContextState } from '../../../state/reducer'

export interface ICriticalProps {
  mech: IBipedalMech | IQuadrupedalMech,
  name: MechEquipmentName,
  setHoverContext: (context: IHoverContextState) => void,
}
