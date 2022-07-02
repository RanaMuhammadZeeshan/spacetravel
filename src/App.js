import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import CrewPage from './pages/CrewPage'
import DestinationPage from './pages/DestinationPage'
import HomePage from './pages/HomePage'
import TechnologyPage from './pages/TechnologyPage'

function App() {
  return (
    <React.Fragment>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/destination" element={<DestinationPage />} />
          <Route path="/crew" element={<CrewPage />} />
          <Route path="/technology" element={<TechnologyPage />} />
        </Routes>
      </Layout>
    </React.Fragment>
  )
}

export default App
