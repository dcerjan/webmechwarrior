import * as React from 'react'
import { IHead } from '../../../../../models/common/Component'

interface IHeadProps {
  head: IHead
}

export class Head extends React.PureComponent<IHeadProps> {

  public render() {
    const { head } = this.props
    return (
      /* Card */
      <div>
        { /* Title */ }
        <div>
          <div>{head.name}</div>
          <div>{JSON.stringify(head.hardpoints)}</div>
        </div>
        { /* Body */ }
        <div>
          <div>
            <div>Armor:</div>
            <div>{head.armor}</div>
          </div>
          <div>
            <div>Structure:</div>
            <div>{head.structure}</div>
          </div>
        </div>
        { /* Footer */ }
        <div>
          <div>TODO:</div>
        </div>
      </div>
    )
  }
}