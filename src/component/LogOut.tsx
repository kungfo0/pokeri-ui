import { Box } from '@mui/material'
import Button from '@mui/material/Button'

interface LogOutProps {
  setApiKey: (apiKey: string) => void
}

export default function LogOut({ setApiKey }: LogOutProps) {
  const logOut = () => {
    setApiKey('')
  }
  return (
    <Box>
      <Button variant="contained" onClick={logOut}>
        Logout
      </Button>
    </Box>
  )
}
