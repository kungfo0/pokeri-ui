import React from 'react'
import { ButtonProps } from '../types'
import { Spinner, StyledButton } from './styled-components'

export default function Button({ content, loading, onClick }: ButtonProps) {
  return <StyledButton onClick={onClick}>{loading ? <Spinner /> : <div>{content}</div>}</StyledButton>
}
