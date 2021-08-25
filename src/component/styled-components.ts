import styled, { keyframes } from 'styled-components'

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
color: #D8000C;
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

export const PrevNextButton = styled.button`
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  text-transform: uppercase;
  margin-left: 20px;
  margin-right: 20px;
  width: 100px;
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
  background: string,
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
width: 500px;
margin: 20px;
border: 1px solid black;
th, td {
  border: 1px solid black;
  padding: 3px;
}
th:first-child {
  text-align: center;
}
th {
  text-align: left;
}
td:first-child  {
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

export const FacebookBackground =
'linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)'
export const InstagramBackground =
'linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)'
export const TwitterBackground =
'linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)'

export const Header = styled.h1`
color: white;
`