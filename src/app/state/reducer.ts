import { combineReducers, Reducer, ReducersMapObject } from 'redux'
import { reducer as formReducer } from 'redux-form'

// import { combineReducers } from './utils';


const dynamicReducers: ReducersMapObject = {}

export const createRootReducer = (dynamic: ReducersMapObject) => {
  const root = combineReducers({
    // static
    // dynamic
    ...dynamic,
    // vendor
    form: formReducer,
  })

  return root
}

export const injectDynamicReducer = (id: string, reducer: Reducer) => {
  dynamicReducers[id] = reducer

  return dynamicReducers
}

export const ejectDynamicReducer = (id: string) => {
  // #TODO: After redux 4.x replaceReducer
  // gets fixed, uncomment this
  // if (dynamicReducers[id]) {
  //   delete dynamicReducers[id]
  // }

  return dynamicReducers
}
