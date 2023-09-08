import React from 'react'
import styles from './styles.module.scss'

interface SelectTitleProps {
  selectedRelevance: string
  setSelectedRelevance: (value: string) => void
}

export const SelectTitle = ({
  selectedRelevance,
  setSelectedRelevance,
}: SelectTitleProps) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.value
    setSelectedRelevance(selectedOption)
  }
  return (
    <select
      className={styles.selectTitle}
      value={selectedRelevance}
      onChange={handleSelectChange}
    >
      <option value="newest">свежие новости</option>
      <option value="oldest">старые новости</option>
      <option value="relevance">по релевантности</option>
    </select>
  )
}
