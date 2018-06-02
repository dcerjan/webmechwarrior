import * as React from 'react'

interface IProps {
  value: string,
  tabs: { [tab: string]: JSX.Element },
  onChange: (tab: string) => void,
}

export const Tabs: React.SFC<IProps> = ({ value, tabs, onChange }) => {
  return (
    <div className='TabsContainer'>
      <div className='TabsHeader'>
        { Object.keys(tabs).map((tab) => (
          <div
            key={tab}
            className={`Tab${ value === tab ? ' Selected' : ''}`}
            onClick={() => onChange(tab)}
          >
            { tab }
          </div>
        )) }
      </div>
      <div className='TabsBody'>
        { tabs[value] }
      </div>
    </div>
  )
}
