const ProjectQueries = require("../db/projectQueries");

const getAllProjects = async (req, res, next) => {
  try {
    const projects = await ProjectQueries.getAllProjects();
    return res.json(projects);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getProjectById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const project = await ProjectQueries.getProjectById(id);
    return res.json(project[0]);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
const addProject = async (req, res, next) => {
  try {
    const Project = await ProjectQueries.create(req.body);
    return res.status(201).json(Project);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const updateProject = async (req, res, next) => {
  try {
    const { id, ...data } = req.body;
    console.log(data);
    const project = await ProjectQueries.updateProject(id, data);
    return res.json(project);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const deleteProject = async (req, res, next) => {
  try {
    const { id } = req.params;
    const project = await ProjectQueries.deleteProject(id);
    return res.status(200).json(Project);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllProjects,
  getProjectById,
  addProject,
  updateProject,
  deleteProject,
};
