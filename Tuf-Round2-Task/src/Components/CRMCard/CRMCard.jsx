import BaseCard from '../BaseCard/BaseCard'
import TableRow from '../Elements/TableRow/TableRow'
import Tag from '../Elements/Tag/Tag'
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

      <div className={styles.statusStrip}>
        <span className={styles.statusItem}>
          <span className={styles.bolt} aria-hidden="true">⚡</span>
          Last seen
          <Tag variant="success">today</Tag>
        </span>
        <span className={styles.statusItem}>
          <span className={styles.bolt} aria-hidden="true">⚡</span>
          Activated
          <Tag variant="success">true</Tag>
        </span>
      </div>

      <div className={styles.crmPanel}>
        <div className={styles.panelHeader}>
          <span className={styles.panelTitle}>CRM</span>
          <div className={styles.logos} aria-hidden="true">
            <span className={`${styles.logo} ${styles.logoHubspot}`}>H</span>
            <span className={`${styles.logo} ${styles.logoIntercom}`}>I</span>
          </div>
        </div>

        <div className={styles.tableHead}>
          <span className={styles.col}>Company</span>
          <span className={styles.col}>
            <span className={styles.seatIcon} aria-hidden="true">🪑</span>
            Active seats
          </span>
        </div>

        <TableRow
          icon={<span className={styles.companyIcon}>▮</span>}
          company="Intercom"
          value="22"
          change="+3"
          changeType="success"
        />
        <TableRow
          icon={<span className={`${styles.companyIcon} ${styles.iconPink}`}>▮</span>}
          company="Arnie"
          value="20"
          change="-2"
          changeType="danger"
        />
      </div>
    </BaseCard>
  )
}

export default CRMCard
