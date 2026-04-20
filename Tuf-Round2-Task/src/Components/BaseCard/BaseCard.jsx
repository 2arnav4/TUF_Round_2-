import React from 'react'
import styles from './BaseCard.module.css'

const BaseCard = ({ children, className = '', ...rest }) => {
  const classNames = `${styles.card} ${className}`.trim()

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  )
}

export default BaseCard
