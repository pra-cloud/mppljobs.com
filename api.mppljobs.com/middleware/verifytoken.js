//const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

//dotenv.config();
const verifyToken = async (req, res, next) => {
  console.log("here");
  const token = req.header("x-auth-token");
  try {
    if (!token) {
      return res.status(401).json('You need to Login')
    }
    const decrypt = await jwt.verify(token, "process.env.JWT_SECRET");
      //console.log(decrypt);
    req.user = {
      id: decrypt.id,
      email: decrypt.email,
      type:decrypt.type,
      role:decrypt.role
    };
    next();
  } catch (err) {
    return res.status(500).json(err.toString());
  }
};

module.exports = verifyToken;