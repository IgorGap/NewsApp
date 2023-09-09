import React from 'react'

import styles from './styles.module.scss'

interface CountPerPageSelectProps {
  countPerPage: number
  onChange: (value: number) => void
}

export const CountPerPageSelect = ({
  countPerPage,
  onChange,
}: CountPerPageSelectProps) => {
  const options = [
    { value: 1, title: 1 },
    { value: 3, title: 3 },
    { value: 5, title: 5 },
    { value: 10, title: 10 },
    { value: 30, title: 30 },
    { value: 50, title: 50 },
  ]
  return (
    <div className={styles.wrapSelectPage}>
      <div className={styles.text}>Items on page</div>
      <select
        value={countPerPage}
        className={styles.selectPage}
        onChange={(e) => onChange(Number(e.target.value))}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.title}
          </option>
        ))}
      </select>
    </div>
  )
}
