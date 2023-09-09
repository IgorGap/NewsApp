import React from 'react'
import { useDispatch } from 'react-redux'

import styles from './styles.module.scss'
import { getArticles } from '../../../Store/action'

interface ButtonProps {
  searchParameters: any
}
export const Button = ({ searchParameters }: ButtonProps) => {
  const { section, sort, countPerPage } = searchParameters
  const dispatch = useDispatch()
  const apiKey = '77d77f40-f22b-4508-aeda-d265ac8cf1cb'

  return (
    <button
      onClick={() => {
        dispatch(
          getArticles({
            apiKey,
            section,
            pageSize: countPerPage,
            currentPage: 1,
            mode: 'replace',
            orderBy: sort,
            showElements: 'image',
          }) as any
        )
      }}
      className={styles.wrapBtn}
    >
      Find
    </button>
  )
}
