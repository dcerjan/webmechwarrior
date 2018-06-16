import * as React from 'react'

import * as styles from './Card.css'

interface ICardProps {
  title: JSX.Element | string,
  titleExtra?: JSX.Element | string,
  footer?: JSX.Element | string,
}

export const Card: React.SFC<ICardProps> = ({
  children,
  title,
  titleExtra,
  footer,
}) => (
  <div className={styles.Card}>
    <div className={styles.Header}>
      <div className={styles.Title}>{ title }</div>
      { titleExtra
        ? <div className={styles.TitleExtra}>{ titleExtra }</div>
        : null }
    </div>
    <div className={styles.Body}>
      { children }
    </div>
    { footer
      ? <div className={styles.Footer}>{ footer }</div>
      : null }
  </div>
)
