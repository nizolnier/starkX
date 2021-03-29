import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import AboutUsPage from '../screens/Public/AboutUs/AboutUsPage'
import LandingPage from '../screens/Public/LandingPage'
import ApplyPage from '../screens/Public/ApplyPage/ApplyPage'
import LoginPage from '../screens/Private/LoginPage/LoginPage'
import TripsPage from '../screens/Public/TripsPage/TripsPage'
import ErrorPage from '../screens/Public/ErrorPage/ErrorPage'
import AdminPage from '../screens/Private/AdminPage/AdminPage'
import CreateTrip from '../screens/Private/CreateTripPage/CreateTripPage'
import TripDetailPage from '../screens/Private/TripDetailPage/TripDetailPage'
import NavBar from '../components/NavBar/NavBar'
import NavBarAdmin from '../components/Private/NavBarAdmin/NavBarAdmin'
import Footer from '../components/Footer/Footer';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <NavBar />
          <LandingPage />
          <Footer />
        </Route>

        <Route exact path="/about">
          <NavBar />
          <AboutUsPage />
          <Footer />
        </Route>

        <Route exact path="/apply">
          <NavBar />
          <ApplyPage />
          <Footer />
        </Route>

        <Route exact path="/trips">
          <NavBar />
          <TripsPage />
          <Footer />
        </Route>

        <Route exact path="/login">
          <NavBar />
          <LoginPage />
          <Footer />
        </Route>

        <Route exact path="/admin">
          <NavBarAdmin />
          <AdminPage />
        </Route>

        <Route exact path="/admin/trips">
          <NavBarAdmin />
          <AdminPage />
        </Route>

        <Route exact path="/admin/trips/create">
          <NavBarAdmin />
          <CreateTrip />
        </Route>

        <Route exact path="/admin/trips/detail/:id">
          <NavBarAdmin />
          <TripDetailPage />
        </Route>

        <Route>
          <NavBarAdmin />
          <ErrorPage />
          <Footer />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default Router;