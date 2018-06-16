import * as React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { Worker } from '../../state/Worker'

import { start, stop } from './state/worker'

import { VehicleBay } from './components/VehicleBay'
import {
  setActiveTab,
  setHoverContext,
} from './state/actions'
import { IComponentExplorerState, IHoverContextState } from './state/reducer'
import {
  componentExplorerStateSelector,
  hoverContextSelector,
} from './state/selectors'

const mapState = createStructuredSelector({
  componentExplorer: componentExplorerStateSelector,
  hoverContext: hoverContextSelector,
})

const mapDispatch = {
  setActiveTab,
  setHoverContext,
}

interface ILabContainerProps {
  componentExplorer: IComponentExplorerState,
  hoverContext: IHoverContextState,
  setActiveTab: (tab: string) => void,
  setHoverContext: (context: IHoverContextState) => void,
}

export class LabContainer extends React.PureComponent<ILabContainerProps, {}> {
  public render() {
    const {
      componentExplorer,
      hoverContext,
      setActiveTab,
      setHoverContext,
    } = this.props

    return (
      <Worker start={start} stop={stop}>
        <VehicleBay
          componentExplorer={componentExplorer}
          hoverContext={hoverContext}
          setActiveTab={setActiveTab}
          setHoverContext={setHoverContext}
        />
      </Worker>
    )
  }
}

export default connect(mapState, mapDispatch)(LabContainer as any)
