const createError = require("http-errors");

exports.customHttpError = (res, next, status, message) => {
  res.status(status);
  next(createError(status, message));
  return;
};
