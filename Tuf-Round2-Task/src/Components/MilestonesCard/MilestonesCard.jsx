import React from 'react'
import BaseCard from '../BaseCard/BaseCard'
import InfoGridItem from '../Elements/InfoGridItem/InfoGridItem'
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
        <div className={styles.alertHeader}>
          <div className={styles.appIcon} aria-hidden="true">J</div>
          <span className={styles.appName}>June</span>
          <span className={styles.appBadge}>APP</span>
          <span className={styles.timestamp}>10:36 AM</span>
          <span className={styles.slackMark} aria-hidden="true">#</span>
        </div>

        <div className={styles.message}>
          <span className={styles.messageIcon} aria-hidden="true">⚡</span>
          <span className={styles.messageTitle}>Qualified signup</span>
        </div>

        <div className={styles.user}>
          <span className={styles.avatar} aria-hidden="true">E</span>
          <span className={styles.userName}>Eoghan McCabe</span>
          <span className={styles.userEmail}>eoghan@intercom.io</span>
        </div>

        <div className={styles.detailsGrid}>
          <InfoGridItem label="Company name:" value="Intercom" />
          <InfoGridItem label="Location:" value="Dublin, Ireland" />
          <InfoGridItem label="Role:" value="CTO & Co-Founder" />
          <InfoGridItem
            label="Company website:"
            value={<a className={styles.link} href="#!">intercom.io</a>}
          />
          <InfoGridItem label="Company size:" value="800" />
          <InfoGridItem
            label="LinkedIn:"
            value={<a className={styles.link} href="#!">View profile</a>}
          />
          <InfoGridItem label="Funding amount:" value="33M" />
          <InfoGridItem
            label="Crunchbase:"
            value={<a className={styles.link} href="#!">View company</a>}
          />
        </div>
      </div>
    </BaseCard>
  )
}

export default MilestonesCard
