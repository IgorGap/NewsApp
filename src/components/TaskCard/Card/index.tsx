import React from 'react'
import styles from './styles.module.scss'
import { format } from 'date-fns'

interface CardFormProps {
  webTitle: string
  sectionName: string
  webPublicationDate: string
  // setInputValueSearchBar: (value: string) => void
}

export const CardForm = ({
  webTitle,
  sectionName,
  webPublicationDate,
}: CardFormProps) => {
  const date = new Date(webPublicationDate)
  const formattedDate = format(date, 'd MMMM yyyy, h:mm a')

  return (
    <div className={styles.cardFormWrapp}>
      <div className={styles.cardFormWrapp__img}>img</div>
      <div className={styles.cardFormWrapp__date}>
        Опубликовано: {formattedDate}
      </div>
      <div>Раздел: {sectionName}</div>
      <div className={styles.cardFormWrapp__title}>Описание: {webTitle}</div>
    </div>
  )
}
