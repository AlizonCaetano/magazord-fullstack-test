"use strict";
const express = require("express");
const cors = require("cors");
const personRoutes = require("./routes/person.routes");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/persons", personRoutes);

app.get("/", (req, res) => {
  res.json({ status: "Server is running" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
