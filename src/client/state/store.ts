import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { Action, applyMiddleware, compose, createStore } from 'redux'


import { createRootReducer, ejectDynamicReducer, injectDynamicReducer } from './reducer'
import { cancelSaga, globalSagas, sagaMiddleware, startSaga } from './saga'
import { IWorker } from './Worker'


export const history = createBrowserHistory()

const middleware = [
  sagaMiddleware,
  routerMiddleware(history),
]

const composeEnhancers = typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
)


const store = createStore(
  connectRouter(history)(
    createRootReducer({})), enhancer)

globalSagas.map(sagaMiddleware.run)

const startWorker = <S, A extends Action, T>(worker: IWorker<S, A, T>) => {
  if (worker.reducer) {
    store.replaceReducer(
      connectRouter(history)(
        createRootReducer(injectDynamicReducer(worker.id, worker.reducer))))
  }
  if (worker.saga) {
    startSaga(worker.id, worker.saga)
  }
  store.dispatch({ type: 'RESET' })
}

const stopWorker = (id: string): void => {
  cancelSaga(id)
  store.replaceReducer(
    connectRouter(history)(
      createRootReducer(ejectDynamicReducer(id))))
  store.dispatch({ type: 'RESET' })
}

export {
  store,
  startWorker,
  stopWorker,
}
