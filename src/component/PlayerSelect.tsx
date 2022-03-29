import { Box, FormControl, InputLabel, NativeSelect } from '@mui/material'

export interface PositionName {
  position: number
  name: string
}

type PlayerSelectProps = Readonly<{
  values: PositionName[]
  extraPoints: PositionName[]
  index: number
  onSelect: (value: string) => any
}>

function PlayerSelect({ values, extraPoints, index, onSelect }: PlayerSelectProps) {
  const handleEliminatedChange = (value: string, index: number) => {
    onSelect(value)
    let eliminatorSelect = document.getElementById(`eliminator-${index}`)
    if (eliminatorSelect && value.endsWith('removed')) {
      ;(eliminatorSelect as HTMLSelectElement).selectedIndex = -1
    }
  }

  return (
    <Box sx={{ display: 'flex', m: 1 }}>
      <p>{index}.</p>
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel variant="standard" htmlFor={`eliminated-${index}`}>
          Eliminated
        </InputLabel>
        <NativeSelect
          onChange={(e) => handleEliminatedChange(e.target.value, index)}
          inputProps={{
            name: 'Eliminated',
            id: `eliminated-${index}`,
          }}
        >
          <option key={`eliminated-${index}#removed`} value={`eliminated-${index}#removed`}></option>
          {values.map((it) => (
            <option key={`eliminated-${it.position}#${it.name}`} value={`eliminated-${it.position}#${it.name}`}>
              {it.name}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
      {index > 1 && (
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel variant="standard" htmlFor={`eliminator-${index}`}>
            Eliminator
          </InputLabel>
          <NativeSelect
            disabled={((document.getElementById(`eliminated-${index}`) as HTMLSelectElement)?.selectedIndex || -1) < 0}
            onChange={(e) => onSelect(e.target.value)}
            inputProps={{
              name: 'Eliminator',
              id: `eliminator-${index}`,
            }}
          >
            <option key={`eliminator-${index}#removed`} value={`eliminator-${index}#removed`}></option>
            {values.map((it) => (
              <option key={`eliminator-${it.position}#${it.name}`} value={`eliminator-${it.position}#${it.name}`}>
                {it.name}
              </option>
            ))}
          </NativeSelect>
        </FormControl>
      )}
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel variant="standard" htmlFor={`bounty-${index}`}>
          Bounty
        </InputLabel>
        <NativeSelect
          onChange={(e) => onSelect(e.target.value)}
          inputProps={{
            name: 'Bounty',
            id: `bounty-${index}`,
          }}
        >
          <option key={`bounty-${index}#removed`} value={`bounty-${index}#removed`}></option>
          {extraPoints.map((it) => (
            <option key={`bounty-${it.position}#${it.name}`} value={`bounty-${it.position}#${it.name}`}>
              {it.name}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </Box>
  )
}

export default PlayerSelect
