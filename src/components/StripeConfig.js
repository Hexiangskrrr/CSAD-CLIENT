import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51O58kRLU3XAouPu82kvgfYPW4HPKnkQch8ZV9qRJn4bMC0rDw03q9lBiybsMhIWBHSJLFdQpgcGMcTUMecdAUv0X00Vw0eVjAb"
);

export default stripePromise;
