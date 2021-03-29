import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: black;
  height: 48vh;
  padding: 0 10em;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    flex-direction: column;
    padding: 1em;
    height: 48em;
  }
`

export const FirstContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 25px 0 20px 0;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    flex-direction: column;
    padding: 0;
  }
`

export const SecondContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px 0 10px 0;
  border: 1px solid white;
  border-left: none;
  border-right: none;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    flex-direction: column;
    text-align: center;
    font-size: 20px;
  }
`

export const SocialLogo = styled.img`
  width: 30%;
  justify-content: flex-start;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    width: 8vw;
    margin: 1em;
    margin-bottom: 0;
  }
`

export const Logo = styled.img`
  width: 90%;
  
`

export const SectionMedias = styled.section`
  display: flex;
  margin-left: 20em;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    padding: 1em;
    margin-left: 0;
  }
`

export const SectionLogo = styled.section`
  display: flex;
  justify-content: flex-end;
  margin-left: 5em;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    justify-content: center;
    margin-left: 0;
  }
`

export const Bold = styled.p`
 font-weight: bold;
 color: white;
`
export const BoldLink = styled.p`
  font-weight: bold;
  color: white;
  cursor: pointer;
`

export const Copyright = styled.p`
  text-align: center;
  font-weight: bold;
  padding-top: 20px;
`

export const Link = styled.a`
  text-decoration: none;
  color: white;
  cursor: pointer;
  &:hover{
    text-decoration: none;
    color: grey;
  }
`
export const Text = styled.p`
  color: white;
`