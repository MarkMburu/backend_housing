const HouseProjectQueries = require("../db/houseProjectQueries");

const getAllHouseProjects = async (req, res, next) => {
  try {
    const projects = await HouseProjectQueries.getAllHouseProjects();
    return res.json(projects);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getHouseProjectById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const project = await HouseProjectQueries.getHouseProjectById(id);
    return res.json(project[0]);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
const addHouseProject = async (req, res, next) => {
  try {
    const Project = await HouseProjectQueries.create(req.body);
    return res.status(201).json(Project);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const updateHouseProject = async (req, res, next) => {
  try {
    const { id, ...data } = req.body;
    console.log(data);
    const project = await HouseProjectQueries.updateHouseProject(id, data);
    return res.json(project);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const deleteHouseProject = async (req, res, next) => {
  try {
    const { id } = req.params;
    const project = await HouseProjectQueries.deleteHouseProject(id);
    return res.status(200).json(Project);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllHouseProjects,
  getHouseProjectById,
  addHouseProject,
  updateHouseProject,
  deleteHouseProject,
};
