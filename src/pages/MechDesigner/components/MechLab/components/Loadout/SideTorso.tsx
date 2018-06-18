import * as React from 'react'
import { Card } from '../../../../../../components/Common/Card'
import { Detail, DetailColor } from '../../../../../../components/Common/Detail'
import { Range } from '../../../../../../components/Field'
import { getMaxArmorForPart } from '../../../../../../models/Armor'
import { ISideTorso } from '../../../../../../models/common/Component'
import { getInternalStructureHitPoints } from '../../../../../../models/InternalStructure'
import { IInjectedMechLabProps } from '../../MechLab'

interface ISideTorsoProps extends IInjectedMechLabProps {
  sideTorso: ISideTorso,
}

export class SideTorso extends React.PureComponent<ISideTorsoProps> {

  public render() {
    const { sideTorso } = this.props
    return (
      <Card title={sideTorso.name}>
        <Detail
          label='Armor'
          value={ <Range
            name={`loadout.${sideTorso.name}.armor`}
            alignment='Right'
            min={0}
            max={this.getMaxSideTorsoArmor()}
            step={1}
            formater={this.formatArmor}
          /> }
          color={DetailColor.TransparentBluishGrey}
        />
        <Detail
          label='Rear Armor'
          value={ <Range
            name={`loadout.${sideTorso.name}.rearArmor`}
            alignment='Right'
            min={0}
            max={this.getMaxSideTorsoRearArmor()}
            step={1}
            formater={this.formatRearArmor}
          /> }
          color={DetailColor.TransparentBluishGrey}
        />
        <Detail label='Structure' value={this.getSideTorsoStructure()} color={DetailColor.TransparentBluishGrey} />
      </Card>
    )
  }

  private formatArmor = (value: number): string => {
    return `${value}/${this.getMaxSideTorsoArmor()}`
  }

  private formatRearArmor = (value: number): string => {
    return `${value}/${this.getMaxSideTorsoRearArmor()}`
  }

  private getMaxSideTorsoArmor() {
    const { sideTorso, values } = this.props
    return getMaxArmorForPart(values.tonnage, sideTorso.name) - sideTorso.rearArmor
  }

  private getMaxSideTorsoRearArmor() {
    const { sideTorso, values } = this.props
    return getMaxArmorForPart(values.tonnage, sideTorso.name) - sideTorso.armor
  }

  private getSideTorsoStructure() {
    const { sideTorso, values } = this.props
    return `${getInternalStructureHitPoints(values.tonnage, sideTorso.name)}`
  }
}
