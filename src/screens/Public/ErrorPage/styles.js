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
export const Text = styled(Typography)`
    color: white;
    padding: 0.2em;
`
