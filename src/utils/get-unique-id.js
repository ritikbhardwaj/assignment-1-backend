/**
 * Generates a random 32 bit - 8 characters hex string.
 * 32 bit = 2^32 unique values
 */
const crypto = require("crypto").

module.exports = () => crypto.randomBytes(8).toString("hex");
