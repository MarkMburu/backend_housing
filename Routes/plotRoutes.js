const express = require("express");
const router = express.Router();
const {
    getAllPlot,
    getPlotById,
    addPlot,
    updatePlot,
    deletePlot,
 
} = require("../controller/plotQueries");

const isValid = (req, res, next) => {
  console.log(typeof req.params.id);
  if (!isNaN(parseInt(req.params.id))) {
    return next();
  }
  next(new Error("Invalid Id...."));
};
router.get("/", getAllPlot);
router.get("/:id", isValid, getPlotById);
router.post("/", addPlot);
router.patch("/", updatePlot);
router.delete("/:id",deletePlot);

module.exports = router;
