import React from 'react'
import { useSelector } from 'react-redux'

import styles from './styles.module.scss'
import { RootState } from '../../../Store/reducers'
import { HomeContent } from '../../../components/Home/HomeContent'

export const Home: React.FC = () => {
  const { loading } = useSelector((state: RootState) => state.article)

  return (
    <>
      <div className={styles.wrapp}>
        <HomeContent />
        <div className={styles.loading}>
          {loading && (
            <div
              style={{ marginTop: '-80px' }}
              className={styles.loaderContainer}
            >
              <div className={styles.loader}></div>
              <p>Loading...</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
