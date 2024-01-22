const router = require("express").Router();
const {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
  getOneUser,
} = require("../controllers/user.controller");
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/:id", getOneUser);
router.get("/", getAllUsers);

module.exports = router;
