import { useState } from 'react';

import { Button, TextField } from '@mui/material'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import { writeNewMessage } from '../firestore'

function submitMessage(name, message) {
  writeNewMessage(name, message)
}

function ResponseButton() {
  const [modalOpen, setModalOpen] = useState(false)
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  return (
    <div>
      <Button style={{marginTop: '50px'}} variant="contained" onClick={()=>setModalOpen(true)}>Leave your own message :)</Button>
      <Dialog open={modalOpen} onClose={()=>setModalOpen(false)}>
        <DialogTitle>Leave your own message</DialogTitle>
        <DialogContent>
          <TextField
              multiline
              margin="dense"
              id="message"
              label="Message"
              fullWidth
              variant="standard"
              value={message}
              onChange={(event)=>{
                setMessage(event.target.value)
              }}
          />
          <TextField
            margin="dense"
            id="name"
            label="Name"
            variant="standard"
            value={name}
            onChange={(event)=>{
              setName(event.target.value)
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button 
            onClick={()=>{
              submitMessage(name, message)
              setModalOpen(false)
            }}
          >
          Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )

}

export default ResponseButton;
