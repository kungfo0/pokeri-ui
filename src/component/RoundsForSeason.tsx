import React, { useState, useEffect } from 'react'
import { getRoundsForSeason } from '../http'
import { RoundContainer } from '../types'
import Rounds from './Rounds'
import { Header, Spinner } from './styled-components'

function RoundsForSeason() {
    const [rounds, setRounds] = useState<RoundContainer[]>([])
    const [season, setSeason] = useState({name: ''})

    useEffect(() => {
        (async () => {
            const resp = await getRoundsForSeason('2021')
            setRounds(resp.rounds)
            setSeason(resp.season)
        })()
      }, [setRounds, setSeason])

  return (
    <div>
        { rounds.length === 0
        ? <div><Spinner/></div>
        : <div>
        <Header>{season.name}</Header>
        { rounds.length !== 0 ? <Rounds roundsForSeason={rounds}/>: <div/> }
        </div>
      }
    </div>
  )
}

export default RoundsForSeason