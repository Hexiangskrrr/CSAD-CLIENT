import { useCart } from "react-use-cart";
import { Button, Typography, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import React, { useState } from "react";
import CheckoutFormWrapper from "../Checkout/checkoutform";
import stripePromise from "../StripeConfig";

const Cost = () => {
  const { items, totalItems, emptyCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const subTotal = items.reduce((curretTotal, item) => {
    return curretTotal + item.quantity * item.price;
  }, 0);

  const gst = (subTotal) => {
    return subTotal * 0.09;
  };

  const serviceCharge = (subTotal) => {
    return (subTotal + gst(subTotal)) * 0.1;
  };

  const grandTotal = (subTotal) => {
    return subTotal + gst(subTotal) + serviceCharge(subTotal);
  };

  const handleCheckout = async () => {
    try {
      const stripe = await stripePromise;
      const response = await fetch(
        "http://localhost:5003/create-checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            items,
            totalItems,
            subTotal: subTotal.toFixed(2),
            gst: gst(subTotal).toFixed(2),
            serviceCharge: serviceCharge(subTotal).toFixed(2),
            grandTotal: grandTotal(subTotal).toFixed(2),
          }),
        }
      );

      const session = await response.json();

      // Redirect to Stripe Checkout
      const result = await stripe.redirectToCheckout({
        sessionId: session.sessionId,
      });

      if (result.error) {
        console.error("Error redirecting to Checkout:", result.error.message);
        // Handle error gracefully
      } else {
        console.log("Redirecting to Checkout");
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
      // Handle error gracefully, e.g., display an error message to the user
    }
    setIsCheckingOut(true);
  };

  return (
    <Box align="center" sx={{ mt: "10px" }}>
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        Total items: {totalItems}
      </Typography>
      <Typography variant="h6">Sub Total: ${subTotal.toFixed(2)}</Typography>
      <Typography variant="small">
        Gst 9%: ${gst(subTotal).toFixed(2)}
      </Typography>
      <br></br>
      <Typography variant="small">
        Service Charge 10%: ${serviceCharge(subTotal).toFixed(2)}
      </Typography>
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        Grand Total: ${grandTotal(subTotal).toFixed(2)}
      </Typography>
      <Button
        variant="outlined"
        startIcon={<DeleteIcon />}
        sx={{
          backgroundColor: "white",
          color: "black",
          borderColor: "black",
          mr: "20px",
          padding: "8px 6px",
        }}
        onClick={emptyCart}
      >
        clear cart
      </Button>
      <Button
        variant="outlined"
        sx={{
          backgroundColor: "white",
          color: "black",
          borderColor: "black",
          padding: "8px 6px",
        }}
        onClick={handleCheckout}
      >
        Checkout
      </Button>
      {isCheckingOut && <CheckoutFormWrapper />}
    </Box>
  );
};

export default Cost;
