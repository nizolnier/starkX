import React from 'react'
import { useHistory } from 'react-router-dom'
import logo from '../assets/white-starkx.svg'
import { Button, MuiThemeProvider } from '@material-ui/core'
import {myTheme, Header, StarkxLogo} from './styles'
import { goToAboutUs, goToApply, goToTrips, goToLogin, goToHome } from '../router/coordinator'

function NavBar() {
  const history = useHistory()

  return (
    <Header>
      <StarkxLogo src={logo} onClick={() => goToHome(history)} />
      <MuiThemeProvider theme={myTheme}>
        <Button color="primary" onClick={() => goToAboutUs(history)}>About Us</Button>
        <Button color="primary" onClick={() => goToApply(history)}>Apply</Button>
        <Button color="primary" onClick={() => goToTrips(history)}>Trips</Button>
        <Button color="secondary" variant="contained" onClick={() => goToLogin(history)}>Admin</Button>
      </MuiThemeProvider>

    </Header>
  )
}

export default NavBar;