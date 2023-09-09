import React from 'react'
import styles from './styles.module.scss'
import { DetailsCard } from '../Card'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../../Store/reducers'

export const DiteliesContent: React.FC = () => {
  const params = useParams()
  const articleId = Object.values(params)?.join('/')?.slice(0, -1)
  const { articles } = useSelector((state: RootState) => state.article)
  const currentArticle = articles?.find((article) => article?.id === articleId)
  console.log('currentArticle', currentArticle)
  return (
    <div className={styles.mainContetnCard}>
      <DetailsCard
        srcUrl={currentArticle?.fields?.thumbnail}
        bodyText={currentArticle?.fields?.bodyText ?? ''}
        webPublicationDate={currentArticle?.webPublicationDate ?? ''}
        webTitle={currentArticle?.webTitle ?? ''}
        webUrl={currentArticle?.webUrl ?? ''}
      />
    </div>
  )
}
