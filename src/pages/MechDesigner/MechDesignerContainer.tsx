import * as React from 'react'
import { connect } from 'react-redux'

import { Worker } from '../../state/Worker'

import { createStructuredSelector } from 'reselect'
import { MechLab } from './components/MechLab'
import { setEquipmentTableTab } from './state/action'
import { IEquipmentState, IMechDesignerState } from './state/reducer'
import { selectMechDesignerEquipmentState, selectMechDesignerState } from './state/selectors'
import { start } from './state/worker'
import { stop } from './state/worker'

interface IMechDesignerStateProps {
  state: IMechDesignerState,
  equipment: IEquipmentState,
}

interface IMechDesignerDispatchProps {
  setEquipmentTableTab: (tab: string) => void,
}

const mapState = createStructuredSelector<any, IMechDesignerStateProps>({
  state: selectMechDesignerState,
  equipment: selectMechDesignerEquipmentState,
})

const mapDispatch: IMechDesignerDispatchProps = {
  setEquipmentTableTab,
}

export class MechDesignerContainer extends React.PureComponent<IMechDesignerStateProps & IMechDesignerDispatchProps> {
  public render() {
    const { state, equipment, setEquipmentTableTab } = this.props

    return (
      <Worker start={start} stop={stop}>
        <div>
          <MechLab
            state={state}
            equipment={equipment}
            setEquipmentTableTab={setEquipmentTableTab}
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
