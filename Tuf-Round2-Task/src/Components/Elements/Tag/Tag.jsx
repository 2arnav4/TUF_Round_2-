import React from 'react'
import styles from './Tag.module.css'

const Tag = ({ children, variant = 'neutral' }) => {
  const cls = `${styles.tag} ${styles[variant] || ''}`.trim()
  return <span className={cls}>{children}</span>
}

export default Tag
