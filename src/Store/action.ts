import { createAsyncThunk } from '@reduxjs/toolkit'
import { createAction } from '@reduxjs/toolkit'


export const updatePages = createAction('update/pages')

export const getArticles = createAsyncThunk(
  'getArticles',
  async (
    arg: {
      section: string
      pageSize: number
      currentPage: number
      mode: string
      orderBy: string
    },
    thunkAPI
  ) => {
    const { section, pageSize, currentPage, orderBy} = arg
    try {
      const res = await fetch(
        `https://content.guardianapis.com/search?section=${section || 'football'}&api-key=77d77f40-f22b-4508-aeda-d265ac8cf1cb&page-size=${pageSize}&page=${currentPage}&order-by=${orderBy}&show-fields=thumbnail,bodyText`
      ).then((data) => data.json())
      return res
    } catch (error) {
      throw error
    }
  }
)
