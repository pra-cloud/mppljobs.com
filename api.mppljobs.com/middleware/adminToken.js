//const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

//dotenv.config();
const verifyToken = async (req, res, next) => {
  
  const token = req.header("x-auth-token");
  console.log(token);
  try {
    if (!token) {
      return res.status(401).json('You need to Login')
    }
    const decrypt = await jwt.verify(token, "process.env.JWT_SECRET");
      console.log(decrypt);

      if(decrypt.user.type=='admin')
      {
        console.log("admin verified");
        req.user = {
         id: decrypt.user.id,
         email: decrypt.user.email,
         type:decrypt.user.type
         };
         
       return next();
      }else{
          res.status(404).json({
              msg:"access unauthorised not an admin token"
          })
      }
  } catch (err) {
    return res.status(500).json(err.toString());
  }
};

module.exports = verifyToken;