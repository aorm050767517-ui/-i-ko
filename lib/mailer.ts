import nodemailer from 'nodemailer';

// SMTP configuration
const smtpTransporter = nodemailer.createTransport({
    host: 'SMTP_HOST', // e.g., smtp.gmail.com
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'SMTP_USERNAME', // your SMTP username
        pass: 'SMTP_PASSWORD', // your SMTP password
    },
});

// SendGrid configuration
const sendGridTransporter = nodemailer.createTransport({
    service: 'SendGrid',
    auth: {
        user: 'SENDGRID_USERNAME', // your SendGrid username
        pass: 'SENDGRID_API_KEY', // your SendGrid API key
    },
});

/**
 * Sends an OTP email to the specified recipient using the specified transporter.
 * @param {string} recipient - The recipient's email address.
 * @param {string} otp - The OTP to be sent.
 * @param {string} method - 'smtp' for SMTP, 'sendgrid' for SendGrid.
 */
const sendOtpEmail = async (recipient, otp, method = 'smtp') => {
    const transporter = method === 'sendgrid' ? sendGridTransporter : smtpTransporter;
    const mailOptions = {
        from: 'no-reply@example.com', // sender address
        to: recipient, // list of receivers
        subject: 'Your OTP Code', // Subject line
        text: `Your OTP code is: ${otp}`, // plain text body
        // html: '<b>Your OTP code is: ' + otp + '</b>' // html body (optional)
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`OTP sent to ${recipient} using ${method} method.`);
    } catch (error) {
        console.error('Error sending OTP email:', error);
    }
};

export { sendOtpEmail };