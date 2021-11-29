import { useState } from 'react';
import './App.css';
import { getLatestMessage, writeNewMessage } from './firestore'

import ResponseButton from './ResponseButton/ResponseButton'
import Message from './Message/Message'
import Greeting from './Greeting/Greeting'



function App() {
  const [message, updateMessage] = useState({message: "", name:"", timestamp: {seconds: 0}})
  const [greeting, setGreeting] = useState(true)
  getLatestMessage((newMessage) => {
    if (newMessage.timestamp.seconds !== message.timestamp.seconds) {
      updateMessage(newMessage)
    }
  })

  if (greeting) {
    return (
      <div className="App">
        <Greeting onGreet={()=>setGreeting(false)} />
      </div>
    )
  }

  return (
    <div className="App">
      <Message name={message.name} message={message.message} />
      <ResponseButton />
    </div>
  );
}

export default App;
