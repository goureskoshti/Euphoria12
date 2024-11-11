  // Check if booking data is in local storage
  const formData = JSON.parse(localStorage.getItem('formData'));

  if (formData) {
      // Display data in the booking details section
      document.getElementById('displayName').textContent = formData.firstname;
      document.getElementById('displayTicketCount').textContent = formData.subject;
      document.getElementById('displayEventName').textContent = formData.eventname;
      document.getElementById('displayEventDate').textContent = formData.eventdate;
      document.getElementById('displayAmount').textContent = formData.amount;
    
      document.getElementById('displayEmail').textContent = formData.email;
  } else {
      console.error("No booking data found.");
  }
