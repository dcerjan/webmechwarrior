import * as classNames from 'classnames'
import * as React from 'react'

import * as styles from './Tabs.css'

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
    <div className={styles.TabsContainer}>
      <div className={styles.TabsHeader}>
        { Object.keys(tabs).map((tab) => (
          <div
            key={tab}
            className={classNames(styles.Tab, (value === tab) ? styles.Selected : null, tabs[tab].tabClassName)}
            onClick={() => onChange(tab)}
          >
            { tab }
          </div>
        )) }
      </div>
      <div className={classNames(styles.TabsBody, currentTab.containerClassName)}>
        { currentTab.component }
      </div>
    </div>
  )
}
