const plotQueries = require("../db/plotQuery");

const getAllPlot = async (req, res, next) => {
  try {
    const Plot = await plotQueries.getAllPlot();
    return res.json(Plot);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getPlotById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const Plot = await plotQueries.getByPlotId(id);
    return res.json(Plot[0]);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
const addPlot = async (req, res, next) => {
  try {
    let {totalplots} = req.body;
    let{projectId,size,price,phasename,phaseId} = req.body;
    for(let i = 1;i <= parseInt(totalplots);i++){
       await plotQueries.create({projectId:projectId,size:size,price:price,phaseId:phaseId,plotnumber:"PLOT "+ i});
    }
     return res.status(201).json({"plot":" success "});
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const updatePlot = async (req, res, next) => {
  try {
    const { id, ...data } = req.body;
    console.log(data);
    const Plot = await plotQueries.updatePlot(id, data);
    return res.json(Plot);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
const getPlotByMemberId = async (req, res, next) => {
  try {
    const id = req.params.id;
    const plot = await plotQueries.getByPlotByMember(id);
    return res.json(plot);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const deletePlot = async (req, res, next) => {
  try {
    const { id } = req.params;
    const plot = await plotQueries.deletePlot(id);
    return res.status(200).json(plot);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllPlot,
  getPlotById,
  addPlot,
  updatePlot,
  deletePlot,
  getPlotByMemberId,
};
