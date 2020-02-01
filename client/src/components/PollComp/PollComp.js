import React, { Component } from 'react'
// import CreatePollContext from '../../utils/CreatePollContext'
import 'survey-react/survey.css'
import * as Survey from 'survey-react'
import { Container, Jumbotron, FormGroup, Label, Input, Button, Card, CardImg } from 'reactstrap'
import './PollComp.css'
import axios from 'axios'



class PollComp extends Component {

    
    constructor(props) {
        super(props)
     
    }

    state = {
        headline : '',
        category : '',
        options : [],
        imageLink: '',
        votes: {}
    }
  
    componentDidMount() {
        axios.get('/api/polls/id/5e35ca60ff2f672bd98a393c')
        .then(({data}) => {
         console.log(data.headline)
         this.setState({
        headline: data.headline,
        category: data.category,
        options: data.options,
        imageLink: data.imageLink,
        votes: data.votes,

        })
        })
        .catch(err => {console.log(err)}
        )
    }

 

  render() {
    // console.log(window.location.href.split('/pollpage/')[1])


        return (
            <Container>
                <Jumbotron className="jumbotron" fluid>
                    <Container fluid>
                        <h2 className="colorSet">{this.state.category}</h2>
                    </Container>
                </Jumbotron>

                <FormGroup className="pollForm" tag="fieldset">
                    <legend className="pollInput">{this.state.headline}</legend>
                    <br/>
                    { 
                        this.state.options.map((option, i) => (
                            <FormGroup check>
                            <Label className="pollInput" check>
                            <Input type="radio" className="pollInput" data-index={i}  />
                            {option}
                            </Label>
                            <br/>
                            <br/>
                            </FormGroup>
                            ))
                    }

                    <Card>
                        <CardImg top width="100%" src={this.state.imageLink} alt={this.state.category} />
                    </Card>
                 
                    
                    <br/>

                    <Button  className="btn-lg btn-dark btn-block buttonStyles">Submit</Button>

                </FormGroup>

            </Container>


        )
    }
}
export default PollComp