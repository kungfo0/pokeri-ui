import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginForm from './LoginForm'
import LogOut from './LogOut'
import Seasons from './Seasons'
import { CenteredContainer, RightSideContainer } from './styled-components'
import { FaPlus } from 'react-icons/fa'
import Button from '@mui/material/Button'
import { Paper } from '@mui/material'

function MainPage() {
  const navigate = useNavigate()
  const [apiKey, setApiKey] = useState('')

  useEffect(() => {
    const ak = localStorage.getItem('apiKey')
    if (ak) {
      setApiKey(ak)
    }
  }, [setApiKey])

  const storeApiKey = (apiKey: string) => {
    localStorage.setItem('apiKey', apiKey)
    setApiKey(apiKey)
  }

  return (
    <div>
      {apiKey === '' ? (
        <div id="login">
          <CenteredContainer>
            <LoginForm setApiKey={storeApiKey} />
          </CenteredContainer>
        </div>
      ) : (
        <Paper sx={{ m: 2, boxShadow: 0 }}>
          <RightSideContainer>
            <LogOut setApiKey={storeApiKey} />
          </RightSideContainer>
          <Seasons />
          <Button variant="contained" sx={{ ml: 2, mb: 2 }} onClick={() => navigate('/add')}>
            <FaPlus /> Add Round
          </Button>
        </Paper>
      )}
    </div>
  )
}

export default MainPage
