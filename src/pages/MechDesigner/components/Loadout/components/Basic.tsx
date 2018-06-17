import * as React from 'react'
import { Card } from '../../../../../components/Common/Card'
import { Detail, DetailColor } from '../../../../../components/Common/Detail'
import { Select, StringInput } from '../../../../../components/Field'
import { segment } from '../../../../../lib/functional'
import { MechType } from '../../../../../models/common/MechType'
import { Tech } from '../../../../../models/common/Tech'
import { IInjectedLoadoutProps } from '../Loadout'

export class Basic extends React.PureComponent<IInjectedLoadoutProps> {

  public render() {
    return (
      <Card
        title={ <StringInput name='name' placeholder={'\'Mech name'} /> }
        footer={ <Detail label='Battle Value' value={`over 9000`} /> }
      >
        <Detail
          label='Tech'
          value={ <Select
            name='tech'
            options={Object.values(Tech).map(tech => ({ value: tech, name: tech }))}
            alignment='Right'
          /> }
          color={DetailColor.TransparentBluishGrey}
        />
        <Detail
          label='Mech Type'
          value={ <Select
            name='type'
            options={Object.values(MechType).map(type => ({ value: type, name: type }))}
            alignment='Right'
          /> }
          color={DetailColor.TransparentBluishGrey}
        />
        <Detail
          label='Tonnage'
          value={ <Select
            name='tonnage'
            options={segment(20, 100, 5).map(t => ({ value: t, name: `${t.toFixed(1)} tons` }))}
            alignment='Right'
          /> }
          color={DetailColor.TransparentBluishGrey}
        />
      </Card>
    )
  }
}
