const fs = require("fs");
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const user = require("./db/userQuery");
const { notFound, errorHandler } = require("./Middlewares/middlewares");
require("dotenv").config();

const app = express();

// middlewares
app.use(helmet());
app.use(morgan("common"));
app.use(cors({}));
app.use(express.json());
// app.use(urlencoded({extended: true}));
app.use(express.urlencoded({ extended: true }));
// check user validity middleware
// app.use(async (req, res, next) => {
//   if (req.headers["x-access-token"]) {
//    const accessToken = req.headers["x-access-token"];
//    const { userId, exp } = await jwt.verify(accessToken, process.env.JWT_SECRET);
//    // Check if token has expired
//    if (exp < Date.now().valueOf() / 1000) {
//     return res.status(401).json({
//      error: "JWT token has expired, please login to obtain a new one"
//     });
//    }
//    res.locals.loggedInUser = user.getById(userId);
//    next();
//   } else {
//    next();
//   }
// });

const userRoutes = require("./Routes/userRoutes");
const memberRoutes = require("./Routes/memberRoutes");
const beneficairyRoutes = require("./Routes/beneficiaryRoutes");
const receiptRoutes = require("./Routes/receiptRoutes");
const projectRoutes = require("./Routes/projectRoutes");
const phaseRoutes = require("./Routes/phaseRoutes");

app.use("/", userRoutes);
app.use("/member", memberRoutes);
app.use("/beneficiary", beneficairyRoutes);
app.use("/receipt", receiptRoutes);
app.use("/project", projectRoutes);
app.use("/phase",phaseRoutes);

// Error Handler
app.use(notFound);
app.use(errorHandler);

const port = 1337;

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
