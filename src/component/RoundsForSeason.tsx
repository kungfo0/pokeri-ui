import React, { useState, useEffect } from 'react'
import { getRoundsForSeason } from '../http'
import { RoundContainer, RoundsForSeasonProps } from '../types'
import Rounds from './Rounds'
import { Header, Spinner } from './styled-components'

function RoundsForSeason({ selectedSeason }: RoundsForSeasonProps) {
    const [rounds, setRounds] = useState<RoundContainer[]>([])
    const [season, setSeason] = useState({name: ''})

    useEffect(() => {
        (async () => {
            const resp = await getRoundsForSeason(selectedSeason)
            setRounds(resp.rounds)
            setSeason(resp.season)
        })()
      }, [setRounds, setSeason, selectedSeason])

  return (
    <div>
        { rounds.length === 0
        ? <div><Spinner/></div>
        : <div>
        { rounds.length !== 0 ? <Rounds roundsForSeason={rounds}/>: <div/> }
        </div>
      }
    </div>
  )
}

export default RoundsForSeason