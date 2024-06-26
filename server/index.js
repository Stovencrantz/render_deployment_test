const express = require("express");
require("dotenv").config();
const { connectToMongoDB } = require("./database");

const app = express();
app.use(express.json()); //Needs to be called before app.use("/api", router) otherwise attempting to read json body will still show as undefined. 
const router = require('./routes');
app.use("/api", router);


app.get("/", (req, res) => {
  res.status(200).json({msg: "hello world"});
});

const port = process.env.PORT || 2000;

async function startServer() {
  await connectToMongoDB();
  app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
  });
}
startServer();
