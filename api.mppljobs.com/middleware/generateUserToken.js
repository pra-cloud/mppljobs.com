const jwt =require("jsonwebtoken");

const generateToken=(req,res,id,email,type)=>{
    const payload = {
        user: {
          id: id,
          email:email,
          type:type
        },
      };
    
    const token=jwt.sign(payload,"process.env.JWT_SECRET",{
        expiresIn:'6h',
    });

    res.token = token;
    const tokens={
        sessionToken:token
    }
   
};

module.exports=generateToken