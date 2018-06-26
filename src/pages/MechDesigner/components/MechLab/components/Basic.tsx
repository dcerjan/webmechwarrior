import * as pluralize from 'pluralize'
import * as React from 'react'

import { Card } from '../../../../../components/Common/Card'
import { Detail, DetailColor } from '../../../../../components/Common/Detail'
import { Select, StringInput } from '../../../../../components/Field'
import { segment } from '../../../../../lib/functional'
import { getCockpitTonnage } from '../../../../../models/Cockpit'
import { isAssault, isHeavy, isLight, isMedium, isSuperHeavy, MechClass } from '../../../../../models/common/MechClass'
import { MechType } from '../../../../../models/common/MechType'
import { Tech } from '../../../../../models/common/Tech'
import { EngineType, getEngineTonnage } from '../../../../../models/Engine'
import { getGyroTonnage } from '../../../../../models/Gryo'
import { getInternalStructureTonnage } from '../../../../../models/InternalStructure'
import { JumpJetType } from '../../../../../models/JumpJets'
import { getArmorTonnage, MechTonnage } from '../../../../../models/Mech'
import {
  DEAFULT_BIPEDAL_LOADOUT,
  DEAFULT_QUADRUPEDAL_LOADOUT,
  DEAFULT_TRIPOD_LOADOUT,
  DEFAULT_ASSAULT_TONNAGE,
  DEFAULT_HEAVY_TONNAGE,
  DEFAULT_LIGHT_TONNAGE,
  DEFAULT_MECH_CLASS,
  DEFAULT_MEDIUM_TONNAGE,
  DEFAULT_SUPER_HEAVY_TONNAGE,
} from '../../../state/constants'
import { IInjectedMechLabProps } from '../MechLab'

export class Basic extends React.PureComponent<IInjectedMechLabProps> {

  public render() {
    const { change, select, mech } = this.props

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
            valueChanged={(newTech: Tech) => {
              if (newTech === Tech.Clan && [EngineType.Light, EngineType.Compact].includes(mech.engine.type)) {
                change('engine.type', EngineType.Standard)
              }
            }}
          /> }
          color={DetailColor.TransparentBluishGrey}
        />
        <Detail
          label='Mech Type'
          value={ <Select
            name='type'
            options={Object.values(MechType).map(type => ({ value: type, name: type }))}
            alignment='Right'
            valueChanged={(newType: MechType) => {
              switch (newType) {
              case MechType.Bipedal: return change('loadout', DEAFULT_BIPEDAL_LOADOUT)
              case MechType.Tripod: return change('loadout', DEAFULT_TRIPOD_LOADOUT)
              case MechType.Quadrupedal: return change('loadout', DEAFULT_QUADRUPEDAL_LOADOUT)
              }
            }}
          /> }
          color={DetailColor.TransparentBluishGrey}
        />
        <Detail
          label='Mech Class'
          value={ <Select
            name='class'
            options={Object.values(MechClass).map(type => ({ value: type, name: type }))}
            alignment='Right'
            valueChanged={(newType: MechClass) => {
              const tonnage = select('tonnage') as MechTonnage

              switch (newType) {
              case MechClass.Light: return !isLight(tonnage) && change('tonnage', DEFAULT_LIGHT_TONNAGE)
              case MechClass.Medium: return !isMedium(tonnage) && change('tonnage', DEFAULT_MEDIUM_TONNAGE)
              case MechClass.Heavy: return !isHeavy(tonnage) && change('tonnage', DEFAULT_HEAVY_TONNAGE)
              case MechClass.Assault: return !isAssault(tonnage) && change('tonnage', DEFAULT_ASSAULT_TONNAGE)
              case MechClass.SuperHeavy: return !isSuperHeavy(tonnage) && change('tonnage', DEFAULT_SUPER_HEAVY_TONNAGE)
              }
            }}
          /> }
          color={DetailColor.TransparentBluishGrey}
        />
        { select('class') !== MechClass.SuperHeavy
          ? (
            <Detail
              label='Jump Jets'
              value={ <Select
                name='jumpJetType'
                options={Object.values(JumpJetType).map(jumpJetType => ({ value: jumpJetType, name: jumpJetType }))}
                alignment='Right'
              /> }
              color={DetailColor.TransparentBluishGrey}
            />
          )
          : null }
        <Detail
          label='Tonnage'
          value={ <Select
            name='tonnage'
            options={this.getTonnage().map(t => ({ value: t, name: `${t.toFixed(2)} tons` }))}
            alignment='Right'
          /> }
          color={DetailColor.TransparentBluishGrey}
        />
      </Card>
    )
  }

  private getTonnage(): MechTonnage[] {
    const { select } = this.props
    const mechClass = select('class') || DEFAULT_MECH_CLASS as MechClass

    switch (mechClass) {
    case MechClass.Light: return segment(20, 35, 5) as MechTonnage[]
    case MechClass.Medium: return segment(40, 55, 5) as MechTonnage[]
    case MechClass.Heavy: return segment(60, 75, 5) as MechTonnage[]
    case MechClass.Assault: return segment(80, 100, 5) as MechTonnage[]
    case MechClass.SuperHeavy:
    default: return segment(105, 200, 5) as MechTonnage[]
    }
  }

  private getFreeTonnage() {
    const { mech } = this.props

    const engine = getEngineTonnage(mech.engine.rating, mech.engine.type)
    const gyro = getGyroTonnage(mech.engine.rating, mech.gyro.type)
    const cockpit = getCockpitTonnage(mech.class, mech.cockpit)
    const internal = getInternalStructureTonnage(mech.tonnage, mech.internalStructure)

    const armor = getArmorTonnage(mech.type, mech.tech, mech.armor, mech.loadout)

    const amount = mech.tonnage - engine - gyro - cockpit - internal - armor

    return amount
  }

  private getFreeTonnageDescription() {
    const amount = this.getFreeTonnage()
    return `${amount.toFixed(2)} ${pluralize('ton', amount)}`
  }
}
