const Joi = require("joi");
exports.validateObjectId = (oid) => {
   const schema = Joi.object({
      id: Joi.objectId()
         .messages({
            "any.required": `id is a required field`,
         })
         .required(),
   });
   return schema.validate(oid);
};
