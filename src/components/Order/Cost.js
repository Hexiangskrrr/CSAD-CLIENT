import React, { useState } from 'react';
import { useCart } from 'react-use-cart';
import CheckoutFormWrapper from '../Checkout/checkoutform';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51Odk98BHlJk2DzC2ciIHM1zO9MOPROrbYaGg4dYDnEBd5NEqYCLZ58fgoLWGZcwanhSZ3499YqYohBRbtJhdpXx1006e7K0TsU');

const Cost = () => {
  const { items, totalItems, emptyCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const subTotal = items.reduce((curretTotal, item) => {
    return curretTotal + item.quantity * item.price;
  }, 0);
  
  const gst = (subTotal) => {
    return (subTotal * 0.09);
  };
  
  const serviceCharge = (subTotal) => {
    return ((subTotal + gst(subTotal)) * 0.1);
  };
  
  const grandTotal = (subTotal) => {
    return (subTotal + gst(subTotal) + serviceCharge(subTotal));
  };

  const handleCheckout = async () => {
  try {
    const stripe = await stripePromise;
    const response = await fetch('http://localhost:5003/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items,
        totalItems,
        subTotal: subTotal.toFixed(2),
        gst: gst(subTotal).toFixed(2),
        serviceCharge: serviceCharge(subTotal).toFixed(2),
        grandTotal: grandTotal(subTotal).toFixed(2),
      }),
    });

    const session = await response.json();

    // Redirect to Stripe Checkout
    const result = await stripe.redirectToCheckout({
      sessionId: session.sessionId,
    });

    if (result.error) {
      console.error('Error redirecting to Checkout:', result.error.message);
      // Handle error gracefully
    } else {
      console.log('Redirecting to Checkout');
    }
  } catch (error) {
    console.error('Error creating checkout session:', error);
    // Handle error gracefully, e.g., display an error message to the user
  }
  setIsCheckingOut(true);
};

  return ( 
    <div>
      <p>Total items: {totalItems}</p>
      <h3>Sub Total: ${subTotal.toFixed(2)}</h3>
      <h4>Gst 9%: ${gst(subTotal).toFixed(2)}</h4>
      <h4>Service Charge 10%: ${serviceCharge(subTotal).toFixed(2)}</h4>
      <h2>Grand Total: ${grandTotal(subTotal).toFixed(2)}</h2>
      <button onClick={emptyCart}>clear cart</button>
      <button onClick={handleCheckout}>Checkout</button>
      {isCheckingOut && <CheckoutFormWrapper />}
    </div>
  );
};

export default Cost;
