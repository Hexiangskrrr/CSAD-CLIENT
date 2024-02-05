import React, { useState, useEffect } from 'react';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';

import stripePromise from '../StripeConfig';

const App = () => {
  const [clientSecret, setClientSecret] = useState('');
  const [sessionStatus, setSessionStatus] = useState('');

  useEffect(() => {
    // Create a Checkout Session as soon as the page loads
    fetch("/create-checkout-session", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
        setSessionStatus(data.sessionStatus); // Assuming you're setting session status in the response from the server
      });
  }, []);

  const options = { clientSecret };

  return (
    <div id="checkout">
      {sessionStatus === 'open' && clientSecret && (
        <EmbeddedCheckoutProvider
          stripe={stripePromise}
          options={options}
        >
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      )}
      {sessionStatus === 'complete' && (
        <div>
          <h1>Success Page</h1>
          {/* Optionally use session.payment_status or session.customer_email here */}
        </div>
      )}
      {/* Optionally handle other session status scenarios */}
    </div>
  );
};

export default App;