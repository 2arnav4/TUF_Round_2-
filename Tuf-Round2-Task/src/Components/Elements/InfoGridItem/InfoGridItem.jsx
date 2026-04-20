import React from 'react'
import styles from './InfoGridItem.module.css'

const InfoGridItem = ({ icon, label, value }) => {
  return (
    <div className={styles.item}>
      <div className={styles.labelRow}>
        {icon && <span className={styles.icon}>{icon}</span>}
        <span className={styles.label}>{label}</span>
      </div>
      <div className={styles.value}>{value}</div>
    </div>
  )
}

export default InfoGridItem
