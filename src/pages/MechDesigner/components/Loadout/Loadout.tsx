import * as React from 'react'
import { connect } from 'react-redux'
import { getFormValues, InjectedFormProps, reduxForm } from 'redux-form'

import { MechType } from '../../../../models/common/MechType'
import { IMechDesignerState } from '../../state/reducer'
import { Basic } from './components/Basic'
import { Cockpit } from './components/Cockpit'
import { Engine } from './components/Engine'
import { Gyro } from './components/Gyro'

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
          <Basic values={values} />
          <Engine values={values} />
          <Gyro values={values} />
          <Cockpit values={values} />
        </form>
      </div>
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
