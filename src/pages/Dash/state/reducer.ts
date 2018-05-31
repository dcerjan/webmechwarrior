import { lens } from 'lens.ts'
import { Reducer } from 'redux'
import { DashAction, DashActionType } from './actions';

export interface IDashState {
  messages: string[]
}
export const DashboardStateL = lens<IDashState>()

export const initial: IDashState = {
  messages: [],
}

export const reducer: Reducer<IDashState, DashAction> = (state = initial, action) => {
  switch (action.type) {
  case DashActionType.PUSH_MESSAGE:
    return DashboardStateL.messages.set(messages => [...messages, action.message])(state)

  default:
    return state
  }
}
