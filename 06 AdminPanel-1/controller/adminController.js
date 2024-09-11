const adminSchema = require('../models/adminSchema')

module.exports.dashboard = (req, res) => {
    res.render('dashboard')
}
module.exports.addAdmin = (req, res) => {
    res.render('addAdmin')
}
module.exports.addAdminData = async (req, res) => {
    const isInsert = await adminSchema.create(req.body)
    isInsert ? res.redirect('/viewAdmin') : console.log('Err while inserting data');
}
module.exports.viewAdmin = async (req, res) => {
    const data = await adminSchema.find({})
    res.render('viewAdmin', { data })
}

module.exports.charts = (req, res) => {
    res.render('charts')
}

module.exports.widgets = (req, res) => {
    res.render('widgets')
}
