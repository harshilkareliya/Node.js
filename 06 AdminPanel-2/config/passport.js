const passport = require('passport')
const passportSt = require('passport-local').Strategy

const adminSchema = require('../models/adminSchema')

passport.use('local', new passportSt( 
    {usernameField : 'email'},
    async (email, password, done) => {
        const data = await adminSchema.findOne({email : email})
        if(data){
            if(data.password !== pass0word){
                return done(null, false)
            }
            else{
                return done(null, data)
            }
        } else{
            console.log('Enter Passport')
            return done(null, false)
        }
    }
))

passport.serializeUser((user,done)=>{
    done(null,user.id)
})

passport.deserializeUser(async (id,done)=>{
    const data = await adminSchema.findById(id)
    if(data) done(null,data)
    else done(null, false)
})

passport.checkAuth = (req,res,next)=>{
    if(req.isAuthenticated()){
        next()
    }
    else{
        res.redirect('/')
    }
}

passport.authUserData = (req,res,next)=>{
    if(req.isAuthenticated()){
        res.locals.user = req.user
    }
    next()
}

module.exports = passport