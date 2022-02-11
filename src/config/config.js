require('dotenv').config();

/**
 * Set MODE= dev | prod in '.env' file or set
 * environment variables manually.
 */
const { 
  DEV_USER, 
  DEV_HOST, 
  DEV_DB, 
  DEV_PASSWORD, 
  DEV_PORT,
  PROD_USER, 
  PROD_HOST, 
  PROD_DB, 
  PROD_PASSWORD, 
  PROD_PORT 
} = process.env;

module.exports = {
  config: {
    dev: {
      user: DEV_USER,
      host: DEV_HOST,
      database: DEV_DB,
      password: DEV_PASSWORD,
      port: DEV_PORT
    },
    prod: {
      user: PROD_USER,
      host: PROD_HOST,
      database: PROD_DB,
      password: PROD_PASSWORD,
      port: PROD_PORT
    }
  }
};
