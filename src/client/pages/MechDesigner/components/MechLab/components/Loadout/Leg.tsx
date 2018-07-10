import * as React from 'react'
import { Card } from '../../../../../../components/Common/Card'
import { Detail, DetailColor } from '../../../../../../components/Common/Detail'
import { Range } from '../../../../../../components/Field'
import { BooleanInput } from '../../../../../../components/Field/Input'
import { getMaxArmorForPart } from '../../../../../../models/Armor'
import { ILeg } from '../../../../../../models/common/MechComponent'
import { Tech } from '../../../../../../models/common/Tech'
import { getInternalStructureHitPoints } from '../../../../../../models/InternalStructure'
import { ICommonProps } from '../../MechLab'
import { Criticals } from './Criticals'
import { Hardpoints } from './Hardpoints'

interface ILegProps extends ICommonProps {
  leg: ILeg,
}

export class Leg extends React.PureComponent<ILegProps> {

  public render() {
    const { leg, mech } = this.props
    return (
      <Card
        title={leg.name}
        footer={ <Criticals mech={mech} part={leg} /> }
      >
        <Detail
          label='Armor'
          value={ <Range
            name={`loadout.${leg.name}.armor`}
            alignment='Right'
            min={0}
            max={this.getMaxLegArmor()}
            step={1}
            formater={this.formatArmor}
          /> }
          color={DetailColor.TransparentBluishGrey}
        />
        <Detail label='Structure' value={this.getLegStructure()} color={DetailColor.TransparentBluishGrey} />
        <Hardpoints hardpoints={leg.hardpoints} component={leg.name} />
        { mech.tech === Tech.Clan
          ? <Detail label='CASE Protected' value={ <BooleanInput name={`loadout.${leg.name}.caseProtected`} /> } color={DetailColor.TransparentBluishGrey} />
          : null }
      </Card>
    )
  }

  private formatArmor = (value: number): string => {
    return `${value}/${this.getMaxLegArmor()}`
  }

  private getMaxLegArmor() {
    const { leg, mech } = this.props
    return getMaxArmorForPart(mech.class, mech.tonnage, leg.name)
  }

  private getLegStructure() {
    const { leg, mech } = this.props
    return `${getInternalStructureHitPoints(mech.tonnage, leg.name)}`
  }
}
