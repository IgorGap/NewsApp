import React from 'react'
import styles from './styles.module.scss'
import { IconShearch } from '../../../assets/icons'

interface InputProps {
  inputValueSearchBar: string
  onChange: (value: string) => void
}

export const Input = ({ inputValueSearchBar, onChange }: InputProps) => {
  return (
    <div className={styles.inputWrapper}>
      <input
        placeholder="Поиск"
        className={styles.wrapInput}
        value={inputValueSearchBar}
        onChange={(e) => onChange(e.target.value)}
      ></input>
      <span className={styles.icon}>
        <IconShearch />
      </span>
    </div>
  )
}
