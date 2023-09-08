import React from 'react'
import styles from './styles.module.scss'

interface SelectPageProps {
  selectedValuePage: string
  setSelectedValuePage: (value: string) => void
}

export const SelectPage = ({
  selectedValuePage,
  setSelectedValuePage,
}: SelectPageProps) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.value
    setSelectedValuePage(selectedOption)
    // onValueChangePage(selectedOption)
  }
  return (
    <div className={styles.wrapSelectPage}>
      <div className={styles.text}>Items on page: {selectedValuePage}</div>
      <select
        value={selectedValuePage}
        onChange={handleSelectChange}
        className={styles.selectPage}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
    </div>
  )
}
