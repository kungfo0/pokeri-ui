import styled, { css, keyframes } from 'styled-components'

export const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`
export const RightSideContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: right;
`
export const LogOutButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 200px;
`

export const LoginFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }

  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`

export const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`

export const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LoginWith = styled.h5`
  cursor: pointer;
`

export const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  background-color: #ebd0d0;
  margin: 1.5rem 0 1rem 0;
  backdrop-filter: blur(25px);
`

export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0 3rem 0;
  width: 80%;
`

export const ForgotPassword = styled.h4`
  cursor: pointer;
`

export const StyledInput = styled.input`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
  width: 80%;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: #b9abe099;
    font-weight: 100;
    font-size: 1rem;
  }
`

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const ErrorMessage = styled.div`
  color: #d8000c;
  height: 24px;
`

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid black;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
`

export const StyledButton = styled.button`
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 65%;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
  &:active {
    transform: translateY(4px);
  }
  &:hover {
    filter: brightness(1.5);
  }
`

export const SmallButton = styled.button`
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  text-transform: uppercase;
  margin: 20px;
  width: 100px;
  height: 25px;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
  &:disabled {
    filter: brightness(0.5);
    &:hover {
      filter: brightness(0.5);
    }
  }
  &:active {
    transform: translateY(4px);
  }
  &:hover {
    filter: brightness(1.5);
  }
`

export type StyledIconProps = {
  background: string
}

export const StyledIcon = styled.div`
  height: 3.5rem;
  width: 3.5rem;
  background: ${(p: StyledIconProps) => p.background};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4rem;
  color: white;
  cursor: pointer;
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`

export const StyledTable = styled.table`
  border-spacing: 0px;
  background: rgba(255, 255, 255, 0.85);
  width: 450px;
  margin: 20px;
  border: 1px solid black;
  th,
  td {
    border: 1px solid black;
    padding: 3px;
  }
  th:first-child {
    text-align: center;
  }
  th {
    text-align: left;
  }
  td:first-child {
    text-align: center;
  }
  tr {
    text-align: left;
  }
`

export const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100%;
  flex-wrap: wrap;
`
export const AppWrapper = styled.div`
  margin: 20px;
`

export const FacebookBackground = 'linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)'
export const InstagramBackground = 'linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)'
export const TwitterBackground = 'linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)'

export const Header = styled.h1`
  color: white;
`

interface ContentProps {
  open: boolean
}

export const Content = styled.div`
  border: 1px solid gray;
  border-top: none;
  opacity: ${(props: ContentProps) => (props.open ? '1' : '0')};
  max-height: ${(props) => (props.open ? '100%' : '0')};
  overflow: hidden;
  padding: ${(props) => (props.open ? '15px' : '0 15px')};
  transition: all 0.3s;

  p {
    margin: 0;
  }
`

export const MEDIA_QUERY_IS_MOBILE = '@media only screen and (max-width: 768px)'
export const MEDIA_QUERY_IS_MOBILE_XS = '@media only screen and (max-width: 525px)'
export const MEDIA_QUERY_IS_TABLET_OR_DESKTOP = '@media only screen and (min-width: 992px)'
export const MEDIA_QUERY_IS_TABLET = '@media only screen and (max-width: 991px) and (min-width: 769px)'

export const Container = styled.div`
  width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 0.25rem 1.75rem;
  ${MEDIA_QUERY_IS_MOBILE} {
    font-size: 0.96em;
    padding: 0.25rem 1.25rem;
  }
`

export const Card = styled.div`
  min-width: 0;
  display: flex;
  margin: 1.25rem 0;
  position: relative;
  border-radius: 3px;
  word-wrap: break-word;
  background-color: #fff;
  flex-direction: column;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  box-shadow: rgb(0 0 0 / 10%) 0px 1px 3px 0px, rgb(0 0 0 / 5%) 0px 5px 15px 0px;
  ${MEDIA_QUERY_IS_MOBILE} {
    border: none;
    border-radius: 0;
    box-shadow: none;
    margin: 0;
  }
`

export const CardHeader = styled.div`
  display: flex;
  font-size: 1.15rem;
  flex-flow: row wrap;
  background-color: #fff;
  padding: 0.75rem 1.25rem;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  ${MEDIA_QUERY_IS_MOBILE} {
    font-size: 1.1rem;
    text-align: center;
    display: inline-block;
    padding: 0 1.15rem 1rem;
  }
`

export const CardBody = styled.div<{ multiComponents?: boolean }>`
  flex: 1 1 auto;
  min-height: 32rem;
  padding: 0.75rem 1.25rem;
  ${({ multiComponents }) =>
    multiComponents &&
    css`
      > div {
        margin-bottom: 1.5rem;
        :first-of-type > label {
          margin-top: 0;
        }
        > label {
          font-size: 18px;
          margin-bottom: 0.5rem;
        }
      }
    `}
  ${MEDIA_QUERY_IS_MOBILE} {
    padding: 0rem 0;
  }
`

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100%;
  flex-wrap: wrap;
  margin-top: 1rem;
`
