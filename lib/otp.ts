import jwt from 'jsonwebtoken';
import crypto from 'crypto';

// Function to generate a one-time password (OTP)
export function generateOTP(length = 6) {
    let otp = '';
    for (let i = 0; i < length; i++) {
        otp += Math.floor(Math.random() * 10);
    }
    return otp;
}

// Function to hash a password or OTP using SHA-256
export function hashOTP(otp) {
    return crypto.createHash('sha256').update(otp).digest('hex');
}

// Function to generate a JWT token
export function generateToken(payload, secret, expiresIn = '1h') {
    return jwt.sign(payload, secret, { expiresIn });
}