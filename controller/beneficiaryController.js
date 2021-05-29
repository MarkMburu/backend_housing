const beneficiaryQueries = require("../db/beneficiaryQueries");

const getAllBeneficiaries = async (req, res, next) => {
  try {
    const beneficiaries = await beneficiaryQueries.getAllBeneficiaries();
    return res.json(beneficiaries);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getBeneficiaryById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const beneficiary = await beneficiaryQueries.getByBeneficiaryId(id);
    return res.json(beneficiary[0]);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
const addBeneficiary = async (req, res, next) => {
  try {
    const beneficiary = await beneficiaryQueries.create(req.body);
    return res.status(201).json(beneficiary);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const updateBeneficiary = async (req, res, next) => {
  try {
    const { id, ...data } = req.body;
    console.log(data);
    const beneficiary = await beneficiaryQueries.updateBeneficiary(id, data);
    return res.json(beneficiary);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
const getBeneficiaryByMemberId = async (req, res, next) => {
  try {
    const id = req.params.id;
    const beneficiary = await beneficiaryQueries.getByBeneficiaryByMember(id);
    return res.json(beneficiary);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const deleteBeneficiary = async (req, res, next) => {
  try {
    const { id } = req.params;
    const beneficiary = await beneficiaryQueries.deleteBeneficiary(id);
    return res.status(200).json(beneficiary);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllBeneficiaries,
  getBeneficiaryById,
  addBeneficiary,
  updateBeneficiary,
  deleteBeneficiary,
  getBeneficiaryByMemberId,
};
