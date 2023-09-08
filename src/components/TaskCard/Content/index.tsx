import React, { useState } from 'react'
import styles from './styles.module.scss'
import { SearchBar } from '../../SearchBar/Content'
import { useDispatch } from 'react-redux'
import { getArticles } from '../../../Store/action'
import { useSelector } from 'react-redux'
import { Article } from '../../../Store/articleSlice'

export const ContetnCard: React.FC = () => {
  const dispatch = useDispatch()
  const [currentPage, setCurrentPage] = useState(1)
  const apiKey = '77d77f40-f22b-4508-aeda-d265ac8cf1cb'
  const section = 'politics'
  const pageSize = 1
  const { articles, error, loading, total, pages } = useSelector(
    (state: any) => state.article
  )

  return (
    <div className={styles.mainContetnCard}>
      <div className={styles.wrappHome}>
        <SearchBar />
      </div>
        <button
          onClick={() => {
            setCurrentPage((prev) => prev + 1)
            dispatch(
              getArticles({
                apiKey,
                section,
                pageSize,
                currentPage: currentPage + 1,
                mode: 'replace',
              }) as any
            )
          }}
        >
          заменить
        </button>
        <button
          onClick={() => {
            setCurrentPage((prev) => prev + 1)
            dispatch(
              getArticles({
                apiKey,
                section,
                pageSize,
                currentPage: currentPage + 1,
                mode: 'add',
              }) as any
            )
          }}
        >
          добавить
        </button>
        <div className={styles.cardsList}>
          {articles.map((article: Article) => (
            <div className={styles.card} key={article.id}>
              {article?.webTitle ?? ''}
            </div>
          ))}
        </div>
    </div>
  )
}
