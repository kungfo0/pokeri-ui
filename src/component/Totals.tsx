import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Box } from '@mui/material'
import { TotalsProps } from '../types'

function Totals({ eliminations, gamesPlayed, totalPoints }: TotalsProps) {
  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', m: 2 }} data-test-id="totals">
      <TableContainer component={Paper} sx={{ boxShadow: 0, width: 450, m: 1, p: 1 }}>
        <Table sx={{ width: 420, boxShadow: 0 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }} padding="none" colSpan={2}>
                Participations
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }} padding="none" align="left">
                Player
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold' }} padding="none" align="left">
                Amount
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {gamesPlayed.map((it, index) => (
              <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell padding="none" align="left">
                  {it.name}
                </TableCell>
                <TableCell padding="none" align="left">
                  {it.value}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TableContainer component={Paper} sx={{ boxShadow: 0, width: 450, m: 1, p: 1 }}>
        <Table sx={{ width: 420, boxShadow: 0 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }} padding="none" colSpan={2}>
                Total Points
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }} padding="none" align="left">
                Player
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold' }} padding="none" align="left">
                Amount
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {totalPoints.map((it, index) => (
              <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell padding="none" align="left">
                  {it.name}
                </TableCell>
                <TableCell padding="none" align="left">
                  {it.value}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TableContainer component={Paper} sx={{ boxShadow: 0, width: 450, m: 1, p: 1 }}>
        <Table sx={{ width: 420, boxShadow: 0 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }} padding="none" colSpan={2}>
                Eliminations
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }} padding="none" align="left">
                Player
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold' }} padding="none" align="left">
                Amount
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {eliminations.map((it, index) => (
              <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell padding="none" align="left">
                  {it.name}
                </TableCell>
                <TableCell padding="none" align="left">
                  {it.value}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default Totals
