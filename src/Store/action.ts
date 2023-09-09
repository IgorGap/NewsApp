import { createAsyncThunk } from '@reduxjs/toolkit'
import { createAction } from '@reduxjs/toolkit'

export const updatePages = createAction('update/pages')

export const getArticles = createAsyncThunk(
  'getArticles',
  async (
    arg: {
      apiKey: string
      section: string
      pageSize: number
      currentPage: number
      mode: string
      orderBy: string
      showElements: string;
    },
    thunkAPI
  ) => {
    const { apiKey, section, pageSize, currentPage, orderBy} = arg
    try {
      const res = await fetch(
        `https://content.guardianapis.com/search?section=${section || 'football'}&api-key=${apiKey}&page-size=${pageSize}&page=${currentPage}&order-by=${orderBy}&show-fields=thumbnail,bodyText&show-refinements=all&order-by=relevance&show-elements=image`
      ).then((data) => data.json())
      return res
    } catch (error) {
      throw error
    }
  }
)
