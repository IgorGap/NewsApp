
import React from 'react'
import styles from './styles.module.scss'
import { Link } from 'react-router-dom'

export const News: React.FC = () => {
  return (
    <>
      <div className={styles.empty}>
        <div className={styles.empty__inner}>
          <div className={styles.empty__title}>Страница новостей</div>
          <div className={styles.empty__button}>
            <Link to="/">На главную</Link>
          </div>
        </div>
      </div>
    </>
  )
}
