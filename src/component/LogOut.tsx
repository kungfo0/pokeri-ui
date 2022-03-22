import Button from '@mui/material/Button'
import React from 'react'
import { LogOutButtonContainer } from './styled-components'

interface LogOutProps {
  setApiKey: (apiKey: string) => void
}

export default function LogOut({ setApiKey }: LogOutProps) {
  const logOut = () => {
    setApiKey('')
  }
  return (
    <LogOutButtonContainer>
      <Button variant="contained" onClick={logOut}>
        Logout
      </Button>
    </LogOutButtonContainer>
  )
}
