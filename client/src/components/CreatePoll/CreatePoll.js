import React, { useContext } from 'react'
import CreatePollContext from '../../utils/CreatePollContext'
import { Button, Form, FormGroup, Label, Input, Container, Jumbotron, InputGroup, InputGroupButtonDropdown, DropdownToggle, DropdownMenu, dropdownOpen, toggleDropDown, DropdownItem } from 'reactstrap'

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
                        {/* <Label className="colorSet">Category</Label> */}
                        <InputGroup>
                            {/* <Input name='category' placeholder="ex. Sports" onChange={handleInputChange} value={category} /> */}
                            <InputGroupButtonDropdown addonType="append" isOpen={isDropdownOpen} toggle={handleToggleDropdown}>
                                 <DropdownToggle  caret>
                                    {category || 'Select a category'}
                                </DropdownToggle> 
                                <DropdownMenu>
                                    <DropdownItem className="Music"  onClick={() => handleChooseCategory}>Music</DropdownItem>
                                    <DropdownItem className="Sports" onClick={() => handleChooseCategory}>Sports</DropdownItem>
                                    <DropdownItem className="Movies/TV"  onClick={() => handleChooseCategory}>Movies/TV</DropdownItem>
                                    <DropdownItem className="Video Games"  onClick={() => handleChooseCategory}>Video Games</DropdownItem>
                                    <DropdownItem className="Food"  onClick={() => handleChooseCategory}>Food</DropdownItem>
                                    <DropdownItem className="Other"  onClick={() => handleChooseCategory}>Other</DropdownItem>
                                </DropdownMenu>
                            </InputGroupButtonDropdown>
                        </InputGroup>
                    </FormGroup>
                    <Label className="colorSet">Image Link</Label>
                    <Input name="imageLink"  type="imageLink" onChange={handleInputChange} value={imageLink}/>

                    <br/>
                    <br/>
                    
                    {
                        options.map((option, i) => (
                    <FormGroup>
                        <Label className="colorSet">Option{i + 1}</Label>
                        <Input name="options" data-index={i} type="options" onChange={handleInputChange} value={option}/>
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