const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_live_MY_PUBLISHABLE_KEY'
  : process.env.REACT_APP_STRIPE_PUBLISH;

export default STRIPE_PUBLISHABLE;