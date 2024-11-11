const pasName = document.getElementById("name");
const numTicket = document.getElementById("numberTicket");
const chooseEvent = document.getElementById("chooseevent");
const eventDetails = document.getElementById("eventDetails");
const fareAmount = document.getElementById("fare");
const mob = document.getElementById("mob");
const clearAll = document.getElementById("clear_all");
const refundMoney = document.getElementById("refund_amount");
const checkFares = document.getElementById("check_fares");
const detailForm = document.getElementById('detailForm');

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
    e.preventDefault();
    const selectedEvent = chooseEvent.value;
    const eventDate = eventDateMap[selectedEvent] || "Fetching Bus Choose destination.....";
    
    eventDetails.value = eventDate;
    
    // Calculate fare
    const eventFare = eventFareMap[eventDate] || 0;
    fareAmount.value = numTicket.value * eventFare;
});

// Update fare when number of tickets is changed
numTicket.addEventListener("change", (e) => {
    e.preventDefault();
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

// Handle refund button click
refundMoney.addEventListener("click", (e) => {
    e.preventDefault();
    const name = pasName.value;
    const numberTicket = numTicket.value;
    const chooseEventVal = chooseEvent.value;
    const eventDetailsVal = eventDetails.value;

    const url = `./data.html?name=${encodeURIComponent(name)}&chooseEvent=${encodeURIComponent(chooseEventVal)}&eventDetails=${encodeURIComponent(eventDetailsVal)}&numberTicket=${encodeURIComponent(numberTicket)}`;
    window.location.href = url;
});

// Check fares button
checkFares.addEventListener("click", (e) => {
    e.preventDefault();
    let fareInfo = `
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

// Handle form submission
detailForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const formData = {
        firstname: pasName.value,
        eventname: chooseEvent.value,
        eventdate: eventDetails.value,
        
        email: mob.value,
        subject: numTicket.value,
        amount:fareAmount.value
    };
    
    // Save data to local storage
    localStorage.setItem('formData', JSON.stringify(formData));
    console.log('Booking Data Saved:', formData);
  
    // Redirect to My Order page
    window.location.href = "/My-Order/index.html";
});

/*const pasName = document.getElementById("name");
const numTicket = document.getElementById("numberTicket");
const chooseEvent = document.getElementById("chooseevent");
const eventDetails = document.getElementById("eventdetails");
const fareAmount = document.getElementById("fare");
const blinkText = document.getElementById("grab");
const mob = document.getElementById("mob");

// number of ticket small condition
numTicket.addEventListener("change", (e) => {
  e.preventDefault();
  if (numTicket.value < 0) {
    numTicket.value = 0;
  }

  eventFare =
    eventDetails.value === "14/02/24"
      ? 200
      : eventDetails.value === "15/02/24"
      ? 200
      : eventDetails.value === "16/02/24"
      ? 300
      : eventDetails.value === "14,15,16 Feb 2024"
      ? 400
      : eventDetails.value === "15 Oct 2024"
      ? 300
      : eventDetails.value === "15 Dec 2024"
      ? 1500
      : eventDetails.value === "25 Nov 2024"
      ? 600
      : eventDetails.value === "10 May 2024"
      ? 250
      : eventDetails.value === "1 Sept 2024"
      ? 200
      : eventDetails.value === "25 Apr 2024"
      ? 1800
      : eventDetails.value === "31 Dec 2024"
      ? 1000
      : eventDetails.value === "16 July 2024"
      ? 2000
      : eventDetails.value === "Fetching Bus Choose destination....."
      ? 0
      : 0;

  let f = numTicket.value * eventFare;
  fareAmount.value = f;
});
//
//clear all
const clearAll = document.getElementById("clear_all");
clearAll.addEventListener("click", (e) => {
  e.preventDefault();
  pasName.value = "";
  numTicket.value = "";
  chooseEvent.value = "Choose Event";
  eventDetails.value = "";
  fareAmount.value = "";
  mob.value = "";
});

//refund money
const refundMoney = document.getElementById("refund_amount");
refundMoney.addEventListener("click", (e) => {
  e.preventDefault();
  alert(`Sorry! We don't refund you right now. Reply in some working days`);
});

//Check fares 
const fares = document.getElementById("check_fares");
fares.addEventListener("click", (e) => {
  e.preventDefault();
  let string = `
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
  alert(string);
});

//
chooseEvent.addEventListener("change", (e) => {
  e.preventDefault();
  const getdate =
    chooseEvent.value === "Spandan Day 1"
      ? "14/02/24"
      : chooseEvent.value === "Spandan Day 2"
      ? "15/02/24"
      : chooseEvent.value === "Spandan Day 3"
      ? "16/02/24"
      : chooseEvent.value === "SPANDAN Full Event"
      ? "14,15,16 Feb 2024"
      : chooseEvent.value === "Raas Rang"
      ? "15 Oct 2024"
      : chooseEvent.value === "SVVV MUN"
      ? "15 Dec 2024"
      : chooseEvent.value === "Ambriti"
      ? "25 Nov 2024"
      : chooseEvent.value === "Udhyamita"
      ? "10 May 2024"
      : chooseEvent.value === "Abhinandan"
      ? "1 Sept 2024"
      : chooseEvent.value === "Moot Court"
      ? "25 Apr 2024"
      : chooseEvent.value === "DJ Night"
      ? "31 Dec 2024"
      : chooseEvent.value === "Arijit Concert"
      ? "16 July 2024"
      : "Fetching Bus Choose destination.....";
  //
  eventFare =
    getdate === "14/02/24"
      ? 200
      : getdate === "15/02/24"
      ? 200
      : getdate === "16/02/24"
      ? 300
      : getdate === "14,15,16 Feb 2024"
      ? 400
      : getdate === "15 Oct 2024"
      ? 300
      : getdate === "15 Dec 2024"
      ? 1500
      : getdate === "25 Nov 2024"
      ? 600
      : getdate === "10 May 2024"
      ? 250
      : getdate === "1 Sept 2024"
      ? 200
      : getdate === "25 Apr 2024"
      ? 1800
      : getdate === "31 Dec 2024"
      ? 1000
      : getdate === "16 July 2024"
      ? 2000
      : getdate === "Fetching Bus Choose destination....."
      ? 0
      : 0;

  // console.log(getdate);
  eventDetails.value = getdate;

  // Total Fare Calculation
  let f = numTicket.value * eventFare;
  fareAmount.value = f;
});
//
*/
/*
// Get references to DOM elements
const pasName = document.getElementById("name");
const numTicket = document.getElementById("numberTicket");
const chooseEvent = document.getElementById("chooseevent");
const eventDetails = document.getElementById("eventdetails");
const fareAmount = document.getElementById("fare");
const clearAll = document.getElementById("clear_all");
const refundMoney = document.getElementById("refund_amount");
const fares = document.getElementById("check_fares");
const mob = document.getElementById("mob");

// Event data
const eventData = {
  "Spandan Day 1": { date: "14 Feb 2024", fare: 200 },
  "Spandan Day 2": { date: "15 Feb 2024", fare: 200 },
  "Spandan Day 3": { date: "16 Feb 2024", fare: 300 },
  "SPANDAN Full Event": { date: "14,15,16 Feb 2024", fare: 400 },
  "Raas Rang": { date: "15 Oct 2024", fare: 300 },
  "SVVV MUN": { date: "15 Dec 2024", fare: 1500 },
  "Ambriti": { date: "25 Nov 2024", fare: 600 },
  "Udhyamita": { date: "10 May 2024", fare: 250 },
  "Abhinandan": { date: "1 Sept 2024", fare: 200 },
  "Moot Court": { date: "25 Apr 2024", fare: 1800 },
  "DJ Night": { date: "31 Dec 2024", fare: 1000 },
  "Arijit Concert": { date: "16 July 2024", fare: 2000 }
};

// Function to update event details and fare
function updateEventDetails() {
  const selectedEvent = chooseEvent.value;
  if (eventData[selectedEvent]) {
    eventDetails.value = eventData[selectedEvent].date; // Set event date
    updateFare(); // Update fare based on number of tickets
  } else {
    eventDetails.value = "Fetching Bus Choose destination....."; // Placeholder
    fareAmount.value = 0; // Reset fare if no valid event is selected
  }
}

// Function to calculate and update fare
function updateFare() {
  const selectedEvent = chooseEvent.value;
  const numberOfTickets = Math.max(0, parseInt(numTicket.value) || 0); // Ensure no negative tickets
  const farePerTicket = eventData[selectedEvent]?.fare || 0; // Get fare or default to 0
  fareAmount.value = numberOfTickets * farePerTicket; // Calculate total fare
}

// Event listeners
numTicket.addEventListener("change", (e) => {
  e.preventDefault();
  updateFare(); // Update fare when ticket number changes
});

chooseEvent.addEventListener("change", (e) => {
  e.preventDefault();
  updateEventDetails(); // Update event details when event is selected
});

// Clear all fields
clearAll.addEventListener("click", (e) => {
  e.preventDefault();
  pasName.value = "";
  numTicket.value = "";
  chooseEvent.value = "Choose Event";
  eventDetails.value = "";
  fareAmount.value = "";
  mob.value = "";
});

// Refund money and redirect with data
refundMoney.addEventListener("click", (e) => {
  e.preventDefault();
  const bookingData = {
    name: pasName.value,
    numberTicket: numTicket.value,
    chooseEvent: chooseEvent.value,
    eventDetails: eventDetails.value,
    mobile: mob.value
  };
  
  // Save data to local storage
  localStorage.setItem('bookingData', JSON.stringify(bookingData));

  // Redirect to My Order page
  window.location.href = "/My-Order/index.html";
});

// Check fares
fares.addEventListener("click", (e) => {
  e.preventDefault();
  let fareDetails = "Total Events:\n-----------------------------------------------------------\n";
  for (const event in eventData) {
    fareDetails += `${event} → Per Person ₹${eventData[event].fare}/-\n`;
  }
  fareDetails += "-----------------------------------------------------------";
  alert(fareDetails);
});

// Handle form submission
document.getElementById('detailForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const formData = {
    firstname: pasName.value,
    eventname: chooseEvent.value,
    eventdate: eventDetails.value,
    email: mob.value,
    subject: numTicket.value
  };

  // Save data to local storage
  localStorage.setItem('formData', JSON.stringify(formData));
  console.log('Booking Data Saved:', formData);

  // Redirect to My Order page
  window.location.href = "/My-Order/index.html";
});
*/