const { OAuth2Client } = require("google-auth-library");
const { User } = require("../models/user");
const { customHttpError } = require("../helpers/customError");

exports.googleLogin = async (req, res, next) => {
   const bearerHeader = req.headers["authorization"];
   if (bearerHeader) {
      const bearer = bearerHeader.split(" ");
      const bearerToken = bearer[1];
      const googleClient = new OAuth2Client(
         process.env.GOOGLE_CLIENT_ID,
         process.env.GOOGLE_CLIENT_SECRETE
      );
      try {
         const { payload } = await googleClient.verifyIdToken({
            idToken: bearerToken,
            audience: process.env.GOOGLE_CLIENT_ID,
         });
         const {
            sub: googleUserId,
            email,
            email_verified,
            picture,
            name,
         } = payload;
         if (email_verified) {
            try {
               let user = await User.findOne({ email });
               if (!user) {
                  user = new User({
                     name,
                     email,
                     gid: googleUserId,
                     picture,
                  });
                  await user.save();
                  const token = user.genarateAuthToken();
                  return res
                     .header("x-auth-token", token)
                     .header("access-control-expose-headers", "x-auth-token")
                     .status(201)
                     .send({
                        message: "User Added successfuly",
                     });
               } else {
                  const token = user.genarateAuthToken();
                  return res.status(200).send({
                     token,
                  });
               }
            } catch (error) {
               next(error);
            }
         } else {
            return customHttpError(
               res,
               next,
               403,
               "Please verify your google account"
            );
         }
      } catch (error) {
         return customHttpError(res, next, 403, "Something Went wrong");
      }
   } else {
      return customHttpError(res, next, 403, "Invalid Token Details");
   }
};
