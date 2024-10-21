const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("colors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: "1024mb" }));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => res.status(200).send("API WORKING WELL"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
