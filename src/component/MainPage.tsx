import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginForm from './LoginForm'
import LogOut from './LogOut'
import Seasons from './Seasons'
import { CenteredContainer, RightSideContainer, SmallButton } from './styled-components'
import { FaPlus } from 'react-icons/fa'
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
        <CenteredContainer>
          <LoginForm setApiKey={storeApiKey} />
        </CenteredContainer>
      ) : (
        <div>
          <RightSideContainer>
            <LogOut setApiKey={storeApiKey} />
          </RightSideContainer>
          <Seasons />
          <SmallButton onClick={() => navigate(`${root}/add`)}>
            <FaPlus /> Add Round
          </SmallButton>
        </div>
      )}
    </div>
  )
}

export default MainPage
