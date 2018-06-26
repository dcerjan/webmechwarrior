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
import { getMechBipedComponents, getMechQuadrupedComponents, getMechTripodComponents } from '../../../../../models/common/MechComponent'
import { MechType } from '../../../../../models/common/MechType'
import { getMaxArmorHitPoints, } from '../../../../../models/InternalStructure'
import {
  getBipedalLoadoutArmor,
  getQuadrupedalLoadoutArmor,
  getTripodLoadoutArmor,
  IBipedalLoadout,
  IQuadrupedalLoadout,
  ITripodLoadout,
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
    const { mech } = this.props

    const armor = (() => {
      switch (mech.type) {
      case MechType.Bipedal: return getBipedalLoadoutArmor(mech.loadout as IBipedalLoadout)
      case MechType.Tripod: return getTripodLoadoutArmor(mech.loadout as ITripodLoadout)
      case MechType.Quadrupedal: return getQuadrupedalLoadoutArmor(mech.loadout as IQuadrupedalLoadout)
      }
    })()

    const tonnage = Math.ceil((armor / (16 * getArmorBasePointMultiplier(mech.tech, mech.armor))) * 2.0) * 0.5

    return `${tonnage.toFixed(1)} ${pluralize('ton', tonnage)}`
  }

  private getArmorCriticals() {
    const { mech } = this.props
    const slots = getArmorCriticalSlots(mech.tech, mech.armor)
    return `${slots} ${pluralize('slot', slots)}`
  }

  private getArmor() {
    const { mech } = this.props
    const components = (() => {
      switch (mech.type) {
      case MechType.Bipedal: return getMechBipedComponents()
      case MechType.Tripod: return getMechTripodComponents()
      case MechType.Quadrupedal: return getMechQuadrupedComponents()
      }
    })()

    const points = (() => {
      switch (mech.type) {
      case MechType.Bipedal: return getBipedalLoadoutArmor(mech.loadout as IBipedalLoadout)
      case MechType.Tripod: return getTripodLoadoutArmor(mech.loadout as ITripodLoadout)
      case MechType.Quadrupedal: return getQuadrupedalLoadoutArmor(mech.loadout as IQuadrupedalLoadout)
      }
    })()

    const maxPoints = components.reduce((total, component) =>
      total + getMaxArmorHitPoints(mech.class, mech.tonnage, component), 0)

    return `${points}/${maxPoints} pts`
  }

  private getArmorTypes(): Array<ISelectOption<ArmorType>> {
    return getAvailableArmorTypes(this.props.mech.tech)
      .map(type => ({ value: type, name: type }))
  }
}
