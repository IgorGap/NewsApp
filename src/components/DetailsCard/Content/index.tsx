import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { DetailsCard } from '../Card'
import styles from './styles.module.scss'
import { RootState } from '../../../Store/reducers'


export const DetailsContent: React.FC = () => {
  const params = useParams()
  const articleId = Object.values(params)?.join('/')?.slice(0, -1)
  const { articles } = useSelector((state: RootState) => state.article)
  const currentArticle = articles?.find((article) => article?.id === articleId)
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
