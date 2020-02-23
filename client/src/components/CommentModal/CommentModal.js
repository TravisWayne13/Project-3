import React, { useContext } from 'react'
import { Button, Modal, ModalBody } from 'reactstrap'
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import deepPurple from '@material-ui/core/colors/deepPurple'
import TextField from '@material-ui/core/TextField'
import PollContext from '../../utils/PollContext'


const CommentModal = () => {
  
  const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: 310,
      },
    },
  }))
  const classes = useStyles()
  const theme = createMuiTheme({
    palette: {
      primary: deepPurple,
      secondary: {
        main: '#f44336',
      },
    },
  })
  
  const { modal, toggle, handleInputChange, comment, pollID, createComment } = useContext(PollContext)

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <form className={classes.root} noValidate autoComplete="off">
        <ModalBody>
          <ThemeProvider theme={theme}>
            <p>
              <TextField id="outlined-basic" label="Comment" name="comment" variant="outlined" onChange={handleInputChange} value={comment} />
            </p>
          </ThemeProvider>
          <Button className="post" id={pollID} type="submit" onClick={(e) => { createComment(e, pollID); toggle(); }}>Post</Button>
        </ModalBody>

      </form>
    </Modal>
  )
}

export default CommentModal