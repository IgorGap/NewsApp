import React from 'react'
import styles from './styles.module.scss'

export const SelectPage: React.FC = () => {
  return (
    <div className={styles.wrapSelectPage}>
      <div className={styles.text}>Items on page:</div>
      <select placeholder="info" className={styles.selectPage}>
        info...
      </select>
    </div>
  )
}
