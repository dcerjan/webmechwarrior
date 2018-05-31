import { createSelector } from 'reselect'

import { DashboardStateL, IDashState, initial } from './reducer';

export const dashStateSelector = (state: any): IDashState => state.Dash || initial

export const dashMessagesSelector = createSelector(
  [dashStateSelector],
  (dash) => DashboardStateL.messages.get()(dash)
)
