const Joi = require("joi");
exports.validateHealthRecord = (healthReport) => {
   const schema = Joi.object({
      symptoms: Joi.array().not().empty().required(),
      dayNumber: Joi.number().min(1).max(7).required(),
      recordedAt: Joi.string().trim().lowercase().max(6).required(),
   });
   return schema.validate(healthReport);
};
