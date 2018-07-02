import { formActionSaga } from 'redux-form-saga/lib'
import createSagaMiddleware, { Task } from 'redux-saga'

export const sagaMiddleware = createSagaMiddleware()

export const globalSagas = [
  formActionSaga,
]

const tasks: { [id: string]: Task } = {}

export const startSaga = <T>(id: string, saga: () => Iterator<T>) => {
  if (tasks[id]) {
    console.debug(`Task under id ${id} is already running, canceling it before restarting`)
    tasks[id].cancel()
  }
  console.log(`Starting task under id ${id}`)
  tasks[id] = sagaMiddleware.run(saga)
}

export const cancelSaga = (id: string) => {
  if (tasks[id]) {
    console.log(`Canceling task under id ${id}`)
    tasks[id].cancel()
  } else {
    console.debug(`Task under id ${id} is not running, nothing to cancel`)
  }
}

export const isSagaRunning = (id: string) =>
  Boolean(tasks[id] && tasks[id].isRunning())
