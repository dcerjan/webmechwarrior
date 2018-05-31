import * as React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import { Worker } from '../../state/Worker';

import { dashMessagesSelector } from './state/selectors';
import { start, stop } from './state/worker';


interface IProps {
  messages: string[]
}

const mapState = createStructuredSelector<any, IProps>({
  messages: dashMessagesSelector,
})

const mapDispatch = () => ({
})

export class LabContainer extends React.PureComponent<IProps, {}> {
  public render() {
    const { messages } = this.props

    return (
      <Worker start={start} stop={stop}>
        <div>
          { messages.map((m, i) => <div key={`${m}:${i}`}>{m}</div>)}
        </div>
      </Worker>
    )
  }
}

export default connect(mapState, mapDispatch)(LabContainer)
