import React from 'react'
import styles from './styles.module.scss'

import { useSelector } from 'react-redux'

import { Content } from '../../../components/TaskCard/Content'
import { RootState } from '../../../Store/reducers'

export const Home: React.FC = () => {
  const { articles, loading } = useSelector((state: RootState) => state.article)
  console.log('articles', articles)

  // при скролле проверить, не последняя ли это страница
  // если наша currentpage уже равна pages, то ничего не делаем больше
  // а если меньше, то прибавляем единице к currentpage и срабатывает

  // это мы вызываем чтобы полночтью заменить данные
  // useEffect(() => {
  //   dispatch(getArticles({ apiKey, section, pageSize, currentPage, mode: 'replace' }) as any)
  // }, [section, pageSize])

  // это вызываем скорее всего только при скролле, чтобы он добавлял данные
  // useEffect(() => {
  //   dispatch(getArticles({ apiKey, section, pageSize, currentPage, mode: 'add' }) as any)
  // }, [dispatch, currentPage])

  // useEffect(() => {
  //   alert(error?.message ?? 'Произошла ошибка')
  // }, [error])

  return (
    <>
      <div className={styles.wrapp}>
        <Content />
        <div className={styles.loading}>
          {loading && (
            <div
              style={{ marginTop: '-80px' }}
              className={styles.loaderContainer}
            >
              <div className={styles.loader}></div>
              <p>Loading...</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
