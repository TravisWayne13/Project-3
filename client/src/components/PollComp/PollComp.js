import React, { useContext } from 'react'
import DisplayPollContext from '../../utils/DisplayPollContext'

import { Container, Jumbotron, FormGroup, Button, Card, CardImg, CustomInput } from 'reactstrap'
import './PollComp.css'

const PollComp = () => {
<<<<<<< HEAD
  const {
 id,
    headline,
    category,
    imageLink,
    options,
    onSelectBox,
    updatePoll,
    viewResults
  } = useContext(DisplayPollContext)

  return (
    <Container>
      <Jumbotron className='jumbotron' fluid>
        <Container fluid>
          <h2 className='colorSet'>{category}</h2>
        </Container>
      </Jumbotron>

      <FormGroup className='pollForm' tag='fieldset'>
        <legend className='pollInput'>{headline}</legend>
        <br />
        {
          options.map((option, i) => (
            <FormGroup>
              <div>
                <CustomInput type='radio' onClick={onSelectBox} id={i} name='radio1' value={option} label={option} className='pollInput' />
              </div>
            </FormGroup>

          ))
        }

        <Card>
          <CardImg top width='100%' src={imageLink} alt={category} />
        </Card>

        <br />

        <Button onClick={updatePoll} className='btn-lg btn-dark btn-block buttonStyles'>Submit</Button>
        <br />
        <Button onClick={viewResults} className='btn-lg btn-dark btn-block buttonStyles'>View Results</Button>

      </FormGroup>

    </Container>

  )
=======

    

    const {
        headline,
        category,
        imageLink,
        options,
        onSelectBox,
        updatePoll,
        viewResults
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

                    <Button onClick={() => { updatePoll()
                    viewResults()
                    }} className="btn-lg btn-dark btn-block buttonStyles">Submit</Button>
                    <br/>

                </FormGroup>

            </Container>


        )
    
>>>>>>> 650529669ba3725db1c80e0554e5681bbed3bf49
}
export default PollComp
