import { Link } from 'react-router-dom'
import { RoundDetailsProps } from '../types'
import { StyledTable } from './styled-components'
import { FaEdit } from 'react-icons/fa'
import { root } from '..'

function RoundDetails({ round, index }: RoundDetailsProps) {
  return (
    <>
      <StyledTable>
        <thead>
          <tr>
            <th colSpan={4}>
              Round {index} - {new Date(round.round.date).toLocaleDateString('fi-FI', { year: 'numeric', month: 'numeric', day: 'numeric' })}
            </th>
            <th>
              <Link to={`${root}round/${round.round.id}`}>
                <FaEdit />
              </Link>
            </th>
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
          {round.finishedPositions.map(function (it, index) {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{it.eliminatedPlayer}</td>
                <td>{it.eliminator}</td>
                <td>{it.points}</td>
                <td>
                  {it?.extraPoints?.type} {it?.extraPoints?.amount}
                </td>
              </tr>
            )
          })}
        </tbody>
      </StyledTable>
    </>
  )
}

export default RoundDetails
