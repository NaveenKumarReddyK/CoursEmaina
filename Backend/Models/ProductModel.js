const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const prodSchema = new Schema(
  {
    item_id: {
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
    coursera_price: {
      type: Number,
    },
    udemy_price: {
      type: Number,
    },
    skillshare_price: {
      type: Number,
    },
  },
  {
    collection: "PRODUCTS_DATA",
  }
);

module.exports = mongoose.model("ProdModel", prodSchema);
