
const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
  const token = req.header("x-auth-token");
  try {
    if (!token) {
      return res.status(401).json('You need to Login')
    }
    const decrypt = await jwt.verify(token, "process.env.JWT_SECRET");
      console.log(decrypt);

      if(decrypt.role.indexOf('Candidates')!=-1)
      {       
          console.log("Candidates validated")
        return next();
      }else{
          res.status(404).json({
              msg:"access unauthorised not an Candidates"
          })
      }
  } catch (err) {
    return res.status(500).json(err.toString());
  }
};

module.exports = verifyToken;