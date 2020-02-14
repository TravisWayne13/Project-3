import React, { useContext } from 'react'
import { Container, Card, Button, CardTitle, CardHeader, CardBody, Progress, Label} from 'reactstrap'
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
            <Card className="pollResultCard">
                <CardHeader>Poll Results</CardHeader>
                <CardBody>
                    <CardTitle><h5>{pollTitle}</h5></CardTitle>
                    <div>
                    {
    
                        optionLabels.map((option, i) => (
                            <>
                            {console.log((votes[option]))}
                            <div key={option}>
                            <Label>{option}</Label>
                            <Progress color="white" data-index={i} animated value={(votes[option]/Object.keys(votes).reduce((sum,key)=>sum+parseFloat(votes[key]||0),0))*100} />
                            <br/>
                            </div>
   </>
                        )) 

                        }
                       
                   
                    </div>
                    <Button className="backtoExplore" onClick={() => {window.location=`/explore`}}>
                        Explore Page
                    </Button>
                </CardBody>
            </Card>

        </Container>


    )

}


export default PollResults