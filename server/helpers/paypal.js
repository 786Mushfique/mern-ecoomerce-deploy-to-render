// const paypal = require("paypal-rest-sdk");

// paypal.configure({
//   mode: "",
//   client_id: "",
//   client_secret: "",
// });

// module.exports = paypal;

// Import the necessary modules
const paypal = require('paypal-rest-sdk');
require('dotenv').config(); // Load environment variables from .env file

// PayPal configuration
paypal.configure({
  'mode': process.env.PAYPAL_MODE || 'sandbox', // Set mode to 'sandbox' or 'live' based on the environment
  'client_id': process.env.PAYPAL_CLIENT_ID,     // Load from environment variables
  'client_secret': process.env.PAYPAL_CLIENT_SECRET // Load from environment variables
});

// Export the configured PayPal instance
module.exports = paypal;
