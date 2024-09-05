const express = require("express");
const router = express.Router();
const feedbackController = require("../controllers/feedbackController");

// Define your routes and corresponding controllers here 
router.get("/", feedbackController.allFeedback);

router.post("/newFeedback", feedbackController.newFeedback);

module.exports = router;