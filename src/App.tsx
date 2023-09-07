import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home/components'
import { News } from './pages/news/components'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/searchNews" element={<News />} />
    </Routes>
  )
}

export default App
