import React from 'react'
import BaseCard from '../BaseCard/BaseCard'
import styles from './CRMCard.module.css'

const CRMCard = () => {
  return (
    <BaseCard className={styles.crmCard}>
      <div className={styles.content}>
        <h2 className={styles.heading}>Integrated with your CRM</h2>
        <p className={styles.subtext}>
          Connect June to your CRM and sync product usage data
          with your CS and sales teams
        </p>
      </div>

      <div className={styles.crmPanel}>
        {/* CRM header with logos, table of companies with active seats */}
      </div>
    </BaseCard>
  )
}

export default CRMCard
