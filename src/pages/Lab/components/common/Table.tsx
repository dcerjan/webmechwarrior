import * as classNames from 'classnames'
import * as React from 'react'
import Scrollbars from 'react-custom-scrollbars'

import './Table.css'

export interface IColumnConfig<T> {
  title: keyof T,
  weight?: number,
  align?: ColumnAlign,
  format?: (value: T[keyof T]) => string,
  className?: (value: T) => string,
}

export interface IRowConfig<T> {
  columns: Array<IColumnConfig<T>>,
  className?: (value: T) => string,
  onEnter?: (event: React.MouseEvent<HTMLDivElement>, value: T) => void,
  onLeave?: (event: React.MouseEvent<HTMLDivElement>, value: T) => void,
}

export enum ColumnAlign {
  Left = 'Left',
  Center = 'Center',
  Right = 'Right',
}

interface ITableProps<T> {
  config: IRowConfig<T>,
  data: T[],
}

const DEFAULT_COLUMN_WEIGHT = 120
const DEFAULT_COLUMN_ALIGN = ColumnAlign.Left

export const Table: React.SFC<ITableProps<any>> = ({ config, data }) => {
  return (
    <div className={classNames('Table')}>
      <div className='Header'>
        { config.columns.map(column => (
          <div
            key={column.title}
            className={classNames('Column', column.align || DEFAULT_COLUMN_ALIGN)}
            style={{
              flex: `${column.weight || DEFAULT_COLUMN_WEIGHT}px`,
              width: `${column.weight || DEFAULT_COLUMN_WEIGHT}px`,
            }}
          >
            { column.title }
          </div>
        )) }
      </div>
      <div className='Body'>
        <Scrollbars
          autoHeight
          autoHeightMax={720}
        >
          { data.map(item => (
            <div
              key={item.name}
              className={classNames('Row', config.className && config.className(item))}
              onMouseEnter={config.onEnter != null
                ? (evt) => (config as any).onEnter(evt, item)
                : () => console.log('srbija') }
              onMouseLeave={config.onLeave != null
                ? (evt) => (config as any).onLeave(evt, item)
                : undefined }
            >
              { config.columns.map(column => (
                <div
                  key={column.title}
                  className={classNames('Column', column.align || DEFAULT_COLUMN_ALIGN, column.className && column.className(item))}
                  style={{
                    flex: `${column.weight || DEFAULT_COLUMN_WEIGHT}px`,
                    width: `${column.weight || DEFAULT_COLUMN_WEIGHT}px`,
                  }}
                >
                  { column.format
                    ? column.format(item[column.title])
                    : item[column.title] }
                </div>
              )) }
            </div>
          )) }
        </Scrollbars>
      </div>
    </div>
  )
}
