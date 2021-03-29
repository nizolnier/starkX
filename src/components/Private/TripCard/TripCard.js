import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from '@material-ui/core/Button';
import { TripCardDiv } from './styles'
import { goToDetails } from '../../../router/coordinator';
import { useHistory } from 'react-router';
import { useStyles } from '../../../hooks/useStyles'

function TripCard(props) {
    const history = useHistory()
    const classes = useStyles()

    return (
        <TripCardDiv>
            <Card text="white" style={{ minWidth: '260', backgroundColor: "black", color: "white" }}>
                <Card.Body onClick={() => goToDetails(history, props.id)}>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.date}</Card.Subtitle>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                </Card.Body>
                <footer>
                    <Button className={classes.delete} onClick={() => props.deleteTrip(props.id)} size="small">DELETE</Button>
                </footer>
            </Card>
        </TripCardDiv>
    )
}
export default TripCard