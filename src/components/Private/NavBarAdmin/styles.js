import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  padding: 1em;
  align-items: center;
  justify-content: space-between;
  background-color: black;
`

export const AdminLogo = styled.img`
  width: 10%;
  cursor: pointer;
  @media screen and (min-device-width : 320px) and (max-device-width : 420px) {
    width: 22%;
    }
`