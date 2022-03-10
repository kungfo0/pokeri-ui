import { useState, useEffect } from 'react'
import AddRound from './AddRound'
import LoginForm from './LoginForm'
import LogOut from './LogOut'
import Seasons from './Seasons'
import { CenteredContainer, RightSideContainer } from './styled-components'

function MainPage() {
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
          <AddRound />
        </div>
      )}
    </div>
  )
}

export default MainPage
