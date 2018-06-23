import * as React from 'react'
import { connect } from 'react-redux'

import { Worker } from '../../state/Worker'

import { createStructuredSelector } from 'reselect'
import { MechLab } from './components/MechLab'
import { setEquipmentTableTab } from './state/action'
import { IMechDesignerState } from './state/reducer'
import { selectMechDesignerState } from './state/selectors'
import { start } from './state/worker'
import { stop } from './state/worker'

interface IMechDesignerProps {
  state: IMechDesignerState,
}

const mapState = createStructuredSelector<any, IMechDesignerProps>({
  state: selectMechDesignerState,
})

const mapDispatch = {
  setEquipmentTableTab,
}

export class MechDesignerContainer extends React.PureComponent<IMechDesignerProps> {
  public render() {
    const { state } = this.props

    return (
      <Worker start={start} stop={stop}>
        <div>
          <MechLab state={state} />
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
