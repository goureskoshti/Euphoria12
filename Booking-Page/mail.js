const nodemailer = require('nodemailer');

async function sendMail(formData) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'euphoriaevent12@gmail.com',
            pass: 'loqe ypyi ylfk fvsi'
        }
    });

    const mailOptions = {
        from: 'euphoriaevent12@gmail.com',
        to: 'euphoriaevent12@gmail.com',
        subject: `Message from ${formData.firstname} }`,
        text: `Email: ${formData.email}\n\n${formData.subject}`
    };

    try {
        const result = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.log('Email send failed with error:', error);
    }
}

document.getElementById('detailForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    const formData = {
        firstname: document.getElementById('name').value,
        
        email: document.getElementById('mob').value,
        subject: document.getElementById('numberTicket').value
    };

    sendMail(formData);
});
