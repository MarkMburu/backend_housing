const phaseQueries = require("../db/phaseQuery");

const getAllPhase = async (req, res, next) => {
  try {
    const phase = await phaseQueries.getAllPhase();
    return res.json(phase);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getPhaseById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const phase = await phaseQueries.getByPhaseId(id);
    return res.json(phase[0]);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
const addPhase = async (req, res, next) => {
  try {
    const phase = await phaseQueries.create(req.body);
    return res.status(201).json(phase);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const updatePhase = async (req, res, next) => {
  try {
    const { id, ...data } = req.body;
    console.log(data);
    const phase = await phaseQueries.updatePhase(id, data);
    return res.json(phase);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
const getPhaseByMemberId = async (req, res, next) => {
  try {
    const id = req.params.id;
    const phase = await phaseQueries.getByPhaseByMember(id);
    return res.json(phase);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const deletePhase = async (req, res, next) => {
  try {
    const { id } = req.params;
    const phase = await phaseQueries.deletePhase(id);
    return res.status(200).json(phase);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllPhase,
  getPhaseById,
  addPhase,
  updatePhase,
  deletePhase,
  getPhaseByMemberId,
};
