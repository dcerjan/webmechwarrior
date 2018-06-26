import * as pluralize from 'pluralize'
import * as React from 'react'

import { Card } from '../../../../../components/Common/Card'
import { Detail, DetailColor } from '../../../../../components/Common/Detail'
import { Range, Select } from '../../../../../components/Field'
import { ISelectOption } from '../../../../../components/Field/Select/common'
import { segment } from '../../../../../lib/functional'
import { MechComponent } from '../../../../../models/common/MechComponent'
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
import { getAvaliableHeatsinkTypes, HeatsinkType } from '../../../../../models/Heatsink'
import { IInjectedMechLabProps } from '../MechLab'

export class Engine extends React.PureComponent<IInjectedMechLabProps> {

  public render() {
    const { mech, change, select } = this.props

    return (
      <Card
        title='Engine'
        footer={<div>
          <Detail label='Movement' value={this.getMechMovement()} />
          <Detail label='Engine Tonnage' value={this.getEngineTonnage()} />
          <Detail label='Criticals' value={this.getEngineCriticals()} />
          { getEngintInternalHeatsinks(mech.engine.rating) <= 10
            ? <Detail label='Engine Heatsinks' value={`${getEngintInternalHeatsinks(mech.engine.rating)}`} />
            : null }
          { this.getUnallocatedHeatsinks() > 0
            ? <Detail label='Alloc. Heatsinks' value={`${this.getUnallocatedHeatsinks()}`} />
            : null }
          <Detail label='Hit points' value={`${getEngineHitPoints(mech.engine.rating)}`} />
        </div>}
      >
        <Detail
          label='Rating'
          value={ <Select
            name='engine.rating'
            options={this.getEngineRatings()}
            alignment='Right'
            valueChanged={(newRating: EngineRating) => {
              const newInternalHeatsinks = getEngintInternalHeatsinks(newRating)
              const currentInternalHeatsinks = select('engine.internalHeatsinks') as number
              if (newInternalHeatsinks < currentInternalHeatsinks) {
                change('engine.internalHeatsinks', newInternalHeatsinks)
              }
            }}
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
        <Detail
          label='Heatsink Type'
          value={ <Select
            name='engine.heatsinkType'
            options={this.getHeatsinkTypes()}
            alignment='Right'
          /> }
          color={DetailColor.TransparentBluishGrey}
        />
        { getEngintInternalHeatsinks(mech.engine.rating) > 10
          ? (
            <Detail
              label='Engine Heatsinks'
              value={ <Range
                name='engine.internalHeatSinks'
                alignment='Right'
                min={10}
                max={getEngintInternalHeatsinks(mech.engine.rating)}
                step={1}
                formater={(heatsinks) => `${heatsinks}/${getEngintInternalHeatsinks(mech.engine.rating)}`}
              /> }
              color={DetailColor.TransparentBluishGrey}
            />
          )
          : null
        }
      </Card>
    )
  }

  private getMechMovement() {
    const { mech } = this.props
    const walking = getWalkingMP(mech.engine.rating, mech.tonnage)
    const running = getRunningMP(mech.engine.rating, mech.tonnage)
    return `${walking}/${running}`
  }

  private getEngineTonnage() {
    const { mech } = this.props
    const tonnage = getEngineTonnage(mech.engine.rating, mech.engine.type)
    return `${tonnage.toFixed(1)} ${pluralize('ton', tonnage)}`
  }

  private getEngineCriticals() {
    const allocation = getEngineCriticalSlotAllocation(this.props.mech.tech, this.props.mech.engine.type)
    return `${allocation[MechComponent.LeftTorso] || '-'}/${allocation[MechComponent.CenterTorso]}/${allocation[MechComponent.RightTorso] || '-'}`
  }

  private getUnallocatedHeatsinks() {
    const internalHeatsinks = getEngintInternalHeatsinks(this.props.mech.engine.rating)
    return internalHeatsinks < 10
      ? 10 - getEngintInternalHeatsinks(this.props.mech.engine.rating)
      : 0
  }

  private getEngineRatings(): Array<ISelectOption<number>> {
    const { mech } = this.props

    return segment(10, 500, 5)
      .map((r: EngineRating) => ({
        value: r,
        name: `${r} ${getEngineManufacturer(r)}`,
      }))
      .filter(engine => (
        (getWalkingMP(engine.value, mech.tonnage) !== 0) &&
        (getEngineTonnage(engine.value, mech.engine.type) <= mech.tonnage)
      ))
  }

  private getEngineTypes(): Array<ISelectOption<EngineType>> {
    return getAvailableEngines(this.props.mech.tech)
      .map(engine => ({ value: engine, name: engine }))
  }

  private getHeatsinkTypes(): Array<ISelectOption<HeatsinkType>> {
    return getAvaliableHeatsinkTypes(this.props.mech.tech)
      .map(heatsink => ({ value: heatsink, name: heatsink }))
  }
}
