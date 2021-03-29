import styled from 'styled-components'
import { Typography } from '@material-ui/core'

export const Title = styled(Typography)`
padding: 0.5em;
color: white;
`

export const SloganContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
background-color: black;
color: white;
margin: 0;
@media screen and (min-device-width : 320px) and (max-device-width : 420px) {
    flex-direction: column;   
}
`

export const PrettyFamily = styled.img`
width: 60%;
margin-bottom: 6em;
@media screen and (min-device-width : 320px) and (max-device-width : 420px) {
    width: 80%;
    }
`

export const TextButtonContainer = styled.div`
padding: 1em;
margin-left: 2em;
display: flex;
flex-direction: column;
@media screen and (min-device-width : 320px) and (max-device-width : 420px) {
    justify-content: center;
    align-items: center;
}
`