const PAYMENT_SERVER_URL = process.env.REACT_APP_NODE_ENV === 'production'
  ? 'http://closiimusic.com'
  : `http://localhost:${process.env.REACT_APP_PORT}`;

export default PAYMENT_SERVER_URL;