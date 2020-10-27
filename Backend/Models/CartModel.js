const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema(
  {
    userId: {
      type: String,
      default: "",
      required: true,
    },
    itemId: {
      type: String,
      default: "",
      required: true,
    },
    CourseName: {
      type: String,
      default: "",
      required: true,
    },
    CourseCategory: {
      type: String,
      default: "",
      required: true,
    },
    CourseLevel: {
      type: String,
      default: "",
      required: true,
    },
    CoursePrice: {
      type: String,
      default: "",
      required: true,
    },
  },
  {
    collection: "CART_COLLECTION",
  }
);

module.exports = mongoose.model("CartModel", cartSchema);
