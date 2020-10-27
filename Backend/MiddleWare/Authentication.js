const authenticateMiddleware = function (req, res, next) {
  const session_id = req.session.session_userId;
  if (isEmpty(session_id)) {
    return res.status(400).json({ Error_Msg: "User not logged in " });
  }
  next();
};

module.exports = authenticateMiddleware;
