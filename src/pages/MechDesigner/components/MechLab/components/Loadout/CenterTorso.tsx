import * as React from 'react'
import { Card } from '../../../../../../components/Common/Card'
import { Detail, DetailColor } from '../../../../../../components/Common/Detail'
import { Range } from '../../../../../../components/Field'
import { getMaxArmorForPart } from '../../../../../../models/Armor'
import { ICenterTorso } from '../../../../../../models/common/Component'
import { getInternalStructureHitPoints } from '../../../../../../models/InternalStructure'
import { IInjectedMechLabProps } from '../../MechLab'

interface ICenterTorsoProps extends IInjectedMechLabProps {
  centerTorso: ICenterTorso,
}

export class CenterTorso extends React.PureComponent<ICenterTorsoProps> {

  public render() {
    const { centerTorso } = this.props
    return (
      <Card title={centerTorso.name}>
        <Detail
          label='Armor'
          value={ <Range
            name={`loadout.${centerTorso.name}.armor`}
            alignment='Right'
            min={0}
            max={this.getMaxCenterTorsoArmor()}
            step={1}
            formater={this.formatArmor}
          /> }
          color={DetailColor.TransparentBluishGrey}
        />
        <Detail
          label='Rear Armor'
          value={ <Range
            name={`loadout.${centerTorso.name}.rearArmor`}
            alignment='Right'
            min={0}
            max={this.getMaxCenterTorsoRearArmor()}
            step={1}
            formater={this.formatRearArmor}
          /> }
          color={DetailColor.TransparentBluishGrey}
        />
        <Detail label='Structure' value={this.getCenterTorsoStructure()} color={DetailColor.TransparentBluishGrey} />
      </Card>
    )
  }

  private formatArmor = (value: number): string => {
    return `${value}/${this.getMaxCenterTorsoArmor()}`
  }

  private formatRearArmor = (value: number): string => {
    return `${value}/${this.getMaxCenterTorsoRearArmor()}`
  }

  private getMaxCenterTorsoArmor() {
    const { centerTorso, values } = this.props
    return getMaxArmorForPart(values.tonnage, centerTorso.name) - centerTorso.rearArmor
  }

  private getMaxCenterTorsoRearArmor() {
    const { centerTorso, values } = this.props
    return getMaxArmorForPart(values.tonnage, centerTorso.name) - centerTorso.armor
  }

  private getCenterTorsoStructure() {
    const { centerTorso, values } = this.props
    return `${getInternalStructureHitPoints(values.tonnage, centerTorso.name)}`
  }
}