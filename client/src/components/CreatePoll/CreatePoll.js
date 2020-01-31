import React, { useContext } from 'react'
import CreatePollContext from '../../utils/CreatePollContext'
import { Button, ButtonGroup, ButtonToolbar, Form, FormGroup, Label, Input, Container, Jumbotron, InputGroup, InputGroupButtonDropdown, DropdownToggle, DropdownMenu, dropdownOpen, toggleDropDown, DropdownItem } from 'reactstrap'
import { IoIosBasketball } from 'react-icons/io';
import { MdLocalMovies} from 'react-icons/md'
import { FaPizzaSlice} from 'react-icons/fa'
import { MdVideogameAsset} from 'react-icons/md'
import { FaMusic} from 'react-icons/fa'
import { FaQuestion} from 'react-icons/fa'


const CreatePollComp = () => {



    const { title,
        category,
        isDropdownOpen,
        imageLink,
        options,
        handleInputChange,
        handleChooseCategory,
        handleCreateOption,
        handleCreatePoll,
        handleToggleDropdown } = useContext(CreatePollContext)

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
                                <Button onClick={handleChooseCategory} className="buttonStyles"><IoIosBasketball/></Button>
                                <Button onClick={handleChooseCategory} className="Movies buttonStyles"><MdLocalMovies/></Button>
                                <Button onClick={handleChooseCategory} className="Food buttonStyles"><FaPizzaSlice/></Button>
                                <Button onClick={handleChooseCategory} className="Video Games buttonStyles"><MdVideogameAsset/></Button>
                                <Button onClick={handleChooseCategory} className="Music buttonStyles"><FaMusic/></Button>
                                <Button onClick={handleChooseCategory} className="Other buttonStyles"><FaQuestion/></Button>

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