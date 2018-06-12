import * as React from 'react'

import { HoverContextType } from '../../../state/reducer'
import { ICriticalProps } from './common'

export const None: React.SFC<Pick<ICriticalProps, 'setHoverContext'>> = ({ setHoverContext }) => (
  <div
    className='Critical Empty'
    onMouseEnter={() =>
      setHoverContext({ type: HoverContextType.Empty, context: null })}
    onMouseLeave={() =>
      setHoverContext({ type: HoverContextType.None, context: null })}
  >
    { /* TODO: Localization */ }
    { '-- Empty Slot --' }
  </div>
)
