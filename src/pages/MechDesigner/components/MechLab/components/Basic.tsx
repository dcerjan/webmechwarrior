import * as pluralize from 'pluralize'
import * as React from 'react'

import { Card } from '../../../../../components/Common/Card'
import { Detail, DetailColor } from '../../../../../components/Common/Detail'
import { Select, StringInput } from '../../../../../components/Field'
import { segment } from '../../../../../lib/functional'
import { getCockpitTonnage } from '../../../../../models/Cockpit'
import { MechType } from '../../../../../models/common/MechType'
import { Tech } from '../../../../../models/common/Tech'
import { getEngineTonnage } from '../../../../../models/Engine'
import { getGyroTonnage } from '../../../../../models/Gryo'
import { IInjectedMechLabProps } from '../MechLab'

export class Basic extends React.PureComponent<IInjectedMechLabProps> {

  public render() {
    return (
      <Card
        title='Mech'
        footer={
          <Detail
            label='Free tonnage'
            value={this.getFreeTonnageDescription()}
            color={this.getFreeTonnage() < 0
              ? DetailColor.TransparentRed
              : DetailColor.TransaprentBlue}
          />
        }
      >
        <Detail label='Chasis' value={ <StringInput name='name' placeholder={'\'Mech name'} /> } />
        <Detail
          label='Tech'
          value={ <Select
            name='tech'
            options={Object.values(Tech).map(tech => ({ value: tech, name: tech }))}
            alignment='Right'
          /> }
          color={DetailColor.TransparentBluishGrey}
        />
        <Detail
          label='Mech Type'
          value={ <Select
            name='type'
            options={Object.values(MechType).map(type => ({ value: type, name: type }))}
            alignment='Right'
          /> }
          color={DetailColor.TransparentBluishGrey}
        />
        <Detail
          label='Tonnage'
          value={ <Select
            name='tonnage'
            options={segment(20, 100, 5).map(t => ({ value: t, name: `${t.toFixed(1)} tons` }))}
            alignment='Right'
          /> }
          color={DetailColor.TransparentBluishGrey}
        />
      </Card>
    )
  }

  private getFreeTonnage() {
    const { values } = this.props

    const engine = getEngineTonnage(values.engine.rating, values.engine.type)
    const gyro = getGyroTonnage(values.engine.rating, values.gyro.type)
    const cockpit = getCockpitTonnage(values.cockpit)

    const amount = values.tonnage - engine - gyro - cockpit

    return amount
  }

  private getFreeTonnageDescription() {
    const amount = this.getFreeTonnage()
    return `${amount.toFixed(1)} ${pluralize('ton', amount)}`
  }
}
