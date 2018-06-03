import * as React from 'react'

import './Pane.css'

interface IPaneProps {
  title?: string,
}

export class Pane extends React.PureComponent<IPaneProps> {
  public render() {
    const { title } = this.props
    return (
      <div className='Pane'>
        { title
          ? <div className='Title'>{title}</div>
          : null }
        { this.props.children }
      </div>
    )
  }
}