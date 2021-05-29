const express = require("express");
const router = express.Router();
const {
  getAllReceipts,
  getReceiptsById,
  addReceipt,
  updateReceipt,
  deleteReceipt,
} = require("../controller/receiptController");

const isValid = (req, res, next) => {
  console.log(typeof req.params.id);
  if (!isNaN(parseInt(req.params.id))) {
    return next();
  }
  next(new Error("Invalid Id...."));
};
router.get("/", getAllReceipts);
router.get("/:id", isValid, getReceiptsById);
router.post("/", addReceipt);
router.patch("/", updateReceipt);
router.delete("/:id", deleteReceipt);

module.exports = router;
