document.getElementById('payNowButton').addEventListener('click', function() {
    // Programmatically trigger the Razorpay payment script
    document.querySelector('form > script[data-payment_button_id="pl_PHj1yzVlRFQ2ds"]').click();
  });
  