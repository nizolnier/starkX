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
export const CandidateGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1em;
`
export const SpacedText = styled.p`
    padding: 1em;
`
export const ApprovedName = styled.li`
    padding: 0.5em;
`