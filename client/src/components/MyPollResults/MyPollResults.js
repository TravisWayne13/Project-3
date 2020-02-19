import React, { useContext, useState } from 'react'
import { Container, Card, Button, CardTitle, CardBody, Progress, Label, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import DisplayResultsContext from '../../utils/DisplayResultsContext'
import './PollResults.css'
import votesSvg from '../../images/votes.svg'
import { CopyToClipboard } from 'react-copy-to-clipboard';
// import { copyimg } from '../../images/copytoclipboard.png'

const MyPollResults = () => {

  const {
    polls,
    handleDeletePoll,


  } = useContext(DisplayResultsContext)


  const [modal, setModal] = useState(false);

  const [value, setValue] = useState("")



  const toggle = url => {
    setValue(url)
    setModal(!modal)
  };



  return (

    <Container>
      {
        polls.map((poll) => (
          <>
            <Card key={poll._id} className="pollResultCard">
              <CardBody className="myPollsCard">
                <div>
                  <img alt="votes" className="pollVotesSvg" src={votesSvg} />
                  <p className="pollVotesCount">{Object.keys(poll.votes).reduce((sum, key) => sum + parseFloat(poll.votes[key] || 0), 0)}</p>
                </div>
                <CardTitle><h5>{poll.headline}</h5></CardTitle>
                <div className="myPollsOptions">
                  {

                    poll.options.map((option, i) => (
                      <div key={option}>
                        <Label>{option}</Label>
                        <Progress color="white" data-index={i} value={Math.round((poll.votes[option] / Object.keys(poll.votes).reduce((sum, key) => sum + parseFloat(poll.votes[key] || 0), 0)) * 100)}>{isNaN(Math.round((poll.votes[option] / Object.keys(poll.votes).reduce((sum, key) => sum + parseFloat(poll.votes[key] || 0), 0)) * 100)) ? '' : Math.round((poll.votes[option] / Object.keys(poll.votes).reduce((sum, key) => sum + parseFloat(poll.votes[key] || 0), 0)) * 100) + '%'}</Progress>
                        <br />
                      </div>

                    ))

                  }
                </div>
                <div className="myPollsButtons">
                  <Button onClick={() => toggle(window.location.origin + `/pollpage/${poll._id}`)}>Share Poll</Button>
                  <Button className="deleteButton" onClick={() => handleDeletePoll(poll._id)}>Delete Poll</Button>
                </div>
              </CardBody>
            </Card>
            <Modal isOpen={modal} toggle={toggle}>
              <ModalHeader toggle={toggle}>Poll Link</ModalHeader>
              <ModalBody>
                <input value={value}></input>

                <CopyToClipboard text={value}>
                  <button className="buttonStyles">Copy</button>
                </CopyToClipboard>
              </ModalBody>
              <ModalFooter>

              </ModalFooter>
            </Modal>
          </>
        ))
      }
    </Container>
  )
}




export default MyPollResults