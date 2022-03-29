import { Box } from '@mui/material'
import { Multiselect } from 'multiselect-react-dropdown'

export interface PositionName {
  position: number
  name: string
}

type PlayerSelectProps = Readonly<{
  values: PositionName[]
  extraPoints: PositionName[]
  selectionLimit: number
  index: number
  onSelect: (selectedList: PositionName[], selected: PositionName) => any
  onRemove: (removedList: PositionName[], removed: PositionName) => any
  onBountySelect: (selectedList: PositionName[], selected: PositionName) => any
  onBountyRemove: (selectedList: PositionName[], selected: PositionName) => any
}>

function PlayerSelect({ values, extraPoints, selectionLimit, index, onSelect, onRemove, onBountySelect, onBountyRemove }: PlayerSelectProps) {
  return (
    <Box sx={{ display: 'flex', m: 1 }}>
      <p>{index}.</p>
      <Multiselect
        key={index}
        id={`finishedposition-${index}`}
        displayValue="name"
        isObject={true}
        onRemove={onRemove}
        onSearch={function noRefCheck() {}}
        onSelect={onSelect}
        options={values}
        selectedValues={[]}
        placeholder={index === 1 ? 'Eliminated' : 'Eliminated / Eliminator'}
        selectionLimit={selectionLimit}
        style={{
          multiselectContainer: {
            width: '500px',
          },
        }}
      />
      <Multiselect
        key={`extraPoints-${index}`}
        id={`extraPoints-${index}`}
        displayValue="name"
        isObject={true}
        onSearch={function noRefCheck() {}}
        onSelect={onBountySelect}
        onRemove={onBountyRemove}
        options={extraPoints}
        selectedValues={[]}
        selectionLimit={1}
        placeholder={'Bounty'}
        style={{
          multiselectContainer: {
            width: '130px',
          },
        }}
      />
    </Box>
  )
}

export default PlayerSelect
