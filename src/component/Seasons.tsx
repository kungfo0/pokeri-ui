import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'
import { useState, useEffect } from 'react'
import { getSeasons } from '../http'
import RoundsForSeason from './RoundsForSeason'

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
          <CircularProgress />
        </div>
      ) : (
        <Box sx={{ p: 2, boxShadow: 0 }}>
          <ButtonGroup variant="contained" aria-label="outlined primary button group" sx={{ mb: 2 }}>
            <Button variant="contained" onClick={setPrevious} disabled={!hasPrevious}>
              Previous
            </Button>
            <Typography variant="h5" component="div" sx={{ p: 2 }}>
              {selected}
            </Typography>
            <Button variant="contained" onClick={setNext} disabled={!hasNext}>
              Next
            </Button>
          </ButtonGroup>
          <RoundsForSeason selectedSeason={selected} />
        </Box>
      )}
    </div>
  )
}

export default Seasons
