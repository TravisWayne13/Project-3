import React, { Component } from 'react'
// import CreatePollContext from '../../utils/CreatePollContext'
import 'survey-react/survey.css'
import * as Survey from 'survey-react'
import { Container, Jumbotron, FormGroup, Label, Input, Button, Card, CardImg , CustomInput} from 'reactstrap'
import './PollComp.css'
import axios from 'axios'



class PollComp extends Component {

    
    constructor(props) {
        super(props)
        this.state = {
            headline : '',
            category : '',
            options : [],
            imageLink: '',
            votes: {},
            selectedValue: ''
        }
    }

  

  
    componentDidMount() {
        axios.get('/api/polls/id/5e35ca60ff2f672bd98a393c')
        .then(({data}) => {
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

    onSelectBox(event)  {  
        this.setState({
        selectedValue : event.currentTarget.value
          });
      }
 

  render() {


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
                             <FormGroup>
                             <div>
                              <CustomInput type="radio" onClick={this.onSelectBox} id={i} name={option} value={option} label={option} className="pollInput" />
                            </div>
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