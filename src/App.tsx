import React from 'react'
import styles from './styles.module.scss'

function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__content}>
        Statr codding
        <div className={styles.wrapper__content__text}>HomePage</div>
        <div className={styles.wrapper__content__text}>NewsPage</div>
      </div>
    </div>
  )
}

export default App
