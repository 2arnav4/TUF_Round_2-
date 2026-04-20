import React from 'react'
import BaseCard from '../BaseCard/BaseCard'
import styles from './EnrichmentCard.module.css'

const EnrichmentCard = () => {
  return (
    <BaseCard className={styles.enrichmentCard}>
      <div className={styles.content}>
        <h2 className={styles.heading}>Automatic enrichment</h2>
        <p className={styles.subtext}>
          Automatically enrich your customers profiles and their users powered
          by GPT
        </p>
      </div>

      <div className={styles.enrichedPanel}>
        {/* Enriched with AI header, details grid: website, location, employees, twitter, funding, qualified */}
      </div>
    </BaseCard>
  )
}

export default EnrichmentCard
