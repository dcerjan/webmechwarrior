import * as React from 'react'

import './ComponentExplorer.css'

import { HoverContextType, IComponentExplorerState, IHoverContextState } from '../../state/reducer'

import { InnerSphere } from '../../../../models/Tables/WeaponTable'
import { IHeavyWeaponRecord, WeaponClass } from '../../../../models/Tables/WeaponTable/HeavyWeaponRecord'

import { ColumnAlign, IRowConfig, Table } from '../common/Table'
import { Tabs } from '../common/Tabs'

interface IComponentExplorerProps {
  componentExplorer: IComponentExplorerState,
  setActiveTab: (tab: string) => void,
  setHoverContext: (context: IHoverContextState) => void,
}

const getTableConfig = (
  setHoverContext: (context: IHoverContextState) => void,
): IRowConfig<IHeavyWeaponRecord> => {
  return {
    className: (value) => value.class,
    onEnter: (_, value) => setHoverContext({
      type: HoverContextType.HeavyWeapon,
      context: value,
    }),
    onLeave: () => setHoverContext({
      type: HoverContextType.None,
      context: null,
    }),
    columns: [
      {
        title: 'name',
        weight: 180,
      },
      {
        title: 'space',
        weight: 50,
        align: ColumnAlign.Right,
      },
      {
        title: 'weight',
        weight: 50,
        align: ColumnAlign.Right,
      },
    ]
  }
}

export class ComponentExplorer extends React.PureComponent<IComponentExplorerProps> {
  public render() {
    const { componentExplorer, setActiveTab, setHoverContext } = this.props

    return (
      <div className='ComponentExplorer'>
        <Tabs
          value={componentExplorer.tab}
          onChange={setActiveTab}
          tabs={{
            'All': {
              component: (
                <Table
                  config={getTableConfig(setHoverContext)}
                  data={InnerSphere}
                />
              ),
            },
            'Energy': {
              component: (
                <Table
                  config={getTableConfig(setHoverContext)}
                  data={InnerSphere.filter(weapon => weapon.class === WeaponClass.Energy)}
                />
              ),
            },
            'Ballistic': {
              component: (
                <Table
                  config={getTableConfig(setHoverContext)}
                  data={InnerSphere.filter(weapon => weapon.class === WeaponClass.Ballistic)}
                />
              ),
            },
            'Missile': {
              component: (
                <Table
                  config={getTableConfig(setHoverContext)}
                  data={InnerSphere.filter(weapon => weapon.class === WeaponClass.Missile)}
                />
              ),
            },
          }}
        />
      </div>
    )
  }
}