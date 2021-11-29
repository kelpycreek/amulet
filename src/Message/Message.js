import { Typography } from '@mui/material'
import './message.css'

function Message(props) {
  const prewrittenVariant = "subtitle1"
  return (
    <div>
      <Typography variant={prewrittenVariant}><b>Someone named</b></Typography>
      <Typography variant="h5">{props.name}</Typography>
      <Typography variant={prewrittenVariant}><b>wants to tell you</b></Typography>
      <Typography variant="body1">{props.message}</Typography>
    </div>
  );
}

export default Message;
