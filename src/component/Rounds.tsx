import React from 'react'
import { RoundsProps } from '../types'
import RoundDetails from './RoundDetails'
import { FlexBox } from './styled-components'

function Rounds({roundsForSeason}: RoundsProps) {
  return (
    <FlexBox>
    {roundsForSeason.map(function(it, index){
        return <RoundDetails round={it} index={index+1} key={index}/>
        })}
    </FlexBox>
  )
}

export default Rounds