import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import { Worker } from '../../state/Worker'

import { MechLab } from './components/MechLab'

import { reducer } from './state/reducer'
import { watcher as saga } from './state/saga'


export class MechDesignerContainer extends React.PureComponent<RouteComponentProps<{ id?: string }, {}>> {
  public render() {
    const { match } = this.props

    return (
      <Worker id='Lab.MechDesigner' reducer={reducer} saga={saga}>
        <div>
          <MechLab id={match.params.id} />
        </div>
      </Worker>
    )
  }
}
