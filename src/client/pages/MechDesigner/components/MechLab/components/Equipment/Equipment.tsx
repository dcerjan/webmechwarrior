import * as React from 'react'

import { Card } from '../../../../../../components/Common/Card'
import { IRowConfig, Table } from '../../../../../../components/Common/Table'
import { Tabs } from '../../../../../../components/Common/Tabs'

import { MechLoadout, MechTonnage } from '../../../../../../models/Mech'
import { getEquipmentCriticals, getEquipmentMeta, getEquipmentTonnage, getEquipmentType, IMechEquipmentRecord } from '../../../../../../models/MechEquipment'
import { MechEquipmentType } from '../../../../../../models/MechEquipment/MechEquipmentType'
import { getAvailableAmmoTypes, getAvailableEquipmentTypes, getAvailableWeaponTypes, getTargetingComputerWeight } from '../../../../../../models/MechEquipment/MechEquipmentUtils'
import { IMechDesignerMech } from '../../../../state/constants'
import { IEquipmentState } from '../../../../state/reducer'

import { MechType } from '../../../../../../models/common/MechType'
import { Tech } from '../../../../../../models/common/Tech'
import { DraggableRowWrapper } from './DraggableRowWrapper'
import * as styles from './Equipment.css'

interface IEquipmentProps {
  mech: IMechDesignerMech,
  equipment: IEquipmentState,
  setEquipmentTableTab: (tab: string) => void,
}

const getTableConfig = (
  mechTonnage: MechTonnage,
  tech: Tech,
  mechType: MechType,
  loadout: MechLoadout,
): IRowConfig<IMechEquipmentRecord> => {
  return {
    className: (value) => {
      switch (getEquipmentType(value.name)) {
      case MechEquipmentType.Ballistic: return styles.Ballistic
      case MechEquipmentType.Energy: return styles.Energy
      case MechEquipmentType.Missile: return styles.Missile
      case MechEquipmentType.BallisticAmmo: return styles.BallisticAmmo
      case MechEquipmentType.EnergyAmmo: return styles.EnergyAmmo
      case MechEquipmentType.MissileAmmo: return styles.MissileAmmo
      default: return styles.Equipment
      }
    },
    rowWrapper: DraggableRowWrapper,
    columns: [
      {
        field: 'name',
        header: 'Name',
        weight: 240,
        alignment: 'Left',
      },
      {
        field: 'tonnage',
        header: 'T',
        weight: 25,
        alignment: 'Right',
        format: (value) => (value.type === MechEquipmentType.Targeting_Computer
          ? getTargetingComputerWeight(mechTonnage, mechType, tech, loadout)
          : getEquipmentTonnage(mechTonnage, value.name)).toFixed(2),
      },
      {
        field: 'criticals',
        header: 'C',
        weight: 10,
        alignment: 'Right',
        format: (value) => (value.type === MechEquipmentType.Targeting_Computer
          ? getTargetingComputerWeight(mechTonnage, mechType, tech, loadout)
          : getEquipmentCriticals(mechTonnage, tech, value.name)).toString(),
      },
    ]
  }
}

export class Equipment extends React.PureComponent<IEquipmentProps> {
  public render() {
    const { setEquipmentTableTab, equipment, mech } = this.props

    return (
      <Card
        title='Equipment'
        className={styles.EquipmentCard}
      >
        <Tabs
          value={equipment.tab}
          onChange={setEquipmentTableTab}
          tabs={{
            'Weapons': { component: <Table config={getTableConfig(mech.tonnage, mech.tech, mech.type, mech.loadout)} data={this.getWeapons()} /> },
            'Ammo': { component: <Table config={getTableConfig(mech.tonnage, mech.tech, mech.type, mech.loadout)} data={this.getAmmo()} /> },
            'Equipment': { component: <Table config={getTableConfig(mech.tonnage, mech.tech, mech.type, mech.loadout)} data={this.getEquipment()} /> },
          }}
        />
      </Card>
    )
  }

  private getEquipment() {
    const { mech } = this.props
    const equipment = getAvailableEquipmentTypes(mech.tech, mech.class, mech.heatsinkType, mech.jumpJetType)

    return equipment.map(equipment => getEquipmentMeta(equipment))
  }

  private getWeapons() {
    const { mech } = this.props
    const weapons = getAvailableWeaponTypes(mech.tech, mech.missileGuidenceType)

    return weapons.map(weapon => getEquipmentMeta(weapon))
  }

  private getAmmo() {
    const { mech } = this.props
    const ammo = getAvailableAmmoTypes(mech.tech, mech.missileGuidenceType)

    return ammo.map(ammo => getEquipmentMeta(ammo))
  }
}
