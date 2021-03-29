import styled from 'styled-components'
import { Typography } from '@material-ui/core'

export const MainContainer = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
  color: white;
  flex-direction: column;
  height: 100vh;
`
export const Title = styled(Typography)`
  margin: 1em;
  padding-bottom: 0.5em;
`


export const LoginMainContainer = styled.div`
    background-color: black;
    display: flex;
    align-items: center;
    color: white;
    flex-direction: column;
    height: 100vh;
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 3em;
  padding: 1em;
  padding-bottom: 0;
`
export const Line = styled.div`
  width: 60px;
  height: 2px;
  background-color: white;
  margin-bottom: 1em;
`

export const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const BlackContainer = styled.div`
  background-color: black;
  color: white;
  width: auto;
  height: 120vh;
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

export const Text = styled(Typography)`
    color: white;
    padding: 0.2em;
`
