import React from 'react'
import BaseCard from '../BaseCard/BaseCard'
import StatRow from '../Elements/StatRow/StatRow'
import ProgressBar from '../Elements/ProgressBar/ProgressBar'
import styles from './ReportsCard.module.css'

const bolt = <span aria-hidden="true">⚡</span>

const ReportsCard = () => {
  return (
    <BaseCard className={styles.reportsCard}>
      <div className={styles.overlayBox} aria-hidden="true" />
      <div className={styles.layout}>
        <div className={styles.leftSection}>
          <h2 className={styles.heading}>
            We automatically generate reports for each of your customers
          </h2>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.miniCard}>
            <div className={styles.companyHeader}>
              <div className={styles.logo} aria-hidden="true">
                <span className={styles.logoMark}>|||</span>
              </div>
              <div className={styles.companyMeta}>
                <div className={styles.companyName}>Intercom</div>
                <div className={styles.joined}>Joined 9 Feb 2023</div>
              </div>
              <span className={styles.statusDot} aria-hidden="true" />
            </div>

            <div className={styles.stats}>
              <StatRow icon={bolt} label="Total seats" value="50" />
              <StatRow icon={bolt} label="Active seats" value="22" />
              <StatRow icon={bolt} label="Active last 7 days" value="True" />
            </div>
          </div>

          <div className={`${styles.miniCard} ${styles.activationCard}`}>
            <div className={styles.activationHeader}>
              <div className={styles.activationTitle}>Company activation</div>
              <div className={styles.activationPercent}>40%</div>
            </div>

            <div className={styles.bars}>
              <ProgressBar label="Signed up" value={100} icon="●" color="#f472b6" />
              <ProgressBar label="Setup" value={80} icon="●" color="#94a3b8" />
              <ProgressBar label="Aha moment" value={60} icon="●" color="#facc15" />
              <ProgressBar label="Activated" value={40} icon="●" color="#fb923c" />
              <ProgressBar label="Active" value={80} icon="●" color="#2dd4bf" />
            </div>
          </div>
        </div>
      </div>
    </BaseCard>
  )
}

export default ReportsCard
