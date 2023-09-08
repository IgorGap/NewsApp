import React, { useState } from 'react'
import styles from './styles.module.scss'
import { SearchBar } from '../../SearchBar/Content'
import { useDispatch } from 'react-redux'
import { getArticles } from '../../../Store/action'
import { useSelector } from 'react-redux'
import { Article } from '../../../Store/articleSlice'
import { CardForm } from '../Card'

export const ContentCard: React.FC = () => {
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

  // const section = inputValueSearchBar
  const relevance = selectedRelevance
  console.log('relevance CONTENT', relevance)

  // const handleSelectedTitleChange = (value: string) => {
  //   setTitleFromSelected(value)
  // }
  // console.log('titleFromSelected', titleFromSelected)
  // const pageSize =
  //   Number(selectedValuePage) === 0 ? 3 : Number(selectedValuePage)
  return (
    <div className={styles.mainContetnCard}>
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
            <CardForm
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
