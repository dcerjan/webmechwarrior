import * as pluralize from 'pluralize'
import * as React from 'react'

import { Card } from '../../../../../components/Common/Card'
import { Detail, DetailColor } from '../../../../../components/Common/Detail'
import { Select } from '../../../../../components/Field'
import { ISelectOption } from '../../../../../components/Field/Select/common'
import {
  ArmorType,
  getArmorBasePointMultiplier,
  getArmorCriticalSlots,
  getAvailableArmorTypes,
} from '../../../../../models/Armor'
import { getMechBipedComponents, getMechQuadrupedComponents } from '../../../../../models/common/Component'
import { MechType } from '../../../../../models/common/MechType'
import { getMaxArmorHitPoints, } from '../../../../../models/InternalStructure'
import {
  getBipedalLoadoutArmor,
  getQuadrupedalLoadoutArmor,
  IBipedalLoadout,
  IQuadrupedalLoadout,
} from '../../../../../models/Mech'
import { IInjectedMechLabProps } from '../MechLab'

export class Armor extends React.PureComponent<IInjectedMechLabProps> {

  public render() {
    return (
      <Card
        title='Armor'
        footer={<div>
          <Detail label='Tonnage' value={this.getArmorTonnage()} />
          <Detail label='Criticals' value={this.getArmorCriticals()} />
          <Detail label='Armor' value={this.getArmor()} />
        </div>}
      >
        <Detail
          label='Type'
          value={ <Select
            name='armor'
            options={this.getArmorTypes()}
            alignment='Right'
          /> }
          color={DetailColor.TransparentBluishGrey}
        />
      </Card>
    )
  }

  private getArmorTonnage() {
    const { values } = this.props

    const armor = values.type === MechType.Bipedal
      ? getBipedalLoadoutArmor(values.loadout as IBipedalLoadout)
      : getQuadrupedalLoadoutArmor(values.loadout as IQuadrupedalLoadout)

    const tonnage = Math.ceil((armor / (16 * getArmorBasePointMultiplier(values.tech, values.armor))) * 2.0) * 0.5

    return `${tonnage.toFixed(1)} ${pluralize('ton', tonnage)}`
  }

  private getArmorCriticals() {
    const { values } = this.props
    const slots = getArmorCriticalSlots(values.tech, values.armor)
    return `${slots} ${pluralize('slot', slots)}`
  }

  private getArmor() {
    const { values } = this.props
    const components = values.type === MechType.Bipedal
      ? getMechBipedComponents()
      : getMechQuadrupedComponents()

    const points = values.type === MechType.Bipedal
      ? getBipedalLoadoutArmor(values.loadout as IBipedalLoadout)
      : getQuadrupedalLoadoutArmor(values.loadout as IQuadrupedalLoadout)

    const maxPoints = components.reduce((total, component) =>
      total + getMaxArmorHitPoints(values.tonnage, component), 0)

    return `${points}/${maxPoints} pts`
  }

  private getArmorTypes(): Array<ISelectOption<ArmorType>> {
    return getAvailableArmorTypes(this.props.values.tech)
      .map(type => ({ value: type, name: type }))
  }
}
