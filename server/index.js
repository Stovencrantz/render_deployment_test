const express = require("express");
require("dotenv").config();
const { connectToMongoDB } = require("./database");

const app = express();
const router = require('./routes');
app.use("/api", router);

app.get("/", (req, res) => {
  res.status(200).json({msg: "hello peoples"});
});

const port = process.env.PORT || 4000;

async function startServer() {
  await connectToMongoDB();
  app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
  });
}
startServer();
