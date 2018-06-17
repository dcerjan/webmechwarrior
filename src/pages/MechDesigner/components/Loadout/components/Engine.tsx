import * as React from 'react'

import { Card } from '../../../../../components/Common/Card'
import { Detail, DetailColor } from '../../../../../components/Common/Detail'
import { Select } from '../../../../../components/Field'
import { ISelectOption } from '../../../../../components/Field/Select/common'
import { segment } from '../../../../../lib/functional'
import { Component } from '../../../../../models/common/Component'
import { EngineRating, EngineType, getEngineCriticalSlotAllocation, getEngineTonnage, getEngintInternalHeatsinks, getRunningMP, getWalkingMP } from '../../../../../models/Engine'
import { IInjectedLoadoutProps } from '../Loadout'

export class Engine extends React.PureComponent<IInjectedLoadoutProps> {

  public render() {
    const { values } = this.props

    const allocation = getEngineCriticalSlotAllocation(values.engine.type)

    return (
      <Card
        title='Engine'
        footer={<div>
          <Detail
            label='Movement'
            value={`${getWalkingMP(values.engine.rating, values.tonnage)}/${getRunningMP(values.engine.rating, values.tonnage)}`}
          />
          <Detail
            label='Engine Tonnage'
            value={`${getEngineTonnage(values.engine.rating, values.engine.type).toFixed(1)} tons`}
          />
          <Detail
            label='Criticals'
            value={`${allocation[Component.LeftTorso] || '-'}/${allocation[Component.CenterTorso]}/${allocation[Component.RightTorso] || '-'}`}
          />
          <Detail
            label='Heatsinks'
            value={`${getEngintInternalHeatsinks(values.engine.rating)}`}
          />
        </div>}
      >
        <Detail
          label='Rating'
          value={ <Select
            name='engine.rating'
            options={this.getEngineRatings()}
            alignment='Right'
          /> }
          color={DetailColor.TransparentBluishGrey}
        />
        <Detail
          label='Type'
          value={<Select
            name='engine.type'
            options={Object.values(EngineType).map(type => ({ value: type, name: type }))}
            alignment='Right'
          />}
          color={DetailColor.TransparentBluishGrey}
        />
      </Card>
    )
  }

  private getEngineRatings(): Array<ISelectOption<number>> {
    const { values } = this.props

    return segment(10, 400, 5)
      .map((r: EngineRating) => ({
        value: r,
        name: `${r}`,
      }))
      .filter(engine => (
        (getWalkingMP(engine.value, values.tonnage) !== 0) &&
        (getEngineTonnage(engine.value, values.engine.type) <= values.tonnage)
      ))
  }
}
