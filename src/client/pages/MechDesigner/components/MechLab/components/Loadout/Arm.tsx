import * as React from 'react'
import { Card } from '../../../../../../components/Common/Card'
import { Detail, DetailColor } from '../../../../../../components/Common/Detail'
import { Range } from '../../../../../../components/Field'
import { BooleanInput } from '../../../../../../components/Field/Input'
import { getMaxArmorForPart } from '../../../../../../models/Armor'
import { IArm } from '../../../../../../models/common/MechComponent'
import { getInternalStructureHitPoints } from '../../../../../../models/InternalStructure'
import { ICommonProps } from '../../MechLab'
import { Criticals } from './Criticals'
import { Hardpoints } from './Hardpoints'

interface IArmProps extends ICommonProps {
  arm: IArm,
}

export class Arm extends React.PureComponent<IArmProps> {

  public render() {
    const { arm, mech } = this.props
    return (
      <Card
        title={arm.name}
        footer={ <Criticals mech={mech} part={arm} /> }
      >
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
        <Hardpoints hardpoints={arm.hardpoints} component={arm.name} />
        <Detail label='Lower Arm' value={ <BooleanInput name={`loadout.${arm.name}.hasLowerArmActuator`} /> } />
        <Detail label='Hand' value={ <BooleanInput name={`loadout.${arm.name}.hasHandActuator`} /> } />
      </Card>
    )
  }

  private formatArmor = (value: number): string => {
    return `${value}/${this.getMaxArmArmor()}`
  }

  private getMaxArmArmor() {
    const { arm, mech } = this.props
    return getMaxArmorForPart(mech.class, mech.tonnage, arm.name)
  }

  private getArmStructure() {
    const { arm, mech } = this.props
    return `${getInternalStructureHitPoints(mech.tonnage, arm.name)}`
  }
}