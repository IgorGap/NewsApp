// export {};
import React from 'react'
import styles from './styles.module.scss'
import { Link } from 'react-router-dom'
import { SearchBar } from '../../../components'

export const Home: React.FC = () => {
  return (
    <div className={styles.wrappHome}>
      <SearchBar />
      {/* <div className={styles.cardList}>22222222222222222222222222</div> */}
    </div>
    // <div className={styles.wrapp}>
    //   <div className={styles.empty}>
    //     {/* <SearchBar /> */}
    //     <div className={styles.empty__inner}>
    //       <div className={styles.empty__title}>Главная страница</div>
    //       <div className={styles.empty__button}>
    //         <Link to="/searchNews">Перейти к новостям</Link>
    //       </div>
    //     </div>
    //   </div>
    //   <div className={styles.empty}>
    //     {/* <SearchBar /> */}
    //     <div className={styles.empty__inner}>
    //       <div className={styles.empty__title}>Главная страница</div>
    //       <div className={styles.empty__button}>
    //         <Link to="/searchNews">Перейти к новостям</Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}
