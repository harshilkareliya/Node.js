const userSchema = require("../model/user");

module.exports.dashboard = (req, res) => {
  res.render("index");
};

module.exports.login = (req, res) => {
  res.render("login");
};

module.exports.loginUser = async (req, res) => {
  const user = await userSchema.findOne({ email: req.body.email });
  if (!user) {
    return res.redirect("/");
  }
  user.password == req.body.password ? res.redirect("/") : res.redirect("back");
  // res.redirect('/')
};

module.exports.register = (req, res) => {
  res.render("register");
};

module.exports.singup = async (req, res) => {
  try {
    const isSignup = await userSchema.create(req.body);
    isSignup ? res.redirect("/") : res.redirect("back");
  } catch (err) {
    console.error(err);
  }
};

module.exports.alerts = (req, res) => {
  res.render("pages/alerts");
};
module.exports.buttons = (req, res) => {
  res.render("pages/buttons");
};
module.exports.card = (req, res) => {
  res.render("pages/card");
};
module.exports.forms = (req, res) => {
  res.render("pages/forms");
};
module.exports.typography = (req, res) => {
  res.render("pages/typography");
};

module.exports.logout = (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err); // Handle error if any occurs during logout
    }
    req.session.destroy((err) => {
      if (err) {
        return next(err); // Handle error during session destruction
      }
      res.redirect("/"); // Redirect to login or another page after logout
    });
  });
};

module.exports.viewUsers = async (req, res) => {
  try {
    const data = await userSchema.find({});
    res.render("pages/viewUsers", { data });
  } catch (error) {
    console.log(error);
  }
};

module.exports.deleteUser = async (req, res) => {
  try {
    const isDelete = await userSchema.findByIdAndDelete(req.query.id);
    isDelete ? res.redirect("/viewUsers") : console.log("Data Not Deleted");
  } catch (err) {
    console.log(err);
  }
};

module.exports.editUser = async (req, res) => {
  try {
    const data = await userSchema.findById(req.query.id);
    data? res.render("pages/editUser", { data }) : console.log("Data Not Found");
  } catch (error) {
    console.log(error);
  }
};

module.exports.updateUser = async (req, res) => {
  try {
    const isUpdate = await userSchema.findByIdAndUpdate(req.query.id,req.body);
    isUpdate ? res.redirect("/viewUsers") : console.log("Data Not Update");
  } catch (error) {
    console.log(error);
  }
}
