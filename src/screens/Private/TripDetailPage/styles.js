import styled from 'styled-components'
import { Typography } from '@material-ui/core'

export const MainContainer = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
  color: white;
  flex-direction: column;
  height: auto;
  padding-bottom: 1em;
  @media screen and (min-device-width : 320px) and (max-device-width : 420px) {
    padding-left: 0.5em;
    }
`
export const Title = styled(Typography)`
  margin: 1em;
  padding-bottom: 0.5em;
`
export const CandidateGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1em;
    @media screen and (min-device-width : 320px) and (max-device-width : 420px) {
      grid-template-columns: 1fr;
      align-items: center;
    }
`
export const SpacedText = styled.p`
    padding: 1em;
`
export const ApprovedName = styled.li`
    padding: 0.5em;
`