// config/env.js

export const env = {
  EMAIL_USER: process.env.EMAIL_USER,
  EMAIL_PASS: process.env.EMAIL_PASS,
  USER_NAME: process.env.USER_NAME,
  RECIPIENT_EMAIL: process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER,
};