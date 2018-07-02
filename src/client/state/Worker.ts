import * as React from 'react'

import { Action, Reducer } from 'redux'
import { startWorker, stopWorker } from './store'

export interface IWorker<S, A extends Action, T> {
  id: string,
  reducer?: Reducer<S, A>,
  saga?: () => Iterator<T>,
}

interface IWorkerState {
  ready: boolean,
}

export class Worker<S, A extends Action, T> extends React.PureComponent<IWorker<S, A, T>, IWorkerState> {
  public state = {
    ready: this.props.reducer || this.props.saga
      ? false
      : true
  }

  constructor(props: any) {
    super(props)

    // Wait for a tick so all reducers and sagas are mounted
    window.setTimeout(() => this.setState({ ready: true }), 0)
  }

  public componentDidMount() {
    const { id, reducer, saga } = this.props
    startWorker({ id, reducer, saga })
  }

  public componentWillUnmount() {
    const { id } = this.props
    stopWorker(id)
  }

  public render() {
    return this.state.ready
      ? this.props.children
      : null
  }
}
