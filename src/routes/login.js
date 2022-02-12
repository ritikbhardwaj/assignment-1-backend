const router = require('express').Router();
const { query, getClient } = require('../db/db');
const { hash, compare } = require('../utils/hash-utils');
const { generateAccessToken } = require('../utils/jwt-utils');

// POST Login
router.post('/login', (req, res) => {
  // query the db to validate the credentials

  // generate jwt
  const accessToken = generateAccessToken({ email: req.body.email });
  res.status(200).json({
    code: 200,
    message: {
      jwt: accessToken
    }
  });
});

// GET Logout
router.get('/logout', (req, res) => {
  // body
});

module.exports = router;
