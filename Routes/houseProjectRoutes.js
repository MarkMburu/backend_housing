const express = require("express");
const router = express.Router();
const {
    getAllHouseProjects,
    getHouseProjectById,
    addHouseProject,
    updateHouseProject,
    deleteHouseProject,
} = require("../controller/houseProjectController");

router.get("/", getAllHouseProjects);
router.get("/:id", getHouseProjectById);
router.post("/", addHouseProject);
router.patch("/", updateHouseProject);
router.delete("/:id", deleteHouseProject);

module.exports = router;
