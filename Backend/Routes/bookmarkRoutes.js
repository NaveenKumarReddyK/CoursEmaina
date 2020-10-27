const express = require("express");
const bookarkRouter = express.Router();
const BookmarkModel = require("../Models/BookmarkModel");
const ProdModel = require("../Models/ProductModel");
const isEmpty = require("is-empty");

//#################################################################################################################

bookarkRouter.route("/bookmarkitem").post(function (req, res) {
  const user_Id = req.session.session_userId;
  const item_id = req.body.item_Id;

  BookmarkModel.find({ userId: user_Id, itemId: item_id })
    .then((cRes) => {
      if (!isEmpty(cRes)) {
        return res.json({
          AddItemError: "You already saved this item",
          res: cRes,
        });
      }
      ProdModel.findOne({ item_id: item_id })
        .then((resProdData) => {
          const newBookmarkItem = new BookmarkModel({
            userId: user_Id,
            itemId: item_id,
            CourseName: resProdData.course_name,
            CourseCategory: resProdData.course_category,
          });
          newBookmarkItem
            .save()
            .then((cRes) => {
              res.json({ Confirm: "Item saved successfuly " });
            })
            .catch((cErr) => {
              res.json({
                Error: "Error while saving the item for later use",
                "Error ccured": cErr,
              });
            });
        })
        .catch((resProdErr) => {
          res.json(resProdErr);
        });
    })
    .catch((err) => {
      res.json({ Error: "Error while finding the data in the cart" });
    });
});

//#################################################################################################################

bookarkRouter.route("/getbookmarkeditem").get(function (req, res) {
  const user_Id = req.session.session_userId;

  BookmarkModel.find({ userId: user_Id })
    .then((resBMData) => {
      res.json({ "BookmarkData": resBMData });
    })
    .catch((err) => {
      res.json({ Error: err });
    });
});

//#################################################################################################################

bookarkRouter.route("/delbookmark").post(function (req, res) {
  const item_Id = req.body.item_Id;
  const user_Id = req.session.session_userId;

  BookmarkModel.findOneAndDelete({ userId: user_Id, itemId: item_Id })
    .then((resData) => {
      res.status(200).json({ Success: "Item Unsaved successfuly" });
    })
    .catch((err) => {
      res
        .status(400)
        .json({ Error: "Error occured while unsaving the items " });
    });
});

module.exports = bookarkRouter;
