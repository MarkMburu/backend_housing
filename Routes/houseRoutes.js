const express = require("express");
const router = express.Router();
const {
  getAllHouses,
  getHouseById,
  addHouse,
  updateHouse,
  deleteHouse,
} = require("../controller/houseController");

router.get("/", getAllHouses);
router.get("/:id", getHouseById);
router.post("/", addHouse);
router.patch("/", updateHouse);
router.delete("/:id", deleteHouse);

module.exports = router;
