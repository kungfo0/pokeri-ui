import * as React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { RoundDetailsProps } from '../types'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Link from '@mui/material/Link'
import EditIcon from '@mui/icons-material/Edit'
import { IconButton } from '@mui/material'

function RoundDetails({ round, index }: RoundDetailsProps) {
  return (
    <Card sx={{ width: 450, m: 2 }}>
      <CardHeader
        sx={{ p: 1 }}
        action={
          <Link href={`round/${round.round.id}`}>
            <IconButton aria-label="settings">
              <EditIcon />
            </IconButton>
          </Link>
        }
        title={`Round ${index}`}
        subheader={new Date(round.round.date).toLocaleDateString('fi-FI', { year: 'numeric', month: 'numeric', day: 'numeric' })}
      />
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
              {round.finishedPositions.map((it, index) => (
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
                    {it?.extraPoints?.type} {it?.extraPoints?.amount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  )
}

export default RoundDetails
