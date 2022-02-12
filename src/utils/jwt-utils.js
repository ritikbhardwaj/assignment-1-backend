require('dotenv').config();
const jwt = require('jsonwebtoken');

const { ACCESS_TOKEN_SECRET } = process.env;

function verify(token, callback) {
  jwt.verify(token, ACCESS_TOKEN_SECRET, callback);
}

function generateAccessToken(obj) {
  return jwt.sign(obj, ACCESS_TOKEN_SECRET, { expiresIn: '1800s' });
}

module.export = {
  verify,
  generateAccessToken
};
