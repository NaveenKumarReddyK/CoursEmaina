const express = require("express");
const productRouter = express.Router();
const mongoose = require("mongoose");
const ProdModel = require("../Models/ProductModel");

productRouter.route("/add").post(function (req, res) {
  const newProduct = new ProdModel({
    item_id: req.body.item_id,
    course_name: req.body.course_name,
    course_category: req.body.course_category,
    course_level:req.body.course_level,
    coursera_price: req.body.coursera_price,
    udemy_price: req.body.udemy_price,
    skillshare_price: req.body.skillshare_price,
  });

  newProduct
    .save()
    .then((resData) => {
      res.status(200).send("Saved successfuly");
    })
    .catch((err) => {
      res.status(400).send("Error while saving");
    });
});

module.exports = productRouter;
