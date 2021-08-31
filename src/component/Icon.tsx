import React from 'react'
import { IconProps } from '../types'
import { StyledIcon } from './styled-components'

export default function Icon({ color, children }: IconProps) {
  return <StyledIcon background={color}>{children}</StyledIcon>
}
