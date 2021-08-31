import React, { useState } from 'react'
import Button from './Button'
import Input from './Input'
import { ErrorMessage, LoginFormContainer, WelcomeText, InputContainer, ButtonContainer, HorizontalRule } from './styled-components'
import { login } from '../http'
import { LoginFormProps } from '../types'

function LoginForm({ setApiKey }: LoginFormProps) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const clickMe = async () => {
    setLoading(true)
    setErrorMessage('')
    try {
      const response = await login(username, password)
      setLoading(false)
      setApiKey(response['api-key'])
    } catch (e) {
      setErrorMessage('Invalid credentials')
      setLoading(false)
    }
  }
  const usernameInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredName = event.target.value
    setUsername(enteredName)
  }
  const passwordInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredName = event.target.value
    setPassword(enteredName)
  }
  return (
    <LoginFormContainer>
      <WelcomeText>Welcome</WelcomeText>
      <InputContainer>
        <Input type="text" placeholder="Username" value={username} onChange={usernameInputHandler} />
        <Input type="password" placeholder="Password" value={password} onChange={passwordInputHandler} />
      </InputContainer>
      <ErrorMessage>{errorMessage}</ErrorMessage>
      <ButtonContainer>
        <Button content="Log in" onClick={clickMe} loading={loading} />
      </ButtonContainer>
      {/* <LoginWith>OR LOGIN WITH</LoginWith> */}
      <HorizontalRule />
      {/*       <IconsContainer>
        <Icon color={FacebookBackground}>
          <FaFacebookF />
        </Icon>
        <Icon color={InstagramBackground}>
          <FaInstagram />
        </Icon>
        <Icon color={TwitterBackground}>
          <FaTwitter />
        </Icon>
      </IconsContainer>
      <ForgotPassword>Forgot Password ?</ForgotPassword> */}
    </LoginFormContainer>
  )
}

export default LoginForm
