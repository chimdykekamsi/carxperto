// import {Elements} from '@stripe/react-stripe-js';
// import {loadStripe} from '@stripe/stripe-js';
// import CheckoutForm from './checkoutform';

// // Make sure to call `loadStripe` outside of a component’s render to avoid
// // recreating the `Stripe` object on every render.
// const stripePromise = loadStripe('pk_test_qblFNYngBkEdjEZ16jxxoWSM');
// // const secret ='sk_test_26PHem9AhJZvU623DfE1x4sd'
// // const id = 'ca_12345'
// export default function Stripe() {
//   const options = {
//     // passing the client secret obtained from the server
//     clientSecret: ``,
//   };

//   return (
//     <Elements stripe={stripePromise} options={options}>
//       <CheckoutForm />
//     </Elements>
//   );
// };