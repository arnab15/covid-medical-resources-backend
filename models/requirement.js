const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RequirementSchema = new Schema(
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
      urgentRequirement: {
         type: String,
         required: true,
         trim: true,
         default: "Yes",
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

exports.Requirement = mongoose.model("Requirement", RequirementSchema);

// {
//     address: 'Bhimeswaari Bazar',
//     city: 'Kolkata',
//     contactablePersonMobileNumber: '8918174008',
//     contactablePersonName: 'Arnab',
//     description: 'Shera to thle',
//     qtyOfResource: '',
//     resourceName: 'Oxyzen',
//     state: 'West Bengal',
//     typesOfResource: 'Oxygen',
//     urgentRequirement: 'Yes',
//     userId: '6083e2f7a6d49325dc609b50'
//   }
