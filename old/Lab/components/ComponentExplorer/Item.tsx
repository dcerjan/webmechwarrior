import * as React from 'react'

import { IHeavyWeaponRecord } from '../../../../models/Tables/WeaponTable/HeavyWeaponRecord'

import './Item.css'

interface IProps {
  weapon: IHeavyWeaponRecord,
}

export const Item: React.SFC<IProps> = ({ weapon }) => (
  <div className='Item'>
    { weapon.name }
  </div>
)
