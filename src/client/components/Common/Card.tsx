import * as  classNames from 'classnames'
import * as React from 'react'

import * as styles from './Card.css'

interface ICardProps extends Pick<React.HTMLAttributes<HTMLDivElement>, 'className' | 'style'>{
  title?: JSX.Element | string,
  titleExtra?: JSX.Element | string,
  footer?: JSX.Element | string,
}

export const Card: React.SFC<ICardProps> = ({
  children,
  className,
  title,
  titleExtra,
  footer,
  style,
}) => (
  <div
    className={classNames(styles.Card, className)}
    style={style}
  >
    { title || titleExtra
      ? (
        <div className={styles.Header}>
          <div className={styles.Title}>{ title }</div>
          { titleExtra
            ? <div className={styles.TitleExtra}>{ titleExtra }</div>
            : null }
        </div>
      )
      : null }
    <div className={styles.Body}>
      { children }
    </div>
    { footer
      ? <div className={styles.Footer}>{ footer }</div>
      : null }
  </div>
)
