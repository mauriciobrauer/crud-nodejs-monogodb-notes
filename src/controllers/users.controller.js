const usersCtrl = {};
const User = require("../models/User");
const passport = require("passport");

usersCtrl.SignUpForm = (req, res) => {
  res.render("users/signup");
};

usersCtrl.signup = async (req, res) => {
  const errors = [];
  const { name, email, password, confirm_password } = req.body;
  /*if (password != confirm_password) {
    errors.push({ text: "Password not match" });
  }
  if (password.length < 4) {
    errors.push({ text: "4 characters" });
  }*/
  if (errors.length > 0) {
    res.render("users/signup", {
      errors,
    });
  } else {
    const emailUser = await User.findOne({ email: email });
    if (emailUser) {
      req.flash("error_msg", "The email is already in use");
      res.redirect("/users/signup");
    } else {
      const newUser = new User({ name, email, password });
      newUser.password = await newUser.encryptPassword(password);
      await newUser.save();
      req.flash("sucess_msg", "Registered");
      res.redirect("/users/signin");
    }
  }
  //res.send("sign up");
};

usersCtrl.signinForm = (req, res) => {
  res.render("users/signin");
};

usersCtrl.signin = passport.authenticate("local", {
  failureRedirect: "/users/signin",
  successRedirect: "/notes",
  failureFlash: true,
});

usersCtrl.logout = (req, res) => {
  req.logout();
  req.flash("success_msg", "Logout successful");
  res.redirect("/users/signin");
};

module.exports = usersCtrl;
