const FRONTEND_DEV_URLS = ['http://localhost:3000'];

const FRONTEND_PROD_URLS = [
    'http:www.closiimusic.com',
    'http://closiimusic.com'
];

module.exports = process.env.REACT_APP_NODE_ENV ==="production" ?
FRONTEND_PROD_URLS
:FRONTEND_DEV_URLS;