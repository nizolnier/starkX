import React from 'react'
import { Button } from '@material-ui/core'
import {useStyles, ButtonContainer} from '../styles'

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