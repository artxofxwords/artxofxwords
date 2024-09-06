const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const feedbackRoute = require("./routes/feedbackRoute.js");
// const SemanticUI = require('semantic-ui-css/semantic.min.css');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

mongoose.connect(`mongodb+srv://amandab:Atn!AS2024@portfoliofeedback.me0jj.mongodb.net/PORTFOLIOFEEDBACK`);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Error."));
db.once("open", () => {
    console.log("Connected to database.");
});

app.use("/feedback", feedbackRoute);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});