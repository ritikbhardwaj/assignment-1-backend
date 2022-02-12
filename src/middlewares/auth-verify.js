const jwtUtils = require('../utils/jwt-utils');

/**
 * Header format:
 * Authorization: Bearer <token string>
 */
module.exports = (req, res, next) => {
  const authHeader = req.headers.Authorization;
  const token = authHeader.split('')[1];

  if (token === null) {
    res.status(200).json({
      code: 400,
      message: 'Token is null'
    });
  }

  jwtUtils.verify(token, (err, userId) => {
    if (err) {
      res.status(200).json({
        code: 403,
        message: err
      });
    } else {
      req.userId = userId;
      next();
    }
  });
};
