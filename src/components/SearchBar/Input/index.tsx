import React from 'react'
import styles from './styles.module.scss'
import { IconShearch } from '../../../assets/icons'

export const Input: React.FC = () => {
  return (
    <div className={styles.inputWrapper}>
      <input placeholder="Поиск" className={styles.wrapInput}></input>
      <span className={styles.icon}>
        <IconShearch />
      </span>
    </div>
  )
}
