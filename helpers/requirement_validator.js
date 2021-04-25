const Joi = require("joi");
exports.validateRequirement = (requirement) => {
   const schema = Joi.object({
      resourceName: Joi.string().trim().min(3).required(),
      contactablePersonName: Joi.string().trim().min(3).required(),
      contactablePersonMobileNumber: Joi.string()
         .regex(/^[0-9]{10}$/)
         .messages({
            "string.pattern.base": `Phone number must have 10 digits.`,
         })
         .required(),
      urgentRequirement: Joi.string().trim().required(),
      typesOfResource: Joi.string().trim().required(),
      qtyOfResource: Joi.string().trim().allow(""),
      state: Joi.string().trim().required(),
      city: Joi.string().trim().required(),
      address: Joi.string().trim().allow(""),
      description: Joi.string().allow(""),
      userId: Joi.string().trim().required(),
   });
   return schema.validate(requirement);
};
