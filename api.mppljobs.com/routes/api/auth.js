const express = require("express");
const mailer = require("../../NodeMailer");
const router = express.Router();
const nodemailer = require("nodemailer");
const User = require("../../models/User");
const Otp = require("../../models/Otp");
const jwt = require("jsonwebtoken");
const config = require("config");
const sgMail = require("@sendgrid/mail");
const auth = require("../../middleware/auth");
const bcryptjs=require("bcryptjs")
const generateUserToken=require("../../middleware/generateUserToken")
sgMail.setApiKey(
  "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"
);

router.get("/", auth, async (req, res) => {
  try {
    let user = await User.findOne({ _id: req.user.id });
    if (!user) {
      return res.json({ msg: "User Doesnt Exists!" });
    }
    res.json(user);
  } catch (error) {
    console.log(error.message);
  }
});

//@POST Route
//@DESC Login
router.post("/", async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    console.log(user);
    if (!user) {
      return res.status(500).json({ msg: "User Does not Exists!" });
    }
    var digits = "0123456789";
    let OTP = "";
    for (let i = 0; i < 6; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }
    let otp = new Otp({
      _userId: user._id,
      otp: OTP,
    });
    otp.save((err) => {
      if (err) {
        return res.status(500).json({ msg: err.message });
      }
      const msg = {
        to: user.email,
        from: "jaskiratsingh772@gmail.com",
        subject: "Verification Mail",
        text: "First Message via Send Grid",
        html:
          "<b>Hey there</b>" +
          user.name +
          " Your OTP is : " +
          OTP +
          " and it is valid for 15 mins from now!",
      };

      sgMail
        .send(msg)
        .then(() => {
          console.log("Email Sent", msg);
        })
        .catch((error) => {
          console.log(error);
        });
    });
    res.json({ msg: "Email Sent!" });
  } catch (error) {
    console.log(error.message);
  }
});

router.post("/passwordLogin",async(req,res)=>{
  const { email, password,type } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ msg: "user Doesnt Exists!" });
  }
  const isMatch = await bcryptjs.compare(password, user.password);

  if (!isMatch) {
    return res.json({ msg: "Invalid Credentials!" });
  }
  try {
    generateUserToken(req,res, user._id,email,type); // change this to email and agentid
   
    let token = res.token;
    console.log(token);
   return res.status(200).json({msg:"true",token});         
  } catch (err) {
    return res.status(500).json(err.toString());
  }

})

router.post("/confirmOTP", async (req, res) => {
  console.log(req.body.otp);
  Otp.findOne({ otp: req.body.otp }, (err, otp) => {
    if (!otp) {
      return res.status(400).json({ msg: "OTP not Valid" });
    }
    User.findOne({ _id: otp._userId }, (err, user) => {
      if (err) {
        return res.status(500).send({ msg: err.message });
      }
      if (otp.isUsed) {
        return res.status(400).json({ msg: "This OTP is already used!" });
      }
      otp.isUsed = true;

      otp.save((err) => {
        if (err) {
          return res.status(500).json({ msg: err.message });
        }
        const payload = {
          user: {
            id: user.id,
          },
        };
        try{
           generateUserToken(req,res,user.id,user.email,"candidate");
           console.log("addada")
           let token = res.token;
           res.json({msg:true,token:token})
        }
        catch(err){
          res.status(500).json(err);
        }
        

        // jwt.sign(
        //   payload,
        //   "process.env.JWT_SECRET",
        //   {
        //     expiresIn: 3600000000000000000000000,
        //   },
        //   (err, token) => {
        //     if (err) throw err;
        //     res.json({ msg: "OTP Successfully Verified!", token: token });
        //   }
        // );
      });
    });
  });
});

module.exports = router;
