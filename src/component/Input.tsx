import React from 'react'
import { InputProps } from '../types'
import { StyledInput } from './styled-components'

export default function Input({ type, placeholder, value, onChange }: InputProps) {
  return <StyledInput type={type} placeholder={placeholder} value={value} onChange={onChange} />
}
