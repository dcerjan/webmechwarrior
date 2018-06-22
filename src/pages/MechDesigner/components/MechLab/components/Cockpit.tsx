import * as pluralize from 'pluralize'
import * as React from 'react'

import { Card } from '../../../../../components/Common/Card'
import { Detail, DetailColor } from '../../../../../components/Common/Detail'
import { Select } from '../../../../../components/Field'
import { ISelectOption } from '../../../../../components/Field/Select/common'
import {
  CockpitType,
  getAvaliableCockpits,
  getCockpitCriticals,
  getCockpitHitPoints,
  getCockpitTonnage,
  getLifeSupportCriticals,
  getSensorsCriticals,
} from '../../../../../models/Cockpit'
import { IInjectedMechLabProps } from '../MechLab'

export class Cockpit extends React.PureComponent<IInjectedMechLabProps> {

  public render() {
    const { values } = this.props

    return (
      <Card
        title='Cockpit'
        footer={<div>
          <Detail label='Tonnage' value={this.getCockpitTonnage()} />
          <Detail label='Criticals' value={this.getCockpitCriticals()} />
          <Detail label='Sensors' value={this.getSensorsCriticals()} />
          <Detail label='Life Support' value={this.getLifeSupportCriticals()} />
          <Detail label='Hit points' value={`${getCockpitHitPoints(values.cockpit)}`} />
        </div>}
      >
        <Detail
          label='Type'
          value={ <Select
            name='cockpit'
            options={this.getCokcpitTypes()}
            alignment='Right'
          /> }
          color={DetailColor.TransparentBluishGrey}
        />
      </Card>
    )
  }

  private getCockpitTonnage() {
    const { values } = this.props
    const tonnage = getCockpitTonnage(values.class, values.cockpit)
    return `${tonnage.toFixed(1)} ${pluralize('ton', tonnage)}`
  }

  private getCockpitCriticals() {
    const criticals = getCockpitCriticals(this.props.values.cockpit)
    return `${criticals} ${pluralize('slot', criticals)}`
  }

  private getSensorsCriticals() {
    const criticals = getSensorsCriticals(this.props.values.cockpit)
    return `${criticals} ${pluralize('slot', criticals)}`
  }

  private getLifeSupportCriticals() {
    const criticals = getLifeSupportCriticals(this.props.values.cockpit)
    return `${criticals} ${pluralize('slot', criticals)}`
  }

  private getCokcpitTypes(): Array<ISelectOption<CockpitType>> {
    const { values } = this.props
    return getAvaliableCockpits(values.tech, values.class)
      .map(type => ({ value: type, name: type }))
  }
}
