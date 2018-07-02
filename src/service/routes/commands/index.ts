import { Express } from 'express'

import { MechChassisCommand } from './MechChassis'

export const commands = (app: Express): void => {
  console.log('[INFO] [COMMANDS]', 'registering commands')

  MechChassisCommand('command')(app)

  console.log('[INFO] [COMMANDS]', 'all commands registered')
}
