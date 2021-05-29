const memberQueries = require("../db/memberQuieries");

const getAllMembers = async (req, res, next) => {
  try {
    const members = await memberQueries.getAllMembers();
    return res.json(members);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getMemberById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const member = await memberQueries.getMemberById(id);
    return res.json(member[0]);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
const addMember = async (req, res, next) => {
  try {
    const member = await memberQueries.create(req.body);
    return res.status(201).json(member);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const updateMember = async (req, res, next) => {
  try {
    const { id ,...data} = req.body;
    console.log(data)
    const member = await memberQueries.updateMember(id, data);
    return res.json(member[0]);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const deleteMember = async (req, res, next) => {
  try {
    const { id } = req.params;
    const member = await memberQueries.deleteMember(id);
    return res.status(200).json(member);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllMembers,
  getMemberById,
  addMember,
  updateMember,
  deleteMember,
};
