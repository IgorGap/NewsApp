import React from 'react'

import styles from './styles.module.scss'

interface SortSelectProps {
  value: string
  onChange: (value: string) => void
}

export const SortSelect = ({ value, onChange }: SortSelectProps) => {
  const options = [
    { value: 'newest', title: 'свежие новости' },
    { value: 'oldest', title: 'старые новости' },
    { value: 'relevance', title: 'по релевантности' },
  ]
  return (
    <select
      value={value}
      className={styles.select}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.title}
        </option>
      ))}
    </select>
  )
}
