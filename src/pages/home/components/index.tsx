import React from 'react'

import { useSelector } from 'react-redux'

import { ContetnCard } from '../../../components/TaskCard/Content'

export const Home: React.FC = () => {
  const { articles, loading } = useSelector((state: any) => state.article)
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
      <ContetnCard />
      {loading && <div style={{ marginTop: '100px' }}>Loading....</div>}
    </>
  )
}
