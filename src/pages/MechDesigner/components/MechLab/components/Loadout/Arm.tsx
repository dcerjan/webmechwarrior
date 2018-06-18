import * as React from 'react'
import { Card } from '../../../../../../components/Common/Card'
import { Detail, DetailColor } from '../../../../../../components/Common/Detail'
import { Range } from '../../../../../../components/Field'
import { getMaxArmorForPart } from '../../../../../../models/Armor'
import { IArm } from '../../../../../../models/common/Component'
import { getInternalStructureHitPoints } from '../../../../../../models/InternalStructure'
import { IInjectedMechLabProps } from '../../MechLab'
import { Hardpoints } from './Hardpoints'

interface IArmProps extends IInjectedMechLabProps {
  arm: IArm,
}

export class Arm extends React.PureComponent<IArmProps> {

  public render() {
    const { arm } = this.props
    return (
      <Card title={arm.name}>
        <Detail
          label='Armor'
          value={ <Range
            name={`loadout.${arm.name}.armor`}
            alignment='Right'
            min={0}
            max={this.getMaxArmArmor()}
            step={1}
            formater={this.formatArmor}
          /> }
          color={DetailColor.TransparentBluishGrey}
        />
        <Detail label='Structure' value={this.getArmStructure()} color={DetailColor.TransparentBluishGrey} />
        <Hardpoints hardpoints={arm.hardpoints} />
      </Card>
    )
  }

  private formatArmor = (value: number): string => {
    return `${value}/${this.getMaxArmArmor()}`
  }

  private getMaxArmArmor() {
    const { arm, values } = this.props
    return getMaxArmorForPart(values.tonnage, arm.name)
  }

  private getArmStructure() {
    const { arm, values } = this.props
    return `${getInternalStructureHitPoints(values.tonnage, arm.name)}`
  }
}