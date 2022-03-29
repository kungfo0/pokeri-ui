import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { root } from '.'
import AddRound from './component/AddRound'
import EditRound from './component/EditRound'
import MainPage from './component/MainPage'

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path={`${root}/round/:id`} element={<EditRound />} />
        <Route path={`${root}/add`} element={<AddRound />} />
        <Route path={`${root}/`} element={<MainPage />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
