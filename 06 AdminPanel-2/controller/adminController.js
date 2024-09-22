const adminSchema = require("../models/adminSchema");
const fs = require("fs");

module.exports.login = (req, res) => {
  res.render("login");
};
module.exports.loginAdmin = async (req, res) => {
  const user = await adminSchema.findOne({ email: req.body.email });

  if (!user) {
    return res.redirect("/login");
  }
  user.password == req.body.password
    ? res.redirect("/")
    : res.redirect("back");
};
module.exports.dashboard = (req, res) => {
  res.render("dashboard");
};
module.exports.addAdmin = (req, res) => {
  res.render("addAdmin");
};
module.exports.addAdminData = async (req, res) => {
  if (req.file) {
    req.body.image = req.file.path;
  }
  const isInsert = await adminSchema.create(req.body);
  isInsert
    ? res.redirect("/viewAdmin")
    : console.log("Err while inserting data");
};
module.exports.deleteAdmin = async (req, res) => {
  const data = await adminSchema.findById(req.query.id);

  if (data.image) {
    fs.unlinkSync(data.image);
  }
  const isDelete = await adminSchema.findByIdAndDelete(req.query.id);
  isDelete
    ? res.redirect("/viewAdmin")
    : console.log("Error While Delete Admin");
};
module.exports.editAdmin = async (req, res) => {
  const data = await adminSchema.findById(req.query.id);
  data ? res.render("editAdmin", { data }) : console.log("Data Not Found");
};
module.exports.updateAdmin = async (req, res) => {
  const singledata = await adminSchema.findById(req.query.id);
  let image = singledata.image;
  if (req.file) {
    fs.unlinkSync(singledata.image);
    image = req.file.path;
  }
  req.body.image = image;
  const isUpdate = await adminSchema.findByIdAndUpdate(req.query.id, req.body);
  isUpdate
    ? res.redirect("/viewAdmin")
    : console.log("Error While Update Admin");
};

// module.exports.clearCookies = (req, res) => {
//   res.clearCookie("adminData");
//   res.redirect("/");
// };

module.exports.viewAdmin = async (req, res) => {
  const data = await adminSchema.find({});
  res.render("viewAdmin", { data });
};

module.exports.charts = (req, res) => {
  res.render("charts");
};

module.exports.widgets = (req, res) => {
  res.render("widgets");
};
