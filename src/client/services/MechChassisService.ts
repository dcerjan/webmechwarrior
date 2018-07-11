import axios from 'axios'

import { MechChassis } from '../models/Mech'

const API = 'http://localhost:3010'
const HEADERS = { 'Content-Type': 'application/json' }
const namespace = 'command'
const entity = 'MechChassis'



export const MechChassisService = {
  list: async (id?: string) =>
    axios.post(`${API}/${namespace}/list.${entity}${id ? `/${id}` : ''}`, null,  { headers: HEADERS }),

  save: async (mechChassis: MechChassis) =>
    axios.post(`${API}/${namespace}/save.${entity}`, mechChassis, { headers: HEADERS }),

  'delete': async (id: string) =>
    axios.post(`${API}/${namespace}/delete.${entity}`, { id }, { headers: HEADERS } ),
}
