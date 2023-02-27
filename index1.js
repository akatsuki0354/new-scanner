import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.0/firebase-analytics.js";
import { getFirestore, collection, getDocs, 
  addDoc, doc, deleteDoc, updateDoc }  from "https://www.gstatic.com/firebasejs/9.17.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD1GxCsUNfVYuE8vq5Z9u3kj8dHFval7Hc",
  authDomain: "firestore-9d6f3.firebaseapp.com",
  databaseURL: "https://firestore-9d6f3-default-rtdb.firebaseio.com",
  projectId: "firestore-9d6f3",
  storageBucket: "firestore-9d6f3.appspot.com",
  messagingSenderId: "937341367464",
  appId: "1:937341367464:web:88c8c27805555c97247e9d",
  measurementId: "G-8XR09PF58C"
};


initializeApp(firebaseConfig)

const db = getFirestore()

const colRef = collection(db, 'books')


getDocs(colRef)
  .then((snapshot) => {
   let books = []
   snapshot.docs.forEach((doc) => {
    books.push({ ...doc.data(), id: doc.id })
   })
   console.log(books)
  })
  .catch(err => {
    console.log(err.message)
  })

  // adding documents
  const addBookForm = document.querySelector('.add')
  addBookForm.addEventListener('submit', (e) => {
    e.preventDefault()
 

  addDoc(colRef, {
    NameOfStd: addBookForm.NameOfStd.value, 
    RollNo: addBookForm.RollNo.value,
    Times: addBookForm.times.value
  })
  .then(() => {
    addBookForm.reset()
  })

})