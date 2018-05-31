import * as React from 'react'
import { connect } from 'react-redux'

import { Worker } from '../../state/Worker';

import { start, stop } from './state/worker';

import { VehicleBay } from './components/VehicleBay'

const mapState = () => ({
})

const mapDispatch = () => ({
})

export class LabContainer extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <Worker start={start} stop={stop}>
        <VehicleBay />
      </Worker>
    )
  }
}

export default connect(mapState, mapDispatch)(LabContainer)
