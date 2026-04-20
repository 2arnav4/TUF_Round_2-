import React from 'react'
import BaseCard from '../BaseCard/BaseCard'
import InfoGridItem from '../Elements/InfoGridItem/InfoGridItem'
import Tag from '../Elements/Tag/Tag'
import styles from './EnrichmentCard.module.css'

const EnrichmentCard = () => {
  return (
    <BaseCard className={styles.enrichmentCard}>
      <div className={styles.badge} aria-hidden="true">
        <span className={styles.badgeMark}>|||</span>
      </div>

      <div className={styles.content}>
        <h2 className={styles.heading}>Automatic enrichment</h2>
        <p className={styles.subtext}>
          Automatically enrich your customers profiles and their users powered
          by GPT
        </p>
      </div>

      <div className={styles.enrichedPanel}>
        <div className={styles.panelTitle}>
          <span className={styles.sparkle} aria-hidden="true">✦</span>
          Enriched with AI
        </div>

        <div className={styles.detailsGrid}>
          <InfoGridItem
            icon={<span aria-hidden="true">🌐</span>}
            label="Website"
            value="intercom.io"
          />
          <InfoGridItem
            icon={<span aria-hidden="true">📍</span>}
            label="Location"
            value="Dublin, Ireland"
          />
          <InfoGridItem
            icon={<span aria-hidden="true">👥</span>}
            label="Employees"
            value="800"
          />
          <InfoGridItem
            icon={<span aria-hidden="true">𝕏</span>}
            label="Twitter"
            value="@intercom"
          />
          <InfoGridItem
            icon={<span aria-hidden="true">💰</span>}
            label="Funding"
            value="$241M"
          />
          <InfoGridItem
            icon={<span aria-hidden="true">✓</span>}
            label="Qualified"
            value={<Tag variant="success">true</Tag>}
          />
        </div>
      </div>
    </BaseCard>
  )
}

export default EnrichmentCard
