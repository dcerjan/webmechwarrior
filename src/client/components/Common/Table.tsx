import * as classNames from 'classnames'
import * as React from 'react'
import Scrollbars from 'react-custom-scrollbars'

import * as styles from './Table.css'

export interface IColumnConfig<T extends {}, S extends keyof T> {
  field: S,
  header?: string,
  weight?: number,
  alignment?: 'Left' | 'Center' | 'Right',
  format?: (row: T, value: T[S]) => string,
  className?: (row: T, value: T[S]) => string,
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
  rowWrapper?: React.ComponentClass<{ value: T, component: JSX.Element | JSX.Element[]} & Pick<React.HTMLAttributes<HTMLDivElement>, 'className'>>,
  className?: (value: T) => string,
  onEnter?: (event: React.MouseEvent<HTMLDivElement>, value: T) => void,
  onLeave?: (event: React.MouseEvent<HTMLDivElement>, value: T) => void,
}

interface ITableProps<T> {
  config: IRowConfig<T>,
  data: T[],
}

const DEFAULT_COLUMN_WEIGHT = 120
const DEFAULT_COLUMN_ALIGN = 'Left'

export class Table<T> extends React.PureComponent<ITableProps<T>> {
  public render() {
    const { config, data } = this.props

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
            { data.map((item, index) => this.renderRow(item, index)) }
          </Scrollbars>
        </div>
      </div>
    )
  }

  private renderColumns(item: T, index: number) {
    const { config } = this.props
    return (
      <div
        key={`${index}`}
        className={classNames(styles.Row, config.className && config.className(item))}
        onMouseEnter={config.onEnter != null
          ? (evt) => (config as any).onEnter(evt, item)
          : undefined }
        onMouseLeave={config.onLeave != null
          ? (evt) => (config as any).onLeave(evt, item)
          : undefined }
      >
        { config.columns.map((column, index) => (
          <div
            key={`${column.field}:${index}`}
            className={classNames(styles.Column, getAlignment(column.alignment || DEFAULT_COLUMN_ALIGN), column.className && column.className(item, item[column.field]))}
            style={{
              flex: `${column.weight || DEFAULT_COLUMN_WEIGHT}px`,
              width: `${column.weight || DEFAULT_COLUMN_WEIGHT}px`,
            }}
          >
            { column.format ? column.format(item, item[column.field]) : item[column.field].toString() }
          </div>
        )) }
      </div>
    )
  }

  private renderRow(item: T, index: number) {
    const { config } = this.props

    const Wrapper = config.rowWrapper

    return Wrapper
      ? <Wrapper
        className={styles.RowWrapper}
        key={index}
        value={item}
        component={this.renderColumns(item, index)}
      />
      : this.renderColumns(item, index)
  }
}
