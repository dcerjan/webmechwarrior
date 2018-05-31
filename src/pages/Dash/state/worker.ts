import { startWorker, stopWorker } from "../../../state/store";
import { reducer } from "./reducer";

export const start = () => {
  startWorker({
    reducer,
    id: 'Dash',
  })
}

export const stop = () => {
  stopWorker('Dash')
}
