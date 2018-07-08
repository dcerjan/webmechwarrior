import * as React from 'react'
import { IRowConfig, Table } from '../../../../../../components/Common/Table'
import { Tabs } from '../../../../../../components/Common/Tabs'
import { getAvailableAmmoTypes, getAvailableEquipmentTypes, getAvailableWeaponTypes } from '../../../../../../models/MechEquipment/MechEquipmentUtils'

import { Card } from '../../../../../../components/Common/Card'
import { getEquipmentMeta, getEquipmentType, IMechEquipmentRecord } from '../../../../../../models/MechEquipment'
import { MechEquipmentType } from '../../../../../../models/MechEquipment/MechEquipmentType'
import { IMechDesignerMech } from '../../../../state/constants'
import { IEquipmentState } from '../../../../state/reducer'

import { DraggableRowWrapper } from './DraggableRowWrapper'
import * as styles from './Equipment.css'

interface IEquipmentProps {
  mech: IMechDesignerMech,
  equipment: IEquipmentState,
  setEquipmentTableTab: (tab: string) => void,
}

const getTableConfig = (
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
        format: (value) => value.tonnage.toFixed(2),
      },
      {
        field: 'criticals',
        header: 'C',
        weight: 10,
        alignment: 'Right',
      },
    ]
  }
}

export class Equipment extends React.PureComponent<IEquipmentProps> {
  public render() {
    const { setEquipmentTableTab, equipment } = this.props

    return (
      <Card
        title='Equipment'
        className={styles.EquipmentCard}
      >
        <Tabs
          value={equipment.tab}
          onChange={setEquipmentTableTab}
          tabs={{
            'Weapons': { component: <Table config={getTableConfig()} data={this.getWeapons()} /> },
            'Ammo': { component: <Table config={getTableConfig()} data={this.getAmmo()} /> },
            'Equipment': { component: <Table config={getTableConfig()} data={this.getEquipment()} /> },
          }}
        />
      </Card>
    )
  }

  private getEquipment() {
    const { mech } = this.props
    const equipment = getAvailableEquipmentTypes(mech.tech, mech.class, mech.engine.heatsinkType)

    return equipment.map(equipment => getEquipmentMeta(equipment))
  }

  private getWeapons() {
    const { mech } = this.props
    const weapons = getAvailableWeaponTypes(mech.tech)

    return weapons.map(weapon => getEquipmentMeta(weapon))
  }

  private getAmmo() {
    const { mech } = this.props
    const ammo = getAvailableAmmoTypes(mech.tech)

    return ammo.map(ammo => getEquipmentMeta(ammo))
  }
}
