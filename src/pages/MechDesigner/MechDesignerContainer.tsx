import * as React from 'react'
import { connect } from 'react-redux'

import { Worker } from '../../state/Worker'

import { createStructuredSelector } from 'reselect'
import { BasicMechSetup } from './components/BasicMechSetup'
import { setChassisName } from './state/action'
import { IMechDesignerState } from './state/reducer'
import { selectMechDesignerState } from './state/selectors'
import { start } from './state/worker'
import { stop } from './state/worker'

interface IMechDesignerProps {
  mech: IMechDesignerState,
}

const mapState = createStructuredSelector<any, IMechDesignerProps>({
  mech: selectMechDesignerState,
})

const mapDispatch = {
  setChassisName,
}

export class MechDesignerContainer extends React.PureComponent<IMechDesignerProps> {
  public render() {
    const { mech } = this.props

    return (
      <Worker start={start} stop={stop}>
        <div>
          <BasicMechSetup
            mech={mech}
          />
        </div>
      </Worker>
    )
  }
}

const ConnectedMechDesigner = connect(
  mapState,
  mapDispatch,
)(MechDesignerContainer)

export {
  ConnectedMechDesigner,
}
