const express = require("express");
const purchRouter = express.Router();
const PurchasedItemModel = require("../Models/PurchaseditemModel");

purchRouter.route("/addtopurchaseditem").post(function (req, res) {
  const uId = req.session.session_userId;
  const cName = req.body.cName;
  const cCategory = req.body.cCategory;
  const cLevel = req.body.cLevel;
  const newPurchasedItem = new PurchasedItemModel({
    userId: uId,
    course_name: cName,
    course_category: cCategory,
    course_level: cLevel,
  });

  newPurchasedItem
    .save()
    .then((resData) => {
      res.status(200).json({ Success: "Successfuly purchased this course" });
    })
    .catch((err) => {
      res
        .status(400)
        .json({ Error: "Unable to save the into the purchaed items" });
    });
});

purchRouter.route("/getpurchased").get(function (req, res) {
  PurchasedItemModel.find({ userId: req.session.session_userId })
    .then((resData) => {
      res.status(200).json({ Purchased_Items: resData });
    })
    .catch((err) => {
      res
        .status(400)
        .json({ Errror: "Error while retreiving the data from the database" });
    });
});

module.exports = purchRouter;
