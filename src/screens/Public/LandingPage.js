import React from 'react'
import CarouselFeature from '../../components/CarouselFeature/CarouselFeature'
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import Slogan from '../../components/Slogan/Slogan'

function LandingPage() {
  return (
    <div>
      <CarouselFeature />
      <Slogan />
      <HowItWorks />
    </div>
  );
}

export default LandingPage;