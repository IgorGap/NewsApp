import React from 'react'
import styles from './styles.module.scss'
import { format } from 'date-fns'
import { ButtinCard } from '../Button'
import { Link } from 'react-router-dom'

interface CardFormProps {
  webTitle: string
  sectionName: string
  articleId: string
  webPublicationDate: string
  src?: any
  // setInputValueSearchBar: (value: string) => void
}

export const CardForm = ({
  articleId,
  webTitle,
  sectionName,
  webPublicationDate,
  src,
}: CardFormProps) => {
  const date = new Date(webPublicationDate)
  const formattedDate = format(date, 'd MMMM yyyy, h:mm a')
  return (
    <>
      <div className={styles.cardFormWrapp}>
        <div className={styles.cardFormWrapp__img}>
          <img style={{ width: '100%', height:'100%' }} src={src} alt="img" />
        </div>
        <div className={styles.cardFormWrapp__date}>
          Опубликовано: {formattedDate}
        </div>
        <div>Раздел: {sectionName}</div>
        <div className={styles.cardFormWrapp__title}>Описание: {webTitle}</div>
      </div>
      <div className={styles.cardFormWrapp__btn}>
        {/* <ButtinCard /> */}

        <Link to={`/searchNews/${articleId}}`}>подробнее</Link>
      </div>
    </>
  )
}
