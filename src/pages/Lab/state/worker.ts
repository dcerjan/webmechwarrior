import { startWorker, stopWorker } from '../../../state/store'
import { reducer } from './reducer'

export const start = () => {
  startWorker({
    reducer,
    id: 'Lab',
  })
}

export const stop = () => {
  stopWorker('Lab')
}

start()
