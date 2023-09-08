import { combineReducers } from 'redux'

import articleReducer from './articleSlice'


const rootReducer = combineReducers({
  article: articleReducer,
})

export default rootReducer
