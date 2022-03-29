import { useEffect, useRef, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { deleteRound, getRound } from '../http'
import { PromiseWithCancel, RoundDetails } from '../types'
import DeleteIcon from '@mui/icons-material/Delete'
import { root } from '..'
import { CardContent, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button, Box, CircularProgress } from '@mui/material'

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
        navigate(`${root}/`)
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
    <Paper sx={{ m: 2, boxShadow: 0, mb: 5 }}>
      <Button variant="contained" onClick={() => navigate(`${root}/`)}>
        Back
      </Button>
      {round ? (
        <>
          <CardContent>
            <TableContainer component={Paper} sx={{ boxShadow: 0 }}>
              <Table sx={{ minWidth: 400, boxShadow: 0 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 'bold' }} padding="none">
                      Rank
                    </TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }} padding="none" align="left">
                      Player
                    </TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }} padding="none" align="left">
                      Eliminator
                    </TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }} padding="none" align="right">
                      Points
                    </TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }} padding="none" align="right">
                      Extra
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {round.finishedPositions
                    .sort((a, b) => (a.finishedPosition < b.finishedPosition ? -1 : 1))
                    .map((it, index) => (
                      <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell padding="none" component="th" scope="row">
                          {index + 1}
                        </TableCell>
                        <TableCell padding="none" align="left">
                          {it.eliminatedPlayer}
                        </TableCell>
                        <TableCell padding="none" align="left">
                          {it.eliminator}
                        </TableCell>
                        <TableCell padding="none" align="right">
                          {it.points}
                        </TableCell>
                        <TableCell padding="none" align="right">
                          {it?.extrapoint}
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
          <Button variant="contained" onClick={() => (window.confirm('Delete round?') ? delRound() : '')} disabled={deleting}>
            <DeleteIcon /> Delete
          </Button>
        </>
      ) : (
        <Box>
          <CircularProgress />
        </Box>
      )}
    </Paper>
  )
}

export default EditRound
