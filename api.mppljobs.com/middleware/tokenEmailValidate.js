//const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

//dotenv.config();
const verifyToken = async (req, res, next) => {
  console.log("email validator");
  const token = req.header("x-auth-token");
  try {
    if (!token) {
      return res.status(401).json('You need to Login')
    }
    const decrypt = await jwt.verify(token, "process.env.JWT_SECRET");
      console.log(decrypt);

      if(decrypt.email==req.body.email)
      {
          //console.log(decrypt.role.indexOf('Employers'))
        req.user = {
         id: decrypt.id,
         email: decrypt.email,
         type:decrypt.type
         };
       next();
      }else{
          res.status(404).json({
              msg:"access unauthorised"
          })
      }
  } catch (err) {
    return res.status(500).json(err.toString());
  }
};

module.exports = verifyToken;