//const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

//dotenv.config();
const verifyToken = async (req, res, next) => {
  console.log("role of employer validator");
  const token = req.header("x-auth-token");
  try {
    if (!token) {
      return res.status(401).json('You need to Login')
    }
    const decrypt = await jwt.verify(token, "process.env.JWT_SECRET");
      console.log(decrypt);

      if(decrypt.role.indexOf('Employers')!=-1)
      {       
          console.log("employer validated")
       next();
      }else{
          res.status(404).json({
              msg:"access unauthorised not an employer"
          })
      }
  } catch (err) {
    return res.status(500).json(err.toString());
  }
};

module.exports = verifyToken;