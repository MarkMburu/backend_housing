const HouseQueries = require("../db/houseQueries");

const getAllHouses = async (req, res, next) => {
  try {
    const Houses = await HouseQueries.getAllHouses();
    return res.json(Houses);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getHouseById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const House = await HouseQueries.getHouseById(id);
    return res.json(House[0]);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
const addHouse = async (req, res, next) => {
  try {
    const House = await HouseQueries.create(req.body);
    return res.status(201).json(House);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const updateHouse = async (req, res, next) => {
  try {
    const { id, ...data } = req.body;
    console.log(data);
    const House = await HouseQueries.updateHouse(id, data);
    return res.json(House);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const deleteHouse = async (req, res, next) => {
  try {
    const { id } = req.params;
    const House = await HouseQueries.deleteHouse(id);
    return res.status(200).json(House);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllHouses,
  getHouseById,
  addHouse,
  updateHouse,
  deleteHouse,
};
