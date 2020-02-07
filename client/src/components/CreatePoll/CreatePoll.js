import React, { useContext } from 'react'
import CreatePollContext from '../../utils/CreatePollContext'
import { Button, ButtonGroup, ButtonToolbar, Form, FormGroup, Label, Input, Container, Jumbotron } from 'reactstrap'
import { IoIosBasketball } from 'react-icons/io';
import { MdLocalMovies} from 'react-icons/md'
import { FaPizzaSlice} from 'react-icons/fa'
import { MdVideogameAsset} from 'react-icons/md'
import { FaMusic} from 'react-icons/fa'
import { FaQuestion} from 'react-icons/fa'
import './CreatePoll.css'

const CreatePollComp = () => {


    const { title,
        category,
        imageLink,
        options,
        handleInputChange,
        handleChooseCategory,
        handleCreateOption,
        handleCreatePoll
         } = useContext(CreatePollContext)

    return (
        <>
            <Container>
                <Form>
                    <Jumbotron className="jumbotron" fluid>
                        <Container fluid>
                            <h2 className="colorSet">Create Poll</h2>
                        </Container>
                    </Jumbotron>
                    <FormGroup>
                        <Label className="colorSet">Poll Title</Label>
                        <Input name='title' type="title" placeholder="ex. What is the best programming language?" onChange={handleInputChange} value={title} />
                    </FormGroup>
                    <FormGroup>
                        <Label className="colorSet">Category</Label>

                        <ButtonToolbar>
                            <ButtonGroup>"
                                <Button onClick={() => handleChooseCategory('Sports')}  className={category === 'Sports' ? 'buttonStylesSelected' : 'buttonStyles'}><IoIosBasketball/></Button>
                                <Button onClick={() => handleChooseCategory('Movies')}  className={category === 'Movies' ? 'buttonStylesSelected' : 'buttonStyles'}><MdLocalMovies/></Button>
                                <Button onClick={() => handleChooseCategory('Food')}  className={category === 'Food' ? 'buttonStylesSelected' : 'buttonStyles'}><FaPizzaSlice/></Button>
                                <Button onClick={() => handleChooseCategory('Video Games')} className={category === 'Video Games' ? 'buttonStylesSelected' : 'buttonStyles'}><MdVideogameAsset/></Button>
                                <Button onClick={() => handleChooseCategory('Music')}  className={category === 'Music' ? 'buttonStylesSelected' : 'buttonStyles'}><FaMusic/></Button>
                                <Button onClick={() => handleChooseCategory('Other')}  className={category === 'Other' ? 'buttonStylesSelected' : 'buttonStyles'}><FaQuestion/></Button>
                            </ButtonGroup>
                        </ButtonToolbar>
                    </FormGroup>
                    <Label className="colorSet">Image Link</Label>
                    <Input name="imageLink" type="imageLink" onChange={handleInputChange} value={imageLink} />

                    <br />
                    <br />

                    {
                        options.map((option, i) => (
                            <FormGroup>
                                <Label className="colorSet">Option{i + 1}</Label>
                                <Input name="options" data-index={i} type="options" onChange={handleInputChange} value={option} />
                            </FormGroup>
                        ))
                    }
                    <Button onClick={handleCreateOption} className="buttonStyles addBtn">+ Add Options</Button>
                    <br />
                    <br />

                    <Button onClick={handleCreatePoll} className="btn-lg btn-dark btn-block buttonStyles">Create Poll</Button>
                </Form>
            </Container>
        </>
    )

}
export default CreatePollComp