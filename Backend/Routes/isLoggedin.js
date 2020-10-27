const express = require("express");
const loggedinRouter = express.Router();
const isEmpty = require("is-empty");

loggedinRouter.route("/isloggedin").get(function (req, res) {
  const session_id = req.session.session_userId;
  if (!isEmpty(session_id)) {
    return res.status(200).json({ Login_Msg: "User LoggedIN" });
  } else {
    return res.status(200).json({ Login_Msg: "User not LoggedIn" });
  }
});

module.exports = loggedinRouter;
