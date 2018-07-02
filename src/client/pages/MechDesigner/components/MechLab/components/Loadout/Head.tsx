import * as React from 'react'
import { Card } from '../../../../../../components/Common/Card'
import { Detail, DetailColor } from '../../../../../../components/Common/Detail'
import { Range } from '../../../../../../components/Field'
import { getMaxArmorForPart } from '../../../../../../models/Armor'
import { IHead } from '../../../../../../models/common/MechComponent'
import { getInternalStructureHitPoints } from '../../../../../../models/InternalStructure'
import { ICommonProps } from '../../MechLab'
import { Criticals } from './Criticals'
import { Hardpoints } from './Hardpoints'

interface IHeadProps extends ICommonProps {
  head: IHead,
}

export class Head extends React.PureComponent<IHeadProps> {

  public render() {
    const { head, mech } = this.props
    return (
      <Card
        title={head.name}
        footer={ <Criticals mech={mech} part={head} /> }
      >
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
        <Hardpoints hardpoints={head.hardpoints} component={head.name} />
      </Card>
    )
  }

  private formatArmor = (value: number): string => {
    return `${value}/${this.getMaxHeadArmor()}`
  }

  private getMaxHeadArmor() {
    const { head, mech } = this.props
    return getMaxArmorForPart(mech.class, mech.tonnage, head.name)
  }

  private getHeadStructure() {
    const { head, mech } = this.props
    return `${getInternalStructureHitPoints(mech.tonnage, head.name)}`
  }
}