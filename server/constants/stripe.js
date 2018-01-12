const configureStripe = require('stripe');

const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
    ? 'sk_live_MY_SECRET_KEY'
    : process.env.REACT_STRIPE_SECRET_KEY_TEST

const stripe = configureStripe(STRIPE_SECRET_KEY);
console.log(process.env.REACT_STRIPE_SECRET_KEY_TEST.toString())

module.exports = stripe;