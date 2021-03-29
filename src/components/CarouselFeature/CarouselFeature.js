import React from 'react'
import { useHistory } from 'react-router-dom'
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import earth from '../../assets/earth.jpg'
import galaxy from '../../assets/galaxy.jpg'
import meteorites from '../../assets/meteorites.jpg'
import { StyledButton, Title } from './styles'
import { goToTrips } from '../../router/coordinator'



function CarouselFeature() {
  const history = useHistory()


  return (
    <div>
      <Col md={14}>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={galaxy} alt="First slide" />
            <Carousel.Caption>
              <Title>The galaxy won't be that far away anymore</Title>
              <StyledButton onClick={() => goToTrips(history)} variant="light">SEE TRIPS</StyledButton>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={meteorites} alt="Second slide" />

            <Carousel.Caption>
              <Title>Tired of the dry spell? How about a meteor shower?</Title>
              <StyledButton  onClick={() => goToTrips(history)} variant="light">SEE TRIPS</StyledButton>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={earth} alt="Third slide" />

            <Carousel.Caption>
              <Title>I can show you the.... GALAXY!</Title>
              <StyledButton onClick={() => goToTrips(history)}  variant="light">SEE TRIPS</StyledButton>
              
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      </Col>

    </div>
  );
}

export default CarouselFeature;