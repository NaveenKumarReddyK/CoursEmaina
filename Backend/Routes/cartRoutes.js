const express = require("express");
const cartRouter = express.Router();
const mongoose = require("mongoose");
const cartModel = require("../Models/CartModel");
const ProdModel = require("../Models/ProductModel");
const isEmpty = require("is-empty");

//#################################################################################################################

cartRouter.route("/addtocart").post(function (req, res) {
  const user_Id = req.session.session_userId;
  const item_id = req.body.item_Id;

  cartModel
    .find({ userId: user_Id, itemId: item_id })
    .then((cRes) => {
      if (!isEmpty(cRes)) {
        return res
          .status(200)
          .json({ CartMessage: "Item already exists in the Cart", res: cRes });
      }
      const c_provider = req.body.c_Provider;
      ProdModel.findOne({ item_id: item_id })
        .then((resProdData) => {
          let Course_Price;
          if (c_provider === "Coursera") {
            Course_Price = resProdData.coursera_price;
          } else if (c_provider === "Udemy") {
            Course_Price = resProdData.udemy_price;
          } else if (c_provider === "SkillShare") {
            Course_Price = resProdData.skillshare_price;
          }
          const newCartItem = new cartModel({
            userId: user_Id,
            itemId: item_id,
            CourseName: resProdData.course_name,
            CourseCategory: resProdData.course_category,
            CourseLevel: resProdData.course_level,
            CoursePrice: Course_Price,
          });
          newCartItem
            .save()
            .then((cRes) => {
              res
                .status(200)
                .json({ CartMessage: "Item added successfuly to the cart" });
            })
            .catch((cErr) => {
              res.status(200).json({
                Error: "Error while adding the item to the database",
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

cartRouter.route("/cart").get(function (req, res) {
  const user_Id = req.session.session_userId;

  cartModel
    .find({ userId: user_Id })
    .then((resCartData) => {
      res.json({ CartItemData: resCartData });
    })
    .catch((err) => {
      res.json({ Error: err });
    });
});

//#################################################################################################################

cartRouter.route("/getitemdetails").post(function (req, res) {
  const itemId = req.body.item_Id;
  const c_Provider = req.body.c_Provider;

  ProdModel.findOne({ item_id: itemId })
    .then((resCartItemData) => {
      let CoursePrice;
      if (c_Provider === "Coursera") {
        CoursePrice = resCartItemData.coursera_price;
      } else if (c_Provider === "Udemy") {
        CoursePrice = resCartItemData.udemy_price;
      } else if (c_Provider === "SkillShare") {
        CoursePrice = resCartItemData.skillshare_price;
      }
      res.json({
        CourseName: resCartItemData.course_name,
        CourseCategory: resCartItemData.course_category,
        CourseLevel: resCartItemData.course_level,
        CoursePrice: CoursePrice,
      });
    })
    .catch((productError) => {
      res.json({
        Error: "Unable to find product in database",
      });
    });
});

//#################################################################################################################

cartRouter.route("/deletecartitem").post(function (req, res) {
  const item_Id = req.body.item_Id;
  const user_Id = req.session.session_userId;

  cartModel
    .findOneAndDelete({ userId: user_Id, itemId: item_Id })
    .then((resData) => {
      res.status(200).json({ Success: "Item deleted successfuly" });
    })
    .catch((err) => {
      res
        .status(400)
        .json({ Error: "Error occured while deleting the item from cart" });
    });
});

//#################################################################################################################
module.exports = cartRouter;
