import { initializeApp } from 'firebase/app';
import { 
    query, 
    orderBy, 
    limit, 
    onSnapshot, 
    getFirestore, 
    collection,
    addDoc,
    Timestamp
} from "firebase/firestore";

import firebaseConfig from './config.js'


initializeApp(firebaseConfig);

const db = getFirestore();


export function getLatestMessage(callback) {
  const q = query(collection(db, 'messages'), orderBy("timestamp", "desc"), limit(1))
  onSnapshot(q, 
    (snapshot) => {
      snapshot.forEach((doc) => {
        console.log("Got doc: ", doc.data())
        callback(doc.data())
      })
    },
    (error) => {
      console.log("error in query: ", error)
    }
  )
}

export async function writeNewMessage(name, message) {
    const docRef = await addDoc(collection(db, 'messages'), {
        name,
        message,
        timestamp: Timestamp.now()
    })
    return docRef
}