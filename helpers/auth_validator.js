const Joi = require("joi");
const validateSignup = (user) => {
   const schema = Joi.object({
      name: Joi.string().trim().min(3).required(),
      email: Joi.string().lowercase().trim().email().required(),
      password: Joi.string().trim().min(6).required(),
   });
   return schema.validate(user);
};

const validateMentorLogin = (user) => {
   const schema = Joi.object({
      email: Joi.string().lowercase().email().trim().required(),
      password: Joi.string().required(),
   });
   return schema.validate(user);
};
exports.validateSignup = validateSignup;
exports.validateMentorLogin = validateMentorLogin;
