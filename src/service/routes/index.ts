import { Express } from 'express'

import { commands } from './commands'

export const routes = (app: Express) => {
  commands(app)
}
