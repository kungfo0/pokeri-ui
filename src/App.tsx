import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'
import AppRoutes from './AppRoutes'

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
})

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App
