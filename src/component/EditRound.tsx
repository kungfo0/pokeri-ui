import { useEffect, useRef, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { deleteRound, getRound } from '../http'
import { PromiseWithCancel, RoundDetails } from '../types'
import { SmallButton, Spinner, StyledTable } from './styled-components'
import { FaTrash } from 'react-icons/fa'

function EditRound() {
  const navigate = useNavigate()
  let { id } = useParams()
  const [round, setRound] = useState<RoundDetails>()
  let query = useRef<PromiseWithCancel<RoundDetails> | undefined>(undefined)
  const [deleting, setDeleting] = useState<boolean>(false)

  const delRound = async () => {
    try {
      setDeleting(true)
      const response = await deleteRound(id || '')
      console.log('deleteRound', response)
      if (response.status === 'deleted') {
        navigate('/')
      }
    } catch (e) {}
    setDeleting(false)
  }

  useEffect(() => {
    const q = getRound(id || '')
    query.current = q
    q.then((resp) => {
      setRound(resp)
    })
  }, [id])

  return (
    <>
      <SmallButton onClick={() => navigate('/')}>Back</SmallButton>
      {round ? (
        <>
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
          <SmallButton onClick={() => (window.confirm('Delete round?') ? delRound() : '')} disabled={deleting}>
            <FaTrash /> Delete
          </SmallButton>
        </>
      ) : (
        <Spinner />
      )}
    </>
  )
}

export default EditRound
