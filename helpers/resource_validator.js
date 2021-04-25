const Joi = require("joi");
exports.validateResource = (resource) => {
   const schema = Joi.object({
      resourceName: Joi.string().trim().min(3).required(),
      contactablePersonName: Joi.string().trim().min(3).required(),
      contactablePersonMobileNumber: Joi.string()
         .regex(/^[0-9]{10}$/)
         .messages({
            "string.pattern.base": `Phone number must have 10 digits.`,
         })
         .required(),
      personVerified: Joi.string().trim().min(3).required(),
      typesOfResource: Joi.string().trim().required(),
      qtyOfResource: Joi.string().trim().allow(""),
      state: Joi.string().trim().required(),
      city: Joi.string().trim().required(),
      pincode: Joi.string().trim().allow(""),
      address: Joi.string().trim().allow(""),
      description: Joi.string().allow(""),
      userId: Joi.string().trim().required(),
   });
   return schema.validate(resource);
};
