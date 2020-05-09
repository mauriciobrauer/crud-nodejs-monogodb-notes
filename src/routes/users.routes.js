const { Router } = require("express");
const router = Router();

const {
  SignUpForm,
  signinForm,
  logout,
  signin,
  signup,
} = require("../controllers/users.controller");

router.get("/users/signup", SignUpForm);
router.post("/users/signup", signup);

router.get("/users/signin", signinForm);
router.post("/users/signin", signin);

router.get("/users/logout", logout);

module.exports = router;
