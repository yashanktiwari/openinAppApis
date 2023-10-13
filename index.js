const express = require("express");
const PORT = 3000;
const app = express();
const { getDummyData, getBarChartData, getPieChartData } = require("./allFunction");

const appRouter = express.Router();

app.use("/", appRouter);

// Defining routes
appRouter.route("/getDummyData").get(getDummyData);
appRouter.route("/getBarChartData").get(getBarChartData);
appRouter.route("/getPieChartData").get(getPieChartData);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
