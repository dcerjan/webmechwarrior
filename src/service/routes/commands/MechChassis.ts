import { Express } from 'express'
import { error } from './utils'

import { MechChassis } from '../../db/model/MechChassis'

export const MechChassisCommand = (namespace: string) => (app: Express): void => {

  const listError = error(`${namespace}/list.MechChassis`)
  app.post('/command/list.MechChassis(/:id?)', async (req, res) => {
    try {
      if (req.params.id) {
        const result = await MechChassis.findById(req.params.id).exec()
        if (result !== null) {
          res.json(result.toJSON())
        } else {
          res.status(404)
        }
      } else {
        const result = await MechChassis.find().exec()
        res.json(result.map(chassis => ({
          id: chassis.id,
          name: (chassis as any).name,
          tonnage: (chassis as any).tonnage,
        })))
      }
    } catch(err) {
      listError(err)
      res.status(400).json({ err })
    }
  })
  console.log('[INFO] [COMMAND] [MechChassis]', `registered '${namespace}/list.MechChassis' command`)

  const saveError = error(`${namespace}/save.MechChassis`)
  app.post('/command/save.MechChassis', async (req, res) => {
    try {
      const chassis = new MechChassis(req.body)
      const result = await chassis.save()
      res.json(result.toJSON())
    } catch(err) {
      saveError(err)
      res.status(400).json({ err })
    }
  })
  console.log('[INFO] [COMMAND] [MechChassis]', `registered '${namespace}/save.MechChassis' command`)

}
