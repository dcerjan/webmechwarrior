import * as pluralize from 'pluralize'
import * as React from 'react'

import { Card } from '../../../../../components/Common/Card'
import { Detail, DetailColor } from '../../../../../components/Common/Detail'
import { Select } from '../../../../../components/Field'
import { ISelectOption } from '../../../../../components/Field/Select/common'
import {
  getAvaliableGyros,
  getGyroCriticals,
  getGyroHitPoints,
  getGyroTonnage,
  GyroType,
} from '../../../../../models/Gryo'
import { IInjectedLoadoutProps } from '../Loadout'

export class Gyro extends React.PureComponent<IInjectedLoadoutProps> {

  public render() {
    const { values } = this.props

    return (
      <Card
        title='Gyro'
        footer={<div>
          <Detail label='Tonnage' value={this.getGyroTonnage()} />
          <Detail label='Criticals' value={this.getGyroCriticals()} />
          <Detail label='Hit points' value={`${getGyroHitPoints(values.gyro.type)}`} />
        </div>}
      >
        <Detail
          label='Type'
          value={ <Select
            name='gyro.type'
            options={this.getGyroTypes()}
            alignment='Right'
          /> }
          color={DetailColor.TransparentBluishGrey}
        />
      </Card>
    )
  }

  private getGyroTonnage() {
    const { values } = this.props
    const tonnage = getGyroTonnage(values.engine.rating, values.gyro.type)
    return `${tonnage.toFixed(1)} ${pluralize('ton', tonnage)}`
  }

  private getGyroCriticals() {
    const criticals = getGyroCriticals(this.props.values.gyro.type)
    return `${criticals} ${pluralize('slot', criticals)}`
  }

  private getGyroTypes(): Array<ISelectOption<GyroType>> {
    return getAvaliableGyros(this.props.values.tech)
      .map(type => ({ value: type, name: type }))
  }
}
