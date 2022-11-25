const express = require("express");
const app = express();
const boardRouter = require("./routers/board");
const { swaggerUI, specs } = require("./swagger");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/board", boardRouter);
app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(specs));

app.listen(4000, () => {
  console.log("back-server #port : 4000");
});
