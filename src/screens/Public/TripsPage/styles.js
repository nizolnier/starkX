import styled from 'styled-components'
import { Typography } from '@material-ui/core'

export const Title = styled(Typography)`
  padding: 0.5em;
  color: white;
`

export const Center = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const TripsContainer = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
background-color: black;
width: 100%;
height: 100%;
`

export const GridContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr;
grid-gap: 2.5em;
padding: 1em;
margin-bottom: 8em;
@media screen and (min-device-width : 320px) and (max-device-width : 420px) {
  grid-template-columns: 1fr;
  }
`

export const Credits = styled(Typography)`
color: white;
margin: 0.2em;
padding-right: 20em;
padding-bottom: 1.5em;
`