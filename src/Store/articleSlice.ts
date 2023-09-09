import { createSlice } from '@reduxjs/toolkit'

import { getArticles } from './action'


export interface Article {
  id: string
  type: string
  sectionId: string
  sectionName: string
  webPublicationDate: string
  webTitle: string
  webUrl: string
  apiUrl: string
  isHosted: boolean
  pillarId: string
  pillarName: string
  fields:{
    thumbnail: string
    bodyText: string
  }
}

export interface ArticleState {
  articles: Article[]
  loading: boolean
  error: any
  pages: number
  total: number
  showElements: string;
}
const initialState: ArticleState = {
  articles: [],
  error: null,
  loading: false,
  pages: 0,
  total: 0,
  showElements: ''
}

const ArticleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getArticles.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    builder.addCase(getArticles.fulfilled, (state, action) => {
      if (action.meta.arg.mode === 'add') {
        state.articles = [...state.articles, ...action.payload?.response?.results];
      } else if (action.meta.arg.mode === 'replace') {
        state.articles = action.payload?.response?.results;
      }
      state.loading = false
      state.total = action.payload?.response?.total
      state.pages = action?.payload?.response?.pages
    })
    builder.addCase(getArticles.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
})

export default ArticleSlice.reducer
