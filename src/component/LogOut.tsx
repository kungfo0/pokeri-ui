import React from 'react'
import { LogOutButtonContainer, StyledButton } from './styled-components'

interface LogOutProps {
  setApiKey: (apiKey: string) => void
}

export default function LogOut({ setApiKey }: LogOutProps) {
  const logOut = () => {
    setApiKey('')
  }
  return (
    <LogOutButtonContainer>
      <StyledButton onClick={logOut}>Logout</StyledButton>
    </LogOutButtonContainer>
  )
}
