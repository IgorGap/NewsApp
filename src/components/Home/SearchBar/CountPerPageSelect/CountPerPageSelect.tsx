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
    { value: 6, title: 6 },
    { value: 10, title: 10 },
    { value: 20, title: 20 },
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
