import * as React from 'react'

import { Action, Reducer } from 'redux'

export interface IWorker<S, A extends Action, T> {
  id: string,
  reducer?: Reducer<S, A>,
  saga?: () => Iterator<T>,
}

interface IWorkerProps {
  start(): void,
  stop(): void,
}

export class Worker extends React.PureComponent<IWorkerProps, {}> {
  public componentDidMount() {
    this.props.start()
  }

  public componentWillUnmount() {
    this.props.stop()
  }

  public render() {
    return this.props.children
  }
}
