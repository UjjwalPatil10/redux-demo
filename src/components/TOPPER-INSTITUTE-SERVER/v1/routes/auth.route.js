const router = require("express").Router();
const {
  userLogin,
  validateToken,
  passwordResetLink,
} = require("../controllers/auth.controller");
router.post("/user-login", userLogin);
router.post("/validate-token", validateToken);
router.post("/password-reset", passwordResetLink);

module.exports = router;
