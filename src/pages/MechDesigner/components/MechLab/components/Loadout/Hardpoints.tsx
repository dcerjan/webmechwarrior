import * as React from 'react'
import { Detail, DetailColor } from '../../../../../../components/Common/Detail'
import { Hardpoint } from '../../../../../../models/common/Hardpoint'

interface IHardpoints {
  hardpoints: Hardpoint[],
}

interface IHardpointCountDescriptor {
  hardpoint: Hardpoint,
  count: number,
}

const countHardpoints = (hardpoints: Hardpoint[]): IHardpointCountDescriptor[] => {
  const hardpointMap = hardpoints.reduce((memo, h) => {
    if (!memo[h]) {
      memo[h] = 0
    }
    memo[h] += 1
    return memo
  }, {})

  return Object.keys(hardpointMap).map(hardpoint =>
    ({ hardpoint: hardpoint as Hardpoint, count: hardpointMap[hardpoint] }))
}

export const Hardpoints: React.SFC<IHardpoints> = ({ hardpoints }) => {
  const hardppointsDescriptors = countHardpoints(hardpoints)

  return (
    <Detail
      label='Hardpoints'
      value={
        <div>
          { hardppointsDescriptors.map(descriptor => (
            <div key={descriptor.hardpoint} className={descriptor.hardpoint}>{descriptor.count}</div>
          )) }
        </div>
      }
      color={DetailColor.TransparentBluishGrey}
    />
  )
}
