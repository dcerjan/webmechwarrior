import * as pluralize from 'pluralize'
import * as React from 'react'

import { Card } from '../../../../../components/Common/Card'
import { Detail, DetailColor } from '../../../../../components/Common/Detail'
import { Select } from '../../../../../components/Field'
import { ISelectOption } from '../../../../../components/Field/Select/common'
import { segment } from '../../../../../lib/functional'
import { Component } from '../../../../../models/common/Component'
import {
  EngineRating,
  EngineType,
  getAvailableEngines,
  getEngineCriticalSlotAllocation,
  getEngineHitPoints,
  getEngineManufacturer,
  getEngineTonnage,
  getEngintInternalHeatsinks,
  getRunningMP,
  getWalkingMP,
} from '../../../../../models/Engine'
import { IInjectedMechLabProps } from '../MechLab'

export class Engine extends React.PureComponent<IInjectedMechLabProps> {

  public render() {
    const { values } = this.props

    return (
      <Card
        title='Engine'
        footer={<div>
          <Detail label='Movement' value={this.getMechMovement()} />
          <Detail label='Engine Tonnage' value={this.getEngineTonnage()} />
          <Detail label='Criticals' value={this.getEngineCriticals()} />
          <Detail label='Heatsinks' value={this.getInternalEngineHeatsinks()} />
          <Detail label='Hit points' value={`${getEngineHitPoints(values.engine.rating)}`} />
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
            options={this.getEngineTypes()}
            alignment='Right'
          />}
          color={DetailColor.TransparentBluishGrey}
        />
      </Card>
    )
  }

  private getMechMovement() {
    const { values } = this.props
    const walking = getWalkingMP(values.engine.rating, values.tonnage)
    const running = getRunningMP(values.engine.rating, values.tonnage)
    return `${walking}/${running}`
  }

  private getEngineTonnage() {
    const { values } = this.props
    const tonnage = getEngineTonnage(values.engine.rating, values.engine.type)
    return `${tonnage.toFixed(1)} ${pluralize('ton', tonnage)}`
  }

  private getEngineCriticals() {
    const allocation = getEngineCriticalSlotAllocation(this.props.values.tech, this.props.values.engine.type)
    return `${allocation[Component.LeftTorso] || '-'}/${allocation[Component.CenterTorso]}/${allocation[Component.RightTorso] || '-'}`
  }

  private getInternalEngineHeatsinks() {
    return `${getEngintInternalHeatsinks(this.props.values.engine.rating)}`
  }

  private getEngineRatings(): Array<ISelectOption<number>> {
    const { values } = this.props

    return segment(10, 400, 5)
      .map((r: EngineRating) => ({
        value: r,
        name: `${r} ${getEngineManufacturer(r)}`,
      }))
      .filter(engine => (
        (getWalkingMP(engine.value, values.tonnage) !== 0) &&
        (getEngineTonnage(engine.value, values.engine.type) <= values.tonnage)
      ))
  }

  private getEngineTypes(): Array<ISelectOption<EngineType>> {
    return getAvailableEngines(this.props.values.tech)
      .map(engine => ({ value: engine, name: engine }))
  }
}
