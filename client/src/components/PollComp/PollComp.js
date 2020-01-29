import React, { Component } from 'react'
// import CreatePollContext from '../../utils/CreatePollContext'
import 'survey-react/survey.css'
import * as Survey from 'survey-react'
import { Container, Jumbotron, FormGroup, Label, Input, Button } from 'reactstrap'
import './PollComp.css'
import axios from 'axios'



class PollComp extends Component {

    constructor(props) {
        super(props)

    }
  
    // componentDidMount() {
    //     axios.get('/api/polls/')
    //     .then(response => {console.log(response)})
    //     .catch(err => {console.log(err)})
    // }


  render() {
    // console.log(window.location.href.split('/pollpage/')[1])


        return (
            <Container>
                <Jumbotron className="jumbotron" fluid>
                    <Container fluid>
                        <h2 className="colorSet">*category Survey*</h2>
                    </Container>
                </Jumbotron>

                <FormGroup className="pollForm" tag="fieldset">
                    <legend className="pollInput" >*Survey Title</legend>
                    <br/>
                    <FormGroup check>
                        <Label  className="pollInput" check>
                            <Input type="radio" className="pollInput" name="radio1" />
                            Option one is this and that—be sure to include why it's great
                        </Label>
                    </FormGroup>
                    <br/>
                    <FormGroup check>
                        <Label className="pollInput" check>
                            <Input type="radio" className="pollInput" name="radio1" />
                            Option two can be something else and selecting it will deselect option one
                        </Label>
                    </FormGroup>
                    <br/>
                    <FormGroup check disabled>
                        <Label className="pollInput" check>
                            <Input type="radio" className="pollInput" name="radio1" />
                            Option two can be something else and selecting it will deselect option one
                        </Label>
                    </FormGroup>
                    <br/>
                    <FormGroup check disabled>
                        <Label className="pollInput" check>
                            <Input type="radio" className="pollInput" name="radio1" />
                            Option two can be something else and selecting it will deselect option one
                        </Label>
                    </FormGroup>

                    <br/>
                    <br/>

                    <Button  className="btn-lg btn-dark btn-block buttonStyles">Submit</Button>

                </FormGroup>

            </Container>


        )
    }
}
export default PollComp