const Feedback = require("../models/Feedback");

// Define your controller functions here
try {
exports.allFeedback = async (req, res) => {
    try {
        const data = await Feedback.find({});
  
        res.status(200).json(data);
      } catch (err) {
        res.status(500).json("Could not get feedback!");
      }
}

exports.newFeedback = async (req, res) => {
    const newGuestFeedback = new Feedback({
        guestName: req.body.guestName,
        colors: req.body.colors,
        colorsComment: req.body.colorsComment,
        layout: req.body.layout,
        layoutComment: req.body.layoutComment,
        favoriteProject: req.body.favoriteProject,
        favoriteProjectWhy: req.body.favoriteProjectWhy,
        otherComment: req.body.otherComment
    });

    console.log("server new feedback to save", newGuestFeedback);

    try {
        await newGuestFeedback.save();

        res.status(200).json("New feedback saved!");
    } catch (err) {
        console.log("error", err);
        res.status(500).json("Could not add new feedback!");
    }
}

} catch (err) {
    res.status(501).json("Internal Server Error");
}