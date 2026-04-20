import React from 'react'
import styles from './TableRow.module.css'

const TableRow = ({ icon, company, value, change, changeType = 'success' }) => {
  return (
    <div className={styles.row}>
      <div className={styles.company}>
        {icon && <span className={styles.icon}>{icon}</span>}
        <span className={styles.companyName}>{company}</span>
      </div>

      <div className={styles.valueGroup}>
        <span className={styles.value}>{value}</span>
        {change && (
          <span className={`${styles.change} ${styles[changeType]}`}>
            ({change})
          </span>
        )}
      </div>
    </div>
  )
}

export default TableRow
