const express = require("express");

const app = express();
const router = require('./routes');
app.use("/api", router);

app.get("/", (req, res) => {
  res.status(200).json({msg: "hello peoples"});
});

const port = 2000;
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});