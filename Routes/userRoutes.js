const {
  register,
  login,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  allowIfLoggedin,
  grantAccess,
} = require("../controller/userController");

const express = require("express");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/user/:id", allowIfLoggedin, getUserById);

router.get(
  "/users",
  allowIfLoggedin,
  grantAccess("readAny", "admin"),
  getAllUsers
);

router.put(
  "/user/:id",
  allowIfLoggedin,
  grantAccess("updateAny", "admin"),
  updateUser
);

router.delete(
  "/user/:id",
  allowIfLoggedin,
  grantAccess("deleteAny", "admin"),
  deleteUser
);

module.exports = router;
