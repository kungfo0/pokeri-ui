import React, { useState, useRef, useEffect } from 'react'
import { getAutoComplateValues, putRoundData } from '../http'
import PlayerSelect, { PositionName } from './PlayerSelect'
import { AutoComplateValuesRoundsForSeasonResponse, PromiseWithCancel } from '../types'
import { Container, Card, CardBody, CardHeader, SmallButton, FlexBox } from './styled-components'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Multiselect } from 'multiselect-react-dropdown'

function AddRound() {
  const [autoComplateValues, setAutoComplateValues] = useState<AutoComplateValuesRoundsForSeasonResponse | null>(null)
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
  }, [autoComplateValues, availablePlayers])

  const setSelected = (list: PositionName[], selected: PositionName) => {
    console.log('setSelected', { list, selected })
    setFinishedPositions([...finishedPositions.filter((e) => e.length > 0 && e[0].position !== selected.position), list])
  }

  const setRemoved = (list: PositionName[], removed: PositionName) => {
    console.log('setRemoved', { list, removed })
    setFinishedPositions(finishedPositions.filter((e) => e.length > 0 && e[0].position !== removed.position))
  }

  const setBountySelected = (list: PositionName[], selected: PositionName) => {
    console.log('setBountySelected', { list, selected })
    setBounties([...bounties, selected])
  }

  const setBountyRemoved = (list: PositionName[], selected: PositionName) => {
    console.log('setBountyRemoved', { list, selected })
    setBounties(bounties.filter((e) => e.position !== selected.position))
  }

  const saveRound = async () => {
    roundDate.setHours(0, 0, 0, 0)
    const data = { selectedSeason, roundDate: roundDate.toISOString(), finishedPositions, bounties, players }
    console.log('saveRound', data)
    try {
      setSaving(true)
      const response = await putRoundData(data)
      console.log('saveRound', response)
    } catch (e) {}
    setSaving(false)
  }

  return (
    <div>
      {autoComplateValues && (
        <Container>
          <Card>
            <CardHeader>
              <FlexBox>
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
              </FlexBox>
            </CardHeader>
            <CardBody>
              {[...Array(players)].map((x, i) => (
                <PlayerSelect
                  values={availablePlayers.map((it) => ({ position: i + 1, name: it }))}
                  extraPoints={extraPoints.map((it) => ({ position: i + 1, name: it }))}
                  onSelect={setSelected}
                  onBountySelect={setBountySelected}
                  onBountyRemove={setBountyRemoved}
                  onRemove={setRemoved}
                  selectionLimit={i == 0 ? 1 : 2}
                  index={++i}
                  key={i}
                />
              ))}

              {players < 10 && <SmallButton onClick={() => setPlayers(players + 1)}>Add</SmallButton>}
              {players > 1 && <SmallButton onClick={() => setPlayers(players - 1)}>Remove</SmallButton>}
              {players > 1 && players < 11 && finishedPositions.length === players && finishedPositions.filter((it) => it.length > 0 && it[0].position !== 1).every((it) => it.length === 2) && (
                <SmallButton onClick={() => saveRound()} disabled={saving}>
                  Save
                </SmallButton>
              )}
            </CardBody>
          </Card>
        </Container>
      )}
    </div>
  )
}

export default AddRound
