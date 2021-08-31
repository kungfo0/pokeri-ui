import React, { useState, useRef, useEffect, useCallback } from 'react'
import { getAutoComplateValues } from '../http'
import PlayerSelect from './PlayerSelect'
import { AutoComplateValuesRoundsForSeasonResponse, PromiseWithCancel } from '../types'
import { Container, Card, CardBody, CardHeader } from './styled-components'
import DatePicker from 'react-datepicker'

export interface IdName {
  id: number
  name: string
}

function AddRound() {
  const [autoComplateValues, setAutoComplateValues] = useState<AutoComplateValuesRoundsForSeasonResponse | null>(null)
  const [startDate, setStartDate] = useState(new Date())
  let query = useRef<PromiseWithCancel<AutoComplateValuesRoundsForSeasonResponse> | undefined>(undefined)
  let [selectedPlayers, setSelectedPlayers] = useState<IdName[]>([])
  let [availablePlayers, setAvailablePlayers] = useState<string[] | null>(null)
  
  useEffect(() => {
    console.log('useEffect', {selectedPlayers, autoComplateValues, availablePlayers})
    if(!autoComplateValues) { query.current?.cancel()
      setAutoComplateValues(null)
      const q = getAutoComplateValues()
      query.current = q
      q.then((resp) => {
        setAutoComplateValues(resp)
        setAvailablePlayers(resp.players)
      })
    }
    }, [  ])

    const setSelected = (value: IdName ) => {
      console.log('setSelected', {value, selectedPlayers, autoComplateValues, availablePlayers})
        if(value !== null) {
          setSelectedPlayers(selectedPlayers.filter(it => it.id !== value.id))
          console.log('filter', {selectedPlayers})
          selectedPlayers.push(value)
        }
        setAvailablePlayers(autoComplateValues?.players.filter(it => selectedPlayers.map(it => it.name).indexOf( it ) < 0) || [])
        console.log('setSelected2', {value, selectedPlayers, autoComplateValues, availablePlayers})
    }

    const onOptionChange = useCallback(setSelected, [selectedPlayers, availablePlayers])

return (
  <div>
        <Container>
          <Card>
            <CardHeader>
              Add Round Details
              <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date as Date)} />
            </CardHeader>
            <CardBody>
              <PlayerSelect values={availablePlayers?.map(it => ({id: 1, name: it}))} onOptionChange={onOptionChange}/>
              <PlayerSelect values={availablePlayers?.map(it => ({id: 2, name: it}))} onOptionChange={onOptionChange}/>
              <PlayerSelect values={availablePlayers?.map(it => ({id: 3, name: it}))} onOptionChange={onOptionChange}/>
              <PlayerSelect values={availablePlayers?.map(it => ({id: 4, name: it}))} onOptionChange={onOptionChange}/>
              <PlayerSelect values={availablePlayers?.map(it => ({id: 5, name: it}))} onOptionChange={onOptionChange}/>
            </CardBody>
          </Card>
        </Container>
  </div>
)}

export default AddRound