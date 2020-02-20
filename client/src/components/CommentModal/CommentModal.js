import React from 'react'
import { Button, Modal, ModalBody } from 'reactstrap'

const [modal, setModal] = useState(false)

const CommentModal = () => {

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <form className={classes.root} noValidate autoComplete="off">
        <ModalBody>
          <ThemeProvider theme={theme}>
            <p>
              <TextField id="outlined-basic" label="Comment" name="comment" variant="outlined" onChange={data.handleInputChange} value={data.comment} />
            </p>
          </ThemeProvider>
          <Button className="post" id={value} type="submit" onClick={(e) => { data.createComment(e, value); toggle(); }}>Post</Button>
        </ModalBody>

      </form>
    </Modal>
  )
}

export default CommentModal