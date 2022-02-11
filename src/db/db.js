require('dotenv').config();
const { Pool } = require('pg');
const { config } = require('../config/config');

const { MODE } = process.env;

const pool = new Pool(MODE === 'dev' ? config.dev : config.prod);

module.exports = {
  query: (text, params, callback) => {
    const start = Date.now();
    return pool.query(text, params, (err, res) => {
      const duration = Date.now() - start;
      // Logging
      console.log('[QUERY]', { text, duration, rows: res.rowCount });
      callback(err, res);
    });
  },
  getClient: (callback) => {
    pool.connect((err, client, done) => {
      callback(err, client, done);
    });
  }
};
