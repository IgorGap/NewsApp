import React from 'react'
import styles from './styles.module.scss'
import { Input } from '../Input'
import { Button } from '../Button/Button'
import { SelectTitle } from '../SelectTitle/SelectTitle'
import { SelectPage } from '../SelectPage/SelectPage'



export const SearchBar: React.FC = () => {
  return (
    <>
      <div className={styles.wrapSearchBar}>
        {/* <div className={styles.wrap__contetnt}> */}
        <div className={styles.wrapSearchBar__infoTop}>
          <Input />
          <Button />
        </div>
        <div className={styles.wrapSearchBar__infoMiddle}>
        </div>
        <div className={styles.wrapSearchBar__infoBottom}>
          <SelectTitle />
          <SelectPage />
        </div>
      </div>
      {/* </div> */}
    </>
  )
}
