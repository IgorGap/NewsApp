import React from 'react'
import styles from './styles.module.scss'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import { DateIcon, IconHome, ReadIcon } from '../../../assets/icons'

interface DiteliesCardProps {
  bodyText: string
  srcUrl?: any
  webPublicationDate: string
  webTitle: string
  webUrl: any
}

export const DiteliesCard = ({
  srcUrl,
  bodyText,
  webPublicationDate,
  webTitle,
  webUrl,
}: DiteliesCardProps) => {
  const date = new Date(webPublicationDate)
  const formattedDate = format(date, 'd MMMM yyyy, h:mm a')
  // const paragraphs = bodyText.split(('. '))
  const sentences = bodyText.split('. ')
  const paragraphGroups = []
  let currentParagraph = ''

  sentences.forEach((sentence, index) => {
    currentParagraph += sentence + '. '
    if ((index + 1) % 5 === 0) {
      paragraphGroups.push(currentParagraph)
      currentParagraph = ''
    }
  })

  // Если остались предложения после последней группы, добавьте их
  if (currentParagraph !== '') {
    paragraphGroups.push(currentParagraph)
  }

  return (
    <>
      <div className={styles.wrapp}>
        <div className={styles.wrapp__title}>{webTitle}</div>
        <div className={styles.wrapp__dateLink}>
          <div className={styles.wrapp__date}>
            <DateIcon />
            {formattedDate}
          </div>
          <div className={styles.wrapp__link}>
            <Link to={webUrl} target="_blank" rel="noopener noreferrer">
              read article
            </Link>
            <ReadIcon />
          </div>
        </div>
        <div className={styles.wrapp__textPhoto}>
          <div className={styles.wrapp__url}>
            <img
              style={{ borderRadius: '5px' }}
              src={srcUrl}
              alt="img"
            ></img>
          </div>
          <div className={styles.wrapp__subtitle}>
            <div className={styles.wrapp__text}>
              The most important of the retelling
            </div>
            {paragraphGroups.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className={styles.button}>
          <IconHome />
          <Link to="/">Home</Link>
        </div>
      </div>
    </>
  )
}
