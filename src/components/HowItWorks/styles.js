import styled from 'styled-components'
import { Typography } from '@material-ui/core'

export const Title = styled(Typography)`
  padding: 0.5em;
  color: white;
`
export const HowContainer = styled.div`
  background-color: black;
  color: white;
`

export const CardsGrid = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 4em;
  padding-bottom: 6em;
  @media screen and (min-device-width : 320px) and (max-device-width : 420px) {
    flex-direction: column;
    align-items: center;
    }
`