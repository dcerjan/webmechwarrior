import * as classNames from 'classnames'
import * as React from 'react'

import * as styles from './Detail.css'

export enum DetailColor {
  Lime = 'Lime',
  Purple = 'Purple',
  Teal = 'Teal',
  Blue = 'Blue',
  LightGrey = 'LightGrey',
  BluishGrey = 'BluishGrey',
  TransparentLime = 'TransparentLime',
  TransparentPurple = 'TransparentPurple',
  TransparentTeal = 'TransparentTeal',
  TransaprentBlue = 'TransaprentBlue',
  TransaprentLightGrey = 'TransaprentLightGrey',
  TransparentBluishGrey = 'TransparentBluishGrey',
}

interface IDetailProps {
  color?: DetailColor,
  label: JSX.Element | string,
  value?: JSX.Element | string,
  disabled?: boolean,
}

export const Detail: React.SFC<IDetailProps> = ({
  color,
  label,
  value,
  disabled,
}) => (
  <div className={
    classNames(
      styles.Detail,
      color && styles[color],
      disabled && styles.Disabled
    )}
  >
    <div className={styles.Label}>{ label }</div>
    { value
      ? <div className={styles.Value}>{ value }</div>
      : null }
  </div>
)
