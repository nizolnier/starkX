import React from 'react'
import { Button } from '@material-ui/core'
import { ButtonContainer } from './styles'
import { useStyles } from '../../../hooks/useStyles'


function Buttons(props) {
  const classes = useStyles()

  return (
    <ButtonContainer>
      <Button className={classes.approve} onClick={() => props.decideCandidate(true)}>APPROVE</Button>
      <Button className={classes.donot} onClick={() => props.decideCandidate(false)}>DON'T APPROVE</Button>
    </ButtonContainer>
  );
}

export default Buttons;