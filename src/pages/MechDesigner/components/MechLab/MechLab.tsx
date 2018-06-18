import * as React from 'react'
import { connect } from 'react-redux'
import { getFormValues, InjectedFormProps, reduxForm } from 'redux-form'

import { IMechDesignerState } from '../../state/reducer'
import { Armor } from './components/Armor'
import { Basic } from './components/Basic'
import { Cockpit } from './components/Cockpit'
import { Engine } from './components/Engine'
import { Gyro } from './components/Gyro'
import { InternalStructure } from './components/InternalStructure'
import { Loadout } from './components/Loadout/Loadout'
import * as styles from './MechLab.css'

interface ILoadoutProps {
  mech: IMechDesignerState,
}

export interface IInjectedMechLabProps {
  values: IMechDesignerState,
}

class MechLab extends React.PureComponent<ILoadoutProps & IInjectedMechLabProps & InjectedFormProps<ILoadoutProps>> {

  public render() {
    const { values } = this.props

    return (
      <div>
        <form className={styles.MechLab}>
          <div className={styles.Basic}>
            <Basic values={values} />
            <Engine values={values} />
            <Gyro values={values} />
            <Cockpit values={values} />
            <InternalStructure values={values} />
            <Armor values={values} />
          </div>
          <div>
            <Loadout values={values} />
          </div>
        </form>
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

const MechLabForm: React.SFC<ILoadoutProps> = (
  connect(mapState)(
    reduxForm({ form: 'Lab.Loadout' })(
      connect(mapInternalState)
        (MechLab)
    )
  )
) as any

export {
  MechLabForm as MechLab,
}
