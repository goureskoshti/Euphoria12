import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, set, get, child, push } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDs3A8rJiYn3pZ5EYZgnYVMp5IkSTHTV5A",
    authDomain: "mydb-8fb25.firebaseapp.com",
    databaseURL: "https://mydb-8fb25-default-rtdb.firebaseio.com",
    projectId: "mydb-8fb25",
    storageBucket: "mydb-8fb25.appspot.com",
    messagingSenderId: "38910713574",
    appId: "1:38910713574:web:5356e0f2cf8246c3336527"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
// reference your database
const detailFormDB = ref(db, "Insider_Passes");

document.getElementById("detailForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var numberTicket = getElementVal("numberTicket");
  var chooseEvent = getElementVal("chooseevent");
  var eventDetails = getElementVal("eventdetails");
  var fare = getElementVal("fare");
  var mobile = getElementVal("mob");
  console.log(name, numberTicket);
  saveMessages(name, numberTicket, chooseEvent, eventDetails, fare, mobile);
  
  window.location = '../Payment Page/index.html';
}

const saveMessages = (name, numberTicket, chooseEvent, eventDetails, fare, mobile) => {
  const newDetailForm = push(detailFormDB);

  set(newDetailForm, {
    Name: name,
    No_of_Pass: numberTicket,
    Event: chooseEvent,
    Date: eventDetails,
    Amount: fare,
    mail: mobile,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
