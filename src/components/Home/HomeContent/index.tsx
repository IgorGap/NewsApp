import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import React, { useEffect, useState } from 'react'

import { NewsCard } from '../NewsCard'
import styles from './styles.module.scss'
import { SearchBar } from '../SearchBar/Content'
import { getArticles } from '../../../Store/action'
import { Article } from '../../../Store/articleSlice'
import { useWindowResize } from '../../../hook/useWindowResize'

export type SearchParameters = {
  sort: string
  section: string
  countPerPage: number
}

export const HomeContent: React.FC = () => {
  const dispatch = useDispatch()
  const [currentPage, setCurrentPage] = useState(1)
  const apiKey = '77d77f40-f22b-4508-aeda-d265ac8cf1cb'

  const { articles, loading, pages } = useSelector(
    (state: any) => state.article
  )
  const [searchParameters, setSearchParameters] = useState({
    section: 'football',
    countPerPage: 20,
    sort: 'newest',
  })

  const { size } = useWindowResize()
  const { section, countPerPage, sort } = searchParameters

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight
      const scrollTop = document.documentElement.scrollTop
      const clientHeight = document.documentElement.clientHeight

      if (scrollTop + clientHeight >= scrollHeight - 100) {
        if (!loading && currentPage < pages) {
          setCurrentPage((prev) => prev + 1)
          dispatch(
            getArticles({
              section,
              pageSize: countPerPage,
              orderBy: sort,
              currentPage: currentPage + 1,
              mode: 'add',
            }) as any
          )
        }
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [
    dispatch,
    currentPage,
    apiKey,
    section,
    countPerPage,
    sort,
    pages,
    loading,
  ])

  useEffect(() => {
    dispatch(
      getArticles({
        section,
        pageSize: countPerPage,
        orderBy: sort,
        currentPage: 1,
        mode: 'replace',
      }) as any
    )
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={styles.mainContetnCard}>
      {size > 850 ? (
        <div className={styles.logoText}>News and Facts</div>
      ) : (
        <div className={styles.logoTextSize}>NAF</div>
      )}

      <div className={styles.wrappHome}>
        <SearchBar
          {...{
            searchParameters,
          }}
          onChangeParameters={(type, value) =>
            setSearchParameters((prev) => ({ ...prev, [type]: value }))
          }
        />
      </div>
      <div style={{ marginTop: '10px', alignSelf: 'center' }}>
        {!loading && !articles.length && (
          <p>Упс... ничего не найдено. Попробуйте изменить параметры поиска.</p>
        )}
      </div>
      <div className={styles.cardsList}>
        {articles.map((article: Article) => (
          <div className={styles.card} key={article.id}>
            <NewsCard
              src={article?.fields?.thumbnail}
              articleId={article.id}
              webTitle={article?.webTitle ?? ''}
              sectionName={article?.sectionName ?? ''}
              webPublicationDate={article?.webPublicationDate ?? ''}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
