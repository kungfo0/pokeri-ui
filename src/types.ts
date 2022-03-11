export interface RoundsProps {
  roundsForSeason: RoundContainer[]
}

export interface ExtraPoint {
  type: string
  amount: number
}
export interface FinishedPosition {
  eliminatedPlayer: string
  eliminator: string
  finishedPosition: number
  points: number
  extraPoints: ExtraPoint
}
export interface RoundContainer {
  round: Round
  finishedPositions: FinishedPosition[]
}
export interface Round {
  date: string
  id: string
  season: string
  numberOfPlayers: number
  created?: string
  updated?: string
}

export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  content: string
  loading: boolean
}

export type IconProps = {
  color: string
  children: JSX.Element
}

export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  type: string
  placeholder: string
  value: string
}

export interface LoginFormProps {
  setApiKey: (apiKey: string) => void
}

export interface FinishedPositionDetails {
  eliminatedPlayer: string
  eliminator: string
  finishedPosition: number
  points: number
  extrapoint: string
}

export interface Status {
  status: string
}

export interface RoundDetails {
  round: Round
  finishedPositions: FinishedPositionDetails[]
}

export interface RoundDetailsProps {
  round: RoundContainer
  index: number
}

export interface RoundsForSeasonProps {
  selectedSeason: string
}

export interface TotalsProps {
  eliminations: NameValue[]
  gamesPlayed: NameValue[]
  totalPoints: NameValue[]
}

export interface NameValue {
  name: string
  value: string
}

export interface PromiseWithCancel<T> extends Promise<T> {
  cancel: () => void
}

export interface RoundsForSeasonResponse {
  rounds: RoundContainer[]
  season: { name: string }
  totals: TotalsProps
}

export interface TotalsForSeasonResponse {
  season: string
  totals: TotalsProps
}

export interface Season {
  id: string
  name: string
}

export interface Player {
  id: string
  name: string
}

export interface ExtraPoint {
  id: string
  type: string
  amount: number
}

export interface AutoComplateValuesRoundsForSeasonResponse {
  seasons: string[]
  players: string[]
  extraPoints: string[]
  lastRoundWinner: string
}
