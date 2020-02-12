import React, { useContext } from 'react'
import { Container, Card, Button, CardTitle, CardText, CardHeader, CardBody, CardFooter , Progress, Label} from 'reactstrap'
import DisplayResultsContext from '../../utils/DisplayResultsContext'
import './PollResults.css'

const PollResults = () => {

const {
    optionLabels,
    votes,
    pollTitle,
} = useContext(DisplayResultsContext)



    return (

        <Container>
            <Card>
                <CardHeader>Poll Results</CardHeader>
                <CardBody>
                    <CardTitle><h5>{pollTitle}</h5></CardTitle>
                    <CardText>
                    {
    
                        optionLabels.map((option, i) => (
                            <div>
                            <Label>{option}</Label>
                            <Progress data-index={i} animated value={34} />
                            <br/>
                            </div>
   
                        )) 

                        }
                       
                   
                    </CardText>
                    <Button className="buttonStyles" onClick={() => {window.location=`/pollpage/${id}`}}>Back to Poll</Button>

                </CardBody>
                {/* <CardFooter>{Object.values(votes)}</CardFooter> */}
            </Card>

        </Container>


    )

}


export default PollResults