import { Tech as Tech } from '../common/Tech'
import { MechTonnage } from '../Mech'

import { Ammo, IAmmo } from './Ammo'
import { Equipment, EquipmentType, IEquipment } from './Equipment'
import { GearClass, GearName } from './GearName'
import { Builtins } from './SpecialEquipment'
import { ISpecialEquipment } from './SpecialEquipment/SpecialEquipment'
import { IWeapon, Weapons } from './Weapons'

const MechEquipmentTable = {
  ...Weapons,
  ...Ammo,
  ...Equipment,
  ...Builtins,
}

export type MechGear = IWeapon | IAmmo | IEquipment | ISpecialEquipment

export const getGearData = (gearName: GearName): Readonly<MechGear> => {
  if (MechEquipmentTable[gearName] != null) {
    return MechEquipmentTable[gearName]
  } else {
    throw new Error(`Gear '${gearName}' meta data not found!`)
  }
}

export const getGearType = (gearName: GearName): GearClass => {
  return getGearData(gearName).gearClass
}

export const getGearTonnage = (mechTonnage: MechTonnage, gearName: GearName): number => {
  const gear = getGearData(gearName)
  if (gear.gearClass === GearClass.Equipment) {
    const equipment: IEquipment = gear
    if ([EquipmentType.Jump_Jet, EquipmentType.Improved_Jump_Jet].includes(equipment.type)) {
      const tonnage = (() => {
        if (mechTonnage < 60) {
          return 0.5
        } else if (mechTonnage < 90) {
          return 1.0
        } else {
          return 2.0
        }
      })()

      return equipment.type === EquipmentType.Improved_Jump_Jet
        ? 2.0 * tonnage
        : tonnage
    } else if (equipment.type === EquipmentType.MASC) {
      const tonnage = (() => equipment.name === GearName.IS_MASC
        ? Math.round(mechTonnage / 20)
        : Math.round(mechTonnage / 25)
      )()
      return tonnage
    } else {
      return gear.tonnage
    }

  } else if (gear.gearClass === GearClass.Weapon) {
    const weapon: IWeapon = gear
    return weapon.tonnage
  } else if (gear.gearClass === GearClass.Ammo) {
    const ammo: IAmmo = gear
    return ammo.tonnage
  } else {
    const specialEquipment: ISpecialEquipment = gear
    return specialEquipment.tonnage
  }
}

export const getGearCriticals = (mechTonnage: MechTonnage, tech: Tech, gearName: GearName): number => {
  const gear = getGearData(gearName)
  if (gear.gearClass === GearClass.Equipment) {
    const equipment: IEquipment = gear
    if (equipment.type === EquipmentType.MASC) {
      const criticals = (() => equipment.name === GearName.IS_MASC
        ? Math.round(mechTonnage / 20)
        : Math.round(mechTonnage / 25)
      )()
      return criticals
    } else {
      return equipment.criticals
    }

  } else if (gear.gearClass === GearClass.Weapon) {
    const weapon: IWeapon = gear
    return weapon.criticals
  } else if (gear.gearClass === GearClass.Ammo) {
    const ammo: IAmmo = gear
    return ammo.criticals
  } else {
    const specialEquipment: ISpecialEquipment = gear
    return specialEquipment.criticals
  }
}
