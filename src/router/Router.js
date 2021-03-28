import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import AboutUsPage from '../screens/Public/AboutUs/AboutUsPage'
import LandingPage from '../screens/Public/LandingPage'
import ApplyPage from '../screens/Public/ApplyPage'
import LoginPage from '../screens/Private/LoginPage'
import TripsPage from '../screens/Public/TripsPage'
import ErrorPage from '../screens/Public/ErrorPage'
import AdminPage from '../screens/Private/AdminPage'
import CreateTrip from '../screens/Private/CreateTripPage'
import TripDetailPage from '../screens/Private/TripDetailPage'


function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>

        <Route exact path="/about">
          <AboutUsPage />
        </Route>
        
        <Route exact path="/apply">
          <ApplyPage />
        </Route>
        
        <Route exact path="/trips">
          <TripsPage />
        </Route>

        <Route exact path="/login">
          <LoginPage />
        </Route>

        <Route exact path="/admin">
          <AdminPage />
        </Route>

        <Route exact path="/admin/trips">
          <AdminPage />
        </Route>

        <Route exact path="/admin/trips/create">
          <CreateTrip />
        </Route>         

        <Route exact path="/admin/trips/detail/:id">
          <TripDetailPage />
        </Route>

        <Route>
          <ErrorPage />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default Router;