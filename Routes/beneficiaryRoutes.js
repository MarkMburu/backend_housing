const express = require("express");
const router = express.Router();
const {
  getAllBeneficiaries,
  getBeneficiaryById,
  addBeneficiary,
  updateBeneficiary,
  deleteBeneficiary,
  getBeneficiaryByMemberId,
} = require("../controller/beneficiaryController");

const isValid = (req, res, next) => {
  console.log(typeof req.params.id);
  if (!isNaN(parseInt(req.params.id))) {
    return next();
  }
  next(new Error("Invalid Id...."));
};
router.get("/", getAllBeneficiaries);
router.get("/:id", isValid, getBeneficiaryById);
router.get("/member/:id", isValid, getBeneficiaryByMemberId);
router.post("/", addBeneficiary);
router.patch("/", updateBeneficiary);
router.delete("/:id", deleteBeneficiary);

module.exports = router;
