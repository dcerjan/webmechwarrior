import { ClanEquipment } from './Clan'
import { EquipmentType, IEquipment } from './Equipment'
import { InnerSphereEquipment } from './InnerSphere'

export const Equipment = {
  ...InnerSphereEquipment,
  ...ClanEquipment,
}

export {
  IEquipment,
  EquipmentType,
}
