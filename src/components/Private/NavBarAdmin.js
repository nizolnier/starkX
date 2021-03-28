import React from 'react'
import { useHistory } from 'react-router-dom'
import logo from '../../assets/white-admin.svg'
import { Button } from '@material-ui/core'
import {useStyles, Header, AdminLogo} from '../styles'
import { goToAdmin, goToCreateTrip, goToAdminTrips } from '../../router/coordinator'

function NavBarAdmin() {
  const classes = useStyles()

  const history = useHistory()

  const logout = () => {
    localStorage.removeItem("token");
    history.push("/")
  }

  return (
    <Header>
      <AdminLogo src={logo} onClick={() => goToAdmin(history)} />
      <Button className={classes.normal} onClick={() => goToAdminTrips(history)}>Trips</Button>
      <Button className={classes.normal} onClick={() => goToCreateTrip(history)}>Create Trip</Button>
      <Button className={classes.logout} variant="contained" onClick={logout}>Logout</Button>


    </Header>
  )
}

export default NavBarAdmin