import Button from 'react-bootstrap/Button'
import styled from 'styled-components'

export const Title = styled.h1`
  text-shadow: 2px 1px 2px rgba(58, 58, 58, 1);
  @media screen and (min-device-width : 320px) and (max-device-width : 420px) {
    font-size: 1.2rem;
    }
`

export const StyledButton = styled(Button)`
    width: 50vh;
    font-size: 1.2rem;
    @media screen and (min-device-width : 320px) and (max-device-width : 420px) {
        width: 15vh;
        font-size: 0.6rem;
    }

`