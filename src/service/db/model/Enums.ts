import { segment } from '../../../client/lib/functional'
import { ArmorType } from '../../../client/models/Armor'
import { CockpitType } from '../../../client/models/Cockpit'
import { MechClass } from '../../../client/models/common/MechClass'
import { MechType } from '../../../client/models/common/MechType'
import { Tech } from '../../../client/models/common/Tech'
import { EngineType } from '../../../client/models/Engine'
import { GyroType } from '../../../client/models/Gryo'
import { HeatsinkType } from '../../../client/models/Heatsink'
import { InternalStructureType } from '../../../client/models/InternalStructure'
import { JumpJetType } from '../../../client/models/JumpJets'
import { MechEquipmentName } from '../../../client/models/MechEquipment/MechEquipmentName'

export const ETech = Object.values(Tech)
export const EMechType = Object.values(MechType)
export const EMechClass = Object.values(MechClass)
export const EJumpJetType = Object.values(JumpJetType)
export const EMechTonnage = segment(20, 200, 5)
export const EEngineType = Object.values(EngineType)
export const EEngineRating = segment(10, 500, 5)
export const EHeatsinkType = Object.values(HeatsinkType)
export const EGyroType = Object.values(GyroType)
export const ECockpitType = Object.values(CockpitType)
export const EInternalStructureType = Object.values(InternalStructureType)
export const EArmorType = Object.values(ArmorType)
export const EMechEquipmentName = Object.values(MechEquipmentName)
