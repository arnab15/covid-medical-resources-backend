const Joi = require("joi");
const validateStudent = (student) => {
   const schema = Joi.object({
      name: Joi.string().trim().min(3).required(),
      parentsContactNumber: Joi.string()
         .regex(/^[0-9]{10}$/)
         .messages({
            "string.pattern.base": `Phone number must have 10 digits.`,
         })
         .required(),
      mobileNumber: Joi.string()
         .regex(/^[0-9]{10}$/)
         .messages({
            "string.pattern.base": `Phone number must have 10 digits.`,
         })
         .required(),
      assignedMentor: Joi.objectId()
         .messages({
            "any.required": `assignedMentor is a required field`,
         })
         .required(),

      studentId: Joi.objectId()
         .messages({
            "any.required": `Student Id is a required field`,
         })
         .required(),
      state: Joi.string().trim().min(2).required(),
      hostelName: Joi.string().trim().min(2).required(),
      hostelRoomNo: Joi.string().trim().min(2).required(),
      gender: Joi.string().trim().lowercase().required(),
   });
   return schema.validate(student);
};

exports.validateStudent = validateStudent;
