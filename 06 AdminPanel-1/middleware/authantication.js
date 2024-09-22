const adminSchema = require("../models/adminSchema");

module.exports = async (req, res, next) => {
  if (req.cookies.adminData !== undefined) {
    const data = await adminSchema.findById(req.cookies.adminData._id);
    if (!data) {
      return res.redirect("/");
    } else {
      next();
    }
  } else {
    return res.redirect("/");
  }
};
