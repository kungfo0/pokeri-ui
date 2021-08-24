import React, { useState, useEffect } from 'react'
import LoginForm from './component/LoginForm'
import RoundsForSeason from './component/RoundsForSeason'
import LogOut from './component/LogOut'
import { CenteredContainer, RightSideContainer } from './component/styled-components'

function App() {
  const [apiKey, setApiKey] = useState('')

    useEffect(() => {
        const ak = localStorage.getItem('apiKey')
        if(ak) {
          setApiKey(ak)
        }
    }, [setApiKey])

  const storeApiKey = (apiKey: string) => {
    localStorage.setItem('apiKey', apiKey)
    setApiKey(apiKey)
  }
  return (
    <div>
      { apiKey === ''
        ? <CenteredContainer><LoginForm setApiKey={storeApiKey}/></CenteredContainer>
        : <div>
          <RightSideContainer><LogOut setApiKey={storeApiKey}/></RightSideContainer>
          <RoundsForSeason/>
        </div>
      }
    </div>
  )
}

export default App