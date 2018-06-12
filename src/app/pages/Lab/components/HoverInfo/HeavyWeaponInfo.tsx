import * as React from 'react'
import { IHeavyWeaponRecord } from '../../../../models/Tables/WeaponTable/HeavyWeaponRecord'

export const HeavyWeaponInfo: React.SFC<Readonly<IHeavyWeaponRecord>> = (weapon) => (
  <div className='Info'>
    <div className='Section'>
      <div className='Detail'>
        <div>{ weapon.tech } tech { weapon.class } weapon</div>
      </div>
    </div>
    <div className='Section'>
      <div className='Detail'>
        <div>Name:</div>
        <div>{ weapon.name }</div>
      </div>
      <div className='Detail'>
        <div>Weapon type:</div>
        <div>{ weapon.type }</div>
      </div>
    </div>
  </div>
)
