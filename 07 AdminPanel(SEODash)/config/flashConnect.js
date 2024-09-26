module.exports.flash = (req,res)=>{
    req.flash('success', 'Login Successful!')
    res.redirect('/')
}