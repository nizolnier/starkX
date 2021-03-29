import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
export const AboutImg = styled.img`
  width: 50%;
  margin-right: 6em;
  padding: 3em;
  @media screen and (min-device-width : 320px) and (max-device-width : 420px) {
    margin-right: 0;
    width: 110vw;
    }
`

export const Tony = styled.img`
  width: 25%;
  align-self: flex-end;
  margin-right: 3em;
  margin-bottom: 6em;
  @media screen and (min-device-width : 320px) and (max-device-width : 420px) {
    width: 75vw;
    align-self: center;
    margin-right: 0;
    }
`
export const MainContainer = styled.div`
  background-color: black;
  color: white;
`

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 7.5em;
  @media screen and (min-device-width : 320px) and (max-device-width : 420px) {
    flex-direction: column;
    }
`
export const AboutText = styled.p`
  padding: 1.5em;
  text-align: end;
  font-size: 1.3rem;
  margin-right: 2em;
  @media screen and (min-device-width : 320px) and (max-device-width : 420px) {
    margin-right: 0;
    }
`

export const MemoriamContainer = styled.div`
  display: flex;
  align-items: center;
  &:hover {
    animation: ${fadeIn} 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  }
  @media screen and (min-device-width : 320px) and (max-device-width : 420px) {
    flex-direction: column;
    }
`

export const Quote = styled.p`
  padding: 3em;
  text-align: start;
  font-size: 1.5rem;
  margin-left: 2em;
  margin-right: 12em;
  padding-bottom: 0;
  cursor: default;
  @media screen and (min-device-width : 320px) and (max-device-width : 420px) {
    margin-right: 0;
    margin-left: 0;
    padding: 1.2em;
    }
`
export const Credits = styled.p`
  text-align: end;
  padding: 3em;
  font-size: 1.3rem;
  margin-right: 10em;
  padding-top: 0;
  margin-bottom: 3em;
  cursor: default;
  @media screen and (min-device-width : 320px) and (max-device-width : 420px) {
    margin-right: 0;
    }
`