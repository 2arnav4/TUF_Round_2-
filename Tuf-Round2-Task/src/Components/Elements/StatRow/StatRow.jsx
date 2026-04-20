import React from 'react'
import styles from './StatRow.module.css'

const StatRow = ({ icon, label, value }) => {
  return (
    <div className={styles.row}>
      <span className={styles.labelGroup}>
        {icon && <span className={styles.icon}>{icon}</span>}
        <span className={styles.label}>{label}</span>
      </span>
      <span className={styles.value}>{value}</span>
    </div>
  )
}

export default StatRow
