import { z } from 'zod';

export const sendOtpSchema = z.object({
    phone: z.string().regex(/^\+?[1-9]\d{1,14}$/), // Example: Valid phone number regex
});

export const registerSchema = z.object({
    username: z.string().min(3).max(20),
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
});