import React from 'react'
import BaseCard from '../BaseCard/BaseCard'
import styles from './ReportsCard.module.css'

const ReportsCard = () => {
  return (
    <BaseCard className={styles.reportsCard}>
      <div className={styles.content}>
        <h2 className={styles.heading}>
          We automatically generate reports for each of your customers
        </h2>
      </div>

      <div className={styles.visuals}>
        <div className={styles.infoPanel}>
          {/* Intercom info: logo, name, joined date, stats rows */}
        </div>

        <div className={styles.activationPanel}>
          {/* Company activation: percent, progress list */}
        </div>
      </div>
    </BaseCard>
  )
}

export default ReportsCard
