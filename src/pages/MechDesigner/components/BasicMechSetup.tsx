import * as React from 'react'
import { IMechDesignerState } from '../state/reducer'
import { Loadout } from './Loadout/Loadout'

interface IBasicMechSetupProps {
  mech: IMechDesignerState
}

export class BasicMechSetup extends React.PureComponent<IBasicMechSetupProps> {

  public render() {
    const { mech } = this.props

    return (
      <div>
        <Loadout mech={mech} />
      </div>
    )
  }
}
