/**
 * Gets rid of the '-' from a uuidv4 type id and
 * return a 32 characters long id.
 */
const { v4: uuidv4 } = require('uuid');

module.exports = () => {
  let userId = '';
  uuidv4()
    .split('-')
    .forEach((seg) => {
      userId += seg;
    });
  return userId;
};
