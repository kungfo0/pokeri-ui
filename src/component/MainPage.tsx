import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginForm from './LoginForm'
import LogOut from './LogOut'
import Seasons from './Seasons'
import { CenteredContainer } from './styled-components'
import AddIcon from '@mui/icons-material/Add'
import Button from '@mui/material/Button'
import { Box, Paper } from '@mui/material'
import { root } from '..'

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
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row-reverse',
              p: 1,
              m: 1,
            }}
          >
            <LogOut setApiKey={storeApiKey} />
          </Box>
          <Seasons />
          <Button variant="contained" sx={{ ml: 2, mb: 2 }} onClick={() => navigate(`${root}/add`)}>
            <AddIcon /> Add Round
          </Button>
        </Paper>
      )}
    </div>
  )
}

export default MainPage
