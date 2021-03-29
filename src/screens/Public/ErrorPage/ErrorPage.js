import React from 'react'
import { Title, MainContainer, Text } from './styles'

function ErrorPage() {
  return (
    <MainContainer>
      <Title variant="h3">There's nothing here!</Title>
      <Text align="center" variant="body1">Whatever you were looking for doesn't currently exist at this address. <br></br>  Unless you were looking for this error page, in which case: <br></br> Congrats! You totally found it!</Text>
    </MainContainer>
  )
}

export default ErrorPage;