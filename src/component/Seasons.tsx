import { useState, useEffect } from 'react'
import { getSeasons } from '../http'
import RoundsForSeason from './RoundsForSeason'

import { FlexBox, Header, SmallButton, Spinner } from './styled-components'

function Seasons() {
  const [selected, setSelected] = useState('')
  const [seasons, setSeasons] = useState<string[]>([])
  const [hasNext, setHasNext] = useState(false)
  const [hasPrevious, setHasPrevious] = useState(false)

  useEffect(() => {
    ;(async () => {
      const resp = await getSeasons()
      if (resp.seasons.length > 0) {
        const selectedSeason = resp.seasons[0]
        const allSeasons = resp.seasons
        setSelected(selectedSeason)
        setSeasons(allSeasons)
        setHasNext(allSeasons.indexOf(selectedSeason) - 1 >= 0)
        setHasPrevious(allSeasons.indexOf(selectedSeason) + 1 < allSeasons.length)
      }
    })()
  }, [setSeasons, setSelected, setHasNext, setHasPrevious])

  const setPrevious = () => {
    const index = seasons.indexOf(selected) + 1
    if (hasPrevious) {
      setSelected(seasons[index])
      setHasNext(seasons.indexOf(seasons[index]) - 1 >= 0)
      setHasPrevious(seasons.indexOf(seasons[index]) + 1 < seasons.length)
    }
  }
  const setNext = () => {
    const index = seasons.indexOf(selected) - 1
    if (hasNext) {
      setSelected(seasons[index])
      setHasNext(seasons.indexOf(seasons[index]) - 1 >= 0)
      setHasPrevious(seasons.indexOf(seasons[index]) + 1 < seasons.length)
    }
  }

  return (
    <div>
      {seasons.length === 0 ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <FlexBox>
          <SmallButton onClick={setPrevious} disabled={!hasPrevious}>
            Previous
          </SmallButton>
          <Header>{selected}</Header>
          <SmallButton onClick={setNext} disabled={!hasNext}>
            Next
          </SmallButton>
          <RoundsForSeason selectedSeason={selected} />
        </FlexBox>
      )}
    </div>
  )
}

export default Seasons
