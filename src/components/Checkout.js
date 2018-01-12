import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import swal from 'sweetalert';

import STRIPE_PUBLISHABLE from '../constants/stripe';
import PAYMENT_SERVER_URL from '../constants/server';

const CURRENCY = 'USD';
const dollarToCent = amount => amount * 100;

const successPayment = (data) => {
    swal({
        title: "Payment Successful",
        text: "Thank you!",
        icon: "success"
    });
};

const errorPayment = data => {
    swal({
        title: "Payment Error",
        text: "Please try again",
        icon: "error"
    });
};

const onToken = (amount, description) => token =>
    axios.post(PAYMENT_SERVER_URL, {
        description,
        source: token.id,
        currency: CURRENCY,
        amount: dollarToCent(amount)
    })
        .then(successPayment)
        .catch(errorPayment);

const Checkout = ({ name, description, amount }) =>
    <StripeCheckout
        name={name}
        description={description}
        amount={dollarToCent(amount)}
        token={onToken(amount, description)}
        currency={CURRENCY}
        stripeKey={STRIPE_PUBLISHABLE}
    />

export default Checkout;