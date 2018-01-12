const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_live_MY_PUBLISHABLE_KEY'
  : 'pk_test_usJAMZuj6ZiYQdIo1X3AJpXL';

export default STRIPE_PUBLISHABLE;