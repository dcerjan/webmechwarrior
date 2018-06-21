import * as React from 'react'
import { Card } from '../../../../../../components/Common/Card'
import { Detail, DetailColor } from '../../../../../../components/Common/Detail'
import { Range } from '../../../../../../components/Field'
import { getMaxArmorForPart } from '../../../../../../models/Armor'
import { ILeg } from '../../../../../../models/common/Component'
import { getInternalStructureHitPoints } from '../../../../../../models/InternalStructure'
import { IInjectedMechLabProps } from '../../MechLab'
import { Hardpoints } from './Hardpoints'

interface ILegProps extends IInjectedMechLabProps {
  leg: ILeg,
}

export class Leg extends React.PureComponent<ILegProps> {

  public render() {
    const { leg } = this.props
    return (
      <Card title={leg.name}>
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
      </Card>
    )
  }

  private formatArmor = (value: number): string => {
    return `${value}/${this.getMaxLegArmor()}`
  }

  private getMaxLegArmor() {
    const { leg, values } = this.props
    return getMaxArmorForPart(values.tonnage, leg.name)
  }

  private getLegStructure() {
    const { leg, values } = this.props
    return `${getInternalStructureHitPoints(values.tonnage, leg.name)}`
  }
}
