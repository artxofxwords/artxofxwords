const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const feedbackRoute = require("./routes/feedbackRoute.js");
// const SemanticUI = require('semantic-ui-css/semantic.min.css');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use("/feedback", feedbackRoute);

mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Error."));
db.once("open", () => {
    console.log("Connected to database.");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});