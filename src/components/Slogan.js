import React from 'react'
import astronaut from '../assets/astronaut.svg'
import { Button,  MuiThemeProvider } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import {useStyles, myTheme, Title, SloganContainer, TextButtonContainer, PrettyFamily} from './styles'
import { goToApply } from '../router/coordinator'


function Slogan() {
    const classes = useStyles()
    const history = useHistory()

    return (
        <SloganContainer>
            <TextButtonContainer>
                <Title variant="h4">Welcome to starkX! Your next adventure is just one planet away!</Title>
                <MuiThemeProvider theme={myTheme}>
                <Button className={classes.apply} color="secondary" variant="contained" onClick={() => goToApply(history)}>Apply now</Button>
                </MuiThemeProvider>
                
            </TextButtonContainer>

            <PrettyFamily src={astronaut} />
        </SloganContainer>
    );
}

export default Slogan;
