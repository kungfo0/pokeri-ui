import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import EditRound from './component/EditRound'
import MainPage from './component/MainPage'

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/round/:id" element={<EditRound />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
