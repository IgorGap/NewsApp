import React from 'react'
import styles from './styles.module.scss'
import { Input } from '../Input'
import { Button } from '../Button/Button'
import { SelectTitle } from '../SelectTitle/SelectTitle'
import { SelectPage } from '../SelectPage/SelectPage'

interface SearchBarProps {
  inputValueSearchBar: string
  setInputValueSearchBar: (value: string) => void
  selectedValuePage: string
  setSelectedValuePage: (value: string) => void
  currentPage: number
  setCurrentPage: any
  selectedRelevance: string
  setSelectedRelevance: (value: string) => void
}

export const SearchBar = ({
  inputValueSearchBar,
  setInputValueSearchBar,
  selectedValuePage,
  setSelectedValuePage,
  currentPage,
  setCurrentPage,
  selectedRelevance,
  setSelectedRelevance,
}: SearchBarProps) => {
  return (
    <>
      <div className={styles.wrapSearchBar}>
        <div className={styles.wrapSearchBar__infoTop}>
          <Input
            inputValueSearchBar={inputValueSearchBar}
            setInputValueSearchBar={setInputValueSearchBar} 
          />
          <Button
            selectedValuePage={selectedValuePage}
            inputValueSearchBar={inputValueSearchBar}
            setInputValueSearchBar={setInputValueSearchBar}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            selectedRelevance={selectedRelevance}
            setSelectedRelevance={setSelectedRelevance}
          />
        </div>
        <div className={styles.wrapSearchBar__infoMiddle}></div>
        <div className={styles.wrapSearchBar__infoBottom}>
          <SelectTitle
            selectedRelevance={selectedRelevance}
            setSelectedRelevance={setSelectedRelevance}
          />
          <SelectPage
            selectedValuePage={selectedValuePage}
            setSelectedValuePage={setSelectedValuePage}
          />
        </div>
      </div>
    </>
  )
}
