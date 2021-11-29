import { Typography, Button } from '@mui/material'
import './greeting.css'

function Greeting(props) {
  return (
    <div>
      <Typography variant="h2"><b>You have</b></Typography>
      <Typography variant="h2">1</Typography>
      <Typography variant="h2">New Message</Typography>
      <Button  variant="contained" style={{marginTop: "10px"}} onClick={()=>props.onGreet()}>Read it?</Button>
    </div>
  );
}

export default Greeting;
