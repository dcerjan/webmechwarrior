import * as React from 'react'
import { connect } from 'react-redux'
import { getFormValues, InjectedFormProps, reduxForm } from 'redux-form'

import { Card } from '../../../../components/Common/Card'
import { Detail, DetailColor } from '../../../../components/Common/Detail'
import { Select, StringInput } from '../../../../components/Field'
import { segment } from '../../../../lib/functional'
import { MechType } from '../../../../models/common/MechType'
import { Tech } from '../../../../models/common/Tech'
import { IMechDesignerState } from '../../state/reducer'
import { Engine } from './components/Engine'

interface ILoadoutProps {
  mech: IMechDesignerState,
}

export interface IInjectedLoadoutProps {
  values: IMechDesignerState,
}

class Loadout extends React.PureComponent<ILoadoutProps & IInjectedLoadoutProps & InjectedFormProps<ILoadoutProps>> {

  public render() {
    const { mech } = this.props
    return this.renderLoadout(mech.type)
  }

  private renderLoadout(mechType: MechType) {
    switch (mechType) {
    case MechType.Bipedal:
      return this.renderBipedalLoadout()
    case MechType.Quadrupedal:
    return this.renderQudrupedalLoadout()
    }
  }

  private renderBipedalLoadout() {
    const { values } = this.props

    return (
      <div>
        <form>
          { this.basic() }
          <Engine values={values} />
        </form>
      </div>
    )
  }

  private basic() {
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

  private renderQudrupedalLoadout() {
    const { mech } = this.props

    return (
      <div>
        { mech.type }
      </div>
    )
  }
}

const mapState = (state: any, props: ILoadoutProps) => ({
  initialValues: props.mech,
})

const mapInternalState = (state: any) => ({
  values: getFormValues('Lab.Loadout')(state),
})

const LoadoutForm: React.SFC<ILoadoutProps> = (
  connect(mapState)(
    reduxForm({ form: 'Lab.Loadout' })(
      connect(mapInternalState)
        (Loadout)
    )
  )
) as any

export {
  LoadoutForm as Loadout,
}
