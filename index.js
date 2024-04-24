const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// middlewere
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server Is runing with Full speed");
});
app.listen(port, () => {
  console.log("Listen port from 5000");
});
