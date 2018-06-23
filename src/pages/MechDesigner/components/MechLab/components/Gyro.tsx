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
import { IInjectedMechLabProps } from '../MechLab'

export class Gyro extends React.PureComponent<IInjectedMechLabProps> {

  public render() {
    const { mech } = this.props

    return (
      <Card
        title='Gyro'
        footer={<div>
          <Detail label='Tonnage' value={this.getGyroTonnage()} />
          <Detail label='Criticals' value={this.getGyroCriticals()} />
          <Detail label='Hit points' value={`${getGyroHitPoints(mech.gyro.type)}`} />
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
    const { mech } = this.props
    const tonnage = getGyroTonnage(mech.engine.rating, mech.gyro.type)
    return `${tonnage.toFixed(1)} ${pluralize('ton', tonnage)}`
  }

  private getGyroCriticals() {
    const criticals = getGyroCriticals(this.props.mech.gyro.type)
    return `${criticals} ${pluralize('slot', criticals)}`
  }

  private getGyroTypes(): Array<ISelectOption<GyroType>> {
    return getAvaliableGyros(this.props.mech.tech)
      .map(type => ({ value: type, name: type }))
  }
}
