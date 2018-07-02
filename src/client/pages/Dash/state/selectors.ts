import { createSelector } from 'reselect'

import { DashboardStateL, IDashState, initial } from './reducer'

export const dashStateSelector = (state: any): IDashState => state.Dash || initial

export const dashMechsLoading = createSelector(
  [dashStateSelector],
  DashboardStateL.loading.get()
)


export const dashMechsSelector = createSelector(
  [dashStateSelector],
  DashboardStateL.mechs.get()
)
