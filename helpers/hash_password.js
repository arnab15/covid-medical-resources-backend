const bcrypt = require("bcryptjs");

exports.hashPasword = (password) => {
  return bcrypt.hash(password, 10);
};
exports.comparePasword = (storedPassword, paswordToCompare) => {
  return bcrypt.compare(storedPassword, paswordToCompare);
};
