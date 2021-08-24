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
}

export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
    content: string,
    loading: boolean
}

export type IconProps = {
    color: string,
    children: JSX.Element
  }

export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
    type: string,
    placeholder: string
    value: string
  }

export interface LoginFormProps {
    setApiKey: (apiKey: string) => void
}

export interface RoundDetailsProps {
    round: RoundContainer
    index: number
}