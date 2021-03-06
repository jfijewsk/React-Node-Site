
const config = require('../config.json');
const jwt = require('jsonwebtoken');

/* Add to any get/post call if the token is needed for future site expansion */
const withAuth = function(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    res.status(401).send('Unauthorized: No token provided');
  } else {
    jwt.verify(token, config.tokenKey, function(err, decoded) {
      if (err) {
        res.status(401).send('Unauthorized: Invalid token');
      } else {
        req.user = decoded.user;
        next();
      }
    });
  }
}
module.exports = withAuth;