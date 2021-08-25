import { TotalsProps } from '../types'
import { FlexBox, StyledTable } from './styled-components'

function Totals({eliminations, gamesPlayed, totalPoints}: TotalsProps) {
  return (
      <FlexBox>
        <StyledTable>
            <thead>
                <tr><th colSpan={2}>Participations</th></tr>
                <tr><th>Player</th><th>Amount</th></tr>
                </thead>
            <tbody>
                {gamesPlayed.map(function(it, index){
                    return <tr key={index}><td>{it.name}</td><td>{it.value}</td></tr>
                })}
            </tbody>
        </StyledTable>
        <StyledTable>
            <thead>
                <tr><th colSpan={2}>Total Points</th></tr>
                <tr><th>Player</th><th>Amount</th></tr>
                </thead>
            <tbody>
                {totalPoints.map(function(it, index){
                    return <tr key={index}><td>{it.name}</td><td>{it.value}</td></tr>
                })}
            </tbody>
        </StyledTable>
        <StyledTable>
            <thead>
                <tr><th colSpan={2}>Eliminations</th></tr>
                <tr><th>Player</th><th>Amount</th></tr>
                </thead>
            <tbody>
                {eliminations.map(function(it, index){
                    return <tr key={index}><td>{it.name}</td><td>{it.value}</td></tr>
                })}
            </tbody>
        </StyledTable>
      </FlexBox>
  )
}

export default Totals