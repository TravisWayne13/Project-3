import React, { useContext} from 'react'
import DisplayPollContext from '../../utils/DisplayPollContext'

import { Container, Jumbotron, FormGroup, Label, Input, Button, Card, CardImg , CustomInput} from 'reactstrap'
import './PollComp.css'



const PollComp = () => {

    

    const { 
        headline,
        category,
        imageLink,
        options,
        selectedValue,
        onSelectBox,
        updatePoll
     } = useContext(DisplayPollContext)
  

        return (
            <Container>
                <Jumbotron className="jumbotron" fluid>
                    <Container fluid>
                        <h2 className="colorSet">{category}</h2>
                    </Container>
                </Jumbotron>

                <FormGroup className="pollForm" tag="fieldset">
                    <legend className="pollInput">{headline}</legend>
                    <br/>
                    { 
                        options.map((option, i) => (
                             <FormGroup>
                             <div>
                              <CustomInput type="radio" onClick={onSelectBox} id={i} name="radio1" value={option} label={option} className="pollInput" />
                            </div>
                           </FormGroup>

                            ))
                    }

                    <Card>
                        <CardImg top width="100%" src={imageLink} alt={category} />
                    </Card>
                 
                    
                    <br/>

                    <Button onClick={updatePoll} className="btn-lg btn-dark btn-block buttonStyles">Submit</Button>

                </FormGroup>

            </Container>


        )
    
}
export default PollComp