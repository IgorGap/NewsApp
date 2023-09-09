import React, { useState } from 'react'
import styles from './styles.module.scss'
import { SearchBar } from '../../SearchBar/Content'
import { useDispatch } from 'react-redux'
import { getArticles } from '../../../Store/action'
import { useSelector } from 'react-redux'
import { Article } from '../../../Store/articleSlice'
import { NewsList } from '../Card'
import { useWindowResize } from '../../../hook/useWindowResize'

export const Content: React.FC = () => {
  const dispatch = useDispatch()
  const [currentPage, setCurrentPage] = useState(1)
  const apiKey = '77d77f40-f22b-4508-aeda-d265ac8cf1cb'

  const { articles, error, loading, total, pages } = useSelector(
    (state: any) => state.article
  )
  // const [titleFromSelected, setTitleFromSelected] = useState('')

  const [selectedValuePage, setSelectedValuePage] = useState('')
  const [inputValueSearchBar, setInputValueSearchBar] = useState('')
  const [selectedRelevance, setSelectedRelevance] = useState('')
  const { size } = useWindowResize();

  return (
    <div className={styles.mainContetnCard}>
      {size > 850 ? (
        <div className={styles.logoText}>News and Facts</div>
      ) : (
        <div className={styles.logoTextSize}>NAF</div>
      )}

      <div className={styles.wrappHome}>
        <SearchBar
          selectedValuePage={selectedValuePage}
          setSelectedValuePage={setSelectedValuePage}
          inputValueSearchBar={inputValueSearchBar}
          setInputValueSearchBar={setInputValueSearchBar}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          selectedRelevance={selectedRelevance}
          setSelectedRelevance={setSelectedRelevance}
        />
      </div>
      {/* <button
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
      </button> */}
      <div className={styles.cardsList}>
        {articles.map((article: Article) => (
          <div className={styles.card} key={article.id}>
            <NewsList
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
