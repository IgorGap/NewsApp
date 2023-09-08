import { createAsyncThunk } from '@reduxjs/toolkit'


export const getArticles = createAsyncThunk(
  'getArticles',
  async (
    arg: {
      apiKey: string
      section: string
      pageSize: number
      currentPage: number
      mode: string
    },
    thunkAPI
  ) => {
    const { apiKey, section, pageSize, currentPage } = arg
    try {
      const res = await fetch(
        `https://content.guardianapis.com/search?section=${section}&api-key=${apiKey}&page-size=${pageSize}&page=${currentPage}`
      ).then((data) => data.json())
      return res
    } catch (error) {
      throw error
    }
  }
)
