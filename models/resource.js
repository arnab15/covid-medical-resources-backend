const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResourceSchema = new Schema(
   {
      resourceName: {
         type: String,
         required: true,
         minlength: 3,
         trim: true,
      },
      contactablePersonName: {
         type: String,
         required: true,
         minlength: 3,
         trim: true,
      },
      contactablePersonMobileNumber: {
         type: String,
         required: true,
         maxlength: 10,
         trim: true,
      },
      personVerified: {
         type: String,
         required: true,
         trim: true,
      },
      typesOfResource: {
         type: String,
         required: true,
         trim: true,
      },
      qtyOfResource: {
         type: String,
         trim: true,
      },
      state: {
         type: String,
         required: true,
         trim: true,
      },
      city: {
         type: String,
         required: true,
         trim: true,
      },
      pincode: {
         type: String,
         trim: true,
         maxlength: 6,
      },
      address: {
         type: String,
         trim: true,
      },
      description: {
         type: String,
         trim: true,
      },
      createdBy: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User",
      },
   },
   {
      timestamps: true,
   }
);

exports.Resource = mongoose.model("Resource", ResourceSchema);

// resourceName: "",
//       contactablePersonName: "",
//       contactablePersonMobileNumber: "",
//       personVerified: "",
//       typesOfResource: "",
//       qtyOfResource: "",
//       state: "",
//       city: "",
//       pincode: "",
//       address: "",
//       description: "",
