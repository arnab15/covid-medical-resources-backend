const { customHttpError } = require("../helpers/customError");
const { validateResource } = require("../helpers/resource_validator");
const { Resource } = require("../models/resource");
const { User } = require("../models/user");

exports.getAllResources = async (req, res, next) => {
   try {
      const resources = await Resource.find({}).sort({
         createdAt: "-1",
         updatedAt: "-1",
      });
      res.send(resources);
   } catch (error) {
      next(error);
   }
};

exports.addNewResource = async (req, res, next) => {
   const { error } = validateResource(req.body);
   if (error) return customHttpError(res, next, 400, error.details[0].message);
   const {
      address,
      city,
      contactablePersonMobileNumber,
      contactablePersonName,
      description,
      personVerified,
      pincode,
      qtyOfResource,
      resourceName,
      state,
      typesOfResource,
      userId,
   } = req.body;

   try {
      const user = await User.findById(userId).select("name email");
      if (!user) return customHttpError(res, next, 400, "Invalid User");
      const resource = new Resource({
         resourceName,
         contactablePersonMobileNumber,
         personVerified,
         typesOfResource,
         qtyOfResource,
         state,
         pincode,
         address,
         description,
         createdBy: userId,
         contactablePersonName,
         city,
      });
      await resource.save();
      return res.send({
         message: "New Resource Created Successfully",
      });
   } catch (error) {
      next(error);
   }
};
