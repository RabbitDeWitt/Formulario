import app from "./app.js"

import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'

export async function addUser(user){
  const db = getFirestore(app)
  const usersCollection = collection(db, 'users')
  await addDoc(usersCollection, user)
}