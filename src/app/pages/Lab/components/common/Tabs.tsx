import * as classNames from 'classnames'
import * as React from 'react'

import './Tabs.css'

interface IProps {
  value: string,
  tabs: {
    [tab: string]: {
      tabClassName?: string,
      containerClassName?: string,
      component: JSX.Element,
    },
  },
  onChange: (tab: string) => void,
}

export const Tabs: React.SFC<IProps> = ({ value, tabs, onChange }) => {
  const currentTab = tabs[value]

  return (
    <div className='TabsContainer'>
      <div className='TabsHeader'>
        { Object.keys(tabs).map((tab) => (
          <div
            key={tab}
            className={classNames('Tab', (value === tab) && 'Selected', tabs[tab].tabClassName)}
            onClick={() => onChange(tab)}
          >
            { tab }
          </div>
        )) }
      </div>
      <div className={classNames('TabsBody', currentTab.containerClassName)}>
        { currentTab.component }
      </div>
    </div>
  )
}
