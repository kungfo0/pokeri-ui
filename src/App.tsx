import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AddRound from './component/AddRound'
import EditRound from './component/EditRound'
import MainPage from './component/MainPage'

function App() {
  const root = process.env.PUBLIC_URL || '/'
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path={`${root}round/:id`} element={<EditRound />} />
          <Route path={`${root}add`} element={<AddRound />} />
          <Route path={root} element={<MainPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
