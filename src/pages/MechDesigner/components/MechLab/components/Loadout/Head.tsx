import * as React from 'react'
import { Card } from '../../../../../../components/Common/Card'
import { Detail, DetailColor } from '../../../../../../components/Common/Detail'
import { Range } from '../../../../../../components/Field'
import { getMaxArmorForPart } from '../../../../../../models/Armor'
import { IHead } from '../../../../../../models/common/Component'
import { getInternalStructureHitPoints } from '../../../../../../models/InternalStructure'
import { IInjectedMechLabProps } from '../../MechLab'

interface IHeadProps extends IInjectedMechLabProps {
  head: IHead,
}

export class Head extends React.PureComponent<IHeadProps> {

  public render() {
    const { head } = this.props
    return (
      <Card title={head.name}>
        <Detail
          label='Armor'
          value={ <Range
            name={`loadout.${head.name}.armor`}
            alignment='Right'
            min={0}
            max={this.getMaxHeadArmor()}
            step={1}
            formater={this.formatArmor}
          /> }
          color={DetailColor.TransparentBluishGrey}
        />
        <Detail label='Structure' value={this.getHeadStructure()} color={DetailColor.TransparentBluishGrey} />
      </Card>
    )
  }

  private formatArmor = (value: number): string => {
    return `${value}/${this.getMaxHeadArmor()}`
  }

  private getMaxHeadArmor() {
    const { head, values } = this.props
    return getMaxArmorForPart(values.tonnage, head.name)
  }

  private getHeadStructure() {
    const { head, values } = this.props
    return `${getInternalStructureHitPoints(values.tonnage, head.name)}`
  }
}