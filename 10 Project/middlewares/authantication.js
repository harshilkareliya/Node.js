const jwt = require("jsonwebtoken");
const adminSchema = require('../model/adminSchema')

const adminAuth = async (req, res, next) => {
    try {
      const token = req.header("Authorization");
      if (!token) return res.status(401).json({ msg: "Token Not Found" });
    
      const finalToken = token.slice(7);
    
      const decode = jwt.verify(finalToken, "node");

      if(await adminSchema.findById(decode.userData._id)){
        req.user = decode;
        next();
      } else{
        res.status(404).json({msg : "Admin Not Found"})
      }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error Authantication", error });
  }
};

module.exports = adminAuth;
