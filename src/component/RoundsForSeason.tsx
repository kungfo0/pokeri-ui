import { Collapse, Card, CardActions, IconButton, styled, IconButtonProps, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import React, { useState, useEffect, useRef } from 'react'
import { getRoundsForSeason } from '../http'
import { RoundContainer, RoundsForSeasonProps, NameValue, RoundsForSeasonResponse, PromiseWithCancel } from '../types'
import Rounds from './Rounds'
import { Spinner } from './styled-components'
import Totals from './Totals'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

function RoundsForSeason({ selectedSeason }: RoundsForSeasonProps) {
  const [rounds, setRounds] = useState<RoundContainer[]>([])
  // const [season, setSeason] = useState({ name: '' })
  const [eliminations, setEliminations] = useState<NameValue[]>([])
  const [gamesPlayed, setGamesPlayed] = useState<NameValue[]>([])
  const [totalPoints, setTotalPoints] = useState<NameValue[]>([])
  const [showRounds, setShowRounds] = useState(true)
  const [showTotals, setShowTotals] = useState(true)
  let query = useRef<PromiseWithCancel<RoundsForSeasonResponse> | undefined>(undefined)

  useEffect(() => {
    query.current?.cancel()
    setRounds([])
    const q = getRoundsForSeason(selectedSeason)
    query.current = q
    q.then((resp) => {
      setRounds(resp.rounds)
      // setSeason(resp.season)
      setEliminations(resp.totals.eliminations)
      setGamesPlayed(resp.totals.gamesPlayed)
      setTotalPoints(resp.totals.totalPoints)
    })
  }, [selectedSeason])

  interface ExpandMoreProps extends IconButtonProps {
    expand: boolean
  }

  const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props
    return <IconButton {...other} />
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }))

  return (
    <div>
      {rounds.length === 0 ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <Box>
          <Card sx={{ mb: 2 }}>
            <CardActions disableSpacing>
              <Typography variant="h5" component="div">
                Rounds
              </Typography>
              <ExpandMore expand={showRounds} onClick={() => setShowRounds(!showRounds)} aria-expanded={showRounds} aria-label="show more">
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={showRounds} timeout="auto" unmountOnExit>
              <Rounds roundsForSeason={rounds} />
            </Collapse>
          </Card>
          <Card sx={{ mb: 2 }}>
            <CardActions disableSpacing>
              <Typography variant="h5" component="div">
                Totals
              </Typography>
              <ExpandMore expand={showTotals} onClick={() => setShowTotals(!showTotals)} aria-expanded={showTotals} aria-label="show more">
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={showTotals} timeout="auto" unmountOnExit>
              <Totals eliminations={eliminations} gamesPlayed={gamesPlayed} totalPoints={totalPoints} />
            </Collapse>
          </Card>
        </Box>
      )}
    </div>
  )
}

export default RoundsForSeason
