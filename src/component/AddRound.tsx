import React, { useState, useRef, useEffect } from 'react'
import { getAutoComplateValues, getTotalsForSeason, putRoundData } from '../http'
import PlayerSelect, { PositionName } from './PlayerSelect'
import { AutoComplateValuesRoundsForSeasonResponse, PromiseWithCancel, TotalsForSeasonResponse } from '../types'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Multiselect } from 'multiselect-react-dropdown'
import { useNavigate } from 'react-router-dom'
import { root } from '..'
import { Box, Button, Card, CardContent, Container, Paper } from '@mui/material'

function AddRound() {
  const navigate = useNavigate()
  const [autoComplateValues, setAutoComplateValues] = useState<AutoComplateValuesRoundsForSeasonResponse | null>(null)
  const [totalsValues, setTotalsValues] = useState<TotalsForSeasonResponse | null>(null)
  const [roundDate, setRoundDate] = useState(new Date())
  const [availablePlayers, setAvailablePlayers] = useState<string[]>([])
  const [extraPoints, setExtraPoints] = useState<string[]>([])
  const [players, setPlayers] = useState<number>(5)
  const [bounties, setBounties] = useState<PositionName[]>([])
  const [selectedSeason, setSelectedSeason] = useState<string>('')
  const [finishedPositions, setFinishedPositions] = useState<PositionName[][]>([])
  const [seasons, setSeasons] = useState<string[]>([])
  const [saving, setSaving] = useState<boolean>(false)
  const query = useRef<PromiseWithCancel<AutoComplateValuesRoundsForSeasonResponse> | undefined>(undefined)
  const totalsQuery = useRef<PromiseWithCancel<TotalsForSeasonResponse> | undefined>(undefined)

  useEffect(() => {
    console.log('useEffect', { autoComplateValues, availablePlayers })
    if (!autoComplateValues) {
      query.current?.cancel()
      setAutoComplateValues(null)
      const q = getAutoComplateValues()
      query.current = q
      q.then((resp) => {
        setAutoComplateValues(resp)
        setAvailablePlayers(resp.players)
        console.log('resp.players', resp.players)
        setExtraPoints(resp.extraPoints)
        setSeasons(resp.seasons)
        setSelectedSeason(resp.seasons[0])
      })
    }
    if (!totalsValues && selectedSeason) {
      totalsQuery.current?.cancel()
      setTotalsValues(null)
      const tq = getTotalsForSeason(selectedSeason)
      totalsQuery.current = tq
      tq.then((resp) => {
        setTotalsValues(resp)
      })
    }
  }, [autoComplateValues, availablePlayers, totalsValues, selectedSeason])

  const handleChange = (value: string) => {
    if (value.startsWith('eliminated-')) {
      const position = parseInt(value.split('#')[0].split('-')[1])
      const name = value.split('#')[1]
      const selected = { position, name }

      const eliminator = finishedPositions.find((it) => it.length > 1 && it[1].position === position)
      const list = [selected]
      if (eliminator) {
        list.push(eliminator[1])
      }

      console.log({ position, name })
      if (name !== 'removed') {
        setFinishedPositions([...finishedPositions.filter((e) => e.length > 0 && e[0].position !== selected.position), list])
      } else {
        setFinishedPositions(finishedPositions.filter((e) => e.length > 0 && e[0].position !== selected.position))
      }
    } else if (value.startsWith('eliminator-')) {
      const position = parseInt(value.split('#')[0].split('-')[1])
      const name = value.split('#')[1]
      const selected = { position, name }

      const eliminated = finishedPositions.find((it) => it.length > 0 && it[0].position === position)
      let list = [selected]
      if (eliminated) {
        list = [eliminated[0], selected]
        if (name !== 'removed') {
          setFinishedPositions([...finishedPositions.filter((e) => e.length > 0 && e[0].position !== selected.position), list])
        } else {
          setFinishedPositions(finishedPositions.filter((e) => e.length > 0 && e[0].position !== selected.position))
        }
      }

      console.log({ position, name })
    } else if (value.startsWith('bounty-')) {
      const position = parseInt(value.split('#')[0].split('-')[1])
      const name = value.split('#')[1]
      const selected = { position, name }
      console.log({ position, name })
      if (name !== 'removed') {
        setBounties([...bounties, selected])
      } else {
        setBounties(bounties.filter((e) => e.position !== selected.position))
      }
    }
  }

  const saveRound = async () => {
    const data = { selectedSeason, roundDate: roundDate.toISOString(), finishedPositions, bounties, players }
    console.log('saveRound', data)
    try {
      setSaving(true)
      const response = await putRoundData(data)
      console.log('saveRound', response)
      if (response?.round?.id !== '') {
        console.log('juuh', response)
        navigate(`${root}/`)
      }
    } catch (e) {}
    setSaving(false)
  }

  return (
    <Paper sx={{ m: 2, boxShadow: 0, mb: 5 }}>
      <Button variant="contained" sx={{ ml: 2, mb: 2 }} onClick={() => navigate(`${root}/`)}>
        Back
      </Button>
      {autoComplateValues && (
        <Container>
          <Card sx={{ pb: 20 }}>
            <CardContent>
              <Box>
                Add Round Details
                <Multiselect
                  isObject={false}
                  selectedValues={[seasons.length > 0 ? seasons[0] : '']}
                  onSearch={function noRefCheck() {}}
                  onSelect={(list, selected) => setSelectedSeason(selected)}
                  options={seasons}
                  placeholder={'Season'}
                  selectionLimit={1}
                  style={{
                    multiselectContainer: {
                      flexGrow: '1',
                    },
                  }}
                />
                <DatePicker selected={roundDate} onChange={(date: Date) => setRoundDate(date as Date)} dateFormat="dd.MM.yyyy" />
              </Box>
              <div>
                Last round winner: <strong>{autoComplateValues.lastRoundWinner}</strong>
              </div>
              <div>
                Person with the most points in season {totalsValues?.season}: <strong>{totalsValues?.totals?.totalPoints[0].name}</strong>
              </div>
              {[...Array(players)].map((x, i) => (
                <PlayerSelect
                  values={availablePlayers.map((it) => ({ position: i + 1, name: it }))}
                  extraPoints={extraPoints.map((it) => ({ position: i + 1, name: it }))}
                  onSelect={handleChange}
                  index={++i}
                  key={i}
                />
              ))}

              {players < 10 && (
                <Button variant="contained" onClick={() => setPlayers(players + 1)} sx={{ m: 1 }}>
                  Add Row
                </Button>
              )}
              {players > 1 && (
                <Button variant="contained" onClick={() => setPlayers(players - 1)} sx={{ mr: 1 }}>
                  Remove Row
                </Button>
              )}
              {players > 1 && players < 11 && finishedPositions.length === players && finishedPositions.filter((it) => it.length > 0 && it[0].position !== 1).every((it) => it.length === 2) && (
                <Button variant="contained" onClick={() => saveRound()} disabled={saving}>
                  Save Round
                </Button>
              )}
            </CardContent>
          </Card>
        </Container>
      )}
    </Paper>
  )
}

export default AddRound
