const express = require("express");
const userRouter = express.Router();
const UserModel = require("../Models/UserModel");
const bcrypt = require("bcryptjs");
const loginDataValidator = require("../DataValidation/LoginValidation");
const signupValidator = require("../DataValidation/SignUpValidation");
const isEmpty = require("is-empty");

//###############---------AUTHENTICATION MIDDLEWARE----------######################################

//###############---------SIGNUP ROUTES----------#################################################

userRouter.route("/signup").post(function (req, res) {
  const { signupErrors, isSignupDataValid } = signupValidator(req.body);
  if (!isSignupDataValid) {
    return res.status(400).json({
      Error: "There exists errors in signup process",
      Signup_Errors: signupErrors,
      Body_Data: req.body,
    });
  } else {
    UserModel.findOne({ email: req.body.email }).then((resData) => {
      if (resData) {
        return res.status(400).json({ SignUp_Error: "User already exists" });
      } else {
        bcrypt.genSalt(10, function (err, salt) {
          if (err) {
            return res
              .status(400)
              .json({ Salt_Error: "Unable to generate salt" });
          } else {
            bcrypt.hash(req.body.password, salt, function (
              err,
              hashedPassword
            ) {
              if (err) {
                return res
                  .status(400)
                  .json({ Hash_Error: "Unable to hash the password" });
              } else {
                const newUserData = new UserModel({
                  name: req.body.name,
                  email: req.body.email,
                  password: hashedPassword,
                });

                newUserData
                  .save()
                  .then((resData) => {
                    console.log("Sucessfuly saved user to database");
                    res.status(200).json({
                      Message: "Sucessfuly signed up",
                      "User Data": resData,
                    });
                  })
                  .catch((savingError) => {
                    console.log(
                      "Error occured while saving the user into database"
                    );
                    res.status(400).json({ Error: savingError });
                  });
              }
            });
          }
        });
      }
    });
  }
});

//##############################---------LOGIN ROUTE--------####################################

userRouter.route("/login").post(function (req, res) {
  const { loginErrors, isValidLogin } = loginDataValidator(req.body);
  console.log("/login called");
  if (!isValidLogin) {
    return res.status("400").json({
      Error: "There exists errors while logging in ",
      "Errors are": loginErrors,
    });
  } else {
    const userEmail = req.body.email;
    const userPassword = req.body.password;

    UserModel.findOne({ email: userEmail })
      .then((loginData) => {
        if (!loginData) {
          return res
            .status(400)
            .json({ Error: "User does not exist in database" });
        } else {
          bcrypt
            .compare(userPassword, loginData.password)
            .then((resData) => {
              if (!resData) {
                return res.status(400).json({
                  Error: "Wrong password entered",
                });
              }
              //##################################################################################
              req.session.session_userId = loginData._id;
              //##################################################################################
              res.status(200).json({
                Login_Message: "Successfuly logged in ",
                User_Data: loginData,
              });
            })
            .catch((err) => {
              res.status(400).send(err);
            });
        }
      })
      .catch((err) => {
        res.status(400).send("Error while retreiving the data from database");
        console.log("Error while retreiving the data from the database");
      });
  }
});

//##############################---------LOGOUT ROUTE--------####################################

userRouter.route("/logout").get(function (req, res) {
  req.session.destroy(function (err) {
    if (err) {
      return res.status(200).json({ LogoutMsg: "User already logged out" });
    } else {
      return res.status(200).json({ LogoutMsg: "Successfuly logged out" });
    }
  });
});

//#############################################################################################

//##############################---------FIND USER BY ID--------####################################
userRouter.route("/getuserdata").get(function (req, res) {
  const userId = req.session.session_userId;
  UserModel.findById(userId)
    .then((userRes) => {
      res.status(200).json({ UserData: userRes });
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

module.exports = userRouter;
