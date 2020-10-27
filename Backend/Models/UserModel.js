const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      default: "",
      required: true,
    },
    email: {
      type: String,
      default: "",
      required: true,
    },
    password: {
      type: String,
      default: "",
      required: true,
    },
  },
  {
    collection: "USER_COLLECTION",
  }
);

module.exports = mongoose.model("UserModel", userSchema);
