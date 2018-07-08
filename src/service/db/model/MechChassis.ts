import { model, Schema } from 'mongoose'

// import { MechComponent } from '../../../client/models/common/MechComponent'
// import { Hardpoint } from '../../../client/models/common/Hardpoint'

import {
  EArmorType,
  ECockpitType,
  EEngineRating,
  EEngineType,
  EGyroType,
  EHeatsinkType,
  EInternalStructureType,
  EJumpJetType,
  EMechClass,
  // EMechEquipmentName,
  EMechTonnage,
  EMechType,
  ETech,
} from './Enums'
import { required } from './utils'

// const hardpoints = {
//   [Hardpoint.Energy]: Number,
//   [Hardpoint.Ballistic]: Number,
//   [Hardpoint.Missile]: Number,
// }

// const equipment = (name: MechComponent, hasRearArmor = false) => {
//   const base = {
//     name: { type: String, default: name, enum: [name] },
//     armor: Number,
//     hardpoints,
//     equipment: { type: String, enum: EMechEquipmentName, default: [] },
//   }
//
//   return hasRearArmor
//     ? { ...base, rearArmor: Number }
//     : base
// }

const MechChassisSchema = new Schema({
  name: { type: String, unique: true, index: true },
  tech: { type: String, enum: ETech, required: required('tech') },
  type: { type: String, enum: EMechType, required: required('type') },
  class: { type: String, enum: EMechClass, required: required('class') },
  jumpJetType: { type: String, enum: EJumpJetType, required: required('jumpJetType') },
  tonnage: { type: Number, enum: EMechTonnage, required: required('tonnage') },
  heatsinkType: { type: String, enum: EHeatsinkType, required: required('heatsinktype') },
  engine: {
    rating: { type: Number, enum: EEngineRating, required: required('engine.rating') },
    type: { type: String, enum: EEngineType, required: required('engine.type') },
  },
  internalHeatsinks: { type: Number, default: 0 },
  gyro: {
    type: { type: String, enum: EGyroType, required: required('gyro.type') },
  },
  cockpit: { type: String, enum: ECockpitType, required: required('cockpit') },
  internalStructure: { type: String, enum: EInternalStructureType, required: required('internalStructure') },
  armor: { type: String, enum: EArmorType, required: required('armor') },
  loadout: Schema.Types.Mixed,
  // loadout: {
  //   [MechComponent.Head]: equipment(MechComponent.Head),
  //   [MechComponent.CenterTorso]: equipment(MechComponent.CenterTorso, true),
  //   [MechComponent.LeftTorso]: equipment(MechComponent.LeftTorso, true),
  //   [MechComponent.RightTorso]: equipment(MechComponent.RightTorso, true),
  //   [MechComponent.LeftArm]: equipment(MechComponent.LeftArm),
  //   [MechComponent.RightArm]: equipment(MechComponent.RightArm),
  //   [MechComponent.LeftLeg]: equipment(MechComponent.LeftLeg),
  //   [MechComponent.RightLeg]: equipment(MechComponent.RightLeg),
  //   [MechComponent.FrontLeftLeg]: equipment(MechComponent.FrontLeftLeg),
  //   [MechComponent.FrontRightLeg]: equipment(MechComponent.FrontRightLeg),
  //   [MechComponent.RearLeg]: equipment(MechComponent.RearLeg),
  //   [MechComponent.RearLeftLeg]: equipment(MechComponent.RearLeftLeg),
  //   [MechComponent.RearRightLeg]: equipment(MechComponent.RearRightLeg),
  // }
})

MechChassisSchema.methods.toJson = function (blacklist: string[] = []) {
  const obj = this.toObject()
  return blacklist.reduce((ret, key) => {
    if (!blacklist.includes(key)) {
      ret[key] = obj[key]
    }
    return ret
  }, {})
}

export const MechChassis = model('MechChassis', MechChassisSchema)
