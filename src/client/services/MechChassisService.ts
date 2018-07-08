import axios from 'axios'

import { MechChassis } from '../models/Mech'

const API = 'http://localhost:3010'
const namespace = 'command'
const entity = 'MechChassis'

export const MechChassisService = {
  list: async (id?: string) =>
    axios.post(`${API}/${namespace}/list.${entity}${id ? `/${id}` : ''}`, null,  { headers: { 'Content-Type': 'application/json' } }),

  save: async (mechChassis: MechChassis) =>
    axios.post(`${API}/${namespace}/save.${entity}`, mechChassis, { headers: { 'Content-Type': 'application/json' } })
}
