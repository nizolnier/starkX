import React from 'react'
import Footer from '../../components/Footer/Footer'
import CarouselFeature from '../../components/CarouselFeature'
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import Slogan from '../../components/Slogan/Slogan'

function LandingPage() {
  return (
    <div>
      <CarouselFeature />
      <Slogan />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default LandingPage;