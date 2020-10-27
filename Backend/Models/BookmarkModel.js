const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookmarkSchema = new Schema(
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
  },
  {
    collection: "BOOKMARK_COLLECTION",
  }
);

module.exports = mongoose.model("BookmarkModel", BookmarkSchema);
