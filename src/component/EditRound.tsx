import { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getRound } from '../http'
import { PromiseWithCancel, RoundDetails } from '../types'
import { Spinner, StyledTable } from './styled-components'

function EditRound() {
  let { id } = useParams()
  const [round, setRound] = useState<RoundDetails>()
  let query = useRef<PromiseWithCancel<RoundDetails> | undefined>(undefined)

  useEffect(() => {
    const q = getRound(id || '')
    query.current = q
    q.then((resp) => {
      setRound(resp)
    })
  }, [id])

  return (
    <>
      <div>
        <Link to="/">Back</Link>
      </div>
      {round ? (
        <StyledTable>
          <thead>
            <tr>
              <th colSpan={5}>Round - {new Date(round.round.date).toLocaleDateString('fi-FI', { year: 'numeric', month: 'numeric', day: 'numeric' })}</th>
            </tr>
            <tr>
              <th>Rank</th>
              <th>Player</th>
              <th>Eliminator</th>
              <th>Points</th>
              <th>Extra</th>
            </tr>
          </thead>
          <tbody>
            {round.finishedPositions
              .sort((a, b) => (a.finishedPosition < b.finishedPosition ? -1 : 1))
              .map(function (it) {
                return (
                  <tr key={it.finishedPosition}>
                    <td>{it.finishedPosition}</td>
                    <td>{it.eliminatedPlayer}</td>
                    <td>{it.eliminator}</td>
                    <td>{it.points}</td>
                    <td>{it?.extrapoint}</td>
                  </tr>
                )
              })}
          </tbody>
        </StyledTable>
      ) : (
        <Spinner />
      )}
    </>
  )
}

export default EditRound
