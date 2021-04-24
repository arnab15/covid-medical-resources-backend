const Joi = require("joi");
exports.validateMentor = (mentor) => {
   const schema = Joi.object({
      name: Joi.string().trim().min(3).required(),
      email: Joi.string().lowercase().trim().email().required(),
      password: Joi.string().trim().min(6).required(),
      mobileNumber: Joi.string()
         .regex(/^[0-9]{10}$/)
         .messages({
            "string.pattern.base": `Phone number must have 10 digits.`,
         })
         .required(),
   });
   return schema.validate(mentor);
};
