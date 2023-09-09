import React from 'react'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'

import styles from './styles.module.scss'


interface NewsCardProps {
  webTitle: string
  sectionName: string
  articleId: string
  webPublicationDate: string
  src?: string
}

export const NewsCard = ({
  articleId,
  webTitle,
  sectionName,
  webPublicationDate,
  src,
}: NewsCardProps) => {
  const date = new Date(webPublicationDate)
  const formattedDate = format(date, 'd MMMM yyyy, h:mm a')
  return (
    <>
      <div className={styles.cardFormWrapp}>
        <div className={styles.cardFormWrapp__img}>
          <img
            style={{
              width: '100%',
              height: '100%',
              borderTopRightRadius: '10px',
              borderTopLeftRadius: '10px',
            }}
            src={src}
            alt="img"
          />
        </div>
        <div className={styles.cardFormWrapp__date}>
          Опубликовано: {formattedDate}
        </div>
        <div className={styles.cardFormWrapp__tema}>Раздел: {sectionName}</div>
        <div className={styles.cardFormWrapp__title}>Описание: {webTitle}</div>
        <div className={styles.cardFormWrapp__btn}>
          <Link
            to={`/searchNews/${articleId}}`}
            style={{ textDecoration: 'none', color: 'black' }}
          >
            Details →
          </Link>
        </div>
      </div>
    </>
  )
}
