const bcrypt = require('bcrypt');

const saltRound = 5;

// Returns: hash
function hash(password) {
  return bcrypt.hashSync(password, saltRound);
}

// Returns: true | false
function compare(password_, hash_) {
  return bcrypt.compareSync(password_, hash_);
}

module.exports = {
  hash,
  compare
};
