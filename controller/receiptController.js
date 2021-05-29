const ReceiptsQuery = require("../db/receiptQuery");

const getAllReceipts = async (req, res, next) => {
  try {
    const receipts = await ReceiptsQuery.getAllReceipts();
    return res.json(receipts);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getReceiptsById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const receipts = await ReceiptsQuery.getReceiptById(id);
    return res.json(receipts[0]);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
const addReceipt = async (req, res, next) => {
  try {
    const receipt = await ReceiptsQuery.create(req.body);
    return res.status(201).json(receipt);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const updateReceipt = async (req, res, next) => {
  try {
    const { id, ...data } = req.body;
    console.log(data);
    const Receipts = await ReceiptsQuery.updateReceipt(id, data);
    return res.json(Receipts);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const deleteReceipt = async (req, res, next) => {
  try {
    const { id } = req.params;
    const receipt = await ReceiptsQuery.deleteReceipt(id);
    return res.status(200).json(receipt);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllReceipts,
  getReceiptsById,
  addReceipt,
  updateReceipt,
  deleteReceipt
};
