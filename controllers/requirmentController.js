const { customHttpError } = require("../helpers/customError");
const { validateRequirement } = require("../helpers/requirement_validator");
const { Requirement } = require("../models/requirement");
const { User } = require("../models/user");

exports.addNewRequirment = async (req, res, next) => {
   const { error } = validateRequirement(req.body);
   if (error) {
      return customHttpError(res, next, 400, error.details[0].message);
   }
   const {
      resourceName,
      contactablePersonName,
      contactablePersonMobileNumber,
      urgentRequirement,
      typesOfResource,
      qtyOfResource,
      state,
      city,
      address,
      description,
      userId,
   } = req.body;
   try {
      const user = await User.findById(userId);
      if (!user) return customHttpError(res, next, 404, "User not found");
      const newRequirement = new Requirement({
         resourceName,
         contactablePersonName,
         contactablePersonMobileNumber,
         urgentRequirement,
         typesOfResource,
         qtyOfResource,
         state,
         city,
         address,
         description,
         userId,
      });
      const requi = await newRequirement.save();
      //console.log(requi);
      return res.send({
         message: "new resource requirement added successfully",
      });
   } catch (error) {
      next(error);
   }
};

exports.getAllRequirements = async (req, res, next) => {
   try {
      const resourceRequirements = await Requirement.find({}).sort({
         createdAt: "-1",
         updatedAt: "-1",
      });
      res.send(resourceRequirements);
   } catch (error) {
      next(error);
   }
};
