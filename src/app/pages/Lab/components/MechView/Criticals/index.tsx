import * as React from 'react'

import { IBipedalMech, IQuadrupedalMech } from '../../../../../models/Mech'
import { MechEquipmentName } from '../../../../../models/MechEquipment/MechEquipmentName'
import { IHoverContextState } from '../../../state/reducer'
import { None } from './None'

export const renderEquipment = (
  mech: IBipedalMech | IQuadrupedalMech,
  equipment: MechEquipmentName,
  setHoverContext: (context: IHoverContextState) => void,
) => {
  switch (getEquipmentType(equipment)) {
  default:
    return <None setHoverContext={setHoverContext} />
  }
}