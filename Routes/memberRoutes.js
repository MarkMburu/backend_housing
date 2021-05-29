const express = require("express");
const router = express.Router();
const {
  getAllMembers,
  getMemberById,
  addMember,
  updateMember,
  deleteMember,
} = require("../controller/memberController");

router.get("/", getAllMembers);
router.get("/:id", getMemberById);
router.post("/", addMember);
router.patch("/", updateMember);
router.delete("/:id", deleteMember);

module.exports = router;
