const express = require("express");
const router = express.Router();
const {
  getAllProjects,
  getProjectById,
  addProject,
  updateProject,
  deleteProject,
} = require("../controller/projectController");

router.get("/", getAllProjects);
router.get("/:id", getProjectById);
router.post("/", addProject);
router.patch("/",updateProject);
router.delete("/:id",deleteProject);

module.exports = router;
