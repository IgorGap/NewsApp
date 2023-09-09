import React from 'react'
import styles from './styles.module.scss'
import { Input } from '../Input'
import { Button } from '../Button/Button'
import { SortSelect } from '../SortSelect/SortSelect'
import { CountPerPageSelect } from '../CountPerPageSelect/CountPerPageSelect'

interface SearchBarProps {
  searchParameters: any
  onChangeParameters: (type: string, value: number | string) => void
}

export const SearchBar = ({
  searchParameters,
  onChangeParameters,
}: SearchBarProps) => {
  const { section, sort, countPerPage } = searchParameters

  return (
    <>
      <div className={styles.wrapSearchBar}>
        <div className={styles.wrapSearchBar__infoTop}>
          <Input
            inputValueSearchBar={section}
            onChange={(value: string) => onChangeParameters('section', value)}
          />
          <Button {...{ searchParameters }} />
        </div>
        <div className={styles.wrapSearchBar__infoMiddle}></div>
        <div className={styles.wrapSearchBar__infoBottom}>
          <SortSelect
            value={sort}
            onChange={(value: string) => onChangeParameters('sort', value)}
          />
          <CountPerPageSelect
            countPerPage={countPerPage}
            onChange={(value: number) =>
              onChangeParameters('countPerPage', value)
            }
          />
        </div>
      </div>
    </>
  )
}
