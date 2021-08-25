import React, { useState, useEffect } from 'react'
import { getRoundsForSeason } from '../http'
import { RoundContainer, RoundsForSeasonProps, NameValue } from '../types'
import Rounds from './Rounds'
import { Spinner, Content, SmallButton } from './styled-components'
import Totals from './Totals'

function RoundsForSeason({ selectedSeason }: RoundsForSeasonProps) {
    const [rounds, setRounds] = useState<RoundContainer[]>([])
    const [season, setSeason] = useState({name: ''})
    const [eliminations, setEliminations] = useState<NameValue[]>([])
    const [gamesPlayed, setGamesPlayed] = useState<NameValue[]>([])
    const [totalPoints, setTotalPoints] = useState<NameValue[]>([])
    const [showRounds, setShowRounds] = useState(false)

    useEffect(() => {
        (async () => {
            const resp = await getRoundsForSeason(selectedSeason)
            setRounds(resp.rounds)
            setSeason(resp.season)
            setEliminations(resp.totals.eliminations)
            setGamesPlayed(resp.totals.gamesPlayed)
            setTotalPoints(resp.totals.totalPoints)
        })()
      }, [setRounds, setSeason, selectedSeason])

  return (
    <div>
      { rounds.length === 0
        ? <div><Spinner/></div>
        : <div>
            <SmallButton onClick={() => setShowRounds(!showRounds)}>Rounds</SmallButton>
            <Content open={showRounds}><Rounds roundsForSeason={rounds}/></Content>
            <Totals eliminations={eliminations} gamesPlayed={gamesPlayed} totalPoints={totalPoints}/>
          <div/>
        </div>
      }
    </div>
  )
}

export default RoundsForSeason