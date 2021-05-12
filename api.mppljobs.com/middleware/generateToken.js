const jwt =require("jsonwebtoken");
const config = require("config");

const generateToken=(req,res,id,email,type,role)=>{
    const expiration=3600000;

    const payload = {
        user: {
          id: id,
          email:email,
          type:type,
          role:role
        },
      };
    
    const token=jwt.sign(payload,"process.env.JWT_SECRET",{
        expiresIn:'6h',
    });
    const refreshToken=jwt.sign(payload,"process.env.JWT_SECRET",{
        expiresIn:'1d',
    });

    res.token = token;
    const tokens={
        sessionToken:token,
        refreshToken:refreshToken
    }
    req.token = token;


    
    //  res.header('Token',token,{
    //     expires:new Date(Date.now()+expiration),
    //     secure:false,
    //     httpOnly:false,
    // });

    // return res.cookie('refreshToken',refreshToken,{
    //     expires:new Date(Date.now()+expiration),
    //     secure:false,
    //     httpOnly:false
    //     // samesite attribute
    // });
};

module.exports=generateToken