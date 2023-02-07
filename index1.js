import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.0/firebase-analytics.js";
import { getFirestore, collection, getDocs, 
  addDoc, doc, deleteDoc, updateDoc }  from "https://www.gstatic.com/firebasejs/9.17.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDWt1uExrh1y03bo8Kt-89vNbGQ8j-ITHc",
    authDomain: "firetest-67b89.firebaseapp.com",
    databaseURL: "https://firetest-67b89-default-rtdb.firebaseio.com",
    projectId: "firetest-67b89",
    storageBucket: "firetest-67b89.appspot.com",
    messagingSenderId: "880825586749",
    appId: "1:880825586749:web:43b209e3de7e1c9f028654",
    measurementId: "G-Y4PQZ4LHCW"
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
    RollNo: addBookForm.RollNo.value
  })
  .then(() => {
    addBookForm.reset()
  })

})