import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, set, push } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

// Firebase configuration
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
const detailFormDB = ref(db, "Outsider_Passes");

// DOM elements
const pasName = document.getElementById("name");
const numTicket = document.getElementById("numberTicket");
const chooseEvent = document.getElementById("chooseevent");
const eventDetails = document.getElementById("eventDetails");
const fareAmount = document.getElementById("fare");
const mob = document.getElementById("mob");
const checkFares = document.getElementById("check_fares");
const detailForm = document.getElementById('detailForm');
const clearAll = document.getElementById('clear_all');

// Event fare configuration
const eventFareMap = {
    "14 Feb 2024": 200,
    "15 Feb 2024": 200,
    "16 Feb 2024": 300,
    "14,15,16 Feb 2024": 400,
    "15 Oct 2024": 300,
    "15 Dec 2024": 1500,
    "25 Nov 2024": 600,
    "10 May 2024": 250,
    "1 Sept 2024": 200,
    "25 Apr 2024": 1800,
    "31 Dec 2024": 1000,
    "16 July 2024": 2000,
};

const eventDateMap = {
    "Spandan Day 1": "14 Feb 2024",
    "Spandan Day 2": "15 Feb 2024",
    "Spandan Day 3": "16 Feb 2024",
    "SPANDAN Full Event": "14,15,16 Feb 2024",
    "Raas Rang": "15 Oct 2024",
    "SVVV MUN": "15 Dec 2024",
    "Ambriti": "25 Nov 2024",
    "Udhyamita": "10 May 2024",
    "Abhinandan": "1 Sept 2024",
    "Moot Court": "25 Apr 2024",
    "DJ Night": "31 Dec 2024",
    "Arijit Concert": "16 July 2024",
};

// Update event details and fare when event is chosen
chooseEvent.addEventListener("change", (e) => {
    const selectedEvent = chooseEvent.value;
    const eventDate = eventDateMap[selectedEvent] || "Fetching Event Date.....";
    
    eventDetails.value = eventDate;
    
    // Calculate fare
    const eventFare = eventFareMap[eventDate] || 0;
    fareAmount.value = numTicket.value * eventFare;
});

// Update fare when number of tickets is changed
numTicket.addEventListener("change", (e) => {
    if (numTicket.value < 0) {
        numTicket.value = 0;
    }
    const eventDate = eventDetails.value;
    const eventFare = eventFareMap[eventDate] || 0;
    fareAmount.value = numTicket.value * eventFare;
});

// Clear all form fields
clearAll.addEventListener("click", (e) => {
    e.preventDefault();
    pasName.value = "";
    numTicket.value = "";
    chooseEvent.value = "Choose Event";
    eventDetails.value = "";
    fareAmount.value = "";
    mob.value = "";
});

// Check fares button
checkFares.addEventListener("click", (e) => {
    e.preventDefault();
    const fareInfo = `
      Total Events:
      -----------------------------------------------------------
      Spandan Day 1 → Per Person ₹200/-
      Spandan Day 2 → Per Person ₹200/-
      Spandan Day 3 → Per Person ₹300/-
      SPANDAN Full Event → Per Person ₹400/-
      Raas Rang → Per Person ₹300/-
      SVVV MUN → Per Person ₹1500/-
      Ambriti → Per Person ₹600/-
      Udhyamita → Per Person ₹250/-
      Abhinandan → Per Person ₹200/-
      Moot Court → Per Person ₹1800/-
      DJ Night → Per Person ₹1000/-
      Arijit Concert → Per Person ₹2000/-
      -----------------------------------------------------------
    `;
    alert(fareInfo);
  });

// Handle form submission and save data to local storage and Firebase
detailForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const formData = {
        firstname: pasName.value,
        eventname: chooseEvent.value,
        eventdate: eventDetails.value,
        email: mob.value,
        subject: numTicket.value,
        amount: fareAmount.value
    };
    
    // Save data to local storage
    localStorage.setItem('formData', JSON.stringify(formData));
    console.log('Booking Data Saved:', formData);
  
    // Save data to Firebase
    const newDetailForm = push(detailFormDB);
    set(newDetailForm, {
        Name: formData.firstname,
        No_of_Pass: formData.subject,
        Event: formData.eventname,
        Date: formData.eventdate,
        Amount: formData.amount,
        mail: formData.email,
    }).then(() => {
        console.log('Data saved to Firebase:', formData);
        // Redirect to payment page
        window.location.href = "/Checkout-page/index.html";
    }).catch((error) => {
        console.error('Error saving data to Firebase:', error);
    });
});

//refund money
const refundMoney = document.getElementById("refund_amount");
const navbar = document.getElementById("navbar");
const grab2 = document.getElementById("grab2");
const l1 = document.getElementById("l1");
const l2 = document.getElementById("l2");
const l3 = document.getElementById("l3");
const l4 = document.getElementById("l4");
const l5 = document.getElementById("l5");
const l6 = document.getElementById("l6");
refundMoney.addEventListener("click", (e) => {
  e.preventDefault();
  
  document.body.style.backgroundColor = "#000000";
  grab2.style.color = "#FFFFFF"
  l1.style.color = "#FFFFFF"
  l2.style.color = "#FFFFFF"
  l3.style.color = "#FFFFFF"
  l4.style.color = "#FFFFFF"
  l5.style.color = "#FFFFFF"
  l6.style.color = "#FFFFFF"
});
