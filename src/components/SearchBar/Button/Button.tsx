import React from 'react'
import styles from './styles.module.scss'
import { useDispatch } from 'react-redux'
import { getArticles } from '../../../Store/action'

interface ButtonProps {
  setInputValueSearchBar: (value: string) => void
  inputValueSearchBar: string
  selectedValuePage: string
  currentPage: number
  setCurrentPage: any
  selectedRelevance: string
  setSelectedRelevance: (value: string) => void
}
export const Button = ({
  inputValueSearchBar,
  selectedValuePage,
  setInputValueSearchBar,
  currentPage,
  setCurrentPage,
  selectedRelevance,
}: ButtonProps) => {
  const dispatch = useDispatch()
  const apiKey = '77d77f40-f22b-4508-aeda-d265ac8cf1cb'

  return (
    <button
      onClick={() => {
        // setInputValueSearchBar('')
        setCurrentPage((prev: any) => prev + 1)
        dispatch(
          getArticles({
            apiKey,
            section: inputValueSearchBar,
            pageSize: Number(selectedValuePage),
            currentPage: currentPage + 1,
            mode: 'replace',
            orderBy: selectedRelevance,
            showElements:'image'
          }) as any
        )
      }}
      className={styles.wrapBtn}
    >
      Find
    </button>
  )
}
