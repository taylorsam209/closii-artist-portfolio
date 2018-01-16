const PAYMENT_SERVER_URL = process.env.NODE_ENV === 'production'
  ? 'http://myapidomain.com'
  : `http://localhost:${process.env.REACT_APP_PORT}`;

export default PAYMENT_SERVER_URL;