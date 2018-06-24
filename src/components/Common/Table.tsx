import * as classNames from 'classnames'
import * as React from 'react'
import Scrollbars from 'react-custom-scrollbars'

import * as styles from './Table.css'

export interface IColumnConfig<T, S extends keyof T, V = T[S]> {
  field: keyof T,
  header?: string,
  weight?: number,
  alignment?: 'Left' | 'Center' | 'Right',
  format?: (row: T, value: V) => string,
  className?: (row: T, value: V) => string,
}

const getAlignment = (alignment: 'Left' | 'Center' | 'Right'): string => {
  switch (alignment) {
  case 'Left': return styles.Left
  case 'Center': return styles.Center
  case 'Right': return styles.Right
  }
}

export interface IRowConfig<T> {
  columns: Array<IColumnConfig<T, keyof T>>,
  className?: (value: T) => string,
  onEnter?: (event: React.MouseEvent<HTMLDivElement>, value: T) => void,
  onLeave?: (event: React.MouseEvent<HTMLDivElement>, value: T) => void,
  onDragStart?: (event: React.DragEvent<HTMLDivElement>, value: T) => void,
}

interface ITableProps<T> {
  config: IRowConfig<T>,
  data: T[],
}

const DEFAULT_COLUMN_WEIGHT = 120
const DEFAULT_COLUMN_ALIGN = 'Left'

export const Table: React.SFC<ITableProps<any>> = ({ config, data }) => {
  return (
    <div className={styles.Table}>
      <div className={styles.Header}>
        { config.columns.map(column => (
          <div
            key={column.field.toString()}
            className={classNames(styles.Column, getAlignment(column.alignment || DEFAULT_COLUMN_ALIGN))}
            style={{
              flex: `${column.weight || DEFAULT_COLUMN_WEIGHT}px`,
              width: `${column.weight || DEFAULT_COLUMN_WEIGHT}px`,
            }}
          >
            { column.header || column.field }
          </div>
        )) }
      </div>
      <div className={styles.Body}>
        <Scrollbars
          autoHeight
          autoHeightMax={720}
          autoHide
          hideTracksWhenNotNeeded
        >
          { data.map(item => (
            <div
              key={item.name}
              className={classNames(styles.Row, config.className && config.className(item))}
              onMouseEnter={config.onEnter != null
                ? (evt) => (config as any).onEnter(evt, item)
                : undefined }
              onMouseLeave={config.onLeave != null
                ? (evt) => (config as any).onLeave(evt, item)
                : undefined }
              draggable={config.onDragStart != null}
              onDragStart={config.onDragStart != null
                ? (evt) => (config as any).onDragStart(evt, item)
                : undefined
              }
            >
              { config.columns.map(column => (
                <div
                  key={column.field.toString()}
                  className={classNames(styles.Column, getAlignment(column.alignment || DEFAULT_COLUMN_ALIGN), column.className && column.className(item, item[column.field]))}
                  style={{
                    flex: `${column.weight || DEFAULT_COLUMN_WEIGHT}px`,
                    width: `${column.weight || DEFAULT_COLUMN_WEIGHT}px`,
                  }}
                >
                  { column.format
                    ? column.format(item, item[column.field])
                    : item[column.field] }
                </div>
              )) }
            </div>
          )) }
        </Scrollbars>
      </div>
    </div>
  )
}
