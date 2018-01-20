const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? process.env.REACT_APP_STRIPE_PUBLISH_LIVE
  : process.env.REACT_APP_STRIPE_PUBLISH;

export default STRIPE_PUBLISHABLE;