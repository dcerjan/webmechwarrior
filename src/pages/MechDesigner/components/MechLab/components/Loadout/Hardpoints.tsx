import * as classNames from 'classnames'
import * as React from 'react'

import { Detail, DetailColor } from '../../../../../../components/Common/Detail'
import { Range } from '../../../../../../components/Field'
import { Hardpoint } from '../../../../../../models/common/Hardpoint'
import { IHardpoints, MechComponent } from '../../../../../../models/common/MechComponent'

import * as styles from './Hardpoint.css'

interface IHardpointsProps {
  component: MechComponent,
  hardpoints: IHardpoints
}

export const Hardpoints: React.SFC<IHardpointsProps> = ({ component, hardpoints }) => {
  const orderedHardpoints = [ Hardpoint.Energy, Hardpoint.Ballistic, Hardpoint.Missile ]

  return (
    <Detail
      label='Hardpoints'
      value={
        <div className={styles.Hardpoints}>
          { orderedHardpoints.map(hardpoint => (
            <div key={hardpoint} className={styles.Hardpoint}>
              <Range
                name={`loadout.${component}.hardpoints.${hardpoint}`}
                alignment='Right'
                min={0}
                max={12}
                step={1}
                formater={value => (
                  <div className={styles.Hardpoint}>
                    <div className={classNames(styles.Icon, styles[hardpoint])} />
                    <div>{ value }</div>
                  </div>
                )}
              />
            </div>
          )) }
        </div>
      }
      color={DetailColor.TransparentBluishGrey}
    />
  )
}
