const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
   {
      name: {
         type: String,
         required: true,
         minlength: 3,
         trim: true,
      },
      email: {
         type: String,
         required: true,
         trim: true,
         unique: true,
         lowercase: true,
      },
      gid: {
         type: String,
         unique: true,
         trim: true,
      },
      picture: {
         type: String,
         trim: true,
      },
   },
   {
      timestamps: true,
   }
);
UserSchema.methods.genarateAuthToken = function () {
   const token = jwt.sign(
      {
         _id: this._id,
         name: this.name,
         email: this.email,
      },
      process.env.JWT_SECREAT,
      { expiresIn: "7 days" }
   );
   return token;
};

const User = mongoose.model("User", UserSchema);

exports.User = User;
