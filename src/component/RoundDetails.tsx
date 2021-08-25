import { RoundDetailsProps } from '../types'
import { StyledTable } from './styled-components'

function RoundDetails({round, index}: RoundDetailsProps) {
  return (
    <StyledTable>
        <thead>
            <tr><th colSpan={4}>Round {index}</th></tr>
            <tr><th>Rank</th><th>Player</th><th>Eliminator</th><th>Extra<br/>Points</th></tr>
            </thead>
        <tbody>
    {round.finishedPositions.map(function(it, index){
        return <tr key={index}><td>{index+1}</td><td>{it.eliminatedPlayer}</td><td>{it.eliminator}</td><td>{it?.extraPoints?.type} {it?.extraPoints?.amount}</td></tr>
    })}
    </tbody>
    </StyledTable>
  )
}

export default RoundDetails