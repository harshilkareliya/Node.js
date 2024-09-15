module.exports = (req,res,next)=>{
    if (!req.cookies.adminData) {
        return res.redirect('/');  // Redirect to login page if no cookie
    }

    next();
}