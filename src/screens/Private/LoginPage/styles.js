import styled from 'styled-components'
import { Typography } from '@material-ui/core'

export const Title = styled(Typography)`
  margin: 1em;
  padding-bottom: 0.5em;
`

export const LoginForm = styled.form`
padding: 1em;
display: flex;
flex-direction: column;
justify-content: center;
gap: 1em;
width: 30vw;
background-color: white;
border-radius: 5px;
`

export const MainContainer = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
  color: white;
  flex-direction: column;
  height: 100vh;
`