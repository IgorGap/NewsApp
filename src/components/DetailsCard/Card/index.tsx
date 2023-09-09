import React from 'react'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'

import styles from './styles.module.scss'
import { DateIcon, IconHome, ReadIcon } from '../../../assets/icons'

interface DetailsCardProps {
  bodyText: string
  srcUrl?: string
  webPublicationDate: string
  webTitle: string
  webUrl: string
}

export const DetailsCard = ({
  srcUrl,
  bodyText,
  webPublicationDate,
  webTitle,
  webUrl,
}: DetailsCardProps) => {
  const date = webPublicationDate ? new Date(webPublicationDate) : new Date()
  const formattedDate = format(date, 'd MMMM yyyy, h:mm a')
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
          <img
            style={{
              borderRadius: '5px',
              float: 'left',
              marginRight: '15px',
              marginBottom: '5px',
            }}
            src={srcUrl}
            alt="img"
          ></img>
          <div className={styles.wrapp__text}>
            The most important of the retelling
          </div>
          {paragraphGroups.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className={styles.button}>
          <IconHome />
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/">
            Home
          </Link>
        </div>
      </div>
    </>
  )
}
