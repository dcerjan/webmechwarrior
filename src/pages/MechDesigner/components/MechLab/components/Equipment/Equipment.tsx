import * as React from 'react'
import { IRowConfig, Table } from '../../../../../../components/Common/Table'
import { Tabs } from '../../../../../../components/Common/Tabs'
import { MechEquipmentName } from '../../../../../../models/MechEquipment/MechEquipmentName'
import { getAvailableEquipmentTypes } from '../../../../../../models/MechEquipment/MechEquipmentUtils'

import { Card } from '../../../../../../components/Common/Card'
import { IMechDesignerMech } from '../../../../state/constants'
import * as styles from './Equipment.css'

interface IEquipmentProps {
  mech: IMechDesignerMech,
}

interface IEquipment {
  name: MechEquipmentName,
}

const getTableConfig = (
): IRowConfig<IEquipment> => {
  return {
    className: (value) => styles.Equipment,
    columns: [
      {
        title: 'name',
        weight: 150,
        alignment: 'Left',
      },
    ]
  }
}

export class Equipment extends React.PureComponent<IEquipmentProps> {
  public render() {
    return (
      <Card
        title='Equipment'
      >
        <Tabs
          value={'All'}
          onChange={console.log.bind(console)}
          tabs={{
            'All': {
              component: (
                <Table
                  config={getTableConfig()}
                  data={this.getAllEquipment()}
                />
              ),
            },
          }}
        />
      </Card>
    )
  }

  private getAllEquipment() {
    const { mech } = this.props
    const equipment = getAvailableEquipmentTypes(mech.tech, mech.class, mech.engine.heatsinkType)

    return equipment.map(equipment => ({
      name: equipment,
    }))
  }
}