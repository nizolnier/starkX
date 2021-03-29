import React from 'react'
import { useHistory } from 'react-router-dom';
import TripCard from '../../../components/Private/TripCard/TripCard';
import { useProtectedPage } from '../../../hooks/useProtectedPage';
import { useTripsList } from '../../../hooks/useTripsList'
import { useStyles } from '../../../hooks/useStyles'
import { Button, Typography } from '@material-ui/core';
import Loading from '../../../components/Loading';
import axios from 'axios'
import {baseUrl} from '../../../constants/urls'
import {GridContainer, Line, CenterContainer, BlackContainer } from './styles'
import { goToCreateTrip } from '../../../router/coordinator';

function AdminPage() {
  const classes = useStyles()

  const [trips, loaded] = useTripsList()
  useProtectedPage()

  const history = useHistory();


  const deleteTrip = (id) => {
    axios.delete(`${baseUrl}/trips/${id}`).then((response) => {
      window.alert("Trip deleted!")
      window.location.reload(false)
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <div>
      <BlackContainer>
        <Typography className={classes.welcome} variant="h3">Welcome!</Typography>
        <CenterContainer>
          <Line></Line>
          <Typography variant="h5">Trips</Typography>
          <Button variant="contained" className={classes.goToCreate} onClick={() => goToCreateTrip(history)}>Create more trips</Button>
        </CenterContainer>
        {loaded? <GridContainer>
          {trips.map((item) => {
            return <TripCard deleteTrip={deleteTrip} date={item.date} planet={item.planet} description={item.description} id={item.id} name={item.name} />
          })}
        </GridContainer> : <CenterContainer><Loading /></CenterContainer> }
      </BlackContainer>


    </div>
  );
}

export default AdminPage;