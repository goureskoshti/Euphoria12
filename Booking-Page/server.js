const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors package

const app = express();
const port = 3000;

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send-email', async (req, res) => {
    const formData = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'euphoriaevent12@gmail.com',
            pass: 'loqe ypyi ylfk fvsi'
        }
    });

    const mailOptions = {
        from: 'euphoriaevent12@gmail.com',
        to: `${formData.email}`,
        subject: ` Message from Team Euphoria `,
        text: `
        Hello ${formData.firstname},
        \n\n
        Thank you for booking tickets with Euphoria!
        We will soon verify your payment and notify
        you about the status of tickets.
        Here are the details of your booking: 
        Booking Details:
        \n\n 
        Email: ${formData.email}
        \n\n
        No. of tickets: ${formData.subject}
        \n
        Special Instructions:

        Please bring a valid ID and this confirmation 
        email to the event.
        Arrive at least 30 minutes before the start time 
        to ensure a smooth entry.
        Thank You!
        
        We appreciate your booking and look forward to providing you with 
        an unforgettable experience. If you have any questions, feel free
        to reach out to our support team.
        We are excited to have you join us!!
        \n
        Best Regards,
        Team Euphoria`
        


    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        res.status(500).send('Email send failed with error: ' + error.message);
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
