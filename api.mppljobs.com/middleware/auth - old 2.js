const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  const token = req.header("x-auth-token");
 console.log(token)
  if (!token) {
    return res.status(401).json({ msg: "No Token, Authorization Denied!" });
  }
  try { 
    const decoded = jwt.verify(token, "process.env.JWT_SECRET");
    // add check from the token
    console.log(decode+" decoded")
    req.id = decoded.id;
    req.email = decoded.email;
    req.type = decoded.type;
    if(req.role) req.role = decoded.role;
    if(req.user)  req.user = decoded.user;
    return next();
  } catch (error) {
    res.status(401).json({ msg: "Token is not Valid!" });
  }
};
