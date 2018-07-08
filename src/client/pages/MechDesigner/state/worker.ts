import { startWorker, stopWorker } from '../../../state/store'
import { reducer } from './reducer'

export const start = () => {
  startWorker({
    reducer,
    id: 'Lab.MechDesigner',
  })
}

export const stop = () => {
  stopWorker('Lab.MechDesigner')
}

start()
