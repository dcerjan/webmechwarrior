import { createSelector } from 'reselect'
import { ILabState } from './reducer'

export const labStateSelector = (state: any): ILabState => state.Lab

export const componentExplorerStateSelector = createSelector(
  [labStateSelector],
  (state) =>
    state.componentExplorer,
)

export const hoverContextSelector = createSelector(
  [labStateSelector],
  (state) =>
    state.hoverContext,
)
