import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home/components'
import { News } from './pages/news/components'
import { Provider } from 'react-redux'
import store from './Store/store'

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/searchNews/:id*" element={<News />} />
      </Routes>
    </Provider>
  )
}

export default App
