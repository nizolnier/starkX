import styled, { keyframes } from 'styled-components'

const scaleUp = keyframes`
  0% {
            transform: scale(1);
  }
  100% {
            transform: scale(1.1);
  }

`

export const CardPublic = styled.div`
    cursor: default;
    &:hover {
        animation: ${scaleUp} 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    }
`
