import React from 'react'
import styles from './styles.module.scss'
import { IconShearch } from '../../../assets/icons'

interface InputProps {
  inputValueSearchBar: string
  setInputValueSearchBar: (value: string) => void
}

export const Input = ({
  inputValueSearchBar,
  setInputValueSearchBar,
}: InputProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    setInputValueSearchBar(newValue)
  }

  return (
    <div className={styles.inputWrapper}>
      <input
        placeholder="Поиск"
        className={styles.wrapInput}
        value={inputValueSearchBar}
        onChange={handleInputChange}
      ></input>
      <span className={styles.icon}>
        <IconShearch />
      </span>
    </div>
  )
}
