const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const purchasedItemSchema = new Schema(
  {
    userId: {
      type: String,
    },
    course_name: {
      type: String,
    },
    course_category: {
      type: String,
    },
    course_level: {
      type: String,
    },
  },
  {
    collection: "PURCHASED_ITEMS",
  }
);

module.exports = mongoose.model("PurchasedItemModel", purchasedItemSchema);
