import React, { useState, useRef, useEffect, useCallback } from 'react'
import { Select } from 'react-functional-select'
import { AutoComplateValuesRoundsForSeasonResponse, PromiseWithCancel } from '../types'
import { IdName } from './AddRound'
import { SelectContainer } from './styled-components'

type PlayerSelectProps = Readonly<{
  values: IdName[] | undefined;
  onOptionChange: ((data: IdName) => any)
}>;

function PlayerSelect({ values, onOptionChange }: PlayerSelectProps) {
  const [isInvalid, setIsInvalid] = useState<boolean>(false)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  let query = useRef<PromiseWithCancel<AutoComplateValuesRoundsForSeasonResponse> | undefined>(undefined)

  const getOptionValue = useCallback((option: IdName): string => option.name, [])
 // const onOptionChange = useCallback((option: string): void => setSelected(option), [])
  const getOptionLabel = useCallback((option: IdName): string => option.name, [])

  useEffect(() => {
    setIsInvalid(false)
    }, [  ])

return (
  <SelectContainer>
    <Select
      isLoading = {!values}
      isClearable = {false}
      isInvalid={isInvalid}
      options={values || []}
      onOptionChange={onOptionChange}
      getOptionValue={getOptionValue}
      getOptionLabel={getOptionLabel}
    />
  </SelectContainer>
)}

export default PlayerSelect