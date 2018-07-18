import * as React from 'react'

import { Card } from '../../../../../../components/Common/Card'
import { IRowConfig, Table } from '../../../../../../components/Common/Table'
import { Tabs } from '../../../../../../components/Common/Tabs'

import { MechLoadout, MechTonnage } from '../../../../../../models/Mech'
import { getGearCriticals, getGearData, getGearTonnage, MechGear } from '../../../../../../models/MechEquipment'
import { getAvailableAmmoNames, getAvailableEquipmentNames, getAvailableWeaponNames, getTargetingComputerWeight } from '../../../../../../models/MechEquipment/MechEquipmentUtils'
import { IMechDesignerMech } from '../../../../state/constants'
import { IEquipmentState } from '../../../../state/reducer'

import { MechType } from '../../../../../../models/common/MechType'
import { Tech } from '../../../../../../models/common/Tech'
import { EquipmentType } from '../../../../../../models/MechEquipment/Equipment'

import { getGearCSSClass } from './common'
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
): IRowConfig<MechGear> => {
  return {
    className: getGearCSSClass,
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
        format: (value) => (value.type === EquipmentType.Targeting_Computer
          ? getTargetingComputerWeight(mechTonnage, mechType, tech, loadout)
          : getGearTonnage(mechTonnage, value.name)).toFixed(2),
      },
      {
        field: 'criticals',
        header: 'C',
        weight: 10,
        alignment: 'Right',
        format: (value) => (value.type === EquipmentType.Targeting_Computer
          ? getTargetingComputerWeight(mechTonnage, mechType, tech, loadout)
          : getGearCriticals(mechTonnage, tech, value.name)).toString(),
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
    const equipment = getAvailableEquipmentNames(mech.tech, mech.class, mech.heatsinkType, mech.jumpJetType)

    return equipment.map(getGearData)
  }

  private getWeapons() {
    const { mech } = this.props
    const weapons = getAvailableWeaponNames(mech.tech, mech.missileGuidenceType)

    return weapons.map(getGearData)
  }

  private getAmmo() {
    const { mech } = this.props
    const ammo = getAvailableAmmoNames(mech.tech, mech.missileGuidenceType)

    return ammo.map(getGearData)
  }
}
