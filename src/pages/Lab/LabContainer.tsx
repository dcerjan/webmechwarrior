import * as React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { Worker } from '../../state/Worker'

import { start, stop } from './state/worker'

import { VehicleBay } from './components/VehicleBay'
import { setActiveTab } from './state/actions'
import { IComponentExplorerState } from './state/reducer'
import { componentExplorerStateSelector } from './state/selectors'

const mapState = createStructuredSelector({
  componentExplorer: componentExplorerStateSelector,
})

const mapDispatch = {
  setActiveTab,
}

interface ILabContainerProps {
  componentExplorer: IComponentExplorerState,
  setActiveTab: (tab: string) => void,
}

export class LabContainer extends React.PureComponent<ILabContainerProps, {}> {
  public render() {
    const {
      componentExplorer,
      setActiveTab,
    } = this.props

    return (
      <Worker start={start} stop={stop}>
        <VehicleBay
          componentExplorer={componentExplorer}
          setActiveTab={setActiveTab}
        />
      </Worker>
    )
  }
}

export default connect(mapState, mapDispatch)(LabContainer as any)
