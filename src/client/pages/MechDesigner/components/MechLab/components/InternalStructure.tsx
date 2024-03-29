import * as pluralize from 'pluralize'
import * as React from 'react'

import { Card } from '../../../../../components/Common/Card'
import { Detail, DetailColor } from '../../../../../components/Common/Detail'
import { Select } from '../../../../../components/Field'
import { ISelectOption } from '../../../../../components/Field/Select/common'
import { getMechBipedComponents, getMechQuadrupedComponents } from '../../../../../models/common/MechComponent'
import { MechType } from '../../../../../models/common/MechType'
import {
  getAvailableInternalStructureTypes,
  getInternalStructureCriticals,
  getInternalStructureHitPoints,
  getInternalStructureTonnage,
  InternalStructureType,
} from '../../../../../models/InternalStructure'
import { getLoadoutInternalStructureCriticals } from '../../../../../models/MechEquipment/MechEquipmentUtils'
import { ICommonProps } from '../MechLab'

export class InternalStructure extends React.PureComponent<ICommonProps> {

  public render() {
    return (
      <Card
        title='Internal Structure'
        footer={<div>
          <Detail label='Tonnage' value={this.getInternalStructureTonnage()} />
          <Detail label='Criticals' value={this.getInternalStructureCriticals()} />
          <Detail label='Structure' value={this.getInternalStructure()} />
        </div>}
      >
        <Detail
          label='Type'
          value={ <Select
            name='internalStructure'
            options={this.getInternalStructureTypes()}
            alignment='Right'
          /> }
          color={DetailColor.TransparentBluishGrey}
        />
      </Card>
    )
  }

  private getInternalStructureTonnage() {
    const { mech } = this.props
    const tonnage = getInternalStructureTonnage(mech.tonnage, mech.internalStructure)
    return `${tonnage.toFixed(2)} ${pluralize('ton', tonnage)}`
  }

  private getInternalStructureCriticals() {
    const { mech } = this.props
    const slots = getInternalStructureCriticals(mech.tech, mech.internalStructure)
    const allocated = getLoadoutInternalStructureCriticals(mech.type, mech.loadout)
    return `${allocated}/${slots} ${pluralize('slot', slots)}`
  }

  private getInternalStructure() {
    const { mech } = this.props
    const components = mech.type === MechType.Bipedal
      ? getMechBipedComponents()
      : getMechQuadrupedComponents()

    const points = components.reduce((total, component) =>
      total + getInternalStructureHitPoints(mech.tonnage, component), 0)

    return `${points} pts`
  }

  private getInternalStructureTypes(): Array<ISelectOption<InternalStructureType>> {
    return getAvailableInternalStructureTypes(this.props.mech.tech)
      .map(type => ({ value: type, name: type }))
  }
}
