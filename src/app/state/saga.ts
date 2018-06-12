import createSagaMiddleware, { Task } from 'redux-saga'

export const sagaMiddleware = createSagaMiddleware()

const tasks: { [id: string]: Task } = {}

export const startSaga = <T>(id: string, saga: () => Iterator<T>) => {
  if (tasks[id]) {
    console.debug(`Task under id ${id} is already running, canceling it before restarting`)
    tasks[id].cancel()
  }
  tasks[id] = sagaMiddleware.run(saga)
}

export const cancelSaga = (id: string) => {
  if (tasks[id]) {
    tasks[id].cancel()
  } else {
    console.debug(`Task under id ${id} is not running, nothing to cancel`)
  }
}
