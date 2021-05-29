const express = require("express");
const router = express.Router();
const {
    getAllPhase,
    getPhaseById,
    addPhase,
    updatePhase,
    deletePhase,
} = require("../controller/phaseController");

const isValid = (req, res, next) => {
  console.log(typeof req.params.id);
  if (!isNaN(parseInt(req.params.id))) {
    return next();
  }
  next(new Error("Invalid Id...."));
};
router.get("/", getAllPhase);
router.get("/:id", isValid, getPhaseById);;
router.post("/", addPhase);
router.patch("/", updatePhase);
router.delete("/:id", deletePhase);

module.exports = router;
