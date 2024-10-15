const jwt = require('jsonwebtoken')

const auth = async (req,res,next)=>{
    const token = req.header('Authorization')
    if(!auth) return res.status(400).json({msg : "Token Not Found"})
    const finalToken = token.slice(7)
    
    const decode = await jwt.verify(finalToken,'node')
    req.user = decode

    next()
}

module.exports = auth