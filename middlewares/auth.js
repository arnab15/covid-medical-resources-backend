const jwt = require("jsonwebtoken");
const { customHttpError } = require("../helpers/customError");

exports.isAuthenticated = function (req, res, next) {
   const token = req.header("x-auth-token");
   if (!token)
      return customHttpError(
         res,
         next,
         401,
         "Access denied. No token provided"
      );

   const bearer = token.split(" ");
   const bearerToken = bearer[1];
   try {
      const decode = jwt.verify(bearerToken, process.env.JWT_SECREAT);
      req.user = decode;
      next();
   } catch (ex) {
      return customHttpError(res, next, 401, "Access denied Invalid Token");
   }
};
