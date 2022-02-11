const router = require('express').Router();
const { query, getClient } = require('../db/db');
const { hash, compare } = require('../utils/hash-utils');

// POST Login
router.post('/login', (req, res) => {
  // body
});

// GET Logout
router.get('/logout', (req, res) => {
  // body
});

module.exports = router;
