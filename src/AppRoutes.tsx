import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AddRound from './component/AddRound'
import EditRound from './component/EditRound'
import MainPage from './component/MainPage'

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/round/:id" element={<EditRound />} />
        <Route path="/add" element={<AddRound />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
