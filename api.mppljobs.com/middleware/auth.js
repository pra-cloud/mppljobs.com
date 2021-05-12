const jwt = require("jsonwebtoken");

module.exports = async function (req, res, next) {
  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).json({ msg: "No Token, Authorization Denied!" });
  }
  try { 
    const decoded = await jwt.verify(token, "process.env.JWT_SECRET");
    req.user = {
      id: decoded.user.id,
      email : decoded.user.email,
      type : decoded.user.type

    }
    return next();
  } catch (error) {
    res.status(401).json({ msg: "Token is not Valid!" ,error});
  }
};
