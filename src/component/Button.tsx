import { Box, CircularProgress } from '@mui/material'
import React from 'react'
import { ButtonProps } from '../types'
import { StyledButton } from './styled-components'

export default function Button({ content, loading, onClick }: ButtonProps) {
  return (
    <StyledButton onClick={onClick}>
      {loading ? (
        <Box>
          <CircularProgress />
        </Box>
      ) : (
        <div>{content}</div>
      )}
    </StyledButton>
  )
}
