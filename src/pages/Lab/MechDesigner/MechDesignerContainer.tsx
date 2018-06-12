import * as React from 'react'
import { connect } from 'react-redux'

class MechDesignerContainer extends React.PureComponent<{}> {
  public render() {
    return (
      <div>
        #TODO:
      </div>
    )
  }
}

const ConnectedMechDesigner = connect(
)(MechDesignerContainer)

export {
  ConnectedMechDesigner,
}
