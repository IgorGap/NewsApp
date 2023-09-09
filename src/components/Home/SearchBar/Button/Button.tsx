import React from 'react'
import { useDispatch } from 'react-redux'

import styles from './styles.module.scss'
import { getArticles } from '../../../../Store/action'
import { SearchParameters } from '../../HomeContent'

interface ButtonProps {
  searchParameters: SearchParameters
}
export const Button = ({ searchParameters }: ButtonProps) => {
  const { section, sort, countPerPage } = searchParameters
  const dispatch = useDispatch()

  return (
    <button
      onClick={() => {
        dispatch(
          getArticles({
            section,
            pageSize: countPerPage,
            currentPage: 1,
            mode: 'replace',
            orderBy: sort,
          }) as any
        )
      }}
      className={styles.wrapBtn}
    >
      Find
    </button>
  )
}
