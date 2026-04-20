import React from 'react'
import styles from './ProgressBar.module.css'

const ProgressBar = ({ icon, label, value, color }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.labelGroup}>
        {icon && (
          <span
            className={styles.dot}
            style={color ? { backgroundColor: color } : undefined}
          >
            {typeof icon === 'string' ? icon : null}
          </span>
        )}
        <span className={styles.label}>{label}</span>
      </div>

      <div className={styles.track}>
        <div
          className={styles.fill}
          style={{ width: `${value}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>

      <div className={styles.percent}>{value}%</div>
    </div>
  )
}

export default ProgressBar
