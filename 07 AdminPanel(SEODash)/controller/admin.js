const userSchema = require('../model/user')

module.exports.dashboard = (req,res)=>{
    res.render('index')
}

module.exports.login = (req,res)=>{
    res.render('login')
}

module.exports.loginUser =async (req,res)=>{
    const user = await userSchema.findOne({ email: req.body.email });
    if (!user) {
      return res.redirect("/");
    }
    user.password == req.body.password
      ? res.redirect("/")
      : res.redirect("back");
    // res.redirect('/')
}

module.exports.register = (req,res)=>{
    res.render('register')
}

module.exports.singup = async (req,res)=>{
    try{
        const isSignup = await userSchema.create(req.body)
        isSignup ? res.redirect('/') : res.redirect('back')
    } catch(err){
        console.error(err)
    }
}

module.exports.alerts = (req,res)=>{
    res.render('pages/alerts')
}
module.exports.buttons = (req,res)=>{
    res.render('pages/buttons')
}
module.exports.card = (req,res)=>{
    res.render('pages/card')
}
module.exports.forms = (req,res)=>{
    res.render('pages/forms')
}
module.exports.typography = (req,res)=>{
    res.render('pages/typography')
}

module.exports.logout = (req,res) => {
    req.logout((err) => {
        if (err) {
          return next(err); // Handle error if any occurs during logout
        }
        req.session.destroy((err) => {
          if (err) {
            return next(err); // Handle error during session destruction
          }
          res.redirect('/'); // Redirect to login or another page after logout
        });
    });
};