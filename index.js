import { getFirestore,doc,getDoc, getDocs, onSnapshot, collection}from "https://www.gstatic.com/firebasejs/9.17.0/firebase-firestore.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics();
  const db = getFirestore();



export function answer(){
    return 'module';
}




        var stdNo = 0;
        var tbody = document.getElementById('tbody1')
        function AddItemToTable(name, roll) {
            let trow = document.createElement("tr");
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            let td3 = document.createElement('td');
          
            // body...
            td1.innerHTML= ++stdNo;
            td2.innerHTML= name;
            td3.innerHTML= roll;
           


            trow.appendChild(td1);
            trow.appendChild(td2);
            trow.appendChild(td3);
            

            tbody.appendChild(trow);
        }

        function AddAllItemToTable(TheStudent){
            stdNo=0;
            tbody.innerHTML="";
            TheStudent.forEach(element => {
                AddItemToTable(element.NameOfStd, element.RollNo);
            });
        }

        async function GetAllDataOnce(){
            const querySnapshot = await getDocs(collection(db, "books"));

            var students = [];

            querySnapshot.forEach(doc => {
                students.push(doc.data());
            });
            AddAllItemToTable(students);
        }

        window.onload = GetAllDataOnce;