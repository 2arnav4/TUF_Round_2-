import React from 'react'
import BaseCard from '../BaseCard/BaseCard'
import styles from './MilestonesCard.module.css'

const MilestonesCard = () => {
  return (
    <BaseCard className={styles.milestonesCard}>
      <div className={styles.content}>
        <h2 className={styles.heading}>Celebrate milestones</h2>
        <p className={styles.subtext}>
          Instant alerts and weekly digests to keep your team aligned
          and celebrate wins
        </p>
      </div>

      <div className={styles.alertPanel}>
        {/* Slack-style alert: header (June, time), qualified signup, company details grid */}
      </div>
    </BaseCard>
  )
}

export default MilestonesCard
