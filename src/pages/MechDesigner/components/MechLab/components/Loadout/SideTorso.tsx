import * as React from 'react'
import { Card } from '../../../../../../components/Common/Card'
import { Detail, DetailColor } from '../../../../../../components/Common/Detail'
import { Range } from '../../../../../../components/Field'
import { getMaxArmorForPart } from '../../../../../../models/Armor'
import { ISideTorso } from '../../../../../../models/common/MechComponent'
import { getInternalStructureHitPoints } from '../../../../../../models/InternalStructure'
import { IInjectedMechLabProps } from '../../MechLab'
import { Criticals } from './Criticals'
import { Hardpoints } from './Hardpoints'

interface ISideTorsoProps extends IInjectedMechLabProps {
  sideTorso: ISideTorso,
}

export class SideTorso extends React.PureComponent<ISideTorsoProps> {

  public render() {
    const { sideTorso, mech } = this.props
    return (
      <Card
        title={sideTorso.name}
        footer={ <Criticals mech={mech} part={sideTorso} /> }
      >
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
        <Hardpoints hardpoints={sideTorso.hardpoints} component={sideTorso.name} />
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
    const { sideTorso, mech } = this.props
    return getMaxArmorForPart(mech.class, mech.tonnage, sideTorso.name) - sideTorso.rearArmor
  }

  private getMaxSideTorsoRearArmor() {
    const { sideTorso, mech } = this.props
    return getMaxArmorForPart(mech.class, mech.tonnage, sideTorso.name) - sideTorso.armor
  }

  private getSideTorsoStructure() {
    const { sideTorso, mech } = this.props
    return `${getInternalStructureHitPoints(mech.tonnage, sideTorso.name)}`
  }
}
