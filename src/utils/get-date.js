/**
 * Returns the date in yyyy-mm-dd format.
 */
module.exports = () => {
  const d = new Date();
  const date = `${d.getYear()}-${d.getMonth()}-${d.getDay()}`;
  return date;
};
