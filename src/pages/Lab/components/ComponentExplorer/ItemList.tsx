import * as React from 'react'

import './ItemList.css'

import { Item } from './Item'

import { IComponentExplorerState } from '../../state/reducer'

import { InnerSphere } from '../../../../models/Tables/WeaponTable'
import { WeaponClass } from '../../../../models/Tables/WeaponTable/HeavyWeaponRecord'
import { Tabs } from './Tabs'

interface IComponentExplorerProps {
  componentExplorer: IComponentExplorerState,
  setActiveTab: (tab: string) => void
}

export const ItemList: React.SFC<IComponentExplorerProps> = ({ componentExplorer, setActiveTab }) => (
  <div className='ItemList'>
    <Tabs
      value={componentExplorer.tab}
      onChange={setActiveTab}
      tabs={{
        'All': (
          <div>
            { InnerSphere.map((weapon) => <Item key={weapon.name} weapon={weapon} />) }
          </div>
        ),
        'Energy': (
          <div>
            { InnerSphere
                .filter(weapon => weapon.class === WeaponClass.Energy)
                .map((weapon) => <Item key={weapon.name} weapon={weapon} />) }
          </div>
        ),
        'Ballistic': (
          <div>
            { InnerSphere
                .filter(weapon => weapon.class === WeaponClass.Ballistic)
                .map((weapon) => <Item key={weapon.name} weapon={weapon} />) }
          </div>
        ),
        'Missile': (
          <div>
            { InnerSphere
                .filter(weapon => weapon.class === WeaponClass.Missile)
                .map((weapon) => <Item key={weapon.name} weapon={weapon} />) }
          </div>
        )
      }}
    />
  </div>
)
