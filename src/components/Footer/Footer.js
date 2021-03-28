import React from "react";
import logo from "../../assets/white-starkx.svg";
import twitter from '../../assets/twitter.svg'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import { useHistory } from 'react-router-dom'
import {FooterContainer, FirstContainer, SecondContainer, SocialLogo, Logo, SectionMedias, SectionLogo, Bold, BoldLink, Copyright, Link, Text} from './styles'
import { goToAboutUs, goToApply, goToError, goToTrips } from "../../router/coordinator";

function Footer() {
  const history = useHistory()

  return (
    <FooterContainer>
      <FirstContainer>
        <SectionLogo>
          <Logo src={logo} />
        </SectionLogo>
        <SectionMedias>
          <a href="https://www.instagram.com/" target="_blank">
            <SocialLogo src={instagram} alt="instagram" />
          </a>
          <a href="https://facebook.com/" target="_blank">
            <SocialLogo
              src={facebook}
              alt="facebook"
            />
          </a>
          <a href="https://twitter.com/" target="_blank">
            <SocialLogo
              src={twitter}
              alt="twitter"
            />
          </a>
        </SectionMedias>
        
      </FirstContainer>

      <SecondContainer>
        <section>
          <Bold>Address</Bold>
          <Text>890 Fifth Avenue</Text>
          <Text>New York, NY 10003, United States</Text>
          <br></br>
        </section>
        <section>
          <Bold>Customer Service </Bold>
          <Text>cservice@starkx.com </Text>

          <Bold>Suggestions </Bold>
          <Text>suggestions@starkx.com</Text>
        </section>
        <section>
          <BoldLink onClick={() => goToAboutUs(history)}>About us</BoldLink>
          <BoldLink onClick={() => goToApply(history)}>Apply</BoldLink>
          <BoldLink onClick={() => goToTrips(history)}>Trips</BoldLink>
          <BoldLink onClick={() => goToError(history)}>Error</BoldLink>
        </section>

      </SecondContainer>
      <Copyright><Link >Developed by Nicole Zolnier</Link></Copyright>
    </FooterContainer>
  )

}

export default Footer;