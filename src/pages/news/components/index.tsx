import React from 'react'
import styles from './styles.module.scss'
import { DiteliesContent } from '../../../components/DetailsCard/Content'

export const News: React.FC = () => {
  return (
    <>
      <DiteliesContent />
    </>
  )
}

// import React from 'react'
// import styles from './styles.module.scss'
// import { Link, useParams } from 'react-router-dom'
// import { useSelector } from 'react-redux'
// import { RootState } from '../../../Store/reducers'

// export const News: React.FC = () => {
//   const params = useParams()
//   const articleId = Object.values(params)?.join('/')?.slice(0, -1)
//   const { articles } = useSelector((state: RootState) => state.article)
//   const currentArticle = articles?.find((article) => article?.id === articleId)
//   return (
//     <>
//       <div className={styles.empty}>
//         <div className={styles.empty__inner}>
//           <div className={styles.empty__title}>Страница новостей</div>
//           <img src={currentArticle?.fields?.thumbnail} alt="img" />
//           <div>{currentArticle?.fields?.bodyText}</div>
//           <div className={styles.empty__button}>
//             <Link to="/">На главную</Link>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }
